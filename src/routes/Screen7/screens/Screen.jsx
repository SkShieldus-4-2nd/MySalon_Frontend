import { MenuIcon, MicIcon, SearchIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

export const Screen = () => {
  const navigate = useNavigate();

  const topNavItems = [
    "로그인",
    "회원가입",
    "장바구니",
    "마이페이지",
    "커뮤니티",
  ];

  const mainNavItems = [
    { name: "상의", active: true },
    { name: "아우터", active: false },
    { name: "바지", active: false },
    { name: "원피스/스커트", active: false },
    { name: "ACC/BAG", active: false },
    { name: "홈웨어/속옷", active: false },
    { name: "키즈", active: false },
    { name: "문의", active: false },
  ];

  const categoryItems = ["상의", "팬츠", "남성", "여성", "키즈"];

  const products = [
    {
      id: 1,
      image:
        "https://c.animaapp.com/mfdr02ygUxSPCb/img/maneking-gwa-osgage-5.png",
      category: "MALE",
      name: "상품 이름 (판매자가 지정하는 이름)",
      price: "50,000원",
    },
    {
      id: 2,
      image:
        "https://c.animaapp.com/mfdr02ygUxSPCb/img/maneking-gwa-osgage-6.png",
      category: "MALE",
      name: "상품 이름 (판매자가 지정하는 이름)",
      price: "50,000원",
    },
    {
      id: 3,
      image:
        "https://c.animaapp.com/mfdr02ygUxSPCb/img/maneking-gwa-osgage-7.png",
      category: "MALE",
      name: "상품 이름 (판매자가 지정하는 이름)",
      price: "50,000원",
    },
    {
      id: 4,
      image:
        "https://c.animaapp.com/mfdr02ygUxSPCb/img/maneking-gwa-osgage-8.png",
      category: "MALE",
      name: "상품 이름 (판매자가 지정하는 이름)",
      price: "50,000원",
    },
  ];

  return (
    <div className="bg-[#e3e2e2] min-h-screen w-full">
      <div className="max-w-[1440px] mx-auto bg-[#e3e2e2] relative">
        {/* Header Section */}
        <header className="relative h-[370px]">
          <img
            className="w-full h-[271px] object-cover"
            alt="Rectangle"
            src="https://c.animaapp.com/mfdr02ygUxSPCb/img/rectangle-33.svg"
          />

          {/* Hamburger MenuIcon */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-[15px] left-[25px] w-[58px] h-[58px] bg-neutral-100 rounded-full hover:bg-neutral-200"
            onClick={() => navigate('/menu')}
          >
            <MenuIcon className="w-6 h-6" />
          </Button>

          {/* Top Navigation */}
          <nav className="absolute top-[33px] right-[80px]">
            <div className="flex items-center gap-4 [font-family:'Crimson_Text',Helvetica] font-normal text-black text-[15px]">
              {topNavItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-auto p-0 text-[15px] font-normal"
                  onClick={() => {
                    if (item === "로그인") {
                      navigate('/login');
                    } else if (item === "회원가입") {
                      navigate('/signup');
                    } else if (item === "마이페이지") {
                      navigate('/mypage');
                    } else if (item === "장바구니") {
                      navigate('/cart');
                    } else if (item === "커뮤니티") {
                      navigate('/community');
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
            </div>
          </nav>

          {/* Logo Section */}
          <div className="absolute top-[75px] left-1/2 transform -translate-x-1/2 text-center">
            <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[11.1px] mb-3">
              당신만을 위한 옷장
            </div>
            <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[29.9px] mb-3">
              MY SALON
            </div>
            <img
              className="w-[67px] h-[66px] mx-auto"
              alt="Main icon"
              src="https://c.animaapp.com/mfdr02ygUxSPCb/img/main-icon-1.png"
            />
          </div>

          {/* Main Navigation */}
          <nav className="absolute top-[215px] left-0 right-0">
            <div className="flex items-center justify-center gap-8">
              {mainNavItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`h-auto p-0 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[27.6px] tracking-[-0.08px] leading-[20.7px] ${
                    item.active ? "text-[#a40202]" : "text-black"
                  }`}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </nav>

          {/* SearchIcon Bar */}
          <div className="absolute top-[260px] left-1/2 transform -translate-x-1/2 w-[614px]">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#999999]" />
              <Input
                placeholder="Search"
                className="w-full h-[110px] pl-12 pr-12 bg-[#78788029] border-0 rounded-full text-[17px] [font-family:'SF_Pro-Regular',Helvetica] placeholder:text-[#999999]"
              />
              <MicIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#999999]" />
            </div>
          </div>
        </header>

        {/* Shop By My Salon Section */}
        <section className="mt-[11px] text-center">
          <h2 className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl tracking-[-0.08px] leading-[22px] mb-[77px]">
            SHOP BY MY SALON
          </h2>

          <div className="flex items-center justify-center gap-[73px] mb-[91px]">
            {categoryItems.map((category, index) => (
              <div key={index} className="text-center">
                <Button
                  variant="ghost"
                  className="w-[78px] h-[71px] bg-[#d9d9d9] rounded-full hover:bg-[#c9c9c9] mb-4"
                />
                <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl tracking-[-0.08px] leading-[22px]">
                  {category}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Products Section */}
        <section className="text-center mb-[103px]">
          <h2 className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl tracking-[-0.08px] leading-[22px] mb-[67px]">
            당신을 위한 추천상품
          </h2>

          <div className="flex justify-center gap-[91px] mb-[57px]">
            {products.map((product) => (
              <Card
                key={product.id}
                className="w-[232px] bg-transparent border-0 shadow-none"
              >
                <CardContent className="p-0">
                  <div className="relative mb-4">
                    <div className="w-[231px] h-[273px] bg-white absolute top-[38px] left-0" />
                    <img
                      className="w-[232px] h-[348px] relative z-10"
                      alt="Maneking gwa osgage"
                      src={product.image}
                    />
                  </div>

                  <div className="text-left">
                    <Badge
                      variant="secondary"
                      className="mb-2 text-[8px] [font-family:'Crimson_Text',Helvetica] font-normal text-[#828282] bg-transparent border-0 p-0"
                    >
                      {product.category}
                    </Badge>
                    <h3 className="[font-family:'Galdeano',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px] mb-2">
                      {product.name}
                    </h3>
                    <p className="[font-family:'DM_Serif_Text',Helvetica] font-normal text-[15px] tracking-[0] leading-[21px] text-black">
                      {product.price}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button className="w-[88px] h-7 bg-[url(https://c.animaapp.com/mfdr02ygUxSPCb/img/rectangle-28.svg)] bg-[100%_100%] border-0 hover:opacity-80">
            <span className="[font-family:'DM_Serif_Text',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[21px]">
              더보기
            </span>
          </Button>
        </section>

        {/* Footer */}
        <footer className="text-center pb-8">
          <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-[15px] text-center tracking-[0] leading-[21px]">
            My Salon
            <br />
            상호명: SK쉴더스 주식회사 | 대표이사: 5조 <br />
            사업자등록번호: 132-54-42425 [사업자정보확인] <br />
            통신판매업신고번호: 제2025-서울중구-1019호 <br />
            주소: 서울특별시 중구 세종대로0길 00, 00층 (가나다동, 가나다타워)
            <br />
            &nbsp;&nbsp;
            <br />
            고객센터: 1588-1234 <br />
            운영시간: 평일 09:00 - 18:00 (주말 및 공휴일 휴무) <br />
            이메일: mysalon@skshieldus.com&nbsp;&nbsp;
            <br />
            <br />
            [이용약관] [개인정보처리방침]&nbsp;&nbsp;
            <br />
            <br />
            Hosting by SK shieldus Inc. Copyright © SK shieldus Co., Ltd. All
            Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};
