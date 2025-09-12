import { HeartIcon, MenuIcon, SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

export const WishlistPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("전체");

  const navigationItems = [
    { name: "로그인", onClick: () => navigate('/login') },
    { name: "회원가입", onClick: () => navigate('/signup') },
    { name: "장바구니", onClick: () => navigate('/cart') },
    { name: "마이페이지", onClick: () => navigate('/mypage') },
    { name: "커뮤니티", onClick: () => navigate('/') },
  ];

  const categories = [
    { id: "전체", label: "전체", active: true },
    { id: "상의", label: "상의", active: false },
    { id: "아우터", label: "아우터", active: false },
    { id: "바지", label: "바지", active: false },
    { id: "원피스", label: "원피스", active: false },
    { id: "스커트", label: "스커트", active: false },
    { id: "가방", label: "가방", active: false },
    { id: "ACC", label: "ACC", active: false },
    { id: "홈웨어/속옷", label: "홈웨어/속옷", active: false },
    { id: "KIDS", label: "KIDS", active: false },
  ];

  const wishlistProducts = [
    {
      id: 1,
      image: "https://c.animaapp.com/mfenzsacDQ5BDG/img/maneking-gwa-osgage-5.png",
      name: "상품 이름 (판매자가 지정하는 이름)",
      price: "50,000원",
      category: "MALE",
      rating: 4.5,
      heartIcon: "https://c.animaapp.com/mfestxaxVJKxPS/img/set-flat-outline-hearts-6.png",
      favoriteIcon: "https://c.animaapp.com/mfestxaxVJKxPS/img/favorite-4574735-12.png"
    },
    {
      id: 2,
      image: "https://c.animaapp.com/mfenzsacDQ5BDG/img/maneking-gwa-osgage-6.png",
      name: "상품 이름 (판매자가 지정하는 이름)",
      price: "50,000원",
      category: "MALE",
      rating: 4.2,
      heartIcon: "https://c.animaapp.com/mfestxaxVJKxPS/img/set-flat-outline-hearts-7.png",
      favoriteIcon: "https://c.animaapp.com/mfestxaxVJKxPS/img/favorite-4574735-12.png"
    },
    {
      id: 3,
      image: "https://c.animaapp.com/mfenzsacDQ5BDG/img/maneking-gwa-osgage-7.png",
      name: "상품 이름 (판매자가 지정하는 이름)",
      price: "50,000원",
      category: "FEMALE",
      rating: 4.8,
      heartIcon: "https://c.animaapp.com/mfestxaxVJKxPS/img/set-flat-outline-hearts-8.png",
      favoriteIcon: "https://c.animaapp.com/mfestxaxVJKxPS/img/favorite-4574735-12.png"
    },
    {
      id: 4,
      image: "https://c.animaapp.com/mfenzsacDQ5BDG/img/maneking-gwa-osgage-8.png",
      name: "상품 이름 (판매자가 지정하는 이름)",
      price: "50,000원",
      category: "MALE",
      rating: 4.0,
      heartIcon: "https://c.animaapp.com/mfestxaxVJKxPS/img/set-flat-outline-hearts-9.png",
      favoriteIcon: "https://c.animaapp.com/mfestxaxVJKxPS/img/favorite-4574735-12.png"
    },
    {
      id: 5,
      image: "https://c.animaapp.com/mfenzsacDQ5BDG/img/maneking-gwa-osgage-9.png",
      name: "상품 이름 (판매자가 지정하는 이름)",
      price: "50,000원",
      category: "FEMALE",
      rating: 4.7,
      heartIcon: "https://c.animaapp.com/mfestxaxVJKxPS/img/set-flat-outline-hearts-6.png",
      favoriteIcon: "https://c.animaapp.com/mfestxaxVJKxPS/img/favorite-4574735-12.png"
    },
    {
      id: 6,
      image: "https://c.animaapp.com/mfenzsacDQ5BDG/img/maneking-gwa-osgage-10.png",
      name: "상품 이름 (판매자가 지정하는 이름)",
      price: "50,000원",
      category: "MALE",
      rating: 4.3,
      heartIcon: "https://c.animaapp.com/mfestxaxVJKxPS/img/set-flat-outline-hearts-7.png",
      favoriteIcon: "https://c.animaapp.com/mfestxaxVJKxPS/img/favorite-4574735-12.png"
    }
  ];

  const filteredProducts = activeCategory === "전체" 
    ? wishlistProducts 
    : wishlistProducts.filter(product => {
        if (activeCategory === "상의") return product.category === "MALE" || product.category === "FEMALE";
        return product.category === activeCategory.toUpperCase();
      });

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="max-w-[1440px] mx-auto bg-white">
        {/* Header */}
        <header className="bg-[#d9d9d9] h-[244px] w-full relative">
          <div className="absolute w-[296px] h-16 top-[67px] right-[37px]">
            <div className="flex w-full h-16 items-center relative rounded-[100px]">
              <div className="flex items-center p-[11px] relative flex-1 bg-[#78788029] rounded-[100px]">
                <div className="flex items-center gap-2 relative flex-1">
                  <SearchIcon className="w-4 h-4 text-[#999999]" />
                  <Input
                    placeholder="Search"
                    className="border-0 bg-transparent text-[17px] text-[#999999] placeholder:text-[#999999] [font-family:'SF_Pro-Regular',Helvetica] font-normal tracking-[-0.08px] leading-[22px] focus-visible:ring-0 h-auto p-0"
                  />
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#999999] text-[17px] tracking-[-0.08px] leading-[22px] whitespace-nowrap">
                  􀊱
                </div>
              </div>
            </div>
          </div>

          <nav className="absolute top-[33px] right-[80px]">
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

          <div className="absolute w-[146px] h-[118px] top-[55px] left-1/2 transform -translate-x-1/2">
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
                src="https://c.animaapp.com/mfestxaxVJKxPS/img/main-icon-1.png"
              />
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute w-[58px] h-[58px] top-[15px] left-[25px] bg-neutral-100 rounded-[29px] hover:bg-neutral-200"
            onClick={() => navigate('/menu')}
          >
            <MenuIcon className="w-6 h-6" />
          </Button>
        </header>

        {/* Main Content */}
        <main className="px-[107px] py-8">
          {/* Page Title */}
          <div className="flex items-center gap-4 mb-8">
            <HeartIcon className="w-[70px] h-[72px] text-red-500" />
            <div className="flex items-center gap-2">
              <h1 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[56px] whitespace-nowrap">
                찜 목록
              </h1>
              <Badge
                variant="outline"
                className="[font-family:'ABeeZee',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[44.8px] border-0 bg-transparent p-0"
              >
                ({filteredProducts.length})
              </Badge>
            </div>
          </div>

          {/* Category Navigation */}
          <nav className="flex gap-8 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="ghost"
                onClick={() => setActiveCategory(category.id)}
                className={`h-auto p-0 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[27.6px] tracking-[-0.08px] leading-[20.7px] hover:bg-transparent ${
                  category.id === activeCategory
                    ? "text-[#a40202]"
                    : "text-black hover:text-[#a40202]"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </nav>

          {/* Products Grid */}
          <div className="grid grid-cols-4 gap-x-[91px] gap-y-[125px] mb-16">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="w-[232px] border-0 shadow-none bg-transparent cursor-pointer hover:opacity-80 transition-opacity"
              >
                <CardContent className="p-0">
                  <div className="relative mb-6">
                    <div className="w-[231px] h-[273px] bg-white absolute top-[38px] left-0" />
                    <img
                      className="w-[232px] h-[348px] relative z-10"
                      alt="Product image"
                      src={product.image}
                    />

                    {/* Heart Icons */}
                    <div className="absolute bottom-2 left-1 flex gap-[7px] z-20">
                      <img
                        className="w-[26px] h-[25px]"
                        alt="Heart outline"
                        src={product.heartIcon}
                      />
                      <img
                        className="w-[25px] h-[26px]"
                        alt="Favorite"
                        src={product.favoriteIcon}
                      />
                    </div>
                  </div>

                  <div className="w-[220px] h-[50px]">
                    <div className="w-[214px] h-[29px] mb-1">
                      <Badge
                        variant="secondary"
                        className="mb-1 text-[8px] [font-family:'Crimson_Text',Helvetica] font-normal text-[#828282] bg-transparent border-0 p-0 h-auto"
                      >
                        {product.category}
                      </Badge>
                      <div className="[font-family:'Galdeano',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px]">
                        {product.name}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="[font-family:'DM_Serif_Text',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px]">
                        {product.price}
                      </div>
                      <div className="[font-family:'DM_Serif_Display',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[18.2px]">
                        {product.rating}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <HeartIcon className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-lg">
                선택한 카테고리에 찜한 상품이 없습니다.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
