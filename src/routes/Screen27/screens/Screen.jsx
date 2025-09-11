import { MenuIcon, MicIcon, SearchIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu";

export const Screen = () => {
  const navigate = useNavigate();

  const topNavItems = [
    "로그인",
    "회원가입",
    "장바구니",
    "마이페이지",
    "커뮤니티",
  ];

  const categoryItems = [
    { name: "상의", color: "text-[#a40202]" },
    { name: "아우터", color: "text-black" },
    { name: "바지", color: "text-black" },
    { name: "원피스/스커트", color: "text-black" },
    { name: "ACC/BAG", color: "text-black" },
    { name: "홈웨어/속옷", color: "text-black" },
    { name: "키즈", color: "text-black" },
    { name: "문의", color: "text-black" },
  ];

  const shopCategories = [
    { name: "상의", left: "left-[395px]" },
    { name: "팬츠", left: "left-[546px]" },
    { name: "남성", left: "left-[697px]" },
    { name: "여성", left: "left-[848px]" },
    { name: "키즈", left: "left-[999px]" },
  ];

  const products = [
    {
      image:
        "https://c.animaapp.com/mfenart4d5qc6K/img/maneking-gwa-osgage-5.png",
      left: "left-[134px]",
    },
    {
      image:
        "https://c.animaapp.com/mfenart4d5qc6K/img/maneking-gwa-osgage-6.png",
      left: "left-[457px]",
    },
    {
      image:
        "https://c.animaapp.com/mfenart4d5qc6K/img/maneking-gwa-osgage-7.png",
      left: "left-[780px]",
    },
    {
      image:
        "https://c.animaapp.com/mfenart4d5qc6K/img/maneking-gwa-osgage-8.png",
      left: "left-[1103px]",
    },
  ];

  return (
    <div className="bg-[#e3e2e2] grid justify-items-center [align-items:start] w-screen">
      <div className="bg-[#e3e2e2] w-[1440px] h-[1553px] relative">
        <header className="absolute w-[1440px] h-[370px] top-0 left-0">
          <img
            className="w-[1440px] h-[271px] top-0 absolute left-0"
            alt="Rectangle"
            src="https://c.animaapp.com/mfenart4d5qc6K/img/rectangle-33.svg"
          />

          <Button
            variant="ghost"
            className="absolute w-[58px] h-[58px] top-[15px] left-[25px] bg-neutral-100 rounded-[29px/29.18px] p-0 h-auto"
            onClick={() => navigate('/menu')}
          >
            <MenuIcon className="w-6 h-6" />
          </Button>

          <nav className="absolute top-[33px] left-[1080px] [font-family:'Crimson_Text',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px] whitespace-nowrap">
            <div className="flex gap-4">
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
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
            </div>
          </nav>

          <div className="absolute w-[148px] h-[117px] top-[75px] left-[629px]">
            <div className="relative w-36 h-[117px]">
              <div className="absolute top-0 left-7 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[11.1px] text-center tracking-[0] leading-[15.5px] whitespace-nowrap">
                당신만을 위한 옷장
              </div>
              <div className="absolute top-3 left-0 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[29.9px] text-center tracking-[0] leading-[41.8px] whitespace-nowrap">
                MY SALON
              </div>
              <img
                className="absolute w-[67px] h-[66px] top-[51px] left-[38px]"
                alt="Main icon"
                src="https://c.animaapp.com/mfenart4d5qc6K/img/main-icon-1.png"
              />
            </div>
          </div>

          <NavigationMenu className="absolute top-[215px] left-[292px]">
            <NavigationMenuList className="flex gap-[20px]">
              {categoryItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className={`[font-family:'SF_Pro-Bold',Helvetica] font-bold ${item.color} text-[27.6px] tracking-[-0.08px] leading-[20.7px] whitespace-nowrap hover:text-[#a40202] transition-colors cursor-pointer`}
                    onClick={() => navigate('/dropdown-nav')}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="absolute w-[614px] h-[110px] top-[260px] left-[408px]">
            <div className="flex w-[614px] h-[110px] items-center relative rounded-[100px]">
              <div className="flex items-center p-[11px] relative flex-1 grow bg-[#78788029] rounded-[100px]">
                <div className="flex items-center gap-2 relative flex-1 grow">
                  <SearchIcon className="w-4 h-4 text-[#999999]" />
                  <Input
                    placeholder="Search"
                    className="border-0 bg-transparent text-[#999999] text-[17px] [font-family:'SF_Pro-Regular',Helvetica] placeholder:text-[#999999] focus-visible:ring-0"
                  />
                </div>
                <MicIcon className="w-4 h-4 text-[#999999]" />
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className="absolute top-[381px] left-[610px]">
            <h2 className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl tracking-[-0.08px] leading-[22px] whitespace-nowrap">
              SHOP BY MY SALON
            </h2>
          </section>

          <div className="inline-flex items-center gap-[73px] absolute top-[458px] left-[374px]">
            {[...Array(5)].map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                className="relative w-[78px] h-[71px] bg-[#d9d9d9] rounded-[39px/35.5px] p-0 h-auto hover:bg-[#c9c9c9] transition-colors"
              />
            ))}
          </div>

          {shopCategories.map((category, index) => (
            <div
              key={index}
              className={`absolute top-[549px] ${category.left} [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl tracking-[-0.08px] leading-[22px] whitespace-nowrap`}
            >
              {category.name}
            </div>
          ))}

          <section className="absolute top-[631px] left-[627px]">
            <h2 className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl tracking-[-0.08px] leading-[22px] whitespace-nowrap">
              당신을 위한 추천상품
            </h2>
          </section>

          {products.map((product, index) => (
            <Card
              key={index}
              className={`absolute w-[232px] h-[348px] top-[698px] ${product.left} border-0 shadow-none bg-transparent`}
            >
              <CardContent className="p-0">
                <div className="w-[231px] h-[273px] top-[38px] bg-white absolute left-0" />
                <img
                  className="absolute w-[232px] h-[348px] top-0 left-0"
                  alt="Maneking gwa osgage"
                  src={product.image}
                />
              </CardContent>
            </Card>
          ))}

          {products.map((_, index) => (
            <div
              key={index}
              className={`absolute w-[220px] h-[50px] top-[1052px] ${products[index].left}`}
            >
              <div className="absolute w-[214px] h-[29px] top-0 left-0">
                <Badge
                  variant="secondary"
                  className="absolute top-0 left-[3px] [font-family:'Crimson_Text',Helvetica] font-normal text-[#828282] text-[8px] tracking-[0] leading-[11.2px] bg-transparent border-0 p-0 h-auto"
                >
                  MALE
                </Badge>
                <div className="absolute top-2 left-0 [font-family:'Galdeano',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px] whitespace-nowrap">
                  상품 이름 (판매자가 지정하는 이름)
                </div>
              </div>
              <div className="top-[29px] left-px [font-family:'DM_Serif_Text',Helvetica] font-normal text-[15px] tracking-[0] leading-[21px] absolute text-black whitespace-nowrap">
                50,000원
              </div>
            </div>
          ))}

          <Button className="absolute w-[88px] h-7 top-[1155px] left-[689px] bg-[url(https://c.animaapp.com/mfenart4d5qc6K/img/rectangle-28.svg)] bg-[100%_100%] border-0 h-auto">
            <span className="[font-family:'DM_Serif_Text',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[21px]">
              더보기
            </span>
          </Button>
        </main>

        <footer className="absolute top-[1239px] left-[447px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-[15px] text-center tracking-[0] leading-[21px]">
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
        </footer>
      </div>
    </div>
  );
};
