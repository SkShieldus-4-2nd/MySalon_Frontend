import { MicIcon, SearchIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

export const Screen = () => {
  const navigate = useNavigate();
  const navigationItems = [
    "로그인",
    "회원가입",
    "장바구니",
    "마이페이지",
    "커뮤니티",
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
        "https://c.animaapp.com/mfenltbwLLE3QT/img/maneking-gwa-osgage-1.png",
      name: "상품 이름 (판매자가 지정하는 이름)",
      category: "MALE",
      price: "50,000원",
    },
    {
      image:
        "https://c.animaapp.com/mfenltbwLLE3QT/img/maneking-gwa-osgage-2.png",
      name: "상품 이름 (판매자가 지정하는 이름)",
      category: "MALE",
      price: "50,000원",
    },
    {
      image:
        "https://c.animaapp.com/mfenltbwLLE3QT/img/maneking-gwa-osgage-3.png",
      name: "상품 이름 (판매자가 지정하는 이름)",
      category: "MALE",
      price: "50,000원",
    },
    {
      image:
        "https://c.animaapp.com/mfenltbwLLE3QT/img/maneking-gwa-osgage-4.png",
      name: "상품 이름 (판매자가 지정하는 이름)",
      category: "MALE",
      price: "50,000원",
    },
  ];

  return (
    <div className="bg-[#e3e2e2] min-h-screen w-full flex flex-col items-center">
      <div className="bg-[#e3e2e2] w-full max-w-[1440px] relative">
        <header className="flex justify-between items-center px-6 py-4">
          <img
            className="w-[58px] h-[58px]"
            alt="Group"
            src="https://c.animaapp.com/mfenltbwLLE3QT/img/group-15.png"
          />

          <nav>
            <div className="flex gap-4 [font-family:'Crimson_Text',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px]">
              {navigationItems.map((item, index) => (
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
        </header>

        <main className="flex flex-col items-center px-6">
          <section className="text-center mb-12 mt-8">
            <div className="[font-family:'SF_Pro-Regular',Helvetica] text-black text-[13px] text-center tracking-[0] leading-[18.2px] font-normal mb-2">
              당신만을 위한 옷장
            </div>
            <h1 className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[35px] text-center tracking-[0] leading-[49px] mb-4">
              MY SALON
            </h1>
            <img
              className="w-[78px] h-[77px] mx-auto"
              alt="Main icon"
              src="https://c.animaapp.com/mfenltbwLLE3QT/img/main-icon-1.png"
            />
          </section>

          <section className="w-full max-w-[614px] mb-12">
            <div className="relative">
              <div className="flex items-center p-[11px] bg-[#78788029] rounded-[100px]">
                <div className="flex items-center gap-2 flex-1">
                  <SearchIcon className="w-4 h-4 text-[#999999]" />
                  <Input
                    placeholder="Search"
                    className="border-0 bg-transparent text-[#999999] text-[17px] tracking-[-0.08px] leading-[22px] [font-family:'SF_Pro-Regular',Helvetica] placeholder:text-[#999999] focus-visible:ring-0"
                  />
                </div>
                <MicIcon className="w-4 h-4 text-[#999999]" />
              </div>
            </div>
          </section>

          <section className="w-full mb-12">
            <h2 className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl tracking-[-0.08px] leading-[22px] text-center mb-8">
              SHOP BY MY SALON
            </h2>

            <div className="flex justify-center items-center gap-[73px] mb-8">
              {categoryItems.map((category, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-[78px] h-[71px] bg-[#d9d9d9] rounded-[39px/35.5px] p-0 hover:bg-[#c9c9c9]"
                />
              ))}
            </div>

            <div className="flex justify-center gap-[73px]">
              {categoryItems.map((category, index) => (
                <div
                  key={index}
                  className="[font-family:'SF_Pro-Regular',Helvetica] text-black text-xl tracking-[-0.08px] leading-[22px] font-normal text-center w-[78px]"
                >
                  {category.name}
                </div>
              ))}
            </div>
          </section>

          <section className="w-full mb-12">
            <h2 className="[font-family:'SF_Pro-Regular',Helvetica] text-black text-xl tracking-[-0.08px] leading-[22px] font-normal text-center mb-8">
              당신을 위한 추천상품
            </h2>

            <div className="grid grid-cols-4 gap-8 mb-8">
              {productItems.map((product, index) => (
                <Card key={index} className="bg-white border-0 shadow-none">
                  <CardContent className="p-0">
                    <div className="relative w-[232px] h-[348px] mb-4">
                      <div className="absolute w-[231px] h-[273px] top-[38px] left-0 bg-white" />
                      <img
                        className="absolute w-[232px] h-[348px] top-0 left-0"
                        alt="Maneking gwa osgage"
                        src={product.image}
                      />
                    </div>

                    <div className="w-[220px] h-[50px]">
                      <div className="w-[214px] h-[29px] mb-1">
                        <div className="[font-family:'Crimson_Text',Helvetica] font-normal text-[#828282] text-[8px] tracking-[0] leading-[11.2px] mb-1">
                          {product.category}
                        </div>
                        <div className="[font-family:'Galdeano',Helvetica] text-black text-[15px] tracking-[0] leading-[21px] font-normal">
                          {product.name}
                        </div>
                      </div>
                      <div className="[font-family:'DM_Serif_Text',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px]">
                        {product.price}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button
                className="w-[88px] h-7 bg-[url(https://c.animaapp.com/mfenltbwLLE3QT/img/rectangle-23.svg)] bg-[100%_100%] border-0 hover:opacity-80 h-auto"
                variant="ghost"
              >
                <span className="[font-family:'DM_Serif_Text',Helvetica] text-white text-[15px] tracking-[0] leading-[21px] font-normal">
                  더보기
                </span>
              </Button>
            </div>
          </section>
        </main>

        <footer className="text-center px-6 py-12">
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
