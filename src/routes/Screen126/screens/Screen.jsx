import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";
import { MicIcon, SearchIcon } from "lucide-react";

export const Screen = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // ---- 기본값 (홈에서 state 못받았을 때도 동일 UI 유지) ----
  const fallback = {
    name: "상품이름",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop",
    price: "500000원",
    shipFee: "3500원",
    colors: ["Black", "White", "Red"],
    sizes: ["S", "M", "L", "XL"],
    desc:
      "상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다.",
  };

  const product = useMemo(() => {
    const p = state?.product || {};
    return {
      ...fallback,
      ...p,
      // 홈의 price가 "50,000원" 등일 수 있으니 그대로 사용
      price: p.price || fallback.price,
    };
  }, [state]);

  // ---- 상태 ----
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(2);

  return (
    <div className="bg-white grid justify-items-center w-screen min-h-screen">
      <div className="bg-white w-full max-w-[1440px] min-h-[1080px] relative">
        {/* ◀︎ 뒤로 버튼 (좌상단 원형) */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-[20px] left-[24px] w-[42px] h-[42px] rounded-full bg-[#f3f3f3] hover:bg-[#e9e9e9]"
          onClick={() => navigate(-1)}
          aria-label="뒤로가기"
        >
          <span className="text-xl">◀</span>
        </Button>

        {/* 우측 상단 네비 + 검색바 */}
        <nav className="absolute top-[28px] right-[80px]">
          <div className="flex gap-4 text-[15px] leading-[21px]">
            {["로그인", "회원가입", "장바구니", "마이페이지", "커뮤니티"].map(
              (item) => (
                <button
                  key={item}
                  className="text-[#111] hover:underline"
                  onClick={() =>
                    navigate(
                      item === "로그인"
                        ? "/login"
                        : item === "회원가입"
                        ? "/signup"
                        : item === "장바구니"
                        ? "/cart"
                        : item === "마이페이지"
                        ? "/mypage"
                        : "/community"
                    )
                  }
                >
                  {item}
                </button>
              )
            )}
          </div>
        </nav>

        <div className="absolute top-[65px] right-[80px] w-[266px]">
          <div className="flex items-center p-[11px] bg-[#78788029] rounded-full">
            <div className="flex items-center gap-2 flex-1">
              <SearchIcon className="w-4 h-4 text-[#999999]" />
              <span className="text-[#999999] text-[17px]">Search</span>
            </div>
            <MicIcon className="w-4 h-4 text-[#999999]" />
          </div>
        </div>

        {/* 중앙 로고 */}
        <div className="pt-[110px] pb-6 text-center">
          <div className="text-[10px] text-[#111]">당신만을 위한 옷장</div>
          <div className="text-[26px] leading-[36px] text-[#111]">MY SALON</div>
          <img
            className="w-[66px] h-[66px] mx-auto mt-2"
            alt="Main icon"
            src="https://c.animaapp.com/mfexf5h1OzNezT/img/main-icon-1.png"
          />
        </div>

        {/* 본문 레이아웃: 좌 이미지 / 우 정보 */}
        <div className="grid grid-cols-12 gap-10 px-[100px]">
          {/* 좌측 제품 이미지 (스샷 비율에 맞춰 여백 포함) */}
          <div className="col-span-5 flex justify-center">
            <div className="w-[480px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>

          {/* 우측 상세 */}
          <div className="col-span-7">
            {/* 상품명 + 설명 */}
            <h1 className="text-[28px] font-semibold text-[#222] mb-[10px]">
              {product.name}
            </h1>
            <p className="text-[13px] text-[#666] leading-[20px] mb-[18px]">
              {product.desc}
            </p>
            <Separator className="mb-[18px]" />

            {/* 표 스타일 정보 영역 */}
            <div className="text-[15px] space-y-[14px]">
              <div className="flex items-center">
                <div className="w-[90px] text-[#333]">가격</div>
                <div className="text-[#111]">{product.price}</div>
              </div>
              <div className="flex items-center">
                <div className="w-[90px] text-[#333]">배송비</div>
                <div className="text-[#111]">{product.shipFee}</div>
              </div>

              {/* 색상 선택 버튼 (Black / White / Red) */}
              <div className="flex items-center">
                <div className="w-[90px] text-[#333]">색상</div>
                <div className="flex gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      className={`px-3 h-[28px] border rounded text-[13px] ${
                        color === c ? "bg-[#111] text-white" : "bg-white"
                      }`}
                      title={c}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* 사이즈 셀렉트 */}
              <div className="flex items-center">
                <div className="w-[90px] text-[#333]">사이즈</div>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-[270px] h-[30px] border rounded px-2 text-[13px] text-[#444]"
                >
                  <option value="">[-필수] 옵션을 선택하세요-</option>
                  {product.sizes.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* 수량 */}
              <div className="flex items-center">
                <div className="w-[90px] text-[#333]">수량</div>
                <div className="flex items-center gap-3">
                  <button
                    className="w-6 h-6 border rounded"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                  >
                    -
                  </button>
                  <span className="min-w-[24px] text-center">{qty}</span>
                  <button
                    className="w-6 h-6 border rounded"
                    onClick={() => setQty((q) => q + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* 라인 */}
            <div className="border-t mt-[18px] mb-[14px]" />

            {/* TOTAL + 아이콘 버튼 + 구매하기(회색) */}
            <div className="flex items-center">
              <div className="text-[14px] tracking-wide text-[#333]">TOTAL</div>
              <div className="flex-1" />
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  className="w-[48px] h-[42px] rounded-none"
                  title="위시리스트"
                  onClick={() => alert("위시리스트에 담았습니다.")}
                >
                  🤍
                </Button>
                <Button
                  variant="outline"
                  className="w-[48px] h-[42px] rounded-none"
                  title="장바구니"
                  onClick={() => navigate("/cart")}
                >
                  👜
                </Button>
                <Button
                  disabled
                  className="w-[230px] h-[48px] rounded-none bg-[#b9b9b9] text-white text-[16px]"
                >
                  구매하기
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* REVIEW 섹션 */}
        <div className="mt-[60px] px-[100px]">
          <h2 className="text-[20px] font-semibold mb-3">REVIEW</h2>

          {/* 상단 라인 + 필터 바 */}
          <div className="flex items-center gap-3 text-[12px] text-[#666] border-t pt-[10px]">
            <label className="flex items-center gap-1">
              <input type="radio" name="sort" defaultChecked /> 최신순
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="sort" /> 평점순
            </label>
            <select className="border rounded px-2 py-[2px]">
              <option>옵션 1</option>
              <option>옵션 2</option>
            </select>
            <select className="border rounded px-2 py-[2px]">
              <option>필터</option>
              <option>옵션</option>
            </select>
          </div>

          {/* 좌측 평점 카드 + 우측 리뷰 리스트 레이아웃 */}
          <div className="grid grid-cols-12 gap-8 mt-6">
            {/* 좌측 별/점수 */}
            <div className="col-span-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-[32px]">⭐</div>
                <div className="text-[28px] font-semibold">5.0</div>
              </div>
              <div className="text-[12px] text-[#666] mb-3">
                100% 구매자가 이 상품을 좋아합니다.
              </div>
              <Button
                variant="outline"
                className="w-[160px] h-[34px] rounded-none text-[13px]"
                onClick={() => navigate("/review")}
              >
                리뷰 작성하기
              </Button>
            </div>

            {/* 우측 리뷰 리스트 (목업 3개) */}
            <div className="col-span-8 space-y-5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-[64px] h-[64px] bg-[#e5e5e5]" />
                  <div className="flex-1">
                    <div className="text-[13px]">★★★★★ 아주 좋아요</div>
                    <div className="text-[12px] text-[#666] leading-[18px]">
                      핏이 예쁘고 소재도 만족합니다. 배송도 빠르고 사진과 동일했어요.
                      다음에도 재구매 의사 있습니다.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 푸터 간단 표기 */}
        <div className="text-center text-[#828282] text-[13px] mt-[50px] mb-[20px]">
          © MY SALON
        </div>
      </div>
    </div>
  );
};
