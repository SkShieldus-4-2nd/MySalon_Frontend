// src/context/PostsContext.jsx
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const PostsContext = createContext(null);
export const usePosts = () => {
  const ctx = useContext(PostsContext);
  if (!ctx) throw new Error("usePosts must be used within PostsProvider");
  return ctx;
};

// ── 브라우저별 사용자 키
const USER_KEY_STORAGE = "userKey";
function ensureUserKey() {
  try {
    let k = localStorage.getItem(USER_KEY_STORAGE);
    if (!k) {
      k = "u_" + Math.random().toString(36).slice(2, 10);
      localStorage.setItem(USER_KEY_STORAGE, k);
    }
    return k;
  } catch {
    return "u_guest";
  }
}

// ── 표시 이름(댓글/작성자 매칭용)
const DISPLAY_NAME_KEY = "displayName";
function loadDisplayName() {
  try {
    return localStorage.getItem(DISPLAY_NAME_KEY) || "익명";
  } catch {
    return "익명";
  }
}

// ── 상대시간
const fromNow = (iso) => {
  const diffMin = Math.max(1, Math.floor((Date.now() - new Date(iso).getTime()) / 60000));
  if (diffMin < 60) return `${diffMin}분 전`;
  const h = Math.floor(diffMin / 60);
  if (h < 24) return `${h}시간 전`;
  const d = Math.floor(h / 24);
  return `${d}일 전`;
};

// ── 초기 더미 (기존 comments = 숫자 → baseCommentCount 로 마이그레이션)
const seedPosts = [
  {
    id: 4,
    title: "흰 셔츠에 맞는 니트 색 추천 부탁!",
    author: "최성윤",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    comments: 2,
    hasImage: true,
    content: "",
  },
  {
    id: 3,
    title: "가을 캠퍼스룩 자켓 코디 의견 좀!",
    author: "강소현",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 9).toISOString(),
    comments: 4,
    hasImage: false,
    content: "",
  },
  {
    id: 2,
    title: "블랙진에 어울릴 운동화 뭐가 좋을까요?",
    author: "이가은",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 22).toISOString(),
    comments: 1,
    hasImage: false,
    content: "",
  },
  {
    id: 1,
    title: "비 오는 날 아우터 추천 좀 해주세요",
    author: "임성현",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(),
    comments: 3,
    hasImage: true,
    content: "",
  },
];

const STORAGE_KEY = "posts";

function migratePosts(list) {
  return list.map((p) => {
    const base = p.baseCommentCount ?? (typeof p.comments === "number" ? p.comments : 0);
    return {
      ...p,
      baseCommentCount: base,
      commentList: Array.isArray(p.commentList) ? p.commentList : [], // 내가 단 댓글들
    };
  });
}

export const PostsProvider = ({ children }) => {
  const [userKey] = useState(() => ensureUserKey());
  const [displayName, setDisplayName] = useState(() => loadDisplayName());

  const [posts, setPosts] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : seedPosts;
      return migratePosts(parsed);
    } catch {
      return migratePosts(seedPosts);
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    } catch {}
  }, [posts]);

  useEffect(() => {
    try {
      localStorage.setItem(DISPLAY_NAME_KEY, displayName);
    } catch {}
  }, [displayName]);

  // 레거시 글 소유권 자동 클레임(작성자명이 내 표시이름일 때)
  useEffect(() => {
    setPosts((prev) => {
      let changed = false;
      const next = prev.map((p) => {
        if (!p.ownerKey && p.author === displayName) {
          changed = true;
          return { ...p, ownerKey: userKey };
        }
        return p;
      });
      return changed ? next : prev;
    });
  }, [displayName, userKey]);

  const isMine = (ownerKey, author) => ownerKey === userKey || (!ownerKey && author === displayName);

  // 새 글
  const addPost = ({ title, author, hasImage, content }) => {
    const finalAuthor = String(author || displayName || "익명").trim() || "익명";
    if (author && author.trim()) setDisplayName(author.trim());
    const newPost = {
      id: Date.now(),
      title: String(title || "").trim(),
      author: finalAuthor,
      createdAt: new Date().toISOString(),
      hasImage: !!hasImage,
      content: String(content || ""),
      ownerKey: userKey,
      baseCommentCount: 0,
      commentList: [],
    };
    setPosts((prev) =>
      [newPost, ...prev].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    );
  };

  // 글 삭제 (본인만)
  const removePost = (id) => {
    let removed = false;
    setPosts((prev) => {
      const target = prev.find((p) => p.id === id);
      if (!target || !isMine(target.ownerKey, target.author)) return prev;
      removed = true;
      return prev.filter((p) => p.id !== id);
    });
    return removed;
  };

  // 댓글 카운트(게시판에서 사용)
  const getCommentCount = (post) =>
    (post?.baseCommentCount ?? 0) + (post?.commentList?.length ?? 0);

  // 댓글 추가(상세에서 사용)
  const addComment = (postId, text, author) => {
    const authorName = String(author || displayName || "익명").trim() || "익명";
    setPosts((prev) =>
      prev.map((p) =>
        p.id !== postId
          ? p
          : {
              ...p,
              commentList: [
                ...(p.commentList || []),
                {
                  id: Date.now(),
                  text: String(text || "").trim(),
                  author: authorName,
                  ownerKey: userKey,
                  createdAt: new Date().toISOString(),
                },
              ],
            }
      )
    );
  };

  // 댓글 수정(본인만)
  const updateComment = (postId, commentId, newText) => {
    let ok = false;
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id !== postId) return p;
        const next = (p.commentList || []).map((c) => {
          if (c.id !== commentId) return c;
          if (!isMine(c.ownerKey, c.author)) return c;
          ok = true;
          return { ...c, text: String(newText || "").trim() };
        });
        return { ...p, commentList: next };
      })
    );
    return ok;
  };

  // 댓글 삭제(본인만)
  const removeComment = (postId, commentId) => {
    let ok = false;
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id !== postId) return p;
        const target = (p.commentList || []).find((c) => c.id === commentId);
        if (!target || !isMine(target.ownerKey, target.author)) return p;
        ok = true;
        return { ...p, commentList: p.commentList.filter((c) => c.id !== commentId) };
      })
    );
    return ok;
  };

  const value = useMemo(
    () => ({
      posts,
      addPost,
      removePost,
      fromNow,
      userKey,
      displayName,
      setDisplayName,
      // comments
      getCommentCount,
      addComment,
      updateComment,
      removeComment,
    }),
    [posts, userKey, displayName]
  );

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
};
