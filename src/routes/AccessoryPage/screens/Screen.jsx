import React from "react";
import { CategoryPageTemplate } from "../../../components/CategoryPageTemplate";

export const Screen = () => {
  const categoryTabs = [
    { name: "전체", active: true },
    { name: "가방", active: false },
    { name: "악세사리", active: false },
    { name: "모자", active: false },
  ];

  return <CategoryPageTemplate categoryName="ACC/BAG" categoryTabs={categoryTabs} />;
};
