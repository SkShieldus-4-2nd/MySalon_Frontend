import { MenuIcon, MicIcon, SearchIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

export const CategoryPage = () => {
  const navigate = useNavigate();

  const navigationItems = [
    { name: "상의", color: "text-[#a40202]", position: "left-[292px]" },
    { name: "아우터", color: "text-black", position: "left-[369px]" },
    { name: "바지", color: "text-black", position: "left-[471px]" },
    { name: "원피스/스커트", color: "text-black", position: "left-[548px]" },
    { name: "ACC/BAG", color: "text-black", position: "left-[735px]" },
    { name: "홈웨어/속옷", color: "text-black", position: "left-[883px]" },
    { name: "키즈", color: "text-black", position: "left-[1044px]" },
    { name: "문의", color: "text-black", position: "left-[1121px]" },
  ];

  const categoryItems = [
    { name: "상의", position: "left-[395px]" },
    { name: "팬츠", position: "left-[546px]" },
    { name: "남성", position: "left-[697px]" },
    { name: "여성", position: "left-[848px]" },
    { name: "키즈", position: "left-[999px]" },
  ];

  const products = [
    {
      image:
        "https://c.animaapp.com/mfdrbhqvPJgg8h/img/maneking-gwa-osgage-5.png",
      position: "left-[134px]",
    },
    {
      image:
        "https://c.animaapp.com/mfdrbhqvPJgg8h/img/maneking-gwa-osgage-6.png",
      position: "left-[457px]",
    },
    {
      image:
        "https://c.animaapp.com/mfdrbhqvPJgg8h/img/maneking-gwa-osgage-7.png",
      position: "left-[780px]",
    },
    {
      image:
        "https://c.animaapp.com/mfdrbhqvPJgg8h/img/maneking-gwa-osgage-8.png",
      position: "left-[1103px]",
    },
  ];

  return (
    <div className="bg-[#e3e2e2] grid justify-items-center [align-items:start] w-screen">
      <div className="bg-[#e3e2e2] w-[1440px] h-[1553px] relative">
        <header className="absolute w-[1440px] h-[370px] top-0 left-0">
          <img
            className="w-[1440px] h-[271px] top-0 absolute left-0"
            alt="Rectangle"
            src="https://c.animaapp.com/mfdrbhqvPJgg8h/img/rectangle-33.svg"
          />

          <nav className="absolute top-[33px] right-[80px]">
            <div className="flex gap-4 [font-family:'Crimson_Text',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px]">
              <Button variant="ghost" className="h-auto p-0 text-[15px] font-normal" onClick={() => navigate('/login')}>로그인</Button>
              <Button variant="ghost" className="h-auto p-0 text-[15px] font-normal" onClick={() => navigate('/signup')}>회원가입</Button>
              <Button variant="ghost" className="h-auto p-0 text-[15px] font-normal" onClick={() => navigate('/cart')}>장바구니</Button>
              <Button variant="ghost" className="h-auto p-0 text-[15px] font-normal" onClick={() => navigate('/mypage')}>마이페이지</Button>
              <Button variant="ghost" className="h-auto p-0 text-[15px] font-normal" onClick={() => navigate('/community')}>커뮤니티</Button>
            </div>
          </nav>

          <div className="absolute w-[148px] h-[117px] top-[75px] left-[629px]">
            <div className="relative w-36 h-[117px]">
              <div className="absolute top-3 left-0 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[29.9px] text-center tracking-[0] leading-[41.8px] whitespace-nowrap">
                MY SALON
              </div>

              <div className="absolute top-0 left-7 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[11.1px] text-center tracking-[0] leading-[15.5px] whitespace-nowrap">
                당신만을 위한 옷장
              </div>

              <img
                className="absolute w-[67px] h-[66px] top-[51px] left-[38px]"
                alt="Main icon"
                src="https://c.animaapp.com/mfdrbhqvPJgg8h/img/main-icon-1.png"
              />
            </div>
          </div>

          <Button
            variant="ghost"
            className="absolute w-[58px] h-[58px] top-[15px] left-[25px] bg-neutral-100 rounded-[29px/29.18px] p-0"
            onClick={() => navigate('/menu')}
          >
            <MenuIcon className="w-6 h-6" />
          </Button>

          <div className="absolute w-[614px] h-[110px] top-[260px] left-[408px]">
            <div className="flex w-[614px] h-[110px] items-center relative rounded-[100px]">
              <div className="flex items-center p-[11px] relative flex-1 grow bg-[#78788029] rounded-[100px]">
                <div className="flex items-center gap-2 relative flex-1 grow">
                  <SearchIcon className="w-4 h-4 text-[#999999]" />
                  <Input
                    placeholder="Search"
                    className="border-0 bg-transparent text-[#999999] text-[17px] tracking-[-0.08px] leading-[22px] placeholder:text-[#999999]"
                  />
                </div>
                <MicIcon className="w-4 h-4 text-[#999999]" />
              </div>
            </div>
          </div>

          <nav className="absolute top-[214px] left-[292px]">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className={`absolute top-[3px] ${item.position} [font-family:'SF_Pro-Bold',Helvetica] font-bold ${item.color} text-[27.6px] tracking-[-0.08px] leading-[20.7px] whitespace-nowrap cursor-pointer hover:opacity-80`}
              >
                {item.name}
              </div>
            ))}
          </nav>
        </header>

        <main>
          <section className="absolute top-[381px] left-[610px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl tracking-[-0.08px] leading-[22px] whitespace-nowrap">
            SHOP BY MY SALON
          </section>

          <div className="inline-flex items-center gap-[73px] absolute top-[458px] left-[374px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="relative w-[78px] h-[71px] bg-[#d9d9d9] rounded-[39px/35.5px] cursor-pointer hover:opacity-80"
              />
            ))}
          </div>

          <div className="absolute top-[549px] left-[374px]">
            {categoryItems.map((item, index) => (
              <div
                key={index}
                className={`absolute top-0 ${item.position} [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl tracking-[-0.08px] leading-[22px] whitespace-nowrap cursor-pointer hover:opacity-80`}
              >
                {item.name}
              </div>
            ))}
          </div>

          <section className="absolute top-[631px] left-[627px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl tracking-[-0.08px] leading-[22px] whitespace-nowrap">
            당신을 위한 추천상품
          </section>

          <div className="absolute top-[698px] left-[134px] grid grid-cols-4 gap-[91px]">
            {products.map((product, index) => (
              <Card
                key={index}
                className="w-[232px] h-[348px] bg-transparent border-0 cursor-pointer hover:opacity-80"
              >
                <CardContent className="p-0 relative">
                  <div className="w-[231px] h-[273px] top-[38px] bg-white absolute left-0" />
                  <img
                    className="absolute w-[232px] h-[348px] top-0 left-0"
                    alt="Maneking gwa osgage"
                    src={product.image}
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="absolute top-[1052px] left-[134px] grid grid-cols-4 gap-[91px]">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="w-[220px] h-[50px]">
                <div className="absolute w-[214px] h-[29px] top-0 left-0">
                  <div className="absolute top-2 left-0 [font-family:'Galdeano',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px] whitespace-nowrap">
                    상품 이름 (판매자가 지정하는 이름)
                  </div>
                  <Badge
                    variant="secondary"
                    className="absolute top-0 left-[3px] [font-family:'Crimson_Text',Helvetica] font-normal text-[#828282] text-[8px] tracking-[0] leading-[11.2px] bg-transparent border-0 p-0 h-auto"
                  >
                    MALE
                  </Badge>
                </div>
                <div className="top-[29px] left-px [font-family:'DM_Serif_Text',Helvetica] font-normal text-[15px] tracking-[0] leading-[21px] absolute text-black whitespace-nowrap">
                  50,000원
                </div>
              </div>
            ))}
          </div>

          <Button className="absolute w-[88px] h-7 top-[1155px] left-[689px] bg-[url(https://c.animaapp.com/mfdrbhqvPJgg8h/img/rectangle-28.svg)] bg-[100%_100%] border-0 h-auto">
            <div className="absolute top-[3px] left-[23px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[21px] whitespace-nowrap">
              더보기
            </div>
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
