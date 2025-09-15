// src/routes/Screen126/screens/Screen.jsx
import React, { useMemo, useState, useMemo as useReactMemo, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { MicIcon, SearchIcon } from "lucide-react";

export const Screen = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { productNum } = useParams();

  // --- 상품 상태 ---
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState([]);

  // --- 옵션/수량 ---
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  // --- 상품 정보 로드 ---
  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      try {
        // URL 파라미터에서 productNum 가져오기 (우선순위)
        const targetProductNum = productNum || state?.product?.productNum;
        
        if (targetProductNum) {
          // 백엔드에서 상품 상세 정보 가져오기
          const response = await fetch(`http://localhost:8080/api/products/detail/${targetProductNum}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            const productData = await response.json();
            setProduct(productData);
            setProductDetails(productData.productDetails || []);
            
            // 첫 번째 색상으로 초기화
            if (productData.productDetails && productData.productDetails.length > 0) {
              const firstColor = productData.productDetails[0].color;
              setSelectedColor(firstColor);
            }
          } else {
            // 실패 시 state 데이터 사용 (있는 경우)
            if (state?.product) {
              setProduct(state.product);
              setProductDetails([]);
            } else {
              // 기본값 사용
              const fallback = {
                productNum: parseInt(targetProductNum) || 1,
                productName: "상품이름",
                price: 500000,
                deliveryFee: 3500,
                mainImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop",
                description: "상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다.",
                productDetails: [
                  { color: "Black", size: "S", count: 10 },
                  { color: "Black", size: "M", count: 15 },
                  { color: "White", size: "S", count: 8 },
                  { color: "White", size: "M", count: 12 },
                  { color: "Red", size: "L", count: 5 },
                ]
              };
              setProduct(fallback);
              setProductDetails(fallback.productDetails);
              setSelectedColor(fallback.productDetails[0].color);
            }
          }
        } else {
          // productNum이 없는 경우 기본값 사용
          const fallback = {
            productNum: 1,
            productName: "상품이름",
            price: 500000,
            deliveryFee: 3500,
            mainImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop",
            description: "상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다.",
            productDetails: [
              { color: "Black", size: "S", count: 10 },
              { color: "Black", size: "M", count: 15 },
              { color: "White", size: "S", count: 8 },
              { color: "White", size: "M", count: 12 },
              { color: "Red", size: "L", count: 5 },
            ]
          };
          setProduct(fallback);
          setProductDetails(fallback.productDetails);
          setSelectedColor(fallback.productDetails[0].color);
        }
      } catch (error) {
        console.error("상품 정보 로드 실패:", error);
        // 에러 시 기본값 사용
        const fallback = {
          productNum: parseInt(productNum) || 1,
          productName: "상품이름",
          price: 500000,
          deliveryFee: 3500,
          mainImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop",
          description: "상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다. 상품 설명 입니다.",
          productDetails: [
            { color: "Black", size: "S", count: 10 },
            { color: "Black", size: "M", count: 15 },
            { color: "White", size: "S", count: 8 },
            { color: "White", size: "M", count: 12 },
            { color: "Red", size: "L", count: 5 },
          ]
        };
        setProduct(fallback);
        setProductDetails(fallback.productDetails);
        setSelectedColor(fallback.productDetails[0].color);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [productNum, state]);

  // 사용 가능한 색상 목록
  const availableColors = useMemo(() => {
    const colors = [...new Set(productDetails.map(detail => detail.color))];
    return colors;
  }, [productDetails]);

  // 선택된 색상에 따른 사용 가능한 사이즈 목록
  const availableSizes = useMemo(() => {
    if (!selectedColor) return [];
    const sizes = productDetails
      .filter(detail => detail.color === selectedColor)
      .map(detail => detail.size);
    return [...new Set(sizes)];
  }, [productDetails, selectedColor]);

  // 색상 변경 시 사이즈 초기화
  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedSize("");
  };

  // 사이즈 변경
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  // --- 결제 모달 상태 ---
  const [openPay, setOpenPay] = useState(false);
  const [payPwd, setPayPwd] = useState("");
  const [payErr, setPayErr] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const openPayModal = () => {
    // 옵션 필수 검증
    if (!selectedColor) {
      alert("색상을 선택하세요.");
      return;
    }
    if (!selectedSize) {
      alert("사이즈를 선택하세요.");
      return;
    }
    if (quantity < 1) {
      alert("수량을 입력하세요.");
      return;
    }
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
      
      // 주문 정보 생성
      const orderData = {
        productNum: product.productNum,
        productName: product.productName,
        price: product.price,
        deliveryFee: product.deliveryFee,
        color: selectedColor,
        size: selectedSize,
        quantity: quantity,
        totalPrice: (product.price * quantity) + product.deliveryFee,
        buyerName: "홍길동", // 실제로는 로그인한 사용자 정보 사용
        buyerNum: 1, // 실제로는 로그인한 사용자 번호 사용
      };

      // TODO: 실제 주문 API 호출
      // const response = await fetch("http://localhost:8080/api/orders", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(orderData)
      // });

      const d = new Date();
      const orderedAt = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(
        2,
        "0"
      )}.${String(d.getDate()).padStart(2, "0")}`;

      navigate("/payment", {
        state: {
          ...orderData,
          orderedAt,
        },
      });
    } finally {
      setSubmitting(false);
      setOpenPay(false);
      setPayPwd("");
    }
  };

  // =========================
  //        REVIEW 섹션
  // =========================
  // 더미 리뷰 데이터 (id, rating 1~5, text, createdAt ISO)
  const [reviews, setReviews] = useState([
    {
      id: 1,
      rating: 5,
      text:
        "핏이 예쁘고 소재도 만족합니다. 배송도 빠르고 사진과 동일했어요. 다음에도 재구매 의사 있습니다.",
      createdAt: "2025-09-05T13:20:00Z",
      hasImage: true,
    },
    {
      id: 2,
      rating: 4,
      text:
        "여름에 시원하게 입기 좋아요. 다만 배송 패키지는 좀 더 개선되면 좋겠습니다.",
      createdAt: "2025-09-01T09:10:00Z",
      hasImage: false,
    },
    {
      id: 3,
      rating: 5,
      text:
        "사진과 동일하고 옷 재질이 기대보다 너무 좋아요. 무엇보다 핏이 정말로 예뻤습니다!",
      createdAt: "2025-08-28T18:45:00Z",
      hasImage: true,
    },
  ]);

  // 정렬 상태: latest | rating
  const [sortKey, setSortKey] = useState("latest");

  const avgRating = useReactMemo(() => {
    if (!reviews.length) return 0;
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return Math.round((sum / reviews.length) * 10) / 10; // 소수 1자리
  }, [reviews]);

  const likePercent = useReactMemo(() => {
    if (!reviews.length) return 0;
    const liked = reviews.filter((r) => r.rating >= 4).length;
    return Math.round((liked / reviews.length) * 100);
  }, [reviews]);

  const sortedReviews = useReactMemo(() => {
    const arr = [...reviews];
    if (sortKey === "rating") {
      arr.sort((a, b) => b.rating - a.rating || new Date(b.createdAt) - new Date(a.createdAt));
    } else {
      // latest
      arr.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    return arr;
  }, [reviews, sortKey]);

  const deleteReview = (id) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  const renderStars = (rating) => "★★★★★☆☆☆☆☆".slice(5 - Math.round(rating), 10 - Math.round(rating));

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
              {loading ? (
                <div className="w-full aspect-[4/5] bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-500">로딩 중...</div>
                </div>
              ) : (
                <img
                  src={product?.mainImage && product.mainImage !== "default.jpg" 
                    ? `http://localhost:8080${product.mainImage}` 
                    : "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop"}
                  alt={product?.productName || "상품 이미지"}
                  className="w-full aspect-[4/5] object-cover"
                />
              )}
            </div>
          </div>

          <div className="col-span-7">
            {loading ? (
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
              </div>
            ) : (
              <>
                <h1 className="text-[28px] font-semibold text-[#222] mb-[10px]">
                  {product?.productName || "상품이름"}
                </h1>
                <p className="text-[13px] text-[#666] leading-[20px] mb-[18px]">
                  {product?.description || "상품 설명이 없습니다."}
                </p>
                {/* 구분선 */}
                <div className="h-px w-full bg-[#e5e7eb] mb-[18px]" />

                <div className="text-[15px] space-y-[14px]">
                  <div className="flex items-center">
                    <div className="w-[90px] text-[#333]">가격</div>
                    <div className="text-[#111]">{product?.price?.toLocaleString()}원</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-[90px] text-[#333]">배송비</div>
                    <div className="text-[#111]">{product?.deliveryFee?.toLocaleString()}원</div>
                  </div>

                  {/* 색상 */}
                  <div className="flex items-center">
                    <div className="w-[90px] text-[#333]">색상</div>
                    <div className="flex gap-2">
                      {availableColors.map((color) => (
                        <button
                          key={color}
                          onClick={() => handleColorChange(color)}
                          className={`px-3 h-[28px] border rounded text-[13px] ${
                            selectedColor === color ? "bg-[#111] text-white" : "bg-white"
                          }`}
                          title={color}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 사이즈 */}
                  <div className="flex items-center">
                    <div className="w-[90px] text-[#333]">사이즈</div>
                    <select
                      value={selectedSize}
                      onChange={(e) => handleSizeChange(e.target.value)}
                      className="w-[270px] h-[30px] border rounded px-2 text-[13px] text-[#444]"
                    >
                      <option value="">[-필수] 옵션을 선택하세요-</option>
                      {availableSizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
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
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      >
                        -
                      </button>
                      <span className="min-w-[24px] text-center">{quantity}</span>
                      <button
                        className="w-6 h-6 border rounded"
                        onClick={() => setQuantity((q) => q + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* 구분선 */}
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
                    <Button
                      className="w-[230px] h-[48px] rounded-none bg-[#b9b9b9] text-white text-[16px] hover:bg-[#a4a4a4]"
                      onClick={openPayModal}
                    >
                      구매하기
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* =========================
                REVIEW 섹션
        ========================= */}
        <div className="mt-[60px] px-[100px]">
          <h2 className="text-[20px] font-semibold mb-3">REVIEW</h2>

          {/* 상단 라인 + 필터 바 */}
          <div className="border-t pt-[10px] flex items-center flex-wrap gap-3 text-[12px] text-[#666]">
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="sort"
                checked={sortKey === "latest"}
                onChange={() => setSortKey("latest")}
              />
              최신순
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="sort"
                checked={sortKey === "rating"}
                onChange={() => setSortKey("rating")}
              />
              평점순
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

          {/* 좌측 평점 카드 + 우측 리뷰 리스트 */}
          <div className="grid grid-cols-12 gap-8 mt-6">
            {/* 좌측 별/점수/작성 버튼 */}
            <div className="col-span-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-[32px]">⭐</div>
                <div className="text-[28px] font-semibold">{avgRating.toFixed(1)}</div>
              </div>
              <div className="text-[12px] text-[#666] mb-3">
                {likePercent}% 구매자가 이 상품을 좋아합니다.
              </div>
              <Button
                variant="outline"
                className="w-[160px] h-[34px] rounded-none text-[13px]"
                onClick={() => navigate("/review")}
              >
                리뷰 작성하기
              </Button>
            </div>

            {/* 우측 리뷰 리스트 */}
            <div className="col-span-8 space-y-5">
              {sortedReviews.map((r) => (
                <div key={r.id} className="flex gap-4 items-start border p-4">
                  <div className="w-[64px] h-[64px] bg-[#e5e5e5] flex items-center justify-center text-xs">
                    {r.hasImage ? "IMG" : "NO\nIMG"}
                  </div>
                  <div className="flex-1">
                    <div className="text-[13px]">
                      {"★".repeat(r.rating)}
                      {"☆".repeat(5 - r.rating)}{" "}
                      {r.rating >= 4 ? "아주 좋아요" : r.rating === 3 ? "보통이에요" : "별로예요"}
                    </div>
                    <div className="text-[12px] text-[#666] leading-[18px] whitespace-pre-wrap">
                      {r.text}
                    </div>
                    <div className="text-[11px] text-[#999] mt-1">
                      {new Date(r.createdAt).toLocaleDateString("ko-KR")}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="h-8 rounded-none"
                    onClick={() => deleteReview(r.id)}
                  >
                    삭제
                  </Button>
                </div>
              ))}

              {!sortedReviews.length && (
                <div className="text-sm text-[#666]">아직 리뷰가 없습니다.</div>
              )}
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