// src/data/outfits.js
/** base 값에 안전하게 정적 파일 경로 만들기 */
export const withBase = (p) =>
  `${import.meta.env.BASE_URL}${p.replace(/^\/+/, "")}`;

export const usernames = ["홍길동", "강소현", "이가은", "임성현", "박시훈", "김진열", "최성윤"];

export const allOutfits = [
  { id: 1, title: "후드+카디건 레이어드", category: "캠퍼스룩", image: withBase("/ootd/female-street.jpg"), likes: 35 },
  { id: 2, title: "크리미 톤 셋업",       category: "베이식",   image: withBase("/ootd/female-basic.jpg"),  likes: 42 },
  { id: 3, title: "데이트 무드 셋업",     category: "데이트",   image: withBase("/ootd/female-date.jpg"),   likes: 50 },
  { id: 4, title: "캠퍼스 무드",          category: "캠퍼스룩", image: withBase("/ootd/female-campus.jpg"), likes: 47 },
  { id: 5, title: "남성 캐주얼",          category: "캐주얼",   image: withBase("/ootd/male-casual.jpg"),   likes: 39 },
  { id: 6, title: "남성 캠퍼스룩",        category: "캠퍼스룩", image: withBase("/ootd/male-campus.jpg"),   likes: 44 },
  { id: 7, title: "남성 데이트룩",        category: "데이트",   image: withBase("/ootd/male-date.jpg"),     likes: 53 },
  { id: 8, title: "힙합 무드",            category: "스트릿",   image: withBase("/ootd/male-hp.jpg"),       likes: 41 },
].map((item, i) => ({
  ...item,
  username: usernames[i % usernames.length],
  // 상세 페이지 설명 더미
  description:
    `${item.title} 코디 설명입니다. 소재감/핏/포인트 아이템/매칭 팁 등을 자유롭게 적어 보세요.\n` +
    `예) 상의는 오버핏, 하의는 와이드로 비율 보정. 악세서리는 최소화, 스니커즈로 무드 완성.`,
}));
