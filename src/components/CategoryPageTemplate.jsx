import React from "react";
import { Badge } from "../routes/Screen39/components/ui/badge";
import { Button } from "../routes/Screen39/components/ui/button";
import { Card, CardContent } from "../routes/Screen39/components/ui/card";
import { Label } from "../routes/Screen39/components/ui/label";
import { RadioGroup, RadioGroupItem } from "../routes/Screen39/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../routes/Screen39/components/ui/select";
import { SharedHeader } from "./SharedHeader";

export const CategoryPageTemplate = ({ categoryName, categoryTabs }) => {
  const products = [
    {
      id: 1,
      image: "https://c.animaapp.com/mfenzsacDQ5BDG/img/maneking-gwa-osgage-5.png",
      name: "상품 이름 (판매자가 지정하는 이름)",
      price: "50,000원",
      category: "MALE",
    },
    {
      id: 2,
      image: "https://c.animaapp.com/mfenzsacDQ5BDG/img/maneking-gwa-osgage-6.png",
      name: "상품 이름 (판매자가 지정하는 이름)",
      price: "50,000원",
      category: "MALE",
    },
    {
      id: 3,
      image: "https://c.animaapp.com/mfenzsacDQ5BDG/img/maneking-gwa-osgage-7.png",
      name: "상품 이름 (판매자가 지정하는 이름)",
      price: "50,000원",
      category: "MALE",
    },
    {
      id: 4,
      image: "https://c.animaapp.com/mfenzsacDQ5BDG/img/maneking-gwa-osgage-8.png",
      name: "상품 이름 (판매자가 지정하는 이름)",
      price: "50,000원",
      category: "MALE",
    },
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="max-w-[1440px] mx-auto bg-white">
        <SharedHeader className="bg-white" />

        {/* Main Content */}
        <main className="px-[81px] py-[55px]">
          {/* Category Header */}
          <div className="flex items-center gap-2 mb-[57px]">
            <h1 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[35px] tracking-[-0.08px] leading-[20.7px]">
              {categoryName}
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
                className={`h-auto p-0 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-2xl tracking-[-0.08px] leading-[20.7px] ${
                  tab.active
                    ? "text-[#a40303]"
                    : "text-black hover:text-[#a40303]"
                }`}
              >
                {tab.name}
              </Button>
            ))}
          </div>

          {/* Filters and Sort */}
          <div className="flex justify-between items-center mb-[72px]">
            {/* Gender Filter */}
            <RadioGroup
              defaultValue="male"
              className="flex items-center gap-[124px]"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="male"
                  id="male"
                  className="w-[29px] h-[29px] border-[0.92px] border-[#828282]"
                />
                <Label
                  htmlFor="male"
                  className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[19.8px] text-center tracking-[0] leading-[27.7px]"
                >
                  남자
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="female"
                  id="female"
                  className="w-[29px] h-[29px] border-[0.92px] border-[#828282]"
                />
                <Label
                  htmlFor="female"
                  className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[19.8px] text-center tracking-[0] leading-[27.7px]"
                >
                  여자
                </Label>
              </div>
            </RadioGroup>

            {/* Sort Dropdown */}
            <Select defaultValue="recommended">
              <SelectTrigger className="w-auto border-0 bg-transparent p-0 h-auto [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-[19.8px] text-center tracking-[0] leading-[27.7px] focus:ring-0">
                <SelectValue />
                <img
                  className="w-4 h-[11px] ml-2"
                  alt="Polygon"
                  src="https://c.animaapp.com/mfenzsacDQ5BDG/img/polygon-4.svg"
                />
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
              <Card
                key={product.id}
                className="w-[232px] border-0 shadow-none bg-transparent"
              >
                <CardContent className="p-0">
                  <div className="relative mb-6">
                    <div className="w-[231px] h-[273px] bg-white absolute top-[38px] left-0" />
                    <img
                      className="w-[232px] h-[348px] relative z-10"
                      alt="Maneking gwa osgage"
                      src={product.image}
                    />

                    {/* HeartIcon Icons */}
                    <div className="absolute bottom-2 left-1 flex gap-[7px] z-20">
                      <img
                        className="w-[26px] h-[25px]"
                        alt="Set flat outline"
                        src={`https://c.animaapp.com/mfenzsacDQ5BDG/img/set-flat-outline-hearts-${index + 15}.png`}
                      />
                      <img
                        className="w-[25px] h-[26px]"
                        alt="Favorite"
                        src={`https://c.animaapp.com/mfenzsacDQ5BDG/img/favorite-4574735-${index + 6}.png`}
                      />
                    </div>
                  </div>

                  <div className="w-[220px] h-[50px]">
                    <div className="w-[214px] h-[29px] mb-0">
                      <Badge
                        variant="secondary"
                        className="absolute top-0 left-[3px] [font-family:'Crimson_Text',Helvetica] font-normal text-[#828282] text-[8px] tracking-[0] leading-[11.2px] bg-transparent border-0 p-0 h-auto"
                      >
                        {product.category}
                      </Badge>
                      <div className="mt-2 [font-family:'Galdeano',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px]">
                        {product.name}
                      </div>
                    </div>
                    <div className="mt-0 [font-family:'DM_Serif_Text',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px]">
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