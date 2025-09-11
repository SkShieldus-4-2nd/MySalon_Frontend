import { MenuIcon, SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";

export const Screen = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    guestName: "",
    guestPhone: ""
  });

  const navigationItems = [
    { name: "로그인", onClick: () => navigate('/login') },
    { name: "회원가입", onClick: () => navigate('/signup') },
    { name: "장바구니", onClick: () => navigate('/cart') },
    { name: "마이페이지", onClick: () => navigate('/mypage') },
    { name: "커뮤니티", onClick: () => navigate('/') },
  ];

  const tabItems = [
    { id: "signup", label: "회원가입", bgColor: "bg-[#828282]" },
    { id: "findId", label: "아이디 찾기", bgColor: "bg-[#d9d9d9]" },
    { id: "findPassword", label: "비밀번호 찾기", bgColor: "bg-[#d9d9d9]" },
  ];

  const handleLogin = () => {
    if (!loginData.username || !loginData.password) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }
    alert('로그인 성공!');
    navigate('/mypage');
  };

  const handleGuestOrder = () => {
    if (!loginData.guestName || !loginData.guestPhone) {
      alert('주문자명과 전화번호를 입력해주세요.');
      return;
    }
    alert('주문 조회 완료!');
  };

  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white w-[1440px] h-[1080px] relative">
        {/* Hamburger Menu */}
        <Button
          variant="ghost"
          className="absolute w-[58px] h-[58px] top-[15px] left-[25px] bg-neutral-100 rounded-[29px/29.18px] p-0 h-auto"
          onClick={() => navigate('/menu')}
        >
          <MenuIcon className="w-[27px] h-[27px] text-black" />
        </Button>

        {/* Top Navigation */}
        <nav className="absolute top-[33px] left-[1080px]">
          <div className="flex gap-4 [font-family:'Crimson_Text',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px]">
            {navigationItems.map((item, index) => (
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

        {/* Search Bar */}
        <div className="absolute w-[266px] h-[51px] top-[65px] left-[1146px]">
          <div className="flex w-[266px] h-[51px] items-center relative rounded-[100px]">
            <div className="flex items-center p-[11px] relative flex-1 grow bg-[#78788029] rounded-[100px]">
              <div className="flex items-center gap-2 relative flex-1 grow">
                <SearchIcon className="w-4 h-4 text-[#999999]" />
                <Input
                  placeholder="Search"
                  className="border-0 bg-transparent text-[#999999] text-[17px] tracking-[-0.08px] leading-[22px] placeholder:text-[#999999] focus-visible:ring-0 h-auto p-0"
                />
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#999999] text-[17px] tracking-[-0.08px] leading-[22px] whitespace-nowrap">
                􀊱
              </div>
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
              src="https://c.animaapp.com/mfex1ag7JBc2Z6/img/main-icon-1.png"
            />
          </div>
        </div>

        {/* Login Section Layout */}
        <div className="absolute w-[318px] h-[575px] top-[292px] left-[232px]">
          <div className="absolute top-[65px] left-[194px] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#222222] text-[40px] text-center tracking-[0] leading-[56px] whitespace-nowrap">
            LOGIN
          </div>
          <img
            className="absolute w-[318px] h-px top-[116px] left-0"
            alt="Line"
            src="https://c.animaapp.com/mfex1ag7JBc2Z6/img/line-19.svg"
          />
          <img
            className="absolute w-px h-[575px] top-0 left-[175px]"
            alt="Line"
            src="https://c.animaapp.com/mfex1ag7JBc2Z6/img/line-20.svg"
          />
        </div>

        {/* Login Form Card */}
        <Card className="absolute w-[452px] h-[509px] top-[358px] left-[742px] border-[1.5px] border-solid border-black">
          <CardContent className="p-12">
            {/* Member Login Section */}
            <div className="w-[331px] h-[129px] mb-8">
              <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-7 whitespace-nowrap mb-[38px]">
                회원 로그인
              </div>

              <div className="flex gap-4 mb-4">
                <div className="flex-1 space-y-4">
                  <Input
                    placeholder="아이디"
                    value={loginData.username}
                    onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                    className="w-[234px] h-8 border-[0.6px] border-solid border-[#828282] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[13px] text-center tracking-[0] leading-[18.2px]"
                  />
                  <Input
                    type="password"
                    placeholder="비밀번호"
                    value={loginData.password}
                    onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                    className="w-[234px] h-8 border-[0.6px] border-solid border-[#828282] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[13px] text-center tracking-[0] leading-[18.2px]"
                  />
                </div>
                <Button 
                  className="w-[97px] h-[75px] bg-[url(https://c.animaapp.com/mfex1ag7JBc2Z6/img/rectangle-30.svg)] bg-[100%_100%] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-white text-[15px] text-center tracking-[0] leading-[21px] h-auto"
                  onClick={handleLogin}
                >
                  로그인
                </Button>
              </div>

              <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-red-500 text-[8px] text-center tracking-[0] leading-[11.2px] whitespace-nowrap">
                {loginData.username && loginData.password && "아이디 또는 비밀번호가 틀렸습니다."}
              </div>
            </div>

            <img
              className="absolute w-[345px] h-px top-[201px] left-[52px]"
              alt="Line"
              src="https://c.animaapp.com/mfex1ag7JBc2Z6/img/line-18.svg"
            />

            {/* Tab Navigation */}
            <Tabs defaultValue="signup" className="w-[351px] mb-6">
              <TabsList className="grid w-full grid-cols-3 h-[26px] p-0 bg-transparent">
                {tabItems.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={`w-[99px] h-[26px] ${tab.bgColor} [font-family:'SF_Pro-Regular',Helvetica] font-normal text-white text-[10px] text-center tracking-[0] leading-[14px] data-[state=active]:${tab.bgColor} h-auto`}
                    onClick={() => {
                      if (tab.id === "signup") {
                        navigate('/signup');
                      }
                    }}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Non-member Order Inquiry Section */}
            <div className="w-[361px] h-[340px]">
              <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-7 whitespace-nowrap mb-[38px]">
                비회원 주문조회
              </div>

              <div className="flex gap-4 mb-4">
                <div className="flex-1 space-y-4">
                  <Input
                    placeholder="주문자명"
                    value={loginData.guestName}
                    onChange={(e) => setLoginData(prev => ({ ...prev, guestName: e.target.value }))}
                    className="w-[234px] h-8 border-[0.6px] border-solid border-[#828282] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[13px] text-center tracking-[0] leading-[18.2px]"
                  />
                  <Input
                    placeholder="전화번호"
                    value={loginData.guestPhone}
                    onChange={(e) => setLoginData(prev => ({ ...prev, guestPhone: e.target.value }))}
                    className="w-[234px] h-8 border-[0.6px] border-solid border-[#828282] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[13px] text-center tracking-[0] leading-[18.2px]"
                  />
                </div>
                <Button 
                  className="w-[97px] h-[75px] bg-[url(https://c.animaapp.com/mfex1ag7JBc2Z6/img/rectangle-29.svg)] bg-[100%_100%] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-[21px] h-auto"
                  onClick={handleGuestOrder}
                >
                  확인
                </Button>
              </div>

              <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-red-500 text-[8px] text-center tracking-[0] leading-[11.2px] whitespace-nowrap">
                {loginData.guestName && loginData.guestPhone && "조회 내역이 없습니다."}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
