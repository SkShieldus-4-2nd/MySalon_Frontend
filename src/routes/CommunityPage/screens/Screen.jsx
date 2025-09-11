import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  SearchIcon,
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

export const Screen = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("today");

  const topNavItems = [
    { name: "로그인", onClick: () => navigate('/login') },
    { name: "회원가입", onClick: () => navigate('/signup') },
    { name: "장바구니", onClick: () => navigate('/cart') },
    { name: "마이페이지", onClick: () => navigate('/mypage') },
    { name: "커뮤니티", onClick: () => navigate('/community') },
  ];

  const featuredOutfits = [
    {
      id: 1,
      title: "여름 원피스 코디",
      category: "휴양지룩",
      image: "https://c.animaapp.com/mfezbbicpZVDGC/img/image-1-4.png",
      avatar:
        "https://c.animaapp.com/mfezbbicpZVDGC/img/chatgpt-image-2025--9--7-----04-10-17-1-1.png",
      username: "홍길동",
      likes: 35,
      isCenter: false,
    },
    {
      id: 2,
      title: "여름 원피스 코디",
      category: "휴양지룩",
      image: "https://c.animaapp.com/mfezbbicpZVDGC/img/image-1-4.png",
      avatar:
        "https://c.animaapp.com/mfezbbicpZVDGC/img/chatgpt-image-2025--9--7-----04-10-17-1-2.png",
      username: "홍길동",
      likes: 50,
      isCenter: true,
    },
    {
      id: 3,
      title: "여름 원피스 코디",
      category: "휴양지룩",
      image: "https://c.animaapp.com/mfezbbicpZVDGC/img/image-1-4.png",
      avatar:
        "https://c.animaapp.com/mfezbbicpZVDGC/img/chatgpt-image-2025--9--7-----04-10-17-1.png",
      username: "홍길동",
      likes: 40,
      isCenter: false,
    },
  ];

  const gridOutfits = [
    {
      id: 4,
      title: "여름 원피스 코디",
      category: "휴양지룩",
      image: "https://c.animaapp.com/mfezbbicpZVDGC/img/image-1-4.png",
      avatar:
        "https://c.animaapp.com/mfezbbicpZVDGC/img/chatgpt-image-2025--9--7-----04-10-17-1-3.png",
      username: "홍길동",
      likes: 50,
    },
    {
      id: 5,
      title: "여름 원피스 코디",
      category: "휴양지룩",
      image: "https://c.animaapp.com/mfezbbicpZVDGC/img/image-1-4.png",
      avatar:
        "https://c.animaapp.com/mfezbbicpZVDGC/img/chatgpt-image-2025--9--7-----04-10-17-1-4.png",
      username: "홍길동",
      likes: 50,
    },
    {
      id: 6,
      title: "여름 원피스 코디",
      category: "휴양지룩",
      image: "https://c.animaapp.com/mfezbbicpZVDGC/img/image-1-4.png",
      avatar:
        "https://c.animaapp.com/mfezbbicpZVDGC/img/chatgpt-image-2025--9--7-----04-10-17-1-5.png",
      username: "홍길동",
      likes: 50,
    },
    {
      id: 7,
      title: "여름 원피스 코디",
      category: "휴양지룩",
      image: "https://c.animaapp.com/mfezbbicpZVDGC/img/image-1-4.png",
      avatar:
        "https://c.animaapp.com/mfezbbicpZVDGC/img/chatgpt-image-2025--9--7-----04-10-17-1-6.png",
      username: "홍길동",
      likes: 50,
    },
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="max-w-[1440px] mx-auto bg-white overflow-hidden min-h-[1080px] relative">
        {/* Header Navigation */}
        <nav className="absolute top-[33px] right-[37px]">
          <div className="flex gap-4 [font-family:'Crimson_Text',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px]">
            {topNavItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-auto p-0 text-[15px] font-normal"
                onClick={item.onClick}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </nav>

        {/* Logo Section */}
        <header className="absolute w-[146px] h-[118px] top-[55px] left-1/2 transform -translate-x-1/2">
          <div className="relative w-[142px] h-[118px]">
            <h1 className="absolute w-[142px] top-3 left-0 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[25.5px] text-center tracking-[0] leading-[35.8px] whitespace-nowrap">
              MY SALON
            </h1>
            <p className="absolute w-[87px] top-0 left-7 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[9.5px] text-center tracking-[0] leading-[13.3px] whitespace-nowrap">
              당신만을 위한 옷장
            </p>
            <img
              className="absolute w-[66px] h-[66px] top-[52px] left-[37px]"
              alt="Main icon"
              src="https://c.animaapp.com/mfezbbicpZVDGC/img/main-icon-1.png"
            />
          </div>
        </header>

        {/* Search Bar */}
        <div className="absolute w-[296px] h-16 top-[67px] right-[37px]">
          <div className="flex w-[296px] h-16 items-center relative rounded-[100px]">
            <div className="flex items-center p-[11px] relative flex-1 grow bg-[#78788029] rounded-[100px]">
              <div className="flex items-center gap-2 relative flex-1 grow">
                <SearchIcon className="w-4 h-4 text-[#999999]" />
                <Input
                  placeholder="Search"
                  className="border-none bg-transparent text-[#999999] text-[17px] tracking-[-0.08px] leading-[22px] placeholder:text-[#999999] focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto [font-family:'SF_Pro-Regular',Helvetica]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section Headers */}
        <div className="absolute w-[388px] h-[21px] top-[239px] left-1/2 transform -translate-x-1/2">
          <Button
            variant="ghost"
            className="absolute w-[123px] top-0 left-0 h-auto p-0"
            onClick={() => setActiveTab("today")}
          >
            <h2 className={`text-2xl tracking-[-0.08px] leading-[20.7px] ${
              activeTab === "today" 
                ? "[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#a40303]" 
                : "[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black"
            }`}>
              오늘의 코디
            </h2>
          </Button>
          <Button
            variant="ghost"
            className="absolute w-[67px] top-0 right-0 h-auto p-0"
            onClick={() => {
              setActiveTab("board");
              navigate('/board');
            }}
          >
            <h2 className={`text-2xl tracking-[-0.08px] leading-[20.7px] ${
              activeTab === "board" 
                ? "[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#a40303]" 
                : "[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black"
            }`}>
              게시판
            </h2>
          </Button>
        </div>

        {/* Featured Carousel Section */}
        <section className="absolute w-[577px] h-[347px] top-96 left-1/2 transform -translate-x-1/2">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute w-10 h-10 top-[172px] -left-[129px] rounded-[20px] border-[0.8px] border-solid border-black bg-white hover:bg-gray-50"
          >
            <ChevronLeftIcon className="w-3.5 h-[15px]" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute w-10 h-10 top-[172px] -right-[129px] rounded-[20px] border-[0.8px] border-solid border-black bg-white hover:bg-gray-50"
          >
            <ChevronRightIcon className="w-3.5 h-[15px]" />
          </Button>

          {/* Outfit Cards */}
          <div className="flex gap-[1px] relative">
            {featuredOutfits.map((outfit, index) => (
              <Card
                key={outfit.id}
                className={`${outfit.isCenter ? "w-[217px] h-[311px] rounded-[10px] border-[0.8px] border-solid border-black" : "w-[218px] h-[312px] bg-gray-100 border-none"} ${index === 0 ? "mt-9" : index === 2 ? "mt-9" : ""}`}
              >
                <CardContent className="p-0 relative h-full">
                  <img
                    className={`${outfit.isCenter ? "w-[169px] h-[150px] top-4 left-[22px]" : "w-[169px] h-[150px] top-[57px] left-[22px]"} absolute object-cover`}
                    alt="Outfit image"
                    src={outfit.image}
                  />

                  <div
                    className={`absolute ${outfit.isCenter ? "w-[126px] h-[35px] top-[179px] left-6" : "top-[217px] left-[22px]"}`}
                  >
                    <h3
                      className={`${outfit.isCenter ? "absolute top-0 left-0" : ""} [font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[25.2px] whitespace-nowrap`}
                    >
                      {outfit.title}
                    </h3>
                    <p
                      className={`${outfit.isCenter ? "absolute top-[21px] left-0.5" : "mt-1"} [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[10px] tracking-[0] leading-[14px] whitespace-nowrap`}
                    >
                      {outfit.category}
                    </p>
                  </div>

                  <div
                    className={`absolute ${outfit.isCenter ? "w-16 h-[31px] top-[220px] left-[22px]" : "w-16 h-[31px] top-[261px] left-[22px]"} flex items-center gap-2`}
                  >
                    <Avatar className="w-[26px] h-[31px]">
                      <AvatarImage src={outfit.avatar} alt="User avatar" />
                      <AvatarFallback>홍</AvatarFallback>
                    </Avatar>
                    <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[10px] tracking-[0] leading-[14px] whitespace-nowrap">
                      {outfit.username}
                    </span>
                  </div>

                  <div
                    className={`absolute ${outfit.isCenter ? "w-[51px] h-[21px] top-[264px] left-[139px]" : "w-[51px] h-[21px] top-[305px] right-[27px]"} flex items-center gap-1`}
                  >
                    <HeartIcon className="w-5 h-5 fill-red-500 text-red-500" />
                    <span className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[15px] tracking-[0] leading-[21px] whitespace-nowrap">
                      {outfit.likes}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Register Button */}
        <Button
          variant="outline"
          className="absolute w-[111px] h-[34px] top-[766px] left-1/2 transform -translate-x-1/2 bg-white rounded-[3.12px] border-[0.31px] border-solid border-black hover:bg-gray-50 h-auto"
        >
          <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[9.3px] tracking-[0] leading-[13.1px] whitespace-nowrap">
            나의 코디 등록하기
          </span>
        </Button>

        {/* Grid Section */}
        <section className="absolute top-[834px] left-1/2 transform -translate-x-1/2 w-[1154px]">
          <div className="grid grid-cols-4 gap-[67px]">
            {gridOutfits.map((outfit) => (
              <Card
                key={outfit.id}
                className="w-[233px] h-[311px] rounded-[10px] border-[0.8px] border-solid border-black"
              >
                <CardContent className="p-0 relative h-full">
                  <img
                    className="w-[178px] h-[150px] absolute top-4 left-6 object-cover"
                    alt="Outfit image"
                    src={outfit.image}
                  />

                  <div className="absolute w-[133px] h-[35px] top-[179px] left-[25px]">
                    <h3 className="absolute w-[133px] top-0 left-0 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[25.2px]">
                      {outfit.title}
                    </h3>
                    <p className="absolute w-[39px] top-[21px] left-0.5 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[10px] tracking-[0] leading-[14px]">
                      {outfit.category}
                    </p>
                  </div>

                  <div className="absolute w-[66px] h-8 top-[220px] left-[25px] flex items-center gap-2">
                    <Avatar className="w-[27px] h-6">
                      <AvatarImage src={outfit.avatar} alt="User avatar" />
                      <AvatarFallback>홍</AvatarFallback>
                    </Avatar>
                    <span className="w-[29px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[10px] tracking-[0] leading-[14px] whitespace-nowrap">
                      {outfit.username}
                    </span>
                  </div>

                  <div className="absolute w-[54px] h-[21px] top-[264px] left-[147px] flex items-center gap-2">
                    <HeartIcon className="w-[21px] h-[21px] fill-red-500 text-red-500" />
                    <span className="w-[22px] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[15px] tracking-[0] leading-[21px]">
                      {outfit.likes}
                    </span>
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
