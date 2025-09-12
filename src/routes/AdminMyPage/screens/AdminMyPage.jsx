import { MenuIcon, SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

export const AdminMyPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("product-list");

  const navigationItems = [
    { id: "product-list", label: "상품 목록", active: true },
    { id: "product-register", label: "상품 등록", active: false },
    { id: "sales-list", label: "판매 목록", active: false },
    { id: "order-shipping", label: "주문/발송", active: false },
    { id: "sales", label: "매출", active: false },
  ];

  const products = [
    {
      id: "123456789",
      name: "여름블루 롱 원피스",
      description:
        "여름에 입기 좋은 롱 원피스.. 상품 설명 상품 설명 상품 설명\n상품 설명상품 설명상품 설명상품 설명상품 설명상품 설명",
      price: "50,000 원",
      image: "https://c.animaapp.com/mfey8x558kisvz/img/image-1-2.png",
    },
    {
      id: "123456789",
      name: "여름블루 롱 원피스",
      description:
        "여름에 입기 좋은 롱 원피스.. 상품 설명 상품 설명 상품 설명\n상품 설명상품 설명상품 설명상품 설명상품 설명상품 설명",
      price: "50,000 원",
      image: "https://c.animaapp.com/mfey8x558kisvz/img/image-1-2.png",
    },
    {
      id: "123456789",
      name: "여름블루 롱 원피스",
      description:
        "여름에 입기 좋은 롱 원피스.. 상품 설명 상품 설명 상품 설명\n상품 설명상품 설명상품 설명상품 설명상품 설명상품 설명",
      price: "50,000 원",
      image: "https://c.animaapp.com/mfey8x558kisvz/img/image-1-2.png",
    },
  ];

  const topNavItems = [
    { name: "로그인", onClick: () => navigate('/login') },
    { name: "회원가입", onClick: () => navigate('/signup') },
    { name: "장바구니", onClick: () => navigate('/cart') },
    { name: "마이페이지", onClick: () => navigate('/admin-mypage') },
    { name: "커뮤니티", onClick: () => navigate('/') },
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="max-w-[1440px] mx-auto bg-white">
        <header className="bg-[#d9d9d9] h-[244px] relative">
          <div className="absolute top-[33px] right-[133px]">
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
          </div>

          <div className="absolute top-[75px] left-1/2 transform -translate-x-1/2 w-[148px] h-[117px]">
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
                src="https://c.animaapp.com/mfey8x558kisvz/img/main-icon-1.png"
              />
            </div>
          </div>

          <Button
            variant="ghost"
            className="absolute top-[15px] left-[25px] w-[58px] h-[58px] bg-neutral-100 rounded-[29px] p-0 hover:bg-neutral-200"
            onClick={() => navigate('/menu')}
          >
            <MenuIcon className="w-6 h-6" />
          </Button>

          <div className="absolute top-[61px] right-[37px] w-[296px] h-16">
            <div className="flex w-full h-16 items-center relative">
              <div className="flex items-center p-[11px] w-full bg-[#78788029] rounded-[100px]">
                <div className="flex items-center gap-2 flex-1">
                  <SearchIcon className="w-4 h-4 text-[#999999]" />
                  <Input
                    placeholder="Search"
                    className="border-0 bg-transparent text-[#999999] text-[17px] tracking-[-0.08px] leading-[22px] placeholder:text-[#999999] focus-visible:ring-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        <nav className="mt-[42px] mb-[118px]">
          <div className="flex justify-center gap-[190px]">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => setActiveTab(item.id)}
                className={`h-auto p-0 text-2xl tracking-[-0.08px] leading-[20.7px] transition-all ${
                  activeTab === item.id
                    ? "[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#a40303]"
                    : "[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black hover:text-[#a40303]"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </nav>

        <main className="px-[226px]">
          {activeTab === "product-list" && (
            <>
              <h1 className="mb-[78px] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[27px] tracking-[0] leading-[37.8px]">
                상품 목록
              </h1>

              <div className="space-y-[41px]">
                {products.map((product, index) => (
                  <Card key={index} className="border-0 shadow-none">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-[62px]">
                        <img
                          className="w-[119px] h-[159px] object-cover flex-shrink-0"
                          alt="Product image"
                          src={product.image}
                        />

                        <div className="flex-1">
                          <div className="mb-[7px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-xs tracking-[0] leading-[16.8px]">
                            {product.id}
                          </div>

                          <h3 className="mb-[10px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-7">
                            {product.name}
                          </h3>

                          <p className="mb-[21px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[23.8px] whitespace-pre-line">
                            {product.description}
                          </p>

                          <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[23px] text-center tracking-[0] leading-[32.2px]">
                            {product.price}
                          </div>
                        </div>

                        <div className="flex flex-col gap-[16px] mt-[35px]">
                          <Button
                            variant="outline"
                            className="w-[105px] h-9 border-[0.91px] border-black bg-transparent hover:bg-gray-50 rounded-none"
                          >
                            <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[15.4px] tracking-[0] leading-[21.6px]">
                              상품페이지
                            </span>
                          </Button>

                          <Button className="w-[105px] h-9 bg-[#828282] hover:bg-[#707070] rounded-none">
                            <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-white text-[15.4px] tracking-[0] leading-[21.6px]">
                              삭제
                            </span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}

          {activeTab === "product-register" && (
            <div className="text-center py-16">
              <h1 className="mb-8 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[27px] tracking-[0] leading-[37.8px]">
                상품 등록
              </h1>
              <p className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-lg">
                상품 등록 페이지입니다.
              </p>
            </div>
          )}

          {activeTab === "sales-list" && (
            <div className="text-center py-16">
              <h1 className="mb-8 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[27px] tracking-[0] leading-[37.8px]">
                판매 목록
              </h1>
              <p className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-lg">
                판매 목록 페이지입니다.
              </p>
            </div>
          )}

          {activeTab === "order-shipping" && (
            <div className="text-center py-16">
              <h1 className="mb-8 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[27px] tracking-[0] leading-[37.8px]">
                주문/발송
              </h1>
              <p className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-lg">
                주문/발송 관리 페이지입니다.
              </p>
            </div>
          )}

          {activeTab === "sales" && (
            <div className="text-center py-16">
              <h1 className="mb-8 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[27px] tracking-[0] leading-[37.8px]">
                매출
              </h1>
              <p className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-lg">
                매출 현황 페이지입니다.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
