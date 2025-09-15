// src/routes/Screen120/screens/Screen.jsx
import React, { useMemo, useState, useEffect } from "react";
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
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({
    productName: "",
    description: "",
    price: "",
    deliveryPrice: ""
  });

  // 상품 데이터 가져오기
  useEffect(() => {
    if (state?.product) {
      setProduct(state.product);
      // 수정 폼 초기화
      setEditForm({
        productName: state.product.productName || "",
        description: state.product.description || "",
        price: state.product.price?.toString() || "",
        deliveryPrice: state.product.deliveryPrice?.toString() || ""
      });
    } else {
      // 기본 더미 데이터
      const dummyProduct = {
        productNum: "123456789",
        productName: "여름블루 롱 원피스",
        description: "상품 설명을 입력합니다. 상품 설명을 입력합니다. 상품 설명을 입력합니다.\n상품 설명을 입력합니다. 상품 설명을 입력합니다. 상품 설명을 입력합니다.",
        price: 50000,
        deliveryPrice: 3500,
        mainImage: "https://c.animaapp.com/mfey8x558kisvz/img/image-1-2.png",
        productDetails: [
          { color: "Black", size: "S", count: 10 },
          { color: "Black", size: "M", count: 15 },
          { color: "White", size: "S", count: 8 },
          { color: "White", size: "M", count: 12 },
          { color: "Red", size: "L", count: 5 }
        ]
      };
      setProduct(dummyProduct);
      setEditForm({
        productName: dummyProduct.productName,
        description: dummyProduct.description,
        price: dummyProduct.price.toString(),
        deliveryPrice: dummyProduct.deliveryPrice.toString()
      });
    }
  }, [state]);

  // 선택된 색상과 사이즈에 따른 수량 관리
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCount, setSelectedCount] = useState(0);
  const [inputCount, setInputCount] = useState("");

  // 상품 데이터가 로드되면 첫 번째 색상으로 초기화
  useEffect(() => {
    if (product?.productDetails?.length > 0) {
      const firstColor = product.productDetails[0].color;
      setSelectedColor(firstColor);
      const firstSize = product.productDetails.find(d => d.color === firstColor)?.size || "";
      setSelectedSize(firstSize);
      const firstCount = product.productDetails.find(d => d.color === firstColor && d.size === firstSize)?.count || 0;
      setSelectedCount(firstCount);
      setInputCount(firstCount.toString());
    }
  }, [product]);

  // 선택된 색상에 따른 사이즈 목록
  const availableSizes = useMemo(() => {
    if (!product?.productDetails || !selectedColor) return [];
    return [...new Set(
      product.productDetails
        .filter(d => d.color === selectedColor)
        .map(d => d.size)
    )];
  }, [product, selectedColor]);

  // 선택된 색상과 사이즈에 따른 수량
  const currentCount = useMemo(() => {
    if (!product?.productDetails || !selectedColor || !selectedSize) return 0;
    const detail = product.productDetails.find(d => d.color === selectedColor && d.size === selectedSize);
    return detail?.count || 0;
  }, [product, selectedColor, selectedSize]);

  // 색상이나 사이즈가 변경될 때 input 값 업데이트
  useEffect(() => {
    setInputCount(currentCount.toString());
  }, [currentCount]);

  // 색상 선택 시 사이즈 초기화
  const handleColorChange = (color) => {
    setSelectedColor(color);
    const firstSize = product.productDetails.find(d => d.color === color)?.size || "";
    setSelectedSize(firstSize);
  };

  // 사이즈 선택 시 수량 업데이트
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  // input 값 변경 처리
  const handleInputCountChange = (e) => {
    setInputCount(e.target.value);
  };

  // 수량 수정 (input에서 직접 입력)
  const handleCountUpdate = async () => {
    const newCount = parseInt(inputCount);
    if (isNaN(newCount) || newCount < 0) {
      alert("올바른 수량을 입력해주세요.");
      setInputCount(currentCount.toString());
      return;
    }
    
    setSaving(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:8080/api/product-details/update-count`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          productNum: product.productNum,
          color: selectedColor,
          size: selectedSize,
          count: newCount
        }),
      });

      if (response.ok) {
        // 로컬 상태 업데이트
        setProduct(prev => ({
          ...prev,
          productDetails: prev.productDetails.map(d => 
            d.color === selectedColor && d.size === selectedSize 
              ? { ...d, count: newCount }
              : d
          )
        }));
        setSelectedCount(newCount);
        alert("수량이 수정되었습니다.");
      } else {
        alert("수량 수정에 실패했습니다.");
        setInputCount(currentCount.toString());
      }
    } catch (error) {
      console.error("수량 수정 오류:", error);
      alert("수량 수정 중 오류가 발생했습니다.");
      setInputCount(currentCount.toString());
    } finally {
      setSaving(false);
    }
  };

  // 사용 가능한 색상 목록
  const availableColors = useMemo(() => {
    if (!product?.productDetails) return [];
    return [...new Set(product.productDetails.map(d => d.color))];
  }, [product]);

  // 수정 폼 입력 처리
  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 상품 정보 수정
  const handleProductUpdate = async () => {
    if (!product?.productNum) {
      alert("상품 정보를 찾을 수 없습니다.");
      return;
    }

    setSaving(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:8080/api/products/${product.productNum}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          productNum: product.productNum,
          userNum: product.userNum,
          productName: editForm.productName,
          description: editForm.description,
          price: parseInt(editForm.price),
          deliveryPrice: parseInt(editForm.deliveryPrice),
          mainImage: product.mainImage,
          gender: product.gender,
          category: product.category,
          categoryLow: product.categoryLow
        }),
      });

      if (response.ok) {
        const updatedProduct = await response.json();
        setProduct(updatedProduct);
        setShowEditModal(false);
        alert("상품 정보가 수정되었습니다.");
      } else {
        alert("상품 수정에 실패했습니다.");
      }
    } catch (error) {
      console.error("상품 수정 오류:", error);
      alert("상품 수정 중 오류가 발생했습니다.");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = () => {
    setShowEditModal(true);
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
              src={product?.mainImage && product.mainImage !== "default.jpg" 
                ? `http://localhost:8080${product.mainImage}` 
                : "https://c.animaapp.com/mfey8x558kisvz/img/image-1-2.png"}
              alt={product?.productName}
              className="w-[420px] h-[560px] object-cover"
            />
          </div>

          {/* 우측: 정보 */}
          <div className="col-span-7">
            <h1 className="mb-2 [font-family:'SF_Pro-Bold',Helvetica] text-[28px]">
              {product?.productName}
            </h1>
            <p className="text-[13px] text-[#333] whitespace-pre-line">
              {product?.description}
            </p>

            <div className="mt-8 space-y-5 text-[14px]">
              <div className="flex">
                <div className="w-20 text-[#666]">가격</div>
                <div className="font-medium">{product?.price?.toLocaleString()} 원</div>
              </div>

              <div className="flex">
                <div className="w-20 text-[#666]">배송비</div>
                <div>{product?.deliveryPrice?.toLocaleString()} 원</div>
              </div>

              <div className="flex items-center">
                <div className="w-20 text-[#666]">색상</div>
                <div className="flex gap-2">
                  {availableColors.map((color) => (
                    <Button
                      key={color}
                      variant={color === selectedColor ? "default" : "outline"}
                      className={`h-7 px-3 rounded-none ${color === selectedColor ? "bg-[#444] hover:bg-[#333]" : ""}`}
                      onClick={() => handleColorChange(color)}
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-20 text-[#666]">사이즈</div>
                <select
                  value={selectedSize}
                  onChange={(e) => handleSizeChange(e.target.value)}
                  className="border border-[#c9c9c9] h-8 px-2"
                >
                  <option value="">사이즈 선택</option>
                  {availableSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center">
                <div className="w-20 text-[#666]">수량</div>
                <div className="flex items-center gap-3">
                  <Input
                    type="number"
                    value={inputCount}
                    onChange={handleInputCountChange}
                    className="w-20 h-8 text-center"
                    min="0"
                  />
                  <Button
                    onClick={handleCountUpdate}
                    disabled={saving}
                    className="h-8 px-3 bg-[#6c6c6c] hover:bg-[#5b5b5b] rounded-none text-white"
                  >
                    {saving ? "저장 중..." : "수정"}
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

        {/* 수정 모달 */}
        {showEditModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg w-[500px] max-h-[80vh] overflow-y-auto">
              <h2 className="text-xl font-bold mb-6">상품 정보 수정</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">상품명</label>
                  <Input
                    name="productName"
                    value={editForm.productName}
                    onChange={handleEditFormChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">상품 설명</label>
                  <textarea
                    name="description"
                    value={editForm.description}
                    onChange={handleEditFormChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 h-24 resize-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">가격 (원)</label>
                  <Input
                    name="price"
                    type="number"
                    value={editForm.price}
                    onChange={handleEditFormChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">배송비 (원)</label>
                  <Input
                    name="deliveryPrice"
                    type="number"
                    value={editForm.deliveryPrice}
                    onChange={handleEditFormChange}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <Button
                  onClick={handleProductUpdate}
                  disabled={saving}
                  className="flex-1 bg-[#6c6c6c] hover:bg-[#5b5b5b] rounded-none"
                >
                  {saving ? "저장 중..." : "저장"}
                </Button>
                <Button
                  onClick={() => setShowEditModal(false)}
                  variant="outline"
                  className="flex-1 rounded-none"
                >
                  취소
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Screen;
