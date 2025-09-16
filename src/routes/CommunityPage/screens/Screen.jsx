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

import { useOutfits } from "../../../context/OutfitContext"; // ✅ 전역 상태 사용

export const Screen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { outfits } = useOutfits(); // ✅ Context에서 불러옴

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

  // 좋아요순 정렬
  const sorted = useMemo(
    () => [...outfits].sort((a, b) => b.likes - a.likes),
    [outfits]
  );
  const top3 = sorted.slice(0, 3);
  const rest = sorted.slice(3);

  // 캐러셀
  const [start, setStart] = useState(0);
  const len = top3.length;
  const visible3 = useMemo(
    () => [0, 1, 2].map((i) => top3[(start + i) % len]),
    [start, len, top3]
  );

  const goDetail = (id) => navigate(`/outfit/${id}`);

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="max-w-[1440px] mx-auto bg-white overflow-visible min-h-[1400px] pb-24 relative">
        {/* 네비 */}
        <nav className="absolute top-[33px] right-[37px]">
          <div className="flex gap-4 text-[15px]">
            {topNavItems.map((item, idx) => (
              <Button
                key={idx}
                variant="ghost"
                className="h-auto p-0"
                onClick={item.onClick}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </nav>

        {/* 로고 */}
        <header className="absolute w-[146px] h-[118px] top-[55px] left-1/2 -translate-x-1/2">
          <div className="relative w-[142px] h-[118px]">
            <h1 className="absolute w-[142px] top-3 left-0 text-[25.5px] text-center">
              MY SALON
            </h1>
            <p className="absolute w-[87px] top-0 left-7 text-[9.5px] text-center">
              당신만을 위한 옷장
            </p>
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
              <h2
                className={`text-2xl ${
                  activeTab === "today"
                    ? "font-bold text-[#a40303]"
                    : "text-black"
                }`}
              >
                오늘의 코디
              </h2>
            </Link>
          </Button>
          <Button asChild variant="ghost" className="absolute w-[67px] top-0 right-0 h-auto p-0">
            <Link to="/board">
              <h2
                className={`text-2xl ${
                  activeTab === "board"
                    ? "font-bold text-[#a40303]"
                    : "text-black"
                }`}
              >
                게시판
              </h2>
            </Link>
          </Button>
        </div>

        {/* ===== 상단 캐러셀 (정렬 개선 버전) ===== */}
        <section className="absolute w-full top-96 left-0">
          <div className="relative mx-auto w-full max-w-[900px]">
            {/* Prev / Next 버튼 */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setStart((p) => (p - 1 + len) % len)}
              className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-[20px] border border-black bg-white hover:bg-gray-50"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setStart((p) => (p + 1) % len)}
              className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-[20px] border border-black bg-white hover:bg-gray-50"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </Button>

            {/* 카드 3개 정렬 */}
            <div className="flex gap-6 justify-center">
              {visible3.map((outfit, idx) => {
                const isCenter = idx === 1;
                return (
                  <Card
                    onClick={() => goDetail(outfit.id)}
                    key={`${outfit.id}-${start}`}
                    className={`cursor-pointer flex-shrink-0 transition-all duration-200 ${
                      isCenter
                        ? "scale-110 border border-black"
                        : "scale-95 opacity-85"
                    } w-[220px] h-[320px] rounded-[10px]`}
                  >
                    <CardContent className="flex flex-col items-center p-4 h-full">
                      {/* 이미지 */}
                      <img
                        className="w-[160px] h-[150px] object-cover rounded-md"
                        alt={outfit.title}
                        src={outfit.image}
                      />

                      {/* 제목 & 카테고리 */}
                      <div className="mt-3 text-center">
                        <h3 className="font-bold text-lg leading-snug">
                          {outfit.title}
                        </h3>
                        <p className="text-xs text-gray-600">{outfit.category}</p>
                      </div>

                      {/* 작성자 */}
                      <div className="mt-2 flex items-center gap-2">
                        <Avatar className="w-7 h-7">
                          <AvatarImage
                            src="https://c.animaapp.com/mfezbbicpZVDGC/img/chatgpt-image.png"
                            alt="User"
                          />
                          <AvatarFallback>{outfit.username[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs">{outfit.username}</span>
                      </div>

                      {/* 좋아요 (커뮤니티에선 항상 빨간 하트) */}
                      <div className="mt-auto flex items-center gap-1">
                        <HeartIcon className="w-5 h-5 text-red-500 fill-red-500" />
                        <span className="font-bold text-sm">{outfit.likes}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* 등록 버튼 */}
        <Button
          asChild
          variant="outline"
          className="absolute w-[111px] h-[34px] top-[766px] left-1/2 -translate-x-1/2 bg-white rounded-[3.12px] border border-black hover:bg-gray-50 h-auto"
        >
          <Link to="/write-post">
            <span className="text-[9.3px]">나의 코디 등록하기</span>
          </Link>
        </Button>

        {/* ===== 하단 그리드 (5개 한 줄) ===== */}
        <section className="absolute top-[834px] left-1/2 -translate-x-1/2 w-[1400px]">
          <div className="grid grid-cols-5 gap-[40px]">
            {rest.map((outfit) => (
              <Card
                key={outfit.id}
                onClick={() => goDetail(outfit.id)}
                className="w-[233px] h-[311px] rounded-[10px] border border-black cursor-pointer"
              >
                <CardContent className="p-0 relative h-full">
                  <img
                    className="w-[178px] h-[150px] absolute top-4 left-6 object-cover"
                    alt={outfit.title}
                    src={outfit.image}
                  />
                  <div className="absolute top-[179px] left-[25px]">
                    <h3 className="font-bold text-lg">{outfit.title}</h3>
                    <p className="text-[10px]">{outfit.category}</p>
                  </div>
                  <div className="absolute top-[220px] left-[25px] flex items-center gap-2">
                    <Avatar className="w-[27px] h-6">
                      <AvatarImage
                        src="https://c.animaapp.com/mfezbbicpZVDGC/img/chatgpt-image.png"
                        alt="User"
                      />
                      <AvatarFallback>{outfit.username[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-[10px]">{outfit.username}</span>
                  </div>
                  {/* 커뮤니티에선 빨간 하트 고정 */}
                  <div className="absolute top-[264px] left-[147px] flex items-center gap-2">
                    <HeartIcon className="w-[21px] h-[21px] text-red-500 fill-red-500" />
                    <span className="font-bold text-[15px]">{outfit.likes}</span>
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
