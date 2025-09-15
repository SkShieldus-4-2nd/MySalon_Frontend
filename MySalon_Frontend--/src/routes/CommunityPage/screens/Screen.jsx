import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  SearchIcon,
} from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

// ✅ 정적 폴더(static)에서 바로 경로 문자열로 사용 (import 불필요)
const IMAGES = {
  maleCasual:   "/ootd/male-casual.jpg",
  maleDate:     "/ootd/male-date.jpg",
  maleCampus:   "/ootd/male-campus.jpg",
  maleHp:       "/ootd/male-hp.jpg",
  femaleCampus: "/ootd/female-campus.jpg",
  femaleDate:   "/ootd/female-date.jpg",
  femaleStreet: "/ootd/female-street.jpg",
  femaleBasic:  "/ootd/female-basic.jpg",
};

export const Screen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // URL 에 맞춰 탭 하이라이트
  const [activeTab, setActiveTab] = useState("today");
  useEffect(() => {
    setActiveTab(location.pathname.startsWith("/board") ? "board" : "today");
  }, [location.pathname]);

  const topNavItems = [
    { name: "로그인", onClick: () => navigate("/login") },
    { name: "회원가입", onClick: () => navigate("/signup") },
    { name: "장바구니", onClick: () => navigate("/cart") },
    { name: "마이페이지", onClick: () => navigate("/mypage") },
    { name: "커뮤니티", onClick: () => navigate("/community") },
  ];

  // ===== 상단 캐러셀 3장 =====
  const featuredOutfits = useMemo(
    () => [
      {
        id: 1,
        title: "남자 캐주얼 코디",
        category: "캐주얼",
        image: IMAGES.maleCasual,
        avatar: IMAGES.maleCasual,
        username: "홍길동",
        likes: 35,
      },
      {
        id: 2,
        title: "여자 데이트룩",
        category: "데이트",
        image: IMAGES.femaleDate,
        avatar: IMAGES.femaleDate,
        username: "이영희",
        likes: 50,
      },
      {
        id: 3,
        title: "남자 대학생 룩",
        category: "캠퍼스",
        image: IMAGES.maleCampus,
        avatar: IMAGES.maleCampus,
        username: "김철수",
        likes: 40,
      },
    ],
    []
  );

  // ===== 하단 그리드 =====
  const gridOutfits = useMemo(
    () => [
      { id: 4,  title: "남자 해리포터룩", category: "무드",    image: IMAGES.maleHp,       avatar: IMAGES.maleHp,       username: "홍길동", likes: 62 },
      { id: 5,  title: "여자 스트릿 룩",   category: "스트릿",  image: IMAGES.femaleStreet, avatar: IMAGES.femaleStreet, username: "이영희", likes: 58 },
      { id: 6,  title: "여자 코디",       category: "데일리",  image: IMAGES.femaleBasic,  avatar: IMAGES.femaleBasic,  username: "민지",   likes: 44 },
      { id: 7,  title: "여자 대학생 룩",  category: "캠퍼스",  image: IMAGES.femaleCampus, avatar: IMAGES.femaleCampus, username: "지수",   likes: 51 },
      { id: 8,  title: "남자 데이트룩",   category: "데이트",  image: IMAGES.maleDate,     avatar: IMAGES.maleDate,     username: "현우",   likes: 39 },
      { id: 9,  title: "남자 캐주얼 코디", category: "캐주얼",  image: IMAGES.maleCasual,   avatar: IMAGES.maleCasual,   username: "도현",   likes: 47 },
      { id: 10, title: "여자 데이트룩",   category: "데이트",  image: IMAGES.femaleDate,   avatar: IMAGES.femaleDate,   username: "서연",   likes: 55 },
      { id: 11, title: "남자 대학생 룩",  category: "캠퍼스",  image: IMAGES.maleCampus,   avatar: IMAGES.maleCampus,   username: "승민",   likes: 42 },
    ],
    []
  );

  // ===== 캐러셀 상태/로직 (3장 내 회전) =====
  const [centerIdx, setCenterIdx] = useState(1); // 가운데부터 시작 (0~2)
  const len = featuredOutfits.length;

  const order = useMemo(() => {
    const mod = (n, m) => ((n % m) + m) % m;
    return [mod(centerIdx - 1, len), mod(centerIdx, len), mod(centerIdx + 1, len)];
  }, [centerIdx, len]);

  const goLeft = () => setCenterIdx((c) => (c - 1 + len) % len);
  const goRight = () => setCenterIdx((c) => (c + 1) % len);

  // 이미지 에러 대비용(없는 파일일 때)
  const onImgError = (e) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=600&auto=format&fit=crop";
  };

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="max-w-[1440px] mx-auto bg-white overflow-hidden min-h-[1080px] relative">
        {/* 상단 네비 */}
        <nav className="absolute top-[33px] right-[37px]">
          <div className="flex gap-4 text-[15px]">
            {topNavItems.map((item, idx) => (
              <Button key={idx} variant="ghost" className="h-auto p-0" onClick={item.onClick}>
                {item.name}
              </Button>
            ))}
          </div>
        </nav>

        {/* 로고 */}
        <header className="absolute w-[146px] h-[118px] top-[55px] left-1/2 -translate-x-1/2">
          <div className="relative w-[142px] h-[118px]">
            <h1 className="absolute w-[142px] top-3 left-0 text-[25.5px] text-center">MY SALON</h1>
            <p className="absolute w-[87px] top-0 left-7 text-[9.5px] text-center">당신만을 위한 옷장</p>
            <img
              className="absolute w-[66px] h-[66px] top-[52px] left-[37px]"
              alt="Main icon"
              src="https://c.animaapp.com/mfezbbicpZVDGC/img/main-icon-1.png"
            />
          </div>
        </header>

        {/* 검색 */}
        <div className="absolute w-[296px] h-16 top-[67px] right-[37px]">
          <div className="flex w-[296px] h-16 items-center rounded-[100px]">
            <div className="flex items-center p-[11px] flex-1 bg-[#78788029] rounded-[100px]">
              <div className="flex items-center gap-2 flex-1">
                <SearchIcon className="w-4 h-4 text-[#999]" />
                <Input
                  placeholder="Search"
                  className="border-none bg-transparent text-[#999] text-[17px] placeholder:text-[#999] focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 탭 */}
        <div className="absolute w-[388px] h-[21px] top-[239px] left-1/2 -translate-x-1/2">
          <Button asChild variant="ghost" className="absolute w-[123px] top-0 left-0 h-auto p-0">
            <Link to="/community">
              <h2 className={`text-2xl ${activeTab === "today" ? "font-bold text-[#a40303]" : "text-black"}`}>
                오늘의 코디
              </h2>
            </Link>
          </Button>

          <Button asChild variant="ghost" className="absolute w-[67px] top-0 right-0 h-auto p-0">
            <Link to="/board">
              <h2 className={`text-2xl ${activeTab === "board" ? "font-bold text-[#a40303]" : "text-black"}`}>
                게시판
              </h2>
            </Link>
          </Button>
        </div>

        {/* 추천 카드 캐러셀 (3장 내 회전) */}
        <section className="absolute w-[577px] h-[347px] top-96 left-1/2 -translate-x-1/2">
          <Button
            variant="outline"
            size="icon"
            onClick={goLeft}
            className="absolute w-10 h-10 top-[172px] -left-[129px] rounded-[20px] border border-black bg-white hover:bg-gray-50"
            aria-label="이전"
          >
            <ChevronLeftIcon className="w-3.5 h-[15px]" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goRight}
            className="absolute w-10 h-10 top-[172px] -right-[129px] rounded-[20px] border border-black bg-white hover:bg-gray-50"
            aria-label="다음"
          >
            <ChevronRightIcon className="w-3.5 h-[15px]" />
          </Button>

          <div className="flex gap-[1px] relative">
            {order.map((idx, pos) => {
              const outfit = featuredOutfits[idx];
              const isCenter = pos === 1;
              const onCardClick = () => {
                if (pos === 0) goLeft();      // 왼쪽 카드 클릭 -> 왼쪽으로 밀기
                else if (pos === 2) goRight(); // 오른쪽 카드 클릭 -> 오른쪽으로 밀기
                // 가운데 카드는 클릭 액션 없음(원하면 상세로 이동 등 추가)
              };
              return (
                <Card
                  key={outfit.id}
                  onClick={onCardClick}
                  className={`${isCenter
                    ? "w-[217px] h-[311px] rounded-[10px] border border-black"
                    : "w-[218px] h-[312px] bg-gray-100 border-none mt-9"} transition-all cursor-pointer`}
                >
                  <CardContent className="p-0 relative h-full">
                    <img
                      className={`${isCenter ? "w-[169px] h-[150px] top-4 left-[22px]" : "w-[169px] h-[150px] top-[57px] left-[22px]"} absolute object-cover`}
                      alt={outfit.title}
                      src={outfit.image}
                      onError={onImgError}
                    />

                    <div className={`absolute ${isCenter ? "w-[126px] h-[35px] top-[179px] left-6" : "top-[217px] left-[22px]"}`}>
                      <h3 className={`${isCenter ? "absolute top-0 left-0" : ""} font-bold text-lg leading-[25.2px] whitespace-nowrap`}>
                        {outfit.title}
                      </h3>
                      <p className={`${isCenter ? "absolute top-[21px] left-0.5" : "mt-1"} text-[10px] leading-[14px] whitespace-nowrap`}>
                        {outfit.category}
                      </p>
                    </div>

                    <div className={`absolute ${isCenter ? "top-[220px] left-[22px]" : "top-[261px] left-[22px]"} w-16 h-[31px] flex items-center gap-2`}>
                      <Avatar className="w-[26px] h-[31px]">
                        <AvatarImage src={outfit.avatar} alt="User" onError={onImgError} />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <span className="text-[10px] leading-[14px] whitespace-nowrap">{outfit.username}</span>
                    </div>

                    <div className={`absolute ${isCenter ? "top-[264px] left-[139px]" : "top-[305px] right-[27px]"} w-[51px] h-[21px] flex items-center gap-1`}>
                      <HeartIcon className="w-5 h-5 fill-red-500 text-red-500" />
                      <span className="font-bold text-[15px] leading-[21px]">{outfit.likes}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* 나의 코디 등록하기 → /write-post */}
        <Button
          asChild
          variant="outline"
          className="absolute w-[111px] h-[34px] top-[766px] left-1/2 -translate-x-1/2 bg-white rounded-[3.12px] border border-black hover:bg-gray-50 h-auto"
        >
          <Link to="/write-post">
            <span className="text-[9.3px] leading-[13.1px] whitespace-nowrap">나의 코디 등록하기</span>
          </Link>
        </Button>

        {/* 하단 그리드 */}
        <section className="absolute top-[834px] left-1/2 -translate-x-1/2 w-[1154px]">
          <div className="grid grid-cols-4 gap-[67px]">
            {gridOutfits.map((outfit) => (
              <Card key={outfit.id} className="w-[233px] h-[311px] rounded-[10px] border border-black">
                <CardContent className="p-0 relative h-full">
                  <img
                    className="w-[178px] h-[150px] absolute top-4 left-6 object-cover"
                    alt={outfit.title}
                    src={outfit.image}
                    onError={onImgError}
                  />
                  <div className="absolute w-[133px] h-[35px] top-[179px] left-[25px]">
                    <h3 className="absolute top-0 left-0 font-bold text-lg leading-[25.2px]">{outfit.title}</h3>
                    <p className="absolute top-[21px] left-0.5 text-[10px] leading-[14px]">{outfit.category}</p>
                  </div>
                  <div className="absolute w-[66px] h-8 top-[220px] left-[25px] flex items-center gap-2">
                    <Avatar className="w-[27px] h-6">
                      <AvatarImage src={outfit.avatar} alt="User" onError={onImgError} />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <span className="w-[29px] text-[10px] leading-[14px] whitespace-nowrap">{outfit.username}</span>
                  </div>
                  <div className="absolute w-[54px] h-[21px] top-[264px] left-[147px] flex items-center gap-2">
                    <HeartIcon className="w-[21px] h-[21px] fill-red-500 text-red-500" />
                    <span className="w-[22px] font-bold text-[15px] leading-[21px]">{outfit.likes}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Screen;
