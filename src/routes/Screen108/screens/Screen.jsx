import { MenuIcon, MicIcon, SearchIcon, MessageSquareIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import axios from "axios";

export const Screen = () => {
  const navigate = useNavigate();
  const userNum = 1; // 임시 고정

  const [userReviews, setUserReviews] = useState([]);

  // 작성한 리뷰 API 호출
  const fetchUserReviews = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/reviews/user/${userNum}`);
      setUserReviews(res.data);
    } catch (error) {
      console.error("유저 리뷰 불러오기 실패:", error);
    }
  };

  useEffect(() => {
    fetchUserReviews();
  }, []);

  const navigationItems = [
    { name: "로그인", onClick: () => navigate('/login') },
    { name: "회원가입", onClick: () => navigate('/signup') },
    { name: "장바구니", onClick: () => navigate('/cart') },
    { name: "마이페이지", onClick: () => navigate('/mypage') },
    { name: "커뮤니티", onClick: () => navigate('/') },
  ];

  const reviewSections = [
    { title: "작성한 리뷰" },
    { title: "리뷰를 작성해보세요" },
  ];

  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white w-[1440px] h-[1080px] relative">
        <header className="absolute w-[1440px] h-[244px] top-0 left-0 bg-[#d9d9d9]">
          {/* 검색창 */}
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

          {/* 네비게이션 */}
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

          {/* 로고 */}
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

          {/* 메뉴 버튼 */}
          <Button
            className="absolute w-[58px] h-[58px] top-[15px] left-[25px] bg-neutral-100 rounded-[29px/29.18px] p-0 h-auto"
            onClick={() => navigate('/menu')}
          >
            <MenuIcon className="w-6 h-6 text-black" />
          </Button>
        </header>

        <main className="mt-[320px] px-28 flex flex-col gap-6">
          {/* 작성한 리뷰 섹션 */}
          <Card className="w-[364px] h-[62px] border-[0.4px] border-black rounded-[15px] shadow-none">
            <CardContent className="flex items-center justify-center h-full p-0">
              <div className="font-bold text-[25px]">{reviewSections[0].title}</div>
            </CardContent>
          </Card>

          {/* 작성한 리뷰 카드들 */}
          <div className="flex flex-col gap-6">
            {userReviews.map((item) => (
              <Card key={item.reviewNum} className="w-[400px] h-[200px]">
                <CardContent className="flex p-4">
                  <img
                    src={item.reviewImage}
                    alt="리뷰 이미지"
                    className="w-[119px] h-[159px] object-cover rounded-[10px]"
                  />
                  <div className="ml-4 flex flex-col justify-between flex-1">
                    <div>
                      <div className="text-xs text-gray-500">{item.reviewNum}</div>
                      <div className="text-lg font-bold mt-1">{item.productName}</div>

                      {/* ✅ 가격 추가 */}
                      <div className="text-sm font-semibold text-yellow-600 mt-1">
                        {item.price?.toLocaleString()} 원
                      </div>

                      <div className="text-sm text-gray-500 mt-1">
                        {item.size} / {item.color}
                      </div>
                      <div className="text-sm mt-2 whitespace-pre-wrap">{item.text}</div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <span
                            key={i}
                            className={`w-5 h-5 ${i <= item.score ? "text-yellow-400" : "text-gray-300"
                              }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <Button
                        className="bg-gray-500 hover:bg-gray-600 text-white text-sm px-3 py-1 rounded"
                        onClick={() =>
                          navigate("/review", {
                            state: {
                              reviewNum: item.reviewNum,
                              productNum: item.productNum,
                              productDetailNum: item.productDetailNum,
                              productName: item.productName,
                              score: item.score,
                              text: item.text,
                              reviewImage: item.reviewImage,
                              price: item.price, // ✅ 가격도 state로 넘겨줌
                            },
                          })
                        }
                      >
                        리뷰수정
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

            ))}
          </div>

          {/* 리뷰 작성 섹션 */}
          <Card className="w-[364px] h-[62px] border-[0.4px] border-black rounded-[15px] shadow-none mt-6">
            <CardContent className="flex items-center justify-center h-full p-0">
              <div className="font-bold text-[25px]">{reviewSections[1].title}</div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};
