import { MenuIcon, MicIcon, SearchIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";

export const Screen = () => {
  const navigate = useNavigate();

  const navigationItems = [
    "로그인",
    "회원가입",
    "장바구니",
    "마이페이지",
    "커뮤니티",
  ];

  const tabItems = [
    { id: "signup", label: "회원가입", bgColor: "bg-[#828282]" },
    { id: "findId", label: "아이디 찾기", bgColor: "bg-[#d9d9d9]" },
    { id: "findPassword", label: "비밀번호 찾기", bgColor: "bg-[#d9d9d9]" },
  ];

  return (
    <div className="bg-white grid justify-items-center w-screen min-h-screen">
      <div className="bg-white w-full max-w-[1440px] min-h-[1080px] relative">
        {/* Hamburger Menu */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-[15px] left-[25px] w-[58px] h-[58px] bg-neutral-100 rounded-full hover:bg-neutral-200"
          onClick={() => navigate('/menu')}
        >
          <MenuIcon className="w-6 h-6" />
        </Button>

        {/* Navigation Links */}
        <nav className="absolute top-[33px] left-[1080px]">
          <div className="[font-family:'Crimson_Text',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px] whitespace-nowrap">
            {navigationItems.join("    ")}
          </div>
        </nav>

        {/* Search Bar */}
        <div className="absolute top-[65px] left-[1146px] w-[266px]">
          <div className="flex items-center p-[11px] bg-[#78788029] rounded-full">
            <div className="flex items-center gap-2 flex-1">
              <SearchIcon className="w-4 h-4 text-[#999999]" />
              <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#999999] text-[17px] tracking-[-0.08px] leading-[22px]">
                Search
              </span>
            </div>
            <MicIcon className="w-4 h-4 text-[#999999]" />
          </div>
        </div>

        {/* Logo Section */}
        <div className="absolute top-[135px] left-[649px] w-[146px] h-[118px]">
          <div className="relative w-[142px] h-[118px]">
            <div className="absolute top-0 left-7 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[9.5px] text-center tracking-[0] leading-[13.3px] whitespace-nowrap">
              당신만을 위한 옷장
            </div>
            <div className="absolute top-3 left-0 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[25.5px] text-center tracking-[0] leading-[35.8px] whitespace-nowrap">
              MY SALON
            </div>
            <img
              className="absolute w-[66px] h-[66px] top-[52px] left-[37px]"
              alt="Main icon"
              src="https://c.animaapp.com/mfexf5h1OzNezT/img/main-icon-1.png"
            />
          </div>
        </div>

        {/* Login Section Layout */}
        <div className="absolute w-[318px] h-[575px] top-[292px] left-[232px]">
          <div className="absolute top-[65px] left-[194px] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#222222] text-[40px] text-center tracking-[0] leading-[56px] whitespace-nowrap">
            LOGIN
          </div>
          <Separator className="absolute w-[318px] top-[116px] left-0" />
          <Separator
            orientation="vertical"
            className="absolute h-[575px] top-0 left-[175px]"
          />
        </div>

        {/* Login Form Card */}
        <Card className="absolute w-[452px] h-[509px] top-[358px] left-[742px] border-[1.5px] border-solid border-black">
          <CardContent className="p-12">
            {/* Member Login Section */}
            <div className="mb-8">
              <h2 className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-7 mb-[38px]">
                회원 로그인
              </h2>

              <div className="flex gap-4 mb-4">
                <div className="flex-1 space-y-4">
                  <Input
                    placeholder="아이디"
                    className="h-8 border-[0.6px] border-[#828282] [font-family:'SF_Pro-Regular',Helvetica] text-[13px] text-[#d9d9d9] placeholder:text-[#d9d9d9]"
                  />
                  <Input
                    type="password"
                    placeholder="비밀번호"
                    className="h-8 border-[0.6px] border-[#828282] [font-family:'SF_Pro-Regular',Helvetica] text-[13px] text-[#d9d9d9] placeholder:text-[#d9d9d9]"
                  />
                </div>
                <Button className="w-[97px] h-[75px] bg-[url(https://c.animaapp.com/mfexf5h1OzNezT/img/rectangle-30.svg)] bg-[100%_100%] text-white [font-family:'SF_Pro-Regular',Helvetica] text-[15px]">
                  로그인
                </Button>
              </div>

              <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[8px] text-center tracking-[0] leading-[11.2px]">
                아이디 또는 비밀번호가 틀렸습니다.
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex mb-6">
              {tabItems.map((tab, index) => (
                <div
                  key={tab.id}
                  className={`w-[99px] h-[26px] ${tab.bgColor} flex items-center justify-center`}
                >
                  <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-white text-[10px] text-center tracking-[0] leading-[14px]">
                    {tab.label}
                  </span>
                </div>
              ))}
            </div>

            <Separator className="mb-6" />

            {/* Non-member Order Inquiry */}
            <div>
              <h2 className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-7 mb-[38px]">
                비회원 주문조회
              </h2>

              <div className="flex gap-4 mb-4">
                <div className="flex-1 space-y-4">
                  <Input
                    placeholder="주문자명"
                    className="h-8 border-[0.6px] border-[#828282] [font-family:'SF_Pro-Regular',Helvetica] text-[13px] text-[#d9d9d9] placeholder:text-[#d9d9d9]"
                  />
                  <Input
                    placeholder="전화번호"
                    className="h-8 border-[0.6px] border-[#828282] [font-family:'SF_Pro-Regular',Helvetica] text-[13px] text-[#d9d9d9] placeholder:text-[#d9d9d9]"
                  />
                </div>
                <Button
                  variant="outline"
                  className="w-[97px] h-[75px] bg-[url(https://c.animaapp.com/mfexf5h1OzNezT/img/rectangle-29.svg)] bg-[100%_100%] text-black [font-family:'SF_Pro-Regular',Helvetica] text-[15px]"
                >
                  확인
                </Button>
              </div>

              <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[8px] text-center tracking-[0] leading-[11.2px]">
                조회 내역이 없습니다.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
