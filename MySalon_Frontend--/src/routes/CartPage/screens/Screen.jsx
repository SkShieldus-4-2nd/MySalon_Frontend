import {
  ChevronDownIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  Trash2Icon,
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";

export const Screen = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "https://c.animaapp.com/mfetjhbp9LgKUV/img/image-2-1.png",
      name: "여름 블루 롱 원피스",
      color: "블루",
      size: "M",
      quantity: 1,
      price: 50000,
    },
    {
      id: 2,
      image: "https://c.animaapp.com/mfetjhbp9LgKUV/img/image-2-1.png",
      name: "여름 블루 롱 원피스",
      color: "블루",
      size: "M",
      quantity: 1,
      price: 50000,
    },
  ]);

  const navigationItems = [
    { name: "로그인", onClick: () => navigate('/login') },
    { name: "회원가입", onClick: () => navigate('/signup') },
    { name: "장바구니", onClick: () => navigate('/cart') },
    { name: "마이페이지", onClick: () => navigate('/mypage') },
    { name: "커뮤니티", onClick: () => navigate('/') },
  ];

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingFee = 3000;
  const total = subtotal + shippingFee;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price) + ' 원';
  };

  return (
    <div className="bg-white min-h-screen w-full">
      <header className="bg-[#d9d9d9] h-[244px] w-full relative">
        <div className="absolute top-4 left-[25px]">
          <Button
            variant="ghost"
            size="icon"
            className="w-[58px] h-[58px] bg-neutral-100 rounded-full hover:bg-neutral-200"
            onClick={() => navigate('/menu')}
          >
            <MenuIcon className="w-6 h-6" />
          </Button>
        </div>

        <nav className="absolute top-[34px] right-[37px]">
          <div className="flex gap-4 text-black text-[15px] [font-family:'Crimson_Text',Helvetica]">
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

        <div className="absolute top-[68px] right-[37px] w-[296px]">
          <div className="relative">
            <Input
              placeholder="Search"
              className="w-full h-16 pl-12 pr-12 bg-[#78788029] border-none rounded-full text-[17px] [font-family:'SF_Pro-Regular',Helvetica] placeholder:text-[#999999] focus-visible:ring-0"
            />
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#999999]" />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#999999] text-[17px]">
              􀊱
            </div>
          </div>
        </div>

        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-black text-[9.5px] [font-family:'SF_Pro-Regular',Helvetica] mb-3">
            당신만을 위한 옷장
          </div>
          <div className="text-black text-[25.5px] [font-family:'SF_Pro-Regular',Helvetica] mb-4">
            MY SALON
          </div>
          <img
            className="w-[66px] h-[66px] mx-auto"
            alt="Main icon"
            src="https://c.animaapp.com/mfetjhbp9LgKUV/img/main-icon-1.png"
          />
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-12">
          <ShoppingCartIcon className="w-20 h-20" />
          <h1 className="text-[40px] font-bold [font-family:'SF_Pro-Bold',Helvetica]">
            장바구니
          </h1>
          <span className="text-[32px] [font-family:'ABeeZee',Helvetica]">
            ({cartItems.length})
          </span>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCartIcon className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <p className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-lg">
              장바구니가 비어있습니다.
            </p>
          </div>
        ) : (
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <div className="grid grid-cols-4 gap-4 py-4 text-[25px] font-bold [font-family:'SF_Pro-Bold',Helvetica] text-center">
                <div>상품정보</div>
                <div>수량</div>
                <div>가격</div>
                <div>삭제</div>
              </div>

              <Separator className="mb-4" />

              {cartItems.map((item, index) => (
                <div key={item.id}>
                  <div className="grid grid-cols-4 gap-4 items-center py-6">
                    <div className="flex items-center gap-4">
                      <img
                        className="w-[58px] h-[78px] object-cover"
                        alt="Product"
                        src={item.image}
                      />
                      <div className="text-[15px] [font-family:'SF_Pro-Regular',Helvetica]">
                        {item.name}
                        <br />
                        {item.color} / {item.size}
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="flex items-center bg-[#f1f1f1] rounded-full px-4 py-2 min-w-[84px]">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0 h-auto text-lg"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <span className="text-lg font-bold [font-family:'SF_Pro-Bold',Helvetica] mx-3">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0 h-auto text-lg"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                        <ChevronDownIcon className="w-3.5 h-2.5 ml-2" />
                      </div>
                    </div>

                    <div className="text-center text-[25px] font-bold [font-family:'SF_Pro-Bold',Helvetica]">
                      {formatPrice(item.price * item.quantity)}
                    </div>

                    <div className="flex justify-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-[35px] h-[35px] hover:text-red-500"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2Icon className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  {index < cartItems.length - 1 && <Separator />}
                </div>
              ))}

              <Separator className="my-8" />

              <div className="space-y-4 text-[25px]">
                <div className="flex justify-between">
                  <span className="[font-family:'SF_Pro-Regular',Helvetica]">
                    상품 합계
                  </span>
                  <span className="font-bold [font-family:'SF_Pro-Bold',Helvetica]">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="[font-family:'SF_Pro-Regular',Helvetica]">
                    배송비
                  </span>
                  <span className="font-bold [font-family:'SF_Pro-Bold',Helvetica]">
                    {formatPrice(shippingFee)}
                  </span>
                </div>

                <Separator />

                <div className="flex justify-between">
                  <span className="font-bold text-[#a40303] [font-family:'SF_Pro-Bold',Helvetica]">
                    최종 결제 금액
                  </span>
                  <span className="font-bold [font-family:'SF_Pro-Bold',Helvetica]">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>

              <div className="flex justify-center mt-12">
                <Button 
                  className="bg-[#828282] hover:bg-[#707070] text-white text-[25px] [font-family:'SF_Pro-Regular',Helvetica] px-12 py-3 rounded-[5px] h-auto"
                  onClick={() => {
                    navigate('/payment');
                  }}
                >
                  결제하기
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};
