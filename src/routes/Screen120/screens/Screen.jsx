// src/routes/Screen120/screens/Screen.jsx
import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { MenuIcon, SearchIcon } from "lucide-react";

/**
 * 판매자용 상품 상세 페이지
 * - AdminMyPage에서 navigate("/screen120", { state: { product } }) 로 진입
 * - product가 없을 때도 기본 더미 데이터로 안전하게 렌더
 */
export const Screen = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const product = useMemo(
    () =>
      state?.product ?? {
        id: "123456789",
        name: "여름블루 롱 원피스",
        description:
          "상품 설명을 입력합니다. 상품 설명을 입력합니다. 상품 설명을 입력합니다.\n상품 설명을 입력합니다. 상품 설명을 입력합니다. 상품 설명을 입력합니다.",
        price: "50,000 원",
        shipping: "3,500원",
        colors: ["Black", "White", "Red"],
        sizes: ["S", "M", "L"],
        qty: 2,
        image: "https://c.animaapp.com/mfey8x558kisvz/img/image-1-2.png",
      },
    [state]
  );

  const [color, setColor] = useState(product.colors?.[0] ?? "");
  const [size, setSize] = useState(product.sizes?.[0] ?? "");
  const [qty, setQty] = useState(product.qty ?? 1);

  const inc = () => setQty((n) => Math.min(99, n + 1));
  const dec = () => setQty((n) => Math.max(1, n - 1));

  const handleEdit = () => {
    // 여기서 수정 페이지로 이동하거나 모달을 띄우는 등 원하는 액션 연결
    alert("수정하기 눌림 (원하는 액션으로 연결하세요)");
  };

  const topNavItems = [
    { name: "로그인", onClick: () => navigate("/login") },
    { name: "회원가입", onClick: () => navigate("/signup") },
    { name: "장바구니", onClick: () => navigate("/cart") },
    // 판매자는 마이페이지를 /admin-mypage로 고정
    { name: "마이페이지", onClick: () => navigate("/admin-mypage") },
    { name: "커뮤니티", onClick: () => navigate("/") },
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="max-w-[1440px] mx-auto bg-white relative pb-24">
        {/* 상단 바 */}
        <header className="h-[140px] relative">
          {/* 햄버거 */}
          <Button
            variant="ghost"
            className="absolute top-4 left-6 w-[58px] h-[58px] bg-neutral-100 rounded-[29px] p-0 hover:bg-neutral-200"
            onClick={() => navigate(-1)}
            aria-label="뒤로가기"
          >
            <MenuIcon className="w-6 h-6" />
          </Button>

          {/* 우상단 링크 */}
          <nav className="absolute top-[22px] right-[120px]">
            <div className="flex gap-4 [font-family:'Crimson_Text',Helvetica] text-[15px] leading-[21px]">
              {topNavItems.map((item) => (
                <button
                  key={item.name}
                  onClick={item.onClick}
                  className="text-black hover:underline"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>

          {/* 검색 */}
          <div className="absolute top-[52px] right-[24px] w-[296px] h-16">
            <div className="flex w-full h-16 items-center">
              <div className="flex items-center p-[11px] w-full bg-[#78788029] rounded-[100px]">
                <div className="flex items-center gap-2 flex-1">
                  <SearchIcon className="w-4 h-4 text-[#999999]" />
                  <Input
                    placeholder="Search"
                    className="border-0 bg-transparent text-[#999999] text-[17px] leading-[22px] placeholder:text-[#999999] focus-visible:ring-0 h-auto p-0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 로고 */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 text-center">
            <div className="[font-family:'SF_Pro-Regular',Helvetica] text-[11px]">
              당신만을 위한 옷장
            </div>
            <div className="[font-family:'SF_Pro-Regular',Helvetica] text-[26px]">
              MY SALON
            </div>
            <img
              className="mx-auto mt-1 w-[66px] h-[66px]"
              alt="Main icon"
              src="https://c.animaapp.com/mfey8x558kisvz/img/main-icon-1.png"
            />
          </div>
        </header>

        {/* 본문 */}
        <main className="grid grid-cols-12 gap-10 px-12 mt-6">
          {/* 좌측: 상품 이미지 */}
          <div className="col-span-5 flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-[420px] h-[560px] object-cover"
            />
          </div>

          {/* 우측: 정보 */}
          <div className="col-span-7">
            <h1 className="mb-2 [font-family:'SF_Pro-Bold',Helvetica] text-[28px]">
              {product.name}
            </h1>
            <p className="text-[13px] text-[#333] whitespace-pre-line">
              {product.description}
            </p>

            <div className="mt-8 space-y-5 text-[14px]">
              <div className="flex">
                <div className="w-20 text-[#666]">가격</div>
                <div className="font-medium">{product.price}</div>
              </div>

              <div className="flex">
                <div className="w-20 text-[#666]">배송비</div>
                <div>{product.shipping ?? "3,000원"}</div>
              </div>

              <div className="flex items-center">
                <div className="w-20 text-[#666]">색상</div>
                <div className="flex gap-2">
                  {product.colors?.map((c) => (
                    <Button
                      key={c}
                      variant={c === color ? "default" : "outline"}
                      className={`h-7 px-3 rounded-none ${
                        c === color ? "bg-[#444] hover:bg-[#333]" : ""
                      }`}
                      onClick={() => setColor(c)}
                    >
                      {c}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-20 text-[#666]">사이즈</div>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="border border-[#c9c9c9] h-8 px-2"
                >
                  {(product.sizes ?? ["S", "M", "L"]).map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center">
                <div className="w-20 text-[#666]">수량</div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    className="h-8 w-8 rounded-none"
                    onClick={dec}
                  >
                    -
                  </Button>
                  <span className="w-6 text-center">{qty}</span>
                  <Button
                    variant="outline"
                    className="h-8 w-8 rounded-none"
                    onClick={inc}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                className="w-[220px] h-[52px] bg-[#6c6c6c] hover:bg-[#5b5b5b] rounded-none"
                onClick={handleEdit}
              >
                수정하기
              </Button>
            </div>
          </div>

          {/* 리뷰 타이틀 줄 */}
          <div className="col-span-12 mt-12">
            <h2 className="text-xl font-semibold mb-3">REVIEW</h2>
            <div className="w-full h-px bg-[#d9d9d9]" />
          </div>

          {/* 간단 리뷰 레이아웃 (정적 더미) */}
          <div className="col-span-12 grid grid-cols-12 gap-8">
            <div className="col-span-3">
              <div className="text-[32px]">⭐ 5.0</div>
              <div className="text-xs text-[#777] mt-2">
                100% 구매자가 이 상품을 좋아합니다.
              </div>
              <Button
                variant="outline"
                className="mt-4 rounded-none"
                onClick={() => alert("리뷰 작성하기 (원하는 페이지로 연결)")}
              >
                리뷰 작성하기
              </Button>
            </div>
            <div className="col-span-9 space-y-6">
              {[1, 2].map((i) => (
                <div key={i} className="border p-4 flex gap-4">
                  <div className="w-20 h-20 bg-[#e9e9e9]" />
                  <div className="flex-1 text-sm text-[#333]">
                    <div className="mb-1">☆☆☆☆☆  아주 좋아요</div>
                    사진과 동일하고 옷 재질이 기대보다 너무 좋아요. 여름 수도 덥지 않은 재질로
                    시원해요. 무엇보다 핏이 정말로 예뻤습니다!
                  </div>
                  <Button variant="outline" className="h-8 rounded-none">
                    삭제
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Screen;