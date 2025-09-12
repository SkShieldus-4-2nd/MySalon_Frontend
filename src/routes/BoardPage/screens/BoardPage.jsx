import { HeartIcon, SearchIcon, ShoppingBagIcon, StarIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Separator } from "../components/ui/separator";

export const BoardPage = () => {
  const navigate = useNavigate();
  const navigationLinks = [
    "로그인",
    "회원가입",
    "장바구니",
    "마이페이지",
    "커뮤니티",
  ];

  const colorOptions = [
    { name: "Black", value: "black" },
    { name: "White", value: "white" },
    { name: "Red", value: "red" },
  ];

  const reviewFilters = [
    { label: "최신순", value: "latest", selected: true },
    { label: "별점순", value: "rating", selected: false },
  ];

  const additionalFilters = [
    { label: "키", value: "height" },
    { label: "몸무게", value: "weight" },
  ];

  const starRatings = Array(5).fill(null);

  const reviews = [
    {
      rating: 5,
      title: "아주 좋아요",
      content:
        "리뷰내용 작성하는 부분\nex ) 바닷가 여행 때 입으려고 샀는데 너무 예뻐요. 다른 색도 있다면 바로 사고  싶을 정도네요.\n옷이 약간 오버핏이여서 참고해서 사세요!",
    },
    {
      rating: 5,
      title: "아주 좋아요",
      content:
        "리뷰내용 작성하는 부분\nex ) 바닷가 여행 때 입으려고 샀는데 너무 예뻐요. 다른 색도 있다면 바로 사고  싶을 정도네요.\n옷이 약간 오버핏이여서 참고해서 사세요!",
    },
  ];

  return (
    <div className="bg-white grid justify-items-center w-screen min-h-screen">
      <div className="bg-white w-full max-w-[1440px] min-h-[1080px] relative">
        {/* Header Navigation */}
        <header className="flex justify-between items-start pt-[33px] px-[31px]">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-[58px] h-[58px] bg-neutral-100 rounded-full flex items-center justify-center">
              <img
                className="w-3.5 h-[15px]"
                alt="Polygon"
                src="https://c.animaapp.com/mff2qbyw3RVLUM/img/polygon-2-1.svg"
              />
            </div>
          </div>

          {/* Center Brand */}
          <div className="flex flex-col items-center">
            <div className="text-[9.5px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-center tracking-[0] leading-[13.3px] mb-3">
              당신만을 위한 옷장
            </div>
            <div className="text-[25.5px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-center tracking-[0] leading-[35.8px] mb-4">
              MY SALON
            </div>
            <img
              className="w-[66px] h-[66px]"
              alt="Main icon"
              src="https://c.animaapp.com/mff2qbyw3RVLUM/img/main-icon-1.png"
            />
          </div>

          {/* Right Navigation */}
          <div className="flex flex-col items-end gap-2.5">
            <nav>
              <div className="flex gap-4 [font-family:'Crimson_Text',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px]">
                {navigationLinks.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="h-auto p-0 text-[15px] font-normal"
                    onClick={() => {
                      if (item === "로그인") {
                        navigate('/login');
                      } else if (item === "회원가입") {
                        navigate('/signup');
                      } else if (item === "마이페이지") {
                        navigate('/mypage');
                      } else if (item === "장바구니") {
                        navigate('/cart');
                      } else if (item === "커뮤니티") {
                        navigate('/community');
                      }
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </nav>

            {/* SearchIcon Bar */}
            <div className="flex items-center bg-[#78788029] rounded-full p-[11px] w-[391px] h-[110px]">
              <div className="flex items-center gap-2 flex-1">
                <SearchIcon className="w-4 h-4 text-[#999999]" />
                <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#999999] text-[17px] tracking-[-0.08px] leading-[22px]">
                  SearchIcon
                </span>
              </div>
              <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#999999] text-[17px] tracking-[-0.08px] leading-[22px]">
                􀊱
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex gap-8 mt-[164px] px-[253px]">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img
              className="w-[327px] h-[438px] object-cover"
              alt="Product Image"
              src="https://c.animaapp.com/mff2qbyw3RVLUM/img/image-1.png"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 max-w-[520px]">
            <div className="space-y-6">
              {/* Product Title */}
              <h1 className="[font-family:'Inter',Helvetica] font-normal text-black text-3xl text-center tracking-[0] leading-[42px]">
                상품이름
              </h1>

              {/* Product Description */}
              <p className="[font-family:'Inter',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px]">
                상품 설명 줄입니다.상품 설명 줄입니다.상품 설명 줄입니다.상품
                설명 줄입니다.상품 설명 줄입니다. 상품 설명 줄입니다.상품 설명
                줄입니다.
              </p>

              <Separator />

              {/* Product Details Grid */}
              <div className="space-y-4">
                {/* Price */}
                <div className="flex items-center gap-8">
                  <Label className="[font-family:'Inter',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[23.8px] w-16">
                    가격
                  </Label>
                  <span className="[font-family:'Inter',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[18.2px]">
                    5000000원
                  </span>
                </div>

                {/* Shipping */}
                <div className="flex items-center gap-8">
                  <Label className="[font-family:'Inter',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[23.8px] w-16">
                    배송비
                  </Label>
                  <span className="[font-family:'Inter',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[18.2px]">
                    3500원
                  </span>
                </div>

                {/* Color */}
                <div className="flex items-start gap-8">
                  <Label className="[font-family:'Inter',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[23.8px] w-16">
                    색상
                  </Label>
                  <div className="flex gap-4">
                    {colorOptions.map((color) => (
                      <Button
                        key={color.value}
                        variant="outline"
                        size="sm"
                        className="h-5 px-2 text-[13px] [font-family:'Inter',Helvetica] font-normal text-black tracking-[0] leading-[18.2px] bg-[url(https://c.animaapp.com/mff2qbyw3RVLUM/img/rectangle-13.svg)] bg-[100%_100%]"
                      >
                        {color.name}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="text-[8px] [font-family:'Inter',Helvetica] font-normal text-black text-center tracking-[0] leading-[11.2px] ml-24">
                  [필수] 옵션을 선택하세요.
                </div>

                <Separator />

                {/* Size */}
                <div className="flex items-center gap-8">
                  <Label className="[font-family:'Inter',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[23.8px] w-16">
                    사이즈
                  </Label>
                  <Select>
                    <SelectTrigger className="w-60 h-6 border-[0.5px] border-black">
                      <SelectValue
                        placeholder="-[필수] 옵션을 선택하세요-"
                        className="[font-family:'Inter',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[18.2px]"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="s">S</SelectItem>
                      <SelectItem value="m">M</SelectItem>
                      <SelectItem value="l">L</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-8">
                  <Label className="[font-family:'Inter',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[23.8px] w-16">
                    수량
                  </Label>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 text-[17px] [font-family:'Inter',Helvetica] font-normal text-black"
                    >
                      -
                    </Button>
                    <span className="[font-family:'Inter',Helvetica] font-normal text-black text-xl tracking-[0] leading-7">
                      2
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 text-[17px] [font-family:'Inter',Helvetica] font-normal text-black"
                    >
                      +
                    </Button>
                  </div>
                </div>

                <Separator />

                {/* Total */}
                <div className="flex items-center gap-8">
                  <Label className="[font-family:'Inter',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[18.2px]">
                    TOTAL
                  </Label>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-[52px] h-[53px] border-[0.5px] border-black"
                  >
                    <HeartIcon className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-[52px] h-[53px] border-[0.5px] border-black"
                  >
                    <ShoppingBagIcon className="w-6 h-6" />
                  </Button>
                  <Button className="flex-1 h-[53px] bg-[#828282] hover:bg-[#707070] text-white">
                    <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[35px]">
                      구매하기
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Reviews Section */}
        <section className="mt-[102px] px-[253px]">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-[25px] text-center tracking-[0] leading-[35px] mb-[45px]">
            REVIEW
          </h2>

          <Separator className="mb-[25px]" />

          {/* Review Filters */}
          <div className="flex items-center gap-4 mb-[21px]">
            <RadioGroup defaultValue="latest" className="flex gap-4">
              {reviewFilters.map((filter) => (
                <div key={filter.value} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={filter.value}
                    id={filter.value}
                    className={`w-[15px] h-[15px] ${filter.selected ? "border-[#a40303]" : "border-[#828282]"} border-[0.6px]`}
                  />
                  <Label
                    htmlFor={filter.value}
                    className="[font-family:'Inter',Helvetica] font-normal text-black text-[8px] text-center tracking-[0] leading-[11.2px]"
                  >
                    {filter.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex gap-4 ml-8">
              {additionalFilters.map((filter) => (
                <Select key={filter.value}>
                  <SelectTrigger className="w-11 h-[15px] rounded-[20px] border-[0.4px] border-black">
                    <SelectValue
                      placeholder={filter.label}
                      className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-[7px] text-center tracking-[0] leading-[9.8px]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">옵션1</SelectItem>
                    <SelectItem value="option2">옵션2</SelectItem>
                  </SelectContent>
                </Select>
              ))}
            </div>
          </div>

          {/* Review Summary */}
          <div className="flex items-center justify-center gap-8 mb-[41px]">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 mb-3">
                <img
                  className="w-[50px] h-[46px]"
                  alt="Christmas ornament"
                  src="https://c.animaapp.com/mff2qbyw3RVLUM/img/christmas-ornament-13116937-2.png"
                />
                <span className="[font-family:'Inter',Helvetica] font-normal text-black text-[35px] text-center tracking-[0] leading-[49px]">
                  5.0
                </span>
              </div>
              <p className="[font-family:'Inter',Helvetica] font-normal text-black text-[10px] text-center tracking-[0] leading-[14px] mb-4">
                100% 구매자가 이 상품을 좋아합니다.
              </p>
              <Button className="bg-[#222222] hover:bg-[#333333] text-white rounded-[5px] h-[22px] px-4">
                <span className="[font-family:'Inter',Helvetica] font-bold text-white text-[10px] text-center tracking-[0] leading-[14px]">
                  리뷰 작성하기
                </span>
              </Button>
              <img
                className="w-[100px] h-[82px] mt-4"
                alt="Slice"
                src="https://c.animaapp.com/mff2qbyw3RVLUM/img/slice-2.svg"
              />
            </div>

            <Separator orientation="vertical" className="h-[200px]" />

            {/* Individual Reviews */}
            <div className="space-y-[94px]">
              {reviews.map((review, index) => (
                <Card key={index} className="border-none shadow-none">
                  <CardContent className="flex gap-4 p-0">
                    <div className="w-[70px] h-16 bg-[#d9d9d9] flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-2">
                        {starRatings.map((_, starIndex) => (
                          <StarIcon
                            key={starIndex}
                            className="w-[21px] h-[21px] fill-current text-yellow-400"
                          />
                        ))}
                        <span className="[font-family:'Inter',Helvetica] font-bold text-black text-[8px] tracking-[0] leading-[11.2px] ml-2">
                          {review.title}
                        </span>
                      </div>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-black text-[8px] tracking-[0] leading-[11.2px] whitespace-pre-line">
                        {review.content}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
