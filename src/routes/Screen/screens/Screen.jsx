import { MicIcon, SearchIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { SharedHeader } from "../../../components/SharedHeader";

export const Screen = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const categoryItems = [
    { name: "상의", path: "/category/상의" },
    { name: "바지", path: "/category/바지" },
    { name: "남성", path: "/category/남성" },
    { name: "여성", path: "/category/여성" },
    { name: "키즈", path: "/category/키즈" },
  ];

  // 모든 상품 목록 가져오기
  const fetchAllProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/products/all-products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error("상품 목록 조회 실패");
        // 실패 시 기본 더미 데이터 사용
        setProducts([
          {
            productNum: 1,
            productName: "상품 이름 (판매자가 지정하는 이름)",
            price: 50000,
            mainImage: "https://c.animaapp.com/mfdr5z0vfXP3sX/img/maneking-gwa-osgage-5.png",
            gender: "MALE",
          },
          {
            productNum: 2,
            productName: "상품 이름 (판매자가 지정하는 이름)",
            price: 50000,
            mainImage: "https://c.animaapp.com/mfdr5z0vfXP3sX/img/maneking-gwa-osgage-6.png",
            gender: "MALE",
          },
          {
            productNum: 3,
            productName: "상품 이름 (판매자가 지정하는 이름)",
            price: 50000,
            mainImage: "https://c.animaapp.com/mfdr5z0vfXP3sX/img/maneking-gwa-osgage-7.png",
            gender: "MALE",
          },
          {
            productNum: 4,
            productName: "상품 이름 (판매자가 지정하는 이름)",
            price: 50000,
            mainImage: "https://c.animaapp.com/mfdr5z0vfXP3sX/img/maneking-gwa-osgage-8.png",
            gender: "MALE",
          },
        ]);
      }
    } catch (error) {
      console.error("API 요청 오류:", error);
      // 에러 시 기본 더미 데이터 사용
      setProducts([
        {
          productNum: 1,
          productName: "상품 이름 (판매자가 지정하는 이름)",
          price: 50000,
          mainImage: "https://c.animaapp.com/mfdr5z0vfXP3sX/img/maneking-gwa-osgage-5.png",
          gender: "MALE",
        },
        {
          productNum: 2,
          productName: "상품 이름 (판매자가 지정하는 이름)",
          price: 50000,
          mainImage: "https://c.animaapp.com/mfdr5z0vfXP3sX/img/maneking-gwa-osgage-6.png",
          gender: "MALE",
        },
        {
          productNum: 3,
          productName: "상품 이름 (판매자가 지정하는 이름)",
          price: 50000,
          mainImage: "https://c.animaapp.com/mfdr5z0vfXP3sX/img/maneking-gwa-osgage-7.png",
          gender: "MALE",
        },
        {
          productNum: 4,
          productName: "상품 이름 (판매자가 지정하는 이름)",
          price: 50000,
          mainImage: "https://c.animaapp.com/mfdr5z0vfXP3sX/img/maneking-gwa-osgage-8.png",
          gender: "MALE",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // 컴포넌트 마운트 시 상품 목록 가져오기
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="bg-[#e3e2e2] min-h-screen w-full">
      <div className="max-w-[1440px] mx-auto bg-[#e3e2e2] relative">
        <SharedHeader />

        {/* Search Bar */}
        <div className="flex justify-center my-8">
          <div className="relative w-[400px]">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
            <Input
              placeholder="Search"
              className="w-full h-[50px] pl-12 pr-12 bg-[#78788029] border-none rounded-full text-[17px] [font-family:'SF_Pro-Regular',Helvetica] placeholder:text-[#999999]"
            />
            <MicIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
          </div>
        </div>

        {/* Shop By My Salon */}
        <section className="text-center">
          <h2 className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl tracking-[-0.08px] leading-[22px] mb-[77px]">
            SHOP BY MY SALON
          </h2>

          <div className="flex justify-center items-center gap-[73px] mb-[91px]">
            {categoryItems.map((category, index) => (
              <div
                key={index}
                className="text-center cursor-pointer"
                onClick={() => navigate(category.path)}
              >
                <div className="w-[78px] h-[71px] bg-[#bdbdbd] rounded-full mb-4 mx-auto" />
                <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl tracking-[-0.08px] leading-[22px]">
                  {category.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Products */}
        <section className="text-center mb-[103px]">
          <h2 className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl tracking-[-0.08px] leading-[22px] mb-[67px]">
            당신을 위한 추천상품
          </h2>

          {/* z-index 올려서 헤더와의 충돌 방지 */}
          <div className="grid grid-cols-4 gap-[91px] max-w-[1201px] mx-auto px-[134px] relative z-20">
            {loading ? (
              <div className="col-span-4 text-center py-8">
                <p className="text-[#828282]">상품을 불러오는 중...</p>
              </div>
            ) : products.length === 0 ? (
              <div className="col-span-4 text-center py-8">
                <p className="text-[#828282]">등록된 상품이 없습니다.</p>
              </div>
            ) : (
              products.map((product) => (
                <Card
                  key={product.productNum}
                  className="bg-transparent border-none shadow-none cursor-pointer"
                  onClick={() => navigate(`/screen126/${product.productNum}`)}
                >
                  <CardContent className="p-0">
                    <div className="relative mb-6 w-[232px] h-[348px] overflow-hidden">
                      <img
                        className="w-full h-full object-cover relative z-10"
                        alt={product.productName}
                        src={product.mainImage && product.mainImage !== "default.jpg" 
                          ? `http://localhost:8080${product.mainImage}` 
                          : "https://c.animaapp.com/mfdr5z0vfXP3sX/img/maneking-gwa-osgage-5.png"}
                      />
                    </div>

                    <div className="text-left">
                      <Badge
                        variant="secondary"
                        className="mb-2 text-[8px] [font-family:'Crimson_Text',Helvetica] text-[#828282] bg-transparent border-none p-0"
                      >
                        {product.gender || "ALL"}
                      </Badge>
                      <h3 className="[font-family:'Galdeano',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px] mb-1">
                        {product.productName}
                      </h3>
                      <p className="[font-family:'DM_Serif_Text',Helvetica] font-normal text-[15px] tracking-[0] leading-[21px] text-black">
                        {product.price?.toLocaleString()}원
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          <Button className="mt-[53px] w-[88px] h-7 bg-[url(https://c.animaapp.com/mfdr5z0vfXP3sX/img/rectangle-28.svg)] bg-[100%_100%] border-none hover:opacity-80">
            <span className="[font-family:'DM_Serif_Text',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[21px]">
              더보기
            </span>
          </Button>
        </section>
      </div>
    </div>
  );
};
