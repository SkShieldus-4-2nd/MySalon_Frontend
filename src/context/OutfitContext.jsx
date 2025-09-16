import React, { createContext, useContext, useState } from "react";

const OutfitContext = createContext();

const initialOutfits = [
  {
    id: 1,
    title: "남성 캐주얼",
    category: "남성 · 데일리",
    username: "임성현",
    image: "/static/ootd/male-casual.jpg",
    likes: 35,
    liked: false,
    description: `오늘은 편안한 데일리룩으로👌
화이트 티셔츠 + 청바지 조합은 언제나 진리죠 🧢
자켓만 툭 걸쳐줘도 센스있는 느낌!  
#데일리룩 #남친룩 #깔끔코디`,
  },
  {
    id: 2,
    title: "여성 데이트룩",
    category: "여성 · 로맨틱",
    username: "이가은",
    image: "/static/ootd/female-date.jpg",
    likes: 50,
    liked: false,
    description: `주말 데이트룩 준비 완료💕
플라워 원피스에 화이트 가디건으로 러블리하게 🌸
오늘 하루 완전 설렘 가득!  
#데이트룩 #러블리룩 #OOTD`,
  },
  {
    id: 3,
    title: "남성 캠퍼스룩",
    category: "남성 · 학생",
    username: "박시훈",
    image: "/static/ootd/male-campus.jpg",
    likes: 40,
    liked: false,
    description: `수업 들으러 갈 때도 멋내야죠 📚
후드티 + 청자켓 + 운동화 = 꾸안꾸 캠퍼스룩 🏫
편하면서도 힙한 느낌 제대로!  
#캠퍼스룩 #꾸안꾸 #힙한스타일`,
  },
  {
    id: 4,
    title: "여성 기본 코디",
    category: "여성 · 베이직",
    username: "강소현",
    image: "/static/ootd/female-basic.jpg",
    likes: 28,
    liked: false,
    description: `오늘은 심플 이즈 베스트✨
화이트 셔츠에 블랙 슬랙스로 깔끔하게 출근!
포인트는 미니멀한 시계⌚  
#오피스룩 #베이직코디 #심플스타일`,
  },
  {
    id: 5,
    title: "남성 스트릿룩",
    category: "남성 · 스트릿",
    username: "최성윤",
    image: "/static/ootd/male-hp.jpg",
    likes: 31,
    liked: false,
    description: `오늘은 스트릿 무드로 😎
오버핏 후드티 + 와이드팬츠 + 스니커즈 완벽 조합!
모자랑 크로스백까지 챙겨줘야죠 🧢  
#스트릿룩 #꾸안꾸패션 #스니커즈룩`,
  },
  {
    id: 6,
    title: "여성 캠퍼스룩",
    category: "여성 · 학생",
    username: "강소현",
    image: "/static/ootd/female-campus.jpg",
    likes: 22,
    liked: false,
    description: `학교 가는 날 룩북 📖
니트 가디건 + 체크 스커트 = 꾸안꾸 캠퍼스룩✨
귀여움 뿜뿜하면서 편하게!  
#캠퍼스룩 #OOTD #꾸안꾸`,
  },
  {
    id: 7,
    title: "여성 스트릿룩",
    category: "여성 · 스트릿",
    username: "이가은",
    image: "/static/ootd/female-street.jpg",
    likes: 27,
    liked: false,
    description: `조금 과감하게 도전해봤어요🔥
크롭탑 + 와이드 팬츠 + 오버핏 자켓으로 시크하게!
거리에선 내가 바로 주인공 ✨  
#스트릿룩 #걸크러시 #OOTD`,
  },
  // 🆕 8번째 아이템 추가 — 하단 그리드가 최소 5개 되도록
  {
    id: 8,
    title: "남성 데이트룩",
    category: "남성 · 로맨틱",
    username: "홍길동",
    image: "/static/ootd/male-date.jpg",
    likes: 26,
    liked: false,
    description: `저녁 데이트엔 톤다운 셋업으로 깔끔하게✨
화이트 스니커즈로 부담 덜고 산뜻하게 마무리!
분위기 한 스푼 추가 완료 😌  
#데이트룩 #셋업코디 #남친룩`,
  },
];

export function OutfitProvider({ children }) {
  const [outfits, setOutfits] = useState(initialOutfits);

  const toggleLike = (id) => {
    setOutfits((prev) =>
      prev.map((outfit) =>
        outfit.id === id
          ? {
              ...outfit,
              liked: !outfit.liked,
              likes: outfit.liked ? outfit.likes - 1 : outfit.likes + 1,
            }
          : outfit
      )
    );
  };

  return (
    <OutfitContext.Provider value={{ outfits, toggleLike }}>
      {children}
    </OutfitContext.Provider>
  );
}

export function useOutfits() {
  return useContext(OutfitContext);
}
