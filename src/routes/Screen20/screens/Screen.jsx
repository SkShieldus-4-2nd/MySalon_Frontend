// src/routes/Screen20/screens/Screen.jsx
import { MenuIcon, MicIcon, SearchIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "../components/ui/navigation-menu";

export const Screen = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [productRatings, setProductRatings] = useState({}); // { productNum: { averageScore, reviewCount } }

  const topNavItems = ["로그인", "회원가입", "장바구니", "마이페이지", "커뮤니티"];

  const mainNavItems = [
    {
      name: "상의",
      subItems: ["티셔츠", "셔츠", "니트", "후드티", "맨투맨"],
    },
    {
      name: "아우터",
      subItems: ["자켓", "코트", "패딩", "가디건", "블레이저"],
    },
    {
      name: "바지",
      subItems: ["청바지", "슬랙스", "조거팬츠", "반바지", "레깅스"],
    },
    {
      name: "원피스/스커트",
      subItems: ["원피스", "미니스커트", "롱스커트", "플리츠스커트"],
    },
    {
      name: "ACC/BAG",
      subItems: ["가방", "지갑", "벨트", "모자", "액세서리"],
    },
    {
      name: "홈웨어/속옷",
      subItems: ["파자마", "속옷", "양말", "홈웨어"],
    },
    {
      name: "키즈",
      subItems: ["아동복", "유아복", "신발", "액세서리"],
    },
    {
      name: "문의",
      subItems: ["고객센터", "FAQ", "1:1문의", "교환/반품"],
    },
  ];

  const categoryItems = [
    { name: "상의" },
    { name: "팬츠" },
    { name: "남성" },
    { name: "여성" },
    { name: "키즈" },
  ];

  // 서버 API로 제품 불러오기
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/products");
        setProducts(response.data);
      } catch (error) {
        console.log("제품 불러오기 실패:", error);
      }
    };
    fetchProducts();
  }, []);

  // 제품별 별점 및 리뷰 개수 불러오기
  useEffect(() => {
    const fetchProductRatings = async () => {
      try {
        const ratingsData = {};

        for (const product of products) {
          const [scoreRes, countRes] = await Promise.all([
            axios.get(`http://localhost:8080/api/reviews/product/${product.productNum}/average-score`),
            axios.get(`http://localhost:8080/api/reviews/product/${product.productNum}/count`)
          ]);

          ratingsData[product.productNum] = {
            averageScore: scoreRes.data,
            reviewCount: countRes.data,
          };
        }

        setProductRatings(ratingsData);
      } catch (error) {
        console.log("별점/리뷰 개수 조회 실패:", error);
      }
    };

    if (products.length > 0) {
      fetchProductRatings();
    }
  }, [products]);

  return (
    <div className="bg-[#e3e2e2] min-h-screen w-full">
      <div className="max-w-[1440px] mx-auto bg-[#e3e2e2] relative">
        {/* Header Section */}
        <header className="relative h-[370px]">
          <img
            className="w-full h-[271px] object-cover"
            alt="Rectangle"
            src="https://c.animaapp.com/mfen0m06YlmqEB/img/rectangle-33.svg"
          />

          {/* Top Navigation */}
          <nav className="absolute top-[33px] right-[80px]">
            <div className="flex gap-4 [font-family:'Crimson_Text',Helvetica] font-normal text-black text-[15px]">
              {topNavItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-auto p-0 text-[15px] font-normal"
                  onClick={() => console.log(item)}
                >
                  {item}
                </Button>
              ))}
            </div>
          </nav>

          {/* Hamburger MenuIcon */}
          <Button
            variant="ghost"
            className="absolute top-[15px] left-[25px] w-[58px] h-[58px] bg-neutral-100 rounded-full p-0"
            onClick={() => navigate("/menu")}
          >
            <MenuIcon className="w-6 h-6" />
          </Button>

          {/* Logo Section */}
          <div className="absolute top-[75px] left-1/2 transform -translate-x-1/2 text-center">
            <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[11.1px] mb-3">
              당신만을 위한 옷장
            </div>
            <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[29.9px] mb-3">
              MY SALON
            </div>
            <img
              className="w-[67px] h-[66px] mx-auto"
              alt="Main icon"
              src="https://c.animaapp.com/mfen0m06YlmqEB/img/main-icon-1.png"
            />
          </div>

          {/* Main Navigation with Dropdown */}
          <div className="absolute top-[215px] left-[292px] flex gap-8">
            {mainNavItems.map((item, index) => (
              <NavigationMenu key={index}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[27.6px] tracking-[-0.08px] leading-[20.7px] hover:text-[#a40202]"
                      onClick={() => navigate(`/category/${item.name}`)}
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[200px] p-4 bg-white rounded-lg shadow-lg border">
                        <div className="grid gap-2">
                          {item.subItems?.map((subItem, subIndex) => (
                            <NavigationMenuLink
                              key={subIndex}
                              className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
                              onClick={() =>
                                navigate(`/category/${item.name}/${subItem}`)
                              }
                            >
                              {subItem}
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ))}
          </div>

          {/* Search Bar */}
          <div className="absolute top-[260px] left-1/2 transform -translate-x-1/2 w-[614px]">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#999999]" />
              <Input
                placeholder="Search"
                className="w-full h-[110px] pl-12 pr-12 bg-[#78788029] border-0 rounded-full text-[17px] placeholder:text-[#999999]"
              />
              <MicIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#999999]" />
            </div>
          </div>
        </header>

        {/* Recommended Products Section */}
        <section className="mt-16">
          <h2 className="text-center [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl tracking-[-0.08px] leading-[22px] mb-8">
            당신을 위한 추천상품
          </h2>

          <div className="grid grid-cols-4 gap-8 px-[134px]">
            {products.map((product, index) => (
              <Card key={index} className="bg-white border rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    className="w-full h-[348px] object-cover"
                    alt={product.productName}
                    src={product.mainImage}
                  />
                  {/* 하트 아이콘 */}
                  <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                            4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 
                            16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
                            11.54L12 21.35z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-500 text-sm">{product.gender}</span>
                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                      <span>{productRatings[product.productNum]?.averageScore?.toFixed(1) || 0}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.947a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.947c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.947a1 1 0 00-.364-1.118L2.975 9.374c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.947z"/>
                      </svg>
                      <span>({productRatings[product.productNum]?.reviewCount || 0})</span>
                    </div>
                  </div>

                  <h3 className="[font-family:'Galdeano',Helvetica] font-normal text-black text-[15px] mb-1">
                    {product.productName}
                  </h3>
                  <p className="[font-family:'DM_Serif_Text',Helvetica] font-bold text-black text-[15px]">
                    {product.price.toLocaleString()}원
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </section>
      </div>
    </div>
  );
};
