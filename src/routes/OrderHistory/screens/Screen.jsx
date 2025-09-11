import { MenuIcon, SearchIcon, ShoppingBagIcon } from "lucide-react";
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

  const orderItems = [
    {
      id: "123456789",
      name: "여름블루 롱 원피스",
      description:
        "여름에 입기 좋은 롱 원피스.. 상품 설명 상품 설명 상품 설명\n상품 설명상품 설명상품 설명상품 설명상품 설명상품 설명",
      price: "50,000 원",
      image: "https://c.animaapp.com/mfesdo86fPZLzd/img/image-1-2.png",
      primaryButton: "리뷰작성",
      secondaryButton: "배송현황",
    },
    {
      id: "123456789",
      name: "여름블루 롱 원피스",
      description:
        "여름에 입기 좋은 롱 원피스.. 상품 설명 상품 설명 상품 설명\n상품 설명상품 설명상품 설명상품 설명상품 설명상품 설명",
      price: "50,000 원",
      image: "https://c.animaapp.com/mfesdo86fPZLzd/img/image-1-2.png",
      primaryButton: "상품페이지",
      secondaryButton: "배송현황",
    },
    {
      id: "123456789",
      name: "여름블루 롱 원피스",
      description:
        "여름에 입기 좋은 롱 원피스.. 상품 설명 상품 설명 상품 설명\n상품 설명상품 설명상품 설명상품 설명상품 설명상품 설명",
      price: "50,000 원",
      image: "https://c.animaapp.com/mfesdo86fPZLzd/img/image-1-2.png",
      primaryButton: "상품페이지",
      secondaryButton: "배송현황",
    },
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      <header className="bg-[#d9d9d9] h-[244px] w-full relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-[15px] left-[25px] w-[58px] h-[58px] bg-neutral-100 rounded-full hover:bg-neutral-200"
          onClick={() => navigate('/menu')}
        >
          <MenuIcon className="w-6 h-6" />
        </Button>

        <div className="absolute top-[55px] left-1/2 transform -translate-x-1/2 text-center">
          <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[9.5px] tracking-[0] leading-[13.3px] mb-3">
            당신만을 위한 옷장
          </div>
          <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[25.5px] tracking-[0] leading-[35.8px] mb-4">
            MY SALON
          </div>
          <img
            className="w-[66px] h-[66px] mx-auto"
            alt="Main icon"
            src="https://c.animaapp.com/mfesdo86fPZLzd/img/main-icon-1.png"
          />
        </div>

        <nav className="absolute top-[33px] right-[357px]">
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

        <div className="absolute top-[67px] right-[37px] w-[296px]">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#999999]" />
            <Input
              placeholder="Search"
              className="w-full h-16 pl-10 pr-12 bg-[#78788029] border-none rounded-full [font-family:'SF_Pro-Regular',Helvetica] text-[17px] text-[#999999] placeholder:text-[#999999] focus-visible:ring-0"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#999999] text-[17px]">
              􀊱
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <ShoppingBagIcon className="w-[84px] h-[84px]" />
          <h1 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[56px]">
            주문내역
          </h1>
          <span className="[font-family:'ABeeZee',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[44.8px]">
            (3)
          </span>
        </div>

        <div className="space-y-6">
          {orderItems.map((item, index) => (
            <Card key={index} className="w-full border-none shadow-none">
              <CardContent className="p-0">
                <div className="flex gap-6">
                  <img
                    className="w-[119px] h-[159px] object-cover flex-shrink-0"
                    alt="Product image"
                    src={item.image}
                  />

                  <div className="flex-1 py-2">
                    <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-xs tracking-[0] leading-[16.8px] mb-2">
                      {item.id}
                    </div>

                    <h3 className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-7 mb-3">
                      {item.name}
                    </h3>

                    <p className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[17px] leading-[23.8px] mb-4 whitespace-pre-line">
                      {item.description}
                    </p>

                    <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[23px] tracking-[0] leading-[32.2px]">
                      {item.price}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 py-8">
                    <Button
                      variant="outline"
                      className="w-[105px] h-9 border-[0.91px] border-black bg-transparent hover:bg-gray-50 [font-family:'SF_Pro-Regular',Helvetica] text-black text-[15.4px] leading-[21.6px]"
                      onClick={() => {
                        if (item.primaryButton === "리뷰작성") {
                          navigate('/review');
                        }
                      }}
                    >
                      {item.primaryButton}
                    </Button>

                    <Button className="w-[105px] h-9 bg-[#828282] hover:bg-[#707070] [font-family:'SF_Pro-Regular',Helvetica] text-white text-[15.4px] leading-[21.6px]">
                      {item.secondaryButton}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};
