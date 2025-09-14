// src/routes/Screen126/screens/Screen.jsx
import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { MicIcon, SearchIcon } from "lucide-react";

export const Screen = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

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
    return { ...fallback, ...p, price: p.price || fallback.price };
  }, [state]);

  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(2);

  // 결제 모달 상태
  const [openPay, setOpenPay] = useState(false);
  const [payPwd, setPayPwd] = useState("");
  const [payErr, setPayErr] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const openPayModal = () => {
    // 예: 옵션 필수 검증
    // if (!size) return alert("사이즈를 선택하세요.");
    setOpenPay(true);
  };

  const confirmPay = async () => {
    setPayErr("");
    if (!payPwd || payPwd.length < 4) {
      setPayErr("결제 비밀번호를 4자리 이상 입력하세요.");
      return;
    }
    try {
      setSubmitting(true);
      // TODO: 실제 결제 API 호출 위치
      // await api.pay({ pwd: payPwd, productId: product.id, qty, option: { color, size } });

      const d = new Date();
      const orderedAt = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(
        d.getDate()
      ).padStart(2, "0")}`;

      // 주문완료 페이지로 이동 (state로 정보 전달)
      navigate("/payment", {
        state: {
          productName: product.name,
          buyerName: "홍길동",
          orderedAt,
        },
      });
    } finally {
      setSubmitting(false);
      setOpenPay(false);
      setPayPwd("");
    }
  };

  return (
    <div className="bg-white grid justify-items-center w-screen min-h-screen">
      <div className="bg-white w-full max-w-[1440px] min-h-[1080px] relative">
        {/* 뒤로 */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-[20px] left-[24px] w-[42px] h-[42px] rounded-full bg-[#f3f3f3] hover:bg-[#e9e9e9]"
          onClick={() => navigate(-1)}
          aria-label="뒤로가기"
        >
          <span className="text-xl">◀</span>
        </Button>

        {/* 우상단 네비 + 검색 */}
        <nav className="absolute top-[28px] right-[80px]">
          <div className="flex gap-4 text-[15px] leading-[21px]">
            {["로그인", "회원가입", "장바구니", "마이페이지", "커뮤니티"].map((item) => (
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
            ))}
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

        {/* 로고 */}
        <div className="pt-[110px] pb-6 text-center">
          <div className="text-[10px] text-[#111]">당신만을 위한 옷장</div>
          <div className="text-[26px] leading-[36px] text-[#111]">MY SALON</div>
          <img
            className="w-[66px] h-[66px] mx-auto mt-2"
            alt="Main icon"
            src="https://c.animaapp.com/mfexf5h1OzNezT/img/main-icon-1.png"
          />
        </div>

        {/* 본문: 좌 이미지 / 우 정보 */}
        <div className="grid grid-cols-12 gap-10 px-[100px]">
          <div className="col-span-5 flex justify-center">
            <div className="w-[480px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>

          <div className="col-span-7">
            <h1 className="text-[28px] font-semibold text-[#222] mb-[10px]">
              {product.name}
            </h1>
            <p className="text-[13px] text-[#666] leading-[20px] mb-[18px]">
              {product.desc}
            </p>
            {/* Separator 대체 */}
            <div className="h-px w-full bg-[#e5e7eb] mb-[18px]" />

            <div className="text-[15px] space-y-[14px]">
              <div className="flex items-center">
                <div className="w-[90px] text-[#333]">가격</div>
                <div className="text-[#111]">{product.price}</div>
              </div>
              <div className="flex items-center">
                <div className="w-[90px] text-[#333]">배송비</div>
                <div className="text-[#111]">{product.shipFee}</div>
              </div>

              {/* 색상 */}
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

              {/* 사이즈 */}
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
            <div className="h-px w-full bg-[#e5e7eb] mt-[18px] mb-[14px]" />

            {/* TOTAL + 구매하기 */}
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
                {/* 구매하기 → 모달 오픈 */}
                <Button
                  className="w-[230px] h-[48px] rounded-none bg-[#b9b9b9] text-white text-[16px] hover:bg-[#a4a4a4]"
                  onClick={openPayModal}
                >
                  구매하기
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <div className="text-center text-[#828282] text-[13px] mt-[50px] mb-[20px]">
          © MY SALON
        </div>
      </div>

      {/* 결제 비밀번호 모달 */}
      {openPay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => !submitting && setOpenPay(false)}
          />
          <div className="relative z-10 w-full max-w-[420px] bg-white rounded-xl shadow-xl p-6">
            <h3 className="text-lg font-semibold mb-2">결제 확인</h3>
            <p className="text-sm text-[#666] mb-4">결제 비밀번호를 입력하세요.</p>

            <label className="text-sm text-[#333] block mb-2">결제 비밀번호</label>
            <Input
              type="password"
              value={payPwd}
              onChange={(e) => setPayPwd(e.target.value)}
              placeholder="****"
              className="mb-2"
              disabled={submitting}
            />
            {payErr && <div className="text-[12px] text-red-500 mb-2">{payErr}</div>}

            <div className="mt-4 flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setOpenPay(false)}
                disabled={submitting}
                className="rounded-none"
              >
                취소
              </Button>
              <Button
                onClick={confirmPay}
                disabled={submitting}
                className="bg-[#111] text-white rounded-none hover:bg-[#222]"
              >
                {submitting ? "처리중..." : "결제하기"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Screen;
