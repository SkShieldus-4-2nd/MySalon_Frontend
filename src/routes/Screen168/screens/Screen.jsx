// src/routes/Screen168/screens/Screen.jsx
import { MenuIcon, SearchIcon } from "lucide-react";
import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";
import { usePosts } from "../../../context/PostsContext.jsx";

export const Screen = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    posts,
    fromNow,
    userKey,
    displayName,
    getCommentCount,
    addComment,
    updateComment,
    removeComment,
  } = usePosts();

  const post = useMemo(() => posts.find((p) => String(p.id) === String(id)), [posts, id]);
  if (!post) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#f1f1f1]">
        <div className="text-center space-y-4">
          <div className="text-xl font-semibold">게시글을 찾을 수 없어요 🥲</div>
          <Button onClick={() => navigate("/board")}>게시판으로 돌아가기</Button>
        </div>
      </div>
    );
  }

  // 내용이 없을 때 자동 문장
  function makeFallbackContent(title = "") {
    const colorWord =
      /(흰|화이트)/.test(title) ? "흰 " :
      /(검정|블랙)/.test(title) ? "검정 " :
      /(회색|그레이)/.test(title) ? "그레이 " :
      /(베이지)/.test(title) ? "베이지 " : "";
    const itemWord =
      /(니트|스웨터)/.test(title) ? "니트" :
      /(셔츠)/.test(title) ? "셔츠" :
      /(티|티셔츠)/.test(title) ? "티셔츠" :
      /(바지|데님|진)/.test(title) ? "바지" :
      /(아우터|자켓|코트|블레이저)/.test(title) ? "아우터" : "아이템";
    const line1 = `${colorWord}${itemWord}에 맞는 색 조합을 찾고 있어요. 어떤 컬러가 잘 어울릴까요?`;
    const line2 = `톤온톤/대비 컬러 추천과 함께 하의·신발·소품 매치 팁도 부탁드립니다.`;
    return `${line1}\n${line2}`;
  }
  const displayContent = post.content?.trim() ? post.content : makeFallbackContent(post.title);

  // 기본 추천 댓글 (숫자만큼) — 수정/삭제 불가 (결정적 생성)
  const avatarUrl =
    "https://c.animaapp.com/mff2hae8n4dhTh/img/chatgpt-image-2025--9--7-----04-10-17-2-4.png";
  const namePool = ["서윤", "지호", "민재", "하린", "도윤", "지우", "유진", "현우"];

  // 간단 해시: 같은 문자열이면 항상 같은 숫자
  const hash = (s) => {
    let h = 0;
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return h;
  };

  function suggestionTexts(topic) {
    if (/셔츠|티|탑|상의/.test(topic)) {
      return [
        "데님 와이드에 흰 스니커즈 조합이 깔끔해요!",
        "그레이 슬랙스+로퍼로 세미 캐주얼 추천!",
        "베이지 치노랑 매치하면 부드러운 무드 납니다.",
        "톤온톤으로 상하의 색상 맞추면 세련돼요.",
      ];
    }
    if (/바지|데님|진|청바지/.test(topic)) {
      return [
        "화이트 티+얇은 야상 조합이 좋아요.",
        "네이비 니트 폴로와 컬러가 잘 받아요.",
        "루즈핏 셔츠 넣입+로퍼 추천!",
        "크림 상의랑 매치하면 봄 느낌 나요.",
      ];
    }
    if (/원피스|드레스/.test(topic)) {
      return [
        "크롭 가디건+메리제인 슈즈 조합 예뻐요!",
        "데님 자켓 걸치면 캐주얼하게 변신합니다.",
        "롱 트렌치+앵클부츠로 가을 무드 완성!",
        "밝은 토트백으로 포인트 주세요.",
      ];
    }
    return [
      "무채톤 기본템으로 깔끔하게 추천!",
      "소품(벨트/모자) 포인트 주면 살아나요.",
      "스니커즈/로퍼 중 무드에 따라 선택!",
      "핏은 약간 여유 있게가 요즘 트렌드예요.",
    ];
  }

  const baseCount = post.baseCommentCount ?? 0;

  // ⬇️ 랜덤 대신 고정 seed로 한 번만 생성
  const baseComments = useMemo(() => {
    const texts = suggestionTexts(`${post.title} ${post.content || ""}`);
    const seed = hash(String(post.id) + "|" + post.title);
    return Array.from({ length: baseCount }).map((_, i) => ({
      id: `auto-${i}`,
      author: namePool[(seed + i) % namePool.length], // 항상 같은 이름
      text: texts[i % texts.length],
      avatar: avatarUrl,
      _readonly: true,
    }));
  }, [post.id, post.title, post.content, baseCount]);

  // 내가 단 댓글들(컨텍스트 저장)
  const userComments = (post.commentList || []).map((c) => ({
    id: c.id,
    author: c.author,
    text: c.text,
    avatar: avatarUrl,
    ownerKey: c.ownerKey,
  }));

  // 합치기
  const comments = [...baseComments, ...userComments];

  // 입력 & 편집 상태
  const [newComment, setNewComment] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const onSubmitNew = () => {
    if (!newComment.trim()) return alert("댓글을 입력해주세요.");
    addComment(post.id, newComment.trim());
    setNewComment("");
  };

  const startEdit = (c) => {
    setEditingId(c.id);
    setEditingText(c.text);
  };
  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };
  const saveEdit = () => {
    if (!editingText.trim()) return alert("내용을 입력해주세요.");
    const ok = updateComment(post.id, editingId, editingText.trim());
    if (!ok) alert("본인 댓글만 수정할 수 있어요.");
    cancelEdit();
  };
  const delComment = (cid) => {
    if (!window.confirm("댓글을 삭제하시겠어요?")) return;
    const ok = removeComment(post.id, cid);
    if (!ok) alert("본인 댓글만 삭제할 수 있어요.");
  };

  const isMine = (c) => c.ownerKey === userKey || (!c.ownerKey && c.author === displayName);

  return (
    <div className="bg-[#f1f1f1] min-h-screen w-full flex justify-center">
      <div className="bg-[#f1f1f1] w-full max-w-[1440px] relative">
        {/* 우측 상단 네비 */}
        <nav className="absolute top-[33px] right-[160px]">
          <div className="flex gap-4 text-black text-[15px] leading-[21px]">
            {[
              { name: "로그인", to: "/login" },
              { name: "회원가입", to: "/signup" },
              { name: "장바구니", to: "/cart" },
              { name: "마이페이지", to: "/mypage" },
              { name: "커뮤니티", to: "/community" },
            ].map((item, i) => (
              <Button key={i} variant="ghost" className="h-auto p-0 text-[15px] font-normal" onClick={() => navigate(item.to)}>
                {item.name}
              </Button>
            ))}
          </div>
        </nav>

        {/* 중앙 로고 */}
        <header className="absolute w-[146px] h-[118px] top-[55px] left-1/2 -translate-x-1/2">
          <div className="relative w-[142px] h-[118px]">
            <h1 className="absolute w-[142px] top-3 left-0 text-black text-[25.5px] text-center">MY SALON</h1>
            <p className="absolute w-[87px] top-0 left-7 text-black text-[9.5px] text-center">당신만을 위한 옷장</p>
            <img className="absolute w-[66px] h-[66px] top-[52px] left-[37px]" alt="Main icon" src="https://c.animaapp.com/mff2hae8n4dhTh/img/main-icon-1.png" />
          </div>
        </header>

        {/* 햄버거 메뉴 */}
        <Button variant="ghost" className="absolute w-[58px] h-[58px] top-[15px] left-[25px] bg-neutral-100 rounded-[29px] p-0 h-auto" onClick={() => navigate("/menu")}>
          <MenuIcon className="w-6 h-6" />
        </Button>

        {/* 검색바 */}
        <div className="absolute w-[296px] h-16 top-[61px] right-[37px]">
          <div className="flex w-[296px] h-16 items-center rounded-[100px]">
            <div className="flex items-center p-[11px] flex-1 bg-[#78788029] rounded-[100px]">
              <div className="flex items-center gap-2 flex-1">
                <SearchIcon className="w-4 h-4 text-[#999999]" />
                <Input placeholder="Search" className="border-0 bg-transparent text-[#999999] text-[17px] leading-[22px] placeholder:text-[#999999] focus-visible:ring-0 h-auto p-0" />
              </div>
            </div>
          </div>
        </div>

        {/* 본문 카드 */}
        <main className="absolute w-[1129px] top-[261px] left-[155px]">
          <Card className="bg-white rounded-[10px] border-0">
            <CardContent className="p-0">
              {/* 헤더 */}
              <div className="px-[136px] pt-[136px]">
                <h2 className="font-bold text-black text-2xl mb-2">{post.title}</h2>
                <div className="flex gap-2 text-sm text-black mb-8">
                  <span>{post.author}</span>
                  <span className="text-xs">{fromNow(post.createdAt)}</span>
                  <span className="text-xs text-[#666]">댓글 {getCommentCount(post)}개</span>
                </div>

                {/* 본문 + 사진 */}
                <div className="w-[860px] rounded-[15px] border-[0.4px] border-solid border-black p-8 mb-[40px]">
                  <div className={`flex ${post.hasImage ? "gap-8 items-start" : ""}`}>
                    <div className={`${post.hasImage ? "flex-1 pr-2" : ""} whitespace-pre-wrap text-[15px] leading-7 text-black`}>
                      {displayContent}
                    </div>
                    {post.hasImage && (
                      <div className="w-[200px] h-[240px] bg-[#d9d9d9] flex items-center justify-center rounded-md shrink-0">
                        <span className="font-bold text-black text-[28px]">사진</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 댓글 */}
              <div className="px-[136px] pb-[124px]">
                {/* 입력 */}
                <div className="flex items-center gap-4 w-[860px] mb-6">
                  <Input
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="댓글을 입력하세요."
                    className="flex-1 h-[48px] rounded-[12px] border-[0.4px] border-solid border-black bg-transparent text-[15px]"
                  />
                  <Button className="w-[64px] h-[40px] bg-[#d9d9d9] rounded-[50px] text-black text-[13px] px-0" onClick={onSubmitNew}>
                    완료
                  </Button>
                </div>

                {/* 리스트 */}
                <div className="w-[860px] space-y-4">
                  {comments.length === 0 ? (
                    <div className="text-sm text-[#555]">아직 댓글이 없습니다.</div>
                  ) : (
                    comments.map((c, i) => {
                      const mine = !c._readonly && (c.ownerKey === userKey || c.author === displayName);
                      const isEditing = editingId === c.id;

                      return (
                        <div key={c.id}>
                          <div className="flex items-start gap-3">
                            <Avatar className="w-[40px] h-[40px]">
                              <AvatarImage src={c.avatar} alt={c.author} />
                              <AvatarFallback>{c.author?.[0] || "?"}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <div className="text-[13px] text-black">{c.author}</div>
                                {mine && !c._readonly && !isEditing && (
                                  <>
                                    <button className="text-[12px] text-blue-600 hover:underline" onClick={() => startEdit(c)}>
                                      수정
                                    </button>
                                    <button className="text-[12px] text-red-600 hover:underline" onClick={() => delComment(c.id)}>
                                      삭제
                                    </button>
                                  </>
                                )}
                              </div>

                              {!isEditing ? (
                                <div className="text-[13px] text-black">{c.text}</div>
                              ) : (
                                <div className="mt-2 flex items-center gap-2">
                                  <Input value={editingText} onChange={(e) => setEditingText(e.target.value)} className="h-[36px]" />
                                  <Button className="h-[36px]" onClick={saveEdit}>
                                    저장
                                  </Button>
                                  <Button variant="outline" className="h-[36px]" onClick={cancelEdit}>
                                    취소
                                  </Button>
                                </div>
                              )}
                            </div>
                          </div>

                          {i < comments.length - 1 && <Separator className="w-full mt-[12px] h-px bg-black/20" />}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};
