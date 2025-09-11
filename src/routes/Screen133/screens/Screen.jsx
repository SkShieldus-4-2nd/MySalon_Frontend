import { MenuIcon, MicIcon, SearchIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";

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
    { value: "signup", label: "회원가입", bgColor: "bg-[#828282]" },
    { value: "findId", label: "아이디 찾기", bgColor: "bg-[#d9d9d9]" },
    { value: "findPassword", label: "비밀번호 찾기", bgColor: "bg-[#d9d9d9]" },
  ];

  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white w-[1440px] h-[1080px] relative">
        {/* Hamburger Menu */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute w-[58px] h-[58px] top-[15px] left-[25px] bg-neutral-100 rounded-[29px] hover:bg-neutral-200"
          onClick={() => navigate('/menu')}
        >
          <MenuIcon className="w-[27px] h-[27px]" />
        </Button>

        {/* Navigation Links */}
        <nav className="absolute top-[33px] left-[1080px]">
          <div className="[font-family:'Crimson_Text',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px] whitespace-nowrap">
            {navigationItems.join("    ")}
          </div>
        </nav>

        {/* Search Bar */}
        <div className="absolute w-[266px] h-[51px] top-[65px] left-[1146px]">
          <div className="flex w-[266px] h-[51px] items-center relative rounded-[100px]">
            <div className="flex items-center p-[11px] relative flex-1 grow bg-[#78788029] rounded-[100px]">
              <div className="flex items-center gap-2 relative flex-1 grow">
                <SearchIcon className="w-4 h-4 text-[#999999]" />
                <span className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#999999] text-[17px] tracking-[-0.08px] leading-[22px] whitespace-nowrap">
                  Search
                </span>
              </div>
              <MicIcon className="w-4 h-4 text-[#999999]" />
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="absolute w-[146px] h-[118px] top-[135px] left-[649px]">
          <div className="relative w-[142px] h-[118px]">
            <div className="absolute w-[87px] top-0 left-7 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[9.5px] text-center tracking-[0] leading-[13.3px] whitespace-nowrap">
              당신만을 위한 옷장
            </div>
            <div className="absolute w-[142px] top-3 left-0 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[25.5px] text-center tracking-[0] leading-[35.8px] whitespace-nowrap">
              MY SALON
            </div>
            <img
              className="absolute w-[66px] h-[66px] top-[52px] left-[37px]"
              alt="Main icon"
              src="https://c.animaapp.com/mfexm2mi2gPjcW/img/main-icon-1.png"
            />
          </div>
        </div>

        {/* Login Section Layout */}
        <div className="absolute w-[318px] h-[575px] top-[292px] left-[232px]">
          <div className="absolute top-[65px] left-[194px] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#222222] text-[40px] text-center tracking-[0] leading-[56px] whitespace-nowrap">
            LOGIN
          </div>
          <Separator className="absolute w-[318px] h-px top-[116px] left-0" />
          <Separator
            orientation="vertical"
            className="absolute w-px h-[575px] top-0 left-[175px]"
          />
        </div>

        {/* Login Form Card */}
        <Card className="absolute w-[452px] h-[509px] top-[358px] left-[742px] border-[1.5px] border-solid border-black">
          <CardContent className="p-12">
            {/* Member Login Section */}
            <div className="w-[331px] h-[129px] mb-8">
              <h2 className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-7 whitespace-nowrap mb-[38px]">
                회원 로그인
              </h2>

              <div className="space-y-[11px] mb-4">
                <Input
                  placeholder="아이디"
                  className="w-[234px] h-8 border-[0.6px] border-solid border-[#828282] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#d9d9d9] text-[13px] text-center tracking-[0] leading-[18.2px]"
                />
                <Input
                  type="password"
                  placeholder="비밀번호"
                  className="w-[234px] h-8 border-[0.6px] border-solid border-[#828282] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#d9d9d9] text-[13px] text-center tracking-[0] leading-[18.2px]"
                />
              </div>

              <Button className="absolute top-[65px] right-[52px] w-[97px] h-[75px] bg-[url(https://c.animaapp.com/mfexm2mi2gPjcW/img/rectangle-30.svg)] bg-[100%_100%] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-white text-[15px] text-center tracking-[0] leading-[21px] h-auto">
                로그인
              </Button>

              <div className="text-black text-[8px] text-center tracking-[0] leading-[11.2px] mt-2 [font-family:'SF_Pro-Regular',Helvetica] font-normal">
                아이디 또는 비밀번호가 틀렸습니다.
              </div>
            </div>

            {/* Separator Line */}
            <Separator className="w-[345px] mb-4" />

            {/* Tab Navigation */}
            <Tabs defaultValue="signup" className="w-[351px] mb-6">
              <TabsList className="grid w-full grid-cols-3 h-[26px] p-0 bg-transparent">
                {tabItems.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className={`w-[99px] h-[26px] ${tab.bgColor} [font-family:'SF_Pro-Regular',Helvetica] font-normal text-white text-[10px] text-center tracking-[0] leading-[14px] data-[state=active]:${tab.bgColor} data-[state=inactive]:${tab.bgColor}`}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Non-member Order Inquiry Section */}
            <div className="w-[361px] h-[340px]">
              <h2 className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-7 whitespace-nowrap mb-[38px]">
                비회원 주문조회
              </h2>

              <div className="space-y-[11px] mb-4">
                <Input
                  placeholder="주문자명"
                  className="w-[234px] h-8 border-[0.6px] border-solid border-[#828282] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#d9d9d9] text-[13px] text-center tracking-[0] leading-[18.2px]"
                />
                <Input
                  placeholder="전화번호"
                  className="w-[234px] h-8 border-[0.6px] border-solid border-[#828282] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#d9d9d9] text-[13px] text-center tracking-[0] leading-[18.2px]"
                />
              </div>

              <Button className="absolute bottom-[82px] right-[52px] w-[97px] h-[75px] bg-[url(https://c.animaapp.com/mfexm2mi2gPjcW/img/rectangle-29.svg)] bg-[100%_100%] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-[21px] h-auto">
                확인
              </Button>

              <div className="text-black text-[8px] text-center tracking-[0] leading-[11.2px] mt-2 [font-family:'SF_Pro-Regular',Helvetica] font-normal">
                조회 내역이 없습니다.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
