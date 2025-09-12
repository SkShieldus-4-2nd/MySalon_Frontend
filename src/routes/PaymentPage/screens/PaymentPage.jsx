import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";

export const PaymentPage = () => {
  const navigate = useNavigate();

  const navigationItems = [
    "로그인",
    "회원가입",
    "장바구니",
    "마이페이지",
    "커뮤니티",
  ];

  const orderDetails = [
    {
      label: "상품명",
      value: "여름 블루 롱 원피스",
    },
    {
      label: "구매자",
      value: "홍길동",
    },
    {
      label: "주문일",
      value: "2025.09.06",
    },
  ];

  const handleComplete = () => {
    // Simulate payment processing
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white w-[1440px] h-[1080px] relative">
        <nav className="absolute top-[33px] right-[80px]">
            <div className="flex gap-4 [font-family:'Crimson_Text',Helvetica] font-normal text-[15px] tracking-[0] leading-[21px]">
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

        <header className="absolute w-[146px] h-[118px] top-[146px] left-[649px]">
          <div className="relative w-[142px] h-[118px]">
            <h1 className="absolute w-[142px] top-3 left-0 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[25.5px] text-center tracking-[0] leading-[35.8px] whitespace-nowrap">
              MY SALON
            </h1>

            <p className="w-[87px] top-0 left-7 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[9.5px] text-center leading-[13.3px] absolute text-black tracking-[0] whitespace-nowrap">
              당신만을 위한 옷장
            </p>

            <img
              className="absolute w-[66px] h-[66px] top-[52px] left-[37px]"
              alt="Main icon"
              src="https://c.animaapp.com/mfevsazxBth96E/img/main-icon-1.png"
            />
          </div>
        </header>

        <main className="absolute w-[356px] h-[98px] top-[513px] left-[544px]">
          <h2 className="top-0 left-0 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[40px] text-center leading-[56px] absolute text-black tracking-[0] whitespace-nowrap">
            주문이 완료됐습니다!
          </h2>

          <p className="top-14 left-[18px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-3xl text-center leading-[42px] absolute text-black tracking-[0] whitespace-nowrap">
            이전 페이지로 돌아갑니다
          </p>
        </main>

        <img
          className="absolute w-[173px] h-[173px] top-80 left-[634px] object-cover"
          alt="Check mark icon"
          src="https://c.animaapp.com/mfevsazxBth96E/img/check-mark-icon-18606275-2.png"
        />

        <Separator className="absolute w-[598px] h-px top-[671px] left-[421px]" />

        <section className="absolute top-[774px] left-[583px]">
          {orderDetails.map((detail, index) => (
            <div
              key={detail.label}
              className="flex items-center mb-[55px] last:mb-0"
            >
              <dt className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[22px] text-center leading-[30.8px] text-black tracking-[0] whitespace-nowrap">
                {detail.label}
              </dt>
              <dd className="ml-[139px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[19.8px] text-center leading-[27.8px] text-black tracking-[0] whitespace-nowrap">
                {detail.value}
              </dd>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
