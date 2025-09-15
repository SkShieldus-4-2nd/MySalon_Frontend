import React from "react";
import { useNavigate } from "react-router-dom";
import { CategoryPageTemplate } from "../../../components/CategoryPageTemplate";

export const Screen = () => {
  const navigate = useNavigate();

  const categoryTabs = [
    { name: "전체", active: true },
    { name: "가디건", active: false },
    { name: "자켓", active: false },
    { name: "코트", active: false },
  ];

  const goDetail = (item) => {
    const productForDetail = {
      name: item?.name ?? "상품이름",
      image: item?.image,
      price: item?.price ?? "50,000원",
      shipFee: "3,500원",
      colors: ["Black", "White", "Red"],
      sizes: ["S", "M", "L", "XL"],
      desc:
        item?.desc ??
        "상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다.",
    };
    navigate("/screen126", { state: { product: productForDetail } });
  };

  return (
    <CategoryPageTemplate
      categoryName="아우터"
      categoryTabs={categoryTabs}
      onProductClick={goDetail}
    />
  );
};