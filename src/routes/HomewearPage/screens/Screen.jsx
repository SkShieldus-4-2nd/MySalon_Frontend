import React from "react";
import { CategoryPageTemplate } from "../../../components/CategoryPageTemplate";

export const Screen = () => {
  const categoryTabs = [
    { name: "전체", active: true },
    { name: "잠옷", active: false },
    { name: "속옷", active: false },
  ];

  return <CategoryPageTemplate categoryName="홈웨어/속옷" categoryTabs={categoryTabs} />;
};
