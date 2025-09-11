import { MenuIcon, MicIcon, SearchIcon } from "lucide-react";
import React, { useState } from "react";
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
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "../components/ui/navigation-menu";

export const Screen = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const topNavItems = [
    "로그인",
    "회원가입",
    "장바구니",
    "마이페이지",
    "커뮤니티",
  ];

  const mainNavItems = [
    { 
      name: "상의", 
      active: true,
      subItems: ["티셔츠", "셔츠", "니트", "후드티", "맨투맨"]
    },
    { 
      name: "아우터", 
      active: false,
      subItems: ["자켓", "코트", "패딩", "가디건", "블레이저"]
    },
    { 
      name: "바지", 
      active: false,
      subItems: ["청바지", "슬랙스", "조거팬츠", "반바지", "레깅스"]
    },
    { 
      name: "원피스/스커트", 
      active: false,
      subItems: ["원피스", "미니스커트", "롱스커트", "플리츠스커트"]
    },
    { 
      name: "ACC/BAG", 
      active: false,
      subItems: ["가방", "지갑", "벨트", "모자", "액세서리"]
    },
    { 
      name: "홈웨어/속옷", 
      active: false,
      subItems: ["파자마", "속옷", "양말", "홈웨어"]
    },
    { 
      name: "키즈", 
      active: false,
      subItems: ["아동복", "유아복", "신발", "액세서리"]
    },
    { 
      name: "문의", 
      active: false,
      subItems: ["고객센터", "FAQ", "1:1문의", "교환/반품"]
    },
  ];

  const categoryItems = [
    { name: "상의" },
    { name: "팬츠" },
    { name: "남성" },
    { name: "여성" },
    { name: "키즈" },
  ];

  const productItems = [
    {
      image:
        "https://c.animaapp.com/mfen0m06YlmqEB/img/maneking-gwa-osgage-5.png",
      name: "상품 이름 (판매자가 지정하는 이름)",
      category: "MALE",
      price: "50,000원",
    },
    {
      image:
        "https://c.animaapp.com/mfen0m06YlmqEB/img/maneking-gwa-osgage-6.png",
      name: "상품 이름 (판매자가 지정하는 이름)",
      category: "MALE",
      price: "50,000원",
    },
    {
      image:
        "https://c.animaapp.com/mfen0m06YlmqEB/img/maneking-gwa-osgage-7.png",
      name: "상품 이름 (판매자가 지정하는 이름)",
      category: "MALE",
      price: "50,000원",
    },
    {
      image:
        "https://c.animaapp.com/mfen0m06YlmqEB/img/maneking-gwa-osgage-8.png",
      name: "상품 이름 (판매자가 지정하는 이름)",
      category: "MALE",
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
            src="https://c.animaapp.com/mfen0m06YlmqEB/img/rectangle-33.svg"
          />

          {/* Top Navigation */}
          <nav className="absolute top-[33px] right-[80px]">
            <div className="flex gap-4 [font-family:'Crimson_Text',Helvetica] font-normal text-black text-[15px]">
              {topNavItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-auto p-0 text-[15px] font-normal"
                >
                  {item}
                </Button>
              ))}
            </div>
          </nav>

          {/* Hamburger MenuIcon */}
          <Button
            variant="ghost"
            className="absolute top-[15px] left-[25px] w-[58px] h-[58px] bg-neutral-100 rounded-full p-0"
            onClick={() => navigate('/menu')}
          >
            <MenuIcon className="w-6 h-6" />
          </Button>

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
              src="https://c.animaapp.com/mfen0m06YlmqEB/img/main-icon-1.png"
            />
          </div>

          {/* Main Navigation with Dropdown */}
          <NavigationMenu className="absolute top-[215px] left-[292px]">
            <NavigationMenuList className="flex gap-8">
              {mainNavItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger
                    className={`[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[27.6px] tracking-[-0.08px] leading-[20.7px] ${
                      item.active ? "text-[#a40202]" : "text-black"
                    } hover:text-[#a40202] transition-colors bg-transparent hover:bg-transparent data-[state=open]:bg-transparent`}
                  >
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] p-4 bg-white rounded-lg shadow-lg border">
                      <div className="grid gap-2">
                        {item.subItems?.map((subItem, subIndex) => (
                          <NavigationMenuLink
                            key={subIndex}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
                          >
                            {subItem}
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* SearchIcon Bar */}
          <div className="absolute top-[260px] left-1/2 transform -translate-x-1/2 w-[614px]">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#999999]" />
              <Input
                placeholder="Search"
                className="w-full h-[110px] pl-12 pr-12 bg-[#78788029] border-0 rounded-full text-[17px] placeholder:text-[#999999]"
              />
              <MicIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#999999]" />
            </div>
          </div>
        </header>

        {/* Shop By My Salon Section */}
        <section className="mt-8 text-center">
          <h2 className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl tracking-[-0.08px] leading-[22px] mb-8">
            SHOP BY MY SALON
          </h2>

          <div className="flex justify-center gap-[73px] mb-8">
            {categoryItems.map((_, index) => (
              <div
                key={index}
                className="w-[78px] h-[71px] bg-[#d9d9d9] rounded-full"
              />
            ))}
          </div>

          <div className="flex justify-center gap-[73px]">
            {categoryItems.map((category, index) => (
              <div
                key={index}
                className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl tracking-[-0.08px] leading-[22px]"
              >
                {category.name}
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Products Section */}
        <section className="mt-16">
          <h2 className="text-center [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl tracking-[-0.08px] leading-[22px] mb-8">
            당신을 위한 추천상품
          </h2>

          <div className="grid grid-cols-4 gap-8 px-[134px]">
            {productItems.map((product, index) => (
              <Card key={index} className="bg-white border-0 shadow-none">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="w-full h-[273px] bg-white mb-4" />
                    <img
                      className="absolute top-0 left-0 w-full h-[348px] object-cover"
                      alt="Maneking gwa osgage"
                      src={product.image}
                    />
                  </div>

                  <div className="mt-4">
                    <Badge
                      variant="secondary"
                      className="text-[8px] text-[#828282] mb-2 bg-transparent border-0 p-0"
                    >
                      {product.category}
                    </Badge>
                    <h3 className="[font-family:'Galdeano',Helvetica] font-normal text-black text-[15px] mb-2">
                      {product.name}
                    </h3>
                    <p className="[font-family:'DM_Serif_Text',Helvetica] font-normal text-black text-[15px]">
                      {product.price}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="w-[88px] h-7 bg-[url(https://c.animaapp.com/mfen0m06YlmqEB/img/rectangle-28.svg)] bg-cover border-0 text-white [font-family:'DM_Serif_Text',Helvetica] font-normal text-[15px] h-auto">
              더보기
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center px-8">
          <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-[15px] leading-[21px]">
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
