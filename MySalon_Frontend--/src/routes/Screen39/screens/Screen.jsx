// src/routes/Screen39/screens/Screen.jsx
import { MenuIcon, SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export const Screen = () => {
  const navigate = useNavigate();
  const [showNavigation, setShowNavigation] = useState(false);

  // ✅ 햄버거 펼침에 표시할 카테고리
  const categories = ["상의", "아우터", "바지", "원피스", "악세사리", "홈웨어", "키즈"];
  const navigationItems = ["로그인", "회원가입", "장바구니", "마이페이지", "커뮤니티"];

  const categoryTabs = [
    { name: "전체", active: true },
    { name: "반소매", active: false },
    { name: "긴소매", active: false },
    { name: "셔츠/블라우스", active: false },
    { name: "니트/스웨터", active: false },
    { name: "맨투맨/후드", active: false },
    { name: "기타", active: false },
  ];

  // 🔧 목록에 있는 간단 상품 데이터
  const products = [
    { id: 1, image: "https://c.animaapp.com/mfenzsacDQ5BDG/img/maneking-gwa-osgage-5.png",  name: "상품 이름 (판매자가 지정하는 이름)", price: "50,000원", category: "MALE" },
    { id: 2, image: "https://c.animaapp.com/mfenzsacDQ5BDG/img/maneking-gwa-osgage-6.png",  name: "상품 이름 (판매자가 지정하는 이름)", price: "50,000원", category: "MALE" },
    { id: 3, image: "https://c.animaapp.com/mfenzsacDQ5BDG/img/maneking-gwa-osgage-7.png",  name: "상품 이름 (판매자가 지정하는 이름)", price: "50,000원", category: "MALE" },
    { id: 4, image: "https://c.animaapp.com/mfenzsacDQ5BDG/img/maneking-gwa-osgage-8.png",  name: "상품 이름 (판매자가 지정하는 이름)", price: "50,000원", category: "MALE" },
    { id: 5, image: "https://c.animaapp.com/mfenzsacDQ5BDG/img/maneking-gwa-osgage-9.png",  name: "상품 이름 (판매자가 지정하는 이름)", price: "50,000원", category: "MALE" },
    { id: 6, image: "https://c.animaapp.com/mfenzsacDQ5BDG/img/maneking-gwa-osgage-10.png", name: "상품 이름 (판매자가 지정하는 이름)", price: "50,000원", category: "MALE" },
    { id: 7, image: "https://c.animaapp.com/mfenzsacDQ5BDG/img/maneking-gwa-osgage-11.png", name: "상품 이름 (판매자가 지정하는 이름)", price: "50,000원", category: "MALE" },
    { id: 8, image: "https://c.animaapp.com/mfenzsacDQ5BDG/img/maneking-gwa-osgage-12.png", name: "상품 이름 (판매자가 지정하는 이름)", price: "50,000원", category: "MALE" },
  ];

  // ✅ 상세 페이지(126)로 보내는 핸들러
  const goDetail = (item) => {
    // Screen126이 기대하는 필드로 매핑
    const productForDetail = {
      name: item.name,
      image: item.image,
      price: item.price,
      shipFee: "3,500원",
      colors: ["Black", "White", "Red"],
      sizes: ["S", "M", "L", "XL"],
      desc:
        "상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다.",
    };
    navigate("/screen126", { state: { product: productForDetail } });
  };

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="max-w-[1440px] mx-auto bg-white">
        {/* ===================== 햄버거 펼침 패널 ===================== */}
        <div
          className={[
            "relative overflow-hidden transition-all duration-300 ease-in-out z-[60]",
            showNavigation ? "max-h-[340px] bg-[#f3f3f3] py-6" : "max-h-0 bg-white py-0",
          ].join(" ")}
          onMouseEnter={() => setShowNavigation(true)}
          onMouseLeave={() => setShowNavigation(false)}
        >
          {/* 우측 상단 네비 */}
          <nav className="absolute top-[12px] right-[80px]">
            <div className="flex gap-4 [font-family:'Crimson_Text',Helvetica] font-normal text-black text-[15px] leading-[21px]">
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-auto p-0 text-[15px] font-normal"
                  onClick={() => {
                    if (item === "로그인") navigate("/login");
                    else if (item === "회원가입") navigate("/signup");
                    else if (item === "마이페이지") navigate("/mypage");
                    else if (item === "장바구니") navigate("/cart");
                    else if (item === "커뮤니티") navigate("/community");
                  }}
                >
                  {item}
                </Button>
              ))}
            </div>
          </nav>

          {/* 중앙 로고 */}
          <div className="mt-10 mb-6 flex justify-center">
            <div className="relative w-[148px] h-[117px]">
              <div className="absolute top-0 left-7 [font-family:'SF_Pro-Regular',Helvetica] text-black text-[11.1px] text-center leading-[15.5px]">
                당신만을 위한 옷장
              </div>
              <div className="absolute top-3 left-0 [font-family:'SF_Pro-Regular',Helvetica] text-black text-[29.9px] text-center leading-[41.8px]">
                MY SALON
              </div>
              <img
                className="absolute w-[67px] h-[66px] top-[51px] left-[38px]"
                alt="Main icon"
                src="https://c.animaapp.com/mfenzsacDQ5BDG/img/main-icon-1.png"
              />
            </div>
          </div>

          {/* ✅ 카테고리 바 */}
          <div className="flex items-center justify-center">
            <ul className="flex flex-wrap gap-8 md:gap-12">
              {categories.map((c) => (
                <li key={c}>
                  <button
                    className="px-2 py-1 text-lg md:text-xl [font-family:'SF_Pro-Bold',Helvetica] hover:text-[#a40303] transition"
                    onClick={() => {
                      navigate(`/category/${c}`);
                      setShowNavigation(false);
                    }}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 검색바 */}
          <div className="mt-6 flex justify-center">
            <div className="flex w-[296px] h-16 items-center rounded-[100px] bg-[#78788029] px-3">
              <SearchIcon className="w-4 h-4 text-[#999999] mr-2" />
              <Input
                placeholder="Search"
                className="border-0 bg-transparent text-[#999999] text-[17px] placeholder:text-[#999999] focus-visible:ring-0 h-auto p-0 flex-1"
              />
              <div className="text-[#999999] text-[17px]">􀊱</div>
            </div>
          </div>
        </div>
        {/* =================== / 햄버거 펼침 패널 끝 =================== */}

        {/* 고정 햄버거 버튼 */}
        <Button
          variant="ghost"
          className="fixed top-[15px] left-[25px] w-[58px] h-[58px] bg-neutral-100 rounded-[29px] p-0 hover:bg-neutral-200 z-[70]"
          onMouseEnter={() => setShowNavigation(true)}
          onMouseLeave={() => setShowNavigation(false)}
          onClick={() => setShowNavigation((v) => !v)}
          aria-haspopup="true"
          aria-expanded={showNavigation}
        >
          <div className="flex flex-col gap-[9px] items-center">
            <span className="w-[27px] h-px bg-black" />
            <span className="w-[27px] h-px bg-black" />
            <span className="w-[27px] h-px bg-black" />
          </div>
        </Button>

        {/* ===== Main Content ===== */}
        <main className="px-[81px] py-[55px]">
          {/* Category Header */}
          <div className="flex items-center gap-2 mb-[57px]">
            <h1 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[35px] leading-[20.7px]">
              상의
            </h1>
            <img
              className="w-[43px] h-6 object-cover"
              alt="Down arrow icon"
              src="https://c.animaapp.com/mfenzsacDQ5BDG/img/down-arrow-icon-2.png"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex gap-[50px] mb-[95px]">
            {categoryTabs.map((tab, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`h-auto p-0 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-2xl leading-[20.7px] ${
                  tab.active ? "text-[#a40303]" : "text-black hover:text-[#a40303]"
                }`}
              >
                {tab.name}
              </Button>
            ))}
          </div>

          {/* Filters and Sort */}
          <div className="flex justify-between items-center mb-[72px]">
            <RadioGroup defaultValue="male" className="flex items-center gap-[124px]">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" className="w-[29px] h-[29px] border-[0.92px] border-[#828282]" />
                <Label htmlFor="male" className="[font-family:'SF_Pro-Regular',Helvetica] text-black text-[19.8px]">남자</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" className="w-[29px] h-[29px] border-[0.92px] border-[#828282]" />
                <Label htmlFor="female" className="[font-family:'SF_Pro-Regular',Helvetica] text-black text-[19.8px]">여자</Label>
              </div>
            </RadioGroup>

            <Select defaultValue="recommended">
              <SelectTrigger className="w-auto border-0 bg-transparent p-0 h-auto [font-family:'SF_Pro-Regular',Helvetica] text-[#828282] text-[19.8px] focus:ring-0">
                <SelectValue />
                <img className="w-4 h-[11px] ml-2" alt="Polygon" src="https://c.animaapp.com/mfenzsacDQ5BDG/img/polygon-4.svg" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">추천순</SelectItem>
                <SelectItem value="price-low">가격 낮은순</SelectItem>
                <SelectItem value="price-high">가격 높은순</SelectItem>
                <SelectItem value="newest">최신순</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-4 gap-x-[91px] gap-y-[125px]">
            {products.map((product, index) => (
              <Card key={product.id} className="w-[232px] border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  {/* ✅ 클릭하면 상세로 이동 */}
                  <button
                    type="button"
                    onClick={() => goDetail(product)}
                    className="relative mb-6 block cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
                    aria-label={`${product.name} 상세 보기`}
                  >
                    <div className="w-[231px] h-[273px] bg-white absolute top-[38px] left-0" />
                    <img
                      className="w-[232px] h-[348px] relative z-10 object-cover"
                      alt={product.name}
                      src={product.image}
                    />
                    <div className="absolute bottom-2 left-1 flex gap-[7px] z-20">
                      <img
                        className="w-[26px] h-[25px]"
                        alt="Set flat outline"
                        src={
                          index < 4
                            ? `https://c.animaapp.com/mfenzsacDQ5BDG/img/set-flat-outline-hearts-${index + 15}.png`
                            : `https://c.animaapp.com/mfenzsacDQ5BDG/img/set-flat-outline-hearts-${index + 1}.png`
                        }
                      />
                      <img
                        className="w-[25px] h-[26px]"
                        alt="Favorite"
                        src={
                          index < 4
                            ? `https://c.animaapp.com/mfenzsacDQ5BDG/img/favorite-4574735-${index + 6}.png`
                            : `https://c.animaapp.com/mfenzsacDQ5BDG/img/favorite-4574735-${index - 2}.png`
                        }
                      />
                    </div>
                  </button>

                  <div className="w-[220px] h-[50px]">
                    <div className="w-[214px] h-[29px] mb-0">
                      <Badge
                        variant="secondary"
                        className="absolute top-0 left-[3px] [font-family:'Crimson_Text',Helvetica] text-[#828282] text-[8px] bg-transparent border-0 p-0 h-auto"
                      >
                        {product.category}
                      </Badge>
                      <div className="mt-2 [font-family:'Galdeano',Helvetica] text-black text-[15px]">
                        {product.name}
                      </div>
                    </div>
                    <div className="mt-0 [font-family:'DM_Serif_Text',Helvetica] text-black text-[15px]">
                      {product.price}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
