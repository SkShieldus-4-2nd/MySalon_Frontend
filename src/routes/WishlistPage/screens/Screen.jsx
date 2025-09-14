import { HeartIcon, MenuIcon, SearchIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import axios from "axios";

export const Screen = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [wishlistProducts, setWishlistProducts] = useState([]);

  const navigationItems = [
    { name: "로그인", onClick: () => navigate('/login') },
    { name: "회원가입", onClick: () => navigate('/signup') },
    { name: "장바구니", onClick: () => navigate('/cart') },
    { name: "마이페이지", onClick: () => navigate('/mypage') },
    { name: "커뮤니티", onClick: () => navigate('/') },
  ];

  const categories = [
    { id: "ALL", label: "전체" },
    { id: "TOP", label: "상의" },
    { id: "OUTERWEAR", label: "아우터" },
    { id: "BOTTOM", label: "바지" },
    { id: "DRESS_SKIRT", label: "원피스/스커트" },
    { id: "ACC_BAG", label: "가방/ACC" },
    { id: "LOUNGEWEAR_UNDERWEAR", label: "홈웨어/속옷" },
    { id: "KIDS", label: "KIDS" },
  ];

  // 서버에서 찜 목록 로드
  useEffect(() => {
    axios.get("http://localhost:8080/api/favorites/1")
      .then(res => {
        const products = res.data.map(item => ({
          id: item.productNum,
          name: item.productName,
          image: item.productImage,
          price: `${item.productPrice.toLocaleString()}원`,
          category: item.category,
          liked: true,
        }));
        console.log(products);
        setWishlistProducts(products);
      })
      .catch(err => console.error(err));
  }, []);

  const toggleFavorite = (productId) => {
    setWishlistProducts(prev =>
      prev.map(p =>
        p.id === productId ? { ...p, liked: !p.liked } : p
      )
    );

    axios.post("http://localhost:8080/api/favorites", {
      userNum: 1,
      productNum: productId
    })
      .catch(err => {
        console.error(err);
        // 요청 실패 시 원래 상태로 되돌리기
        setWishlistProducts(prev =>
          prev.map(p =>
            p.id === productId ? { ...p, liked: !p.liked } : p
          )
        );
      });
  };

  const filteredProducts = activeCategory === "ALL"
    ? wishlistProducts
    : wishlistProducts.filter(product => product.category === activeCategory);

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="max-w-[1440px] mx-auto bg-white">
        {/* Header */}
        <header className="bg-[#d9d9d9] h-[244px] w-full relative">
          {/* ... 생략: 헤더, 네비게이션, 로고 코드 동일 ... */}
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
              <Badge variant="outline" className="[font-family:'ABeeZee',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[44.8px] border-0 bg-transparent p-0">
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
                className={`h-auto p-0 font-bold text-[27.6px] ${category.id === activeCategory ? "text-[#a40202]" : "text-black hover:text-[#a40202]"}`}
              >
                {category.label}
              </Button>
            ))}
          </nav>

          {/* Products Grid */}
          <div className="grid grid-cols-4 gap-x-[91px] gap-y-[125px] mb-16">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="w-[232px] border-0 shadow-none bg-transparent cursor-pointer hover:opacity-80 transition-opacity">
                <CardContent className="p-0">
                  <div className="relative mb-6">
                    <img className="w-[232px] h-[348px]" alt="Product image" src={product.image} />
                    {/* Heart Toggle */}
                    <div className="absolute bottom-2 left-1 flex gap-[7px] z-20">
                      <HeartIcon
                        className={`w-[26px] h-[25px] cursor-pointer ${product.liked ? 'text-red-500 fill-current' : 'text-gray-300 fill-current'}`}
                        onClick={() => toggleFavorite(product.id)}
                        fill={product.liked ? "currentColor" : "none"} // 찜이면 빨간색 채움, 아니면 투명
                        stroke="currentColor"
                      />
                    </div>

                  </div>

                  <div className="w-[220px]">
                    <div className="mb-2">
                      <Badge
                        variant="secondary"
                        className="mb-1 text-[8px] [font-family:'Crimson_Text',Helvetica] font-normal text-[#828282] bg-transparent border-0 p-0 h-auto"
                      >
                        {product.category}
                      </Badge>
                      <div className="[font-family:'Galdeano',Helvetica] font-normal text-black text-[15px] leading-[21px] break-words">
                        {product.name}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <div className="[font-family:'DM_Serif_Text',Helvetica] font-normal text-black text-[15px] leading-[21px]">
                        {product.price}
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
