import { MenuIcon, MicIcon, SearchIcon, MessageSquareIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

export const Screen = () => {
  const navigate = useNavigate();

  const navigationItems = [
    { name: "로그인", onClick: () => navigate('/login') },
    { name: "회원가입", onClick: () => navigate('/signup') },
    { name: "장바구니", onClick: () => navigate('/cart') },
    { name: "마이페이지", onClick: () => navigate('/mypage') },
    { name: "커뮤니티", onClick: () => navigate('/') },
  ];

  const reviewSections = [
    {
      title: "작성한 리뷰",
      className: "top-[429px]",
    },
    {
      title: "리뷰를 작성해보세요",
      className: "top-[739px]",
    },
  ];

  const reviewItems = [
    {
      id: "123456789",
      title: "여름블루 롱 원피스",
      description:
        "내가 쓴 리뷰 띄우기\nex) 하늘하늘해서 지금 시기에 입기 딱 좋네요. 근데 약간 오버핏이여서\n이 점 참고해서 사면 좋을 것 같네요.",
      buttonText: "리뷰수정",
      topPosition: "top-[531px]",
      idTopPosition: "top-[528px]",
    },
    {
      id: "123456789",
      title: "여름블루 롱 원피스",
      description:
        "여름에 입기 좋은 롱 원피스.. 상품 설명 상품 설명 상품 설명\n상품 설명상품 설명상품 설명상품 설명상품 설명상품 설명",
      price: "50,000 원",
      buttonText: "리뷰작성",
      topPosition: "top-[832px]",
      idTopPosition: "top-[829px]",
    },
  ];

  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white w-[1440px] h-[1080px] relative">
        <header className="absolute w-[1440px] h-[244px] top-0 left-0 bg-[#d9d9d9]">
          <div className="absolute w-[296px] h-16 top-[67px] left-[1107px]">
            <div className="flex w-[296px] h-16 items-center relative rounded-[100px]">
              <div className="flex items-center p-[11px] relative flex-1 grow bg-[#78788029] rounded-[100px]">
                <div className="flex items-center gap-2 relative flex-1 grow">
                  <SearchIcon className="w-4 h-4 text-[#999999]" />
                  <Input
                    placeholder="Search"
                    className="border-0 bg-transparent text-[#999999] text-[17px] tracking-[-0.08px] leading-[22px] placeholder:text-[#999999] focus-visible:ring-0 h-auto p-0"
                  />
                </div>
                <MicIcon className="w-4 h-4 text-[#999999]" />
              </div>
            </div>
          </div>

          <nav className="absolute top-[33px] left-[1080px] [font-family:'Crimson_Text',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px] whitespace-nowrap">
            <div className="flex gap-4">
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

          <div className="absolute w-[146px] h-[118px] top-[55px] left-[649px]">
            <div className="relative w-[142px] h-[118px]">
              <div className="absolute w-[142px] top-3 left-0 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[25.5px] text-center tracking-[0] leading-[35.8px] whitespace-nowrap">
                MY SALON
              </div>
              <div className="absolute w-[87px] top-0 left-7 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[9.5px] text-center tracking-[0] leading-[13.3px] whitespace-nowrap">
                당신만을 위한 옷장
              </div>
              <img
                className="absolute w-[66px] h-[66px] top-[52px] left-[37px]"
                alt="Main icon"
                src="https://c.animaapp.com/mfewlpnp6b6Q4Z/img/main-icon-1.png"
              />
            </div>
          </div>

          <Button 
            className="absolute w-[58px] h-[58px] top-[15px] left-[25px] bg-neutral-100 rounded-[29px/29.18px] p-0 h-auto"
            onClick={() => navigate('/menu')}
          >
            <MenuIcon className="w-6 h-6 text-black" />
          </Button>
        </header>

        <main>
          <div className="absolute w-[158px] h-14 top-[311px] left-52">
            <MessageSquareIcon className="absolute w-[75px] h-[75px] top-[-3px] left-[-44px]" />
            <h1 className="absolute top-0 left-0 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[40px] text-center tracking-[0] leading-[56px] whitespace-nowrap">
              나의 리뷰
            </h1>
          </div>

          <div className="absolute top-[315px] left-[372px] [font-family:'ABeeZee',Helvetica] font-normal text-black text-[32px] text-center tracking-[0] leading-[44.8px] whitespace-nowrap">
            (3)
          </div>

          {reviewSections.map((section, index) => (
            <Card
              key={index}
              className={`absolute w-[364px] h-[62px] ${section.className} left-[117px] border-[0.4px] border-black rounded-[15px] shadow-none`}
            >
              <CardContent className="relative w-[362px] h-[62px] rounded-[15px] p-0">
                <div className="absolute top-[13px] left-[74px] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[25px] text-center tracking-[0] leading-[35px] whitespace-nowrap">
                  {section.title}
                </div>
              </CardContent>
            </Card>
          ))}

          {reviewItems.map((item, index) => (
            <div key={index}>
              <img
                className={`${item.topPosition} absolute w-[119px] h-[159px] left-[247px] object-cover`}
                alt="Image"
                src="https://c.animaapp.com/mfewlpnp6b6Q4Z/img/image-2.png"
              />

              <div
                className={`absolute ${item.topPosition === "top-[531px]" ? "top-[551px]" : "top-[852px]"} left-[428px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-7 whitespace-nowrap`}
              >
                {item.title}
              </div>

              <div
                className={`absolute ${item.topPosition === "top-[531px]" ? "top-[582px]" : "top-[883px]"} left-[428px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[23.8px]`}
              >
                {item.description.split("\n").map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    {lineIndex < item.description.split("\n").length - 1 && (
                      <br />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {item.price && (
                <div className="absolute top-[935px] left-[428px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[23px] text-center tracking-[0] leading-[32.2px] whitespace-nowrap">
                  {item.price}
                </div>
              )}

              <Button
                className={`absolute w-[107px] h-9 ${item.topPosition === "top-[531px]" ? "top-[589px]" : "top-[890px]"} left-[1081px] bg-[#828282] hover:bg-[#707070] h-auto`}
                onClick={() => {
                  if (item.buttonText === "리뷰작성") {
                    navigate('/review');
                  }
                }}
              >
                <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-white text-[15.4px] tracking-[0] leading-[21.6px]">
                  {item.buttonText}
                </span>
              </Button>

              <div
                className={`absolute ${item.idTopPosition} left-[429px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-xs tracking-[0] leading-[16.8px] whitespace-nowrap`}
              >
                {item.id}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};
