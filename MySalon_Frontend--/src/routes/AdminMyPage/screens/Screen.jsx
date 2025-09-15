// src/routes/AdminMyPage/screens/Screen.jsx
import { MenuIcon, SearchIcon } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

/* ===============================
   카테고리 매핑 (프론트 표시 ↔ 백엔드 코드)
   - 화면에는 영어 라벨을 보여주고
   - 전송은 백엔드 코드로 보냄
================================= */
// 백엔드 메인카테고리 코드 (질문에서 제공)
const backendCategoryMap = {
  "상의": "TOP",
  "바지": "BOTTOM",
  "아우터": "OUTERWEAR",
  "원피스/스커트": "DRESS_SKIRT",
  "ACC/BAG": "ACC_BAG",
  "홈웨어/속옷": "LOUNGEWEAR_UNDERWEAR",
  "키즈": "KIDS",
};

// 프론트 메인 라벨 → 백엔드용 한글키
const mainDisplayToKorean = {
  "Tops": "상의",
  "Bottoms": "바지",
  "Outerwear": "아우터",
  "Dress/Skirt": "원피스/스커트",
  "ACC/BAG": "ACC/BAG",
  "Loungewear/Underwear": "홈웨어/속옷",
  "Kids": "키즈",
};

// 세부 카테고리(프론트 라벨) → 백엔드 코드
const subDisplayToCode = {
  // 공통
  "All": null,
  "Others": "OTHER",

  // Tops
  "Short_Sleeve": "SHORT_SLEEVE",
  "Long_Sleeve": "LONG_SLEEVE",
  "Shirt_Blouse": "SHIRT_BLOUSE",
  "Knit_Sweater": "KNIT_SWEATER",
  "Sweatshirt_Hoodie": "SWEATSHIRT_HOODIE",

  // Outerwear
  "Cardigan": "CARDIGAN",
  "Jacket": "JACKET",
  "Coat": "COAT",

  // Bottoms
  "Shorts": "SHORTS",
  "Jeans": "JEANS",
  "Slacks": "SLACKS",

  // Dress/Skirt
  "Mini": "MINI",
  "Midi": "MIDI",
  "Long": "LONG",

  // ACC/BAG
  "Bag": "BAG",
  "Hat": "HAT",
  "Accessories": "ACCESSORY",

  // Loungewear/Underwear
  "Pajamas": "PAJAMAS",
  "Underwear": "UNDERWEAR",

  // Kids
  "Tops": "TOPS",
  "Bottoms": "BOTTOMS",
};

// 메인별 서브 목록(프론트 표기)
const subByMainDisplay = {
  "Tops": ["All", "Short_Sleeve", "Long_Sleeve", "Shirt_Blouse", "Knit_Sweater", "Sweatshirt_Hoodie", "Others"],
  "Outerwear": ["Cardigan", "Jacket", "Coat"],
  "Bottoms": ["Shorts", "Jeans", "Slacks"],
  "Dress/Skirt": ["Mini", "Midi", "Long"],
  "ACC/BAG": ["Bag", "Hat", "Accessories"],
  "Loungewear/Underwear": ["Pajamas", "Underwear"],
  "Kids": ["Tops", "Bottoms"],
};

// 드롭다운 컴포넌트 (박스 + 우측 ▾ 버튼)
function Dropdown({ label, value, onChange, options = [], width = 240 }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div className="relative" ref={ref} style={{ width }}>
      {label && <div className="text-sm text-[#444] mb-1">{label}</div>}
      <button
        type="button"
        className="h-[36px] w-full border rounded pl-3 pr-9 text-left text-sm bg-white hover:bg-gray-50"
        onClick={() => setOpen((v) => !v)}
      >
        <span className={value ? "text-[#111]" : "text-[#999]"}>{value || "선택하세요"}</span>
        <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">▾</span>
      </button>

      {open && (
        <ul className="absolute z-20 mt-1 w-full max-h-[240px] overflow-auto border rounded bg-white shadow">
          {options.map((opt) => (
            <li key={opt}>
              <button
                type="button"
                className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 ${
                  value === opt ? "bg-gray-50 text-[#111]" : "text-[#333]"
                }`}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** ================================
 *  상품 등록 폼
 *  (카테고리 드롭다운 + 옵션/이미지 + API 연동)
 *  ================================= */
const ProductRegisterForm = ({ onProductCreated }) => {
  // 폼 상태
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    shippingFee: "",
    image: null,
  });

  // 메인/세부 카테고리 (프론트 라벨 기준)
  const mainOptions = Object.keys(subByMainDisplay); // ["Tops", "Bottoms", ...]
  const [mainCatDisp, setMainCatDisp] = useState(mainOptions[0]); // 기본: Tops
  const [subCatDisp, setSubCatDisp] = useState(subByMainDisplay[mainOptions[0]][0]); // 기본: Tops의 첫 항목

  // 옵션(색상/사이즈/최대수량)
  const [variant, setVariant] = useState({ color: "", size: "", maxQty: "" });
  const [variants, setVariants] = useState([]);

  const onFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm((s) => ({ ...s, image: files?.[0] ?? null }));
    } else {
      setForm((s) => ({ ...s, [name]: value }));
    }
  };

  const onVariantChange = (e) => {
    const { name, value } = e.target;
    setVariant((s) => ({ ...s, [name]: value }));
  };

  const addVariant = () => {
    const { color, size, maxQty } = variant;
    if (!color.trim() || !size.trim() || !maxQty.trim()) {
      alert("색상, 사이즈, 최대수량을 모두 입력해주세요.");
      return;
    }
    const num = Number(maxQty);
    if (Number.isNaN(num) || num < 0) {
      alert("최대수량은 0 이상의 숫자여야 합니다.");
      return;
    }
    setVariants((prev) => [...prev, { ...variant, maxQty: num }]);
    setVariant({ color: "", size: "", maxQty: "" });
  };

  const removeVariant = (index) => setVariants((prev) => prev.filter((_, i) => i !== index));
  const editVariant = (v, idx) => { setVariant(v); removeVariant(idx); };

  // 실제 전송용 코드로 변환
  const getBackendCodes = () => {
    const koreanMain = mainDisplayToKorean[mainCatDisp];               // 예: "상의"
    const mainCode = backendCategoryMap[koreanMain] ?? null;           // 예: "TOP"
    const subCode = subDisplayToCode[subCatDisp] ?? null;              // 예: "SHORT_SLEEVE" (또는 null)
    return { koreanMain, mainCode, subCode };
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const userString = localStorage.getItem("user");
    if (!token || !userString) return alert("로그인이 필요합니다.");

    const user = JSON.parse(userString);
    const userNum = user?.userNum;
    if (!userNum) return alert("사용자 정보를 가져올 수 없습니다. 다시 로그인해주세요.");

    if (!form.name.trim()) return alert("상품이름을 입력하세요.");
    if (!form.price.trim()) return alert("가격을 입력하세요.");
    if (variants.length === 0) return alert("최소 1개 이상의 옵션을 추가해주세요.");

    const { mainCode, subCode } = getBackendCodes();

    try {
      if (form.image) {
        // 이미지 업로드 케이스 (FormData)
        const fd = new FormData();
        fd.append("userNum", userNum);
        fd.append("productName", form.name);
        fd.append("price", Number(form.price) || 0);
        fd.append("delivery_price", Number(form.shippingFee) || 0);
        fd.append("mainImage", form.image);
        fd.append("description", form.description);
        fd.append("gender", "");
        fd.append("category", mainCode ?? "");
        fd.append("categoryLow", subCode ?? "");
        fd.append(
          "productDetails",
          JSON.stringify(
            variants.map((v) => ({ color: v.color, size: v.size, count: v.maxQty }))
          )
        );

        const res = await fetch("http://localhost:8080/api/products/create-with-image", {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: fd,
        });

        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.message || "서버 오류");
        }
      } else {
        // 이미지 없음(JSON)
        const payload = {
          userNum,
          productName: form.name,
          price: Number(form.price) || 0,
          delivery_price: Number(form.shippingFee) || 0,
          mainImage: null,
          description: form.description,
          gender: null,
          category: mainCode,       // ✅ 백엔드 코드
          categoryLow: subCode,     // ✅ 백엔드 코드
          productDetails: variants.map((v) => ({
            color: v.color,
            size: v.size,
            count: v.maxQty,
          })),
        };

        const res = await fetch("http://localhost:8080/api/products/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.message || "서버 오류");
        }
      }

      alert("상품이 성공적으로 등록되었습니다.");
      // 폼 리셋
      setForm({ name: "", description: "", price: "", shippingFee: "", image: null });
      setVariants([]);
      setMainCatDisp(mainOptions[0]);
      setSubCatDisp(subByMainDisplay[mainOptions[0]][0]);
      if (onProductCreated) onProductCreated();
    } catch (error) {
      console.error("상품 등록 실패:", error);
      alert(`상품 등록 실패: ${error.message}`);
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-12 gap-12">
      {/* 좌측: 사진첨부 */}
      <div className="col-span-4">
        <div className="w-full aspect-[3/4] border border-[#d9d9d9] flex items-center justify-center text-[#555]">
          {form.image ? (
            <img src={URL.createObjectURL(form.image)} alt="preview" className="h-full object-cover" />
          ) : (
            <label className="cursor-pointer">
              <span>사진첨부</span>
              <input type="file" accept="image/*" name="image" onChange={onFormChange} className="hidden" />
            </label>
          )}
        </div>
      </div>

      {/* 우측: 입력 필드 */}
      <div className="col-span-8 space-y-4">
        {/* ▶ 상품이름 '위'에 카테고리 드롭다운 두 개 */}
        <div className="flex items-end gap-4">
          <Dropdown
            label="카테고리"
            value={mainCatDisp}
            options={mainOptions}
            width={220}
            onChange={(next) => {
              setMainCatDisp(next);
              setSubCatDisp(subByMainDisplay[next][0]);
            }}
          />
          <Dropdown
            label="세부 카테고리"
            value={subCatDisp}
            options={subByMainDisplay[mainCatDisp] || ["All"]}
            width={260}
            onChange={setSubCatDisp}
          />
        </div>

        <div className="flex items-center gap-4">
          <span className="w-24 text-sm text-[#444]">상품이름</span>
          <Input name="name" value={form.name} onChange={onFormChange} />
        </div>

        <div className="flex items-center gap-4">
          <span className="w-24 text-sm text-[#444]">상품설명</span>
          <Input name="description" value={form.description} onChange={onFormChange} />
        </div>

        <div className="flex items-center gap-4">
          <span className="w-24 text-sm text-[#444]">가격</span>
          <Input name="price" value={form.price} onChange={onFormChange} placeholder="예: 50000" />
        </div>

        <div className="flex items-center gap-4">
          <span className="w-24 text-sm text-[#444]">배송비</span>
          <Input name="shippingFee" value={form.shippingFee} onChange={onFormChange} placeholder="예: 3000" />
        </div>

        <hr className="my-4 border-t border-gray-300" />
        <p className="text-base font-medium text-gray-700">상품 옵션 등록</p>

        <div className="flex items-center gap-4">
          <span className="w-24 text-sm text-[#444]">색상</span>
          <Input name="color" value={variant.color} onChange={onVariantChange} placeholder="예: Blue" />
        </div>

        <div className="flex items-center gap-4">
          <span className="w-24 text-sm text-[#444]">사이즈</span>
          <Input name="size" value={variant.size} onChange={onVariantChange} placeholder="예: L" />
        </div>

        <div className="flex items-center gap-4">
          <span className="w-24 text-sm text-[#444]">최대수량</span>
          <div className="flex items-center gap-2 w-full max-w-[360px]">
            <Input
              name="maxQty"
              value={variant.maxQty}
              onChange={onVariantChange}
              placeholder="예: 120"
              inputMode="numeric"
            />
            <Button
              type="button"
              onClick={addVariant}
              className="h-[32px] px-3 bg-[#8b8b8b] hover:bg-[#6f6f6f] text-white rounded-none text-[12px] shrink-0"
            >
              옵션 추가
            </Button>
          </div>
        </div>

        {variants.length > 0 && (
          <div className="ml-[calc(6rem+1rem)] flex flex-wrap gap-2">
            {variants.map((v, i) => (
              <div key={i} className="flex items-center gap-2 px-2 py-1 border border-[#d1d1d1] text-[12px] bg-gray-50 rounded">
                <span className="cursor-pointer hover:font-semibold" onClick={() => editVariant(v, i)} title="클릭하여 수정">
                  {`색상: ${v.color}, 사이즈: ${v.size}, 수량: ${v.maxQty}`}
                </span>
                <button type="button" onClick={() => removeVariant(i)} className="text-[#888] hover:text-black" aria-label="remove">
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="pt-6">
          <Button type="submit" className="w-48 h-12 bg-[#828282] hover:bg-[#6e6e6e] rounded-none">
            등록하기
          </Button>
        </div>
      </div>
    </form>
  );
};

export const Screen = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("product-list");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // 로그인 사용자 상품 목록
  const fetchUserProducts = async () => {
    const token = localStorage.getItem("token");
    const userString = localStorage.getItem("user");
    if (!token || !userString) return;

    const user = JSON.parse(userString);
    const userNum = user?.userNum;
    if (!userNum) return;

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/api/products?userNum=${userNum}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "product-list") fetchUserProducts();
  }, [activeTab]);

  const refreshProductList = () => {
    if (activeTab === "product-list") fetchUserProducts();
  };

  const deleteProduct = async (productId) => {
    if (!confirm("정말로 이 상품을 삭제하시겠습니까?")) return;
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`http://localhost:8080/api/products/${productId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        alert("상품이 삭제되었습니다.");
        fetchUserProducts();
      } else {
        alert("상품 삭제에 실패했습니다.");
      }
    } catch (err) {
      console.error(err);
      alert("상품 삭제 중 오류가 발생했습니다.");
    }
  };

  const goToDetail = (product) => navigate("/screen120", { state: { product } });

  const navigationItems = [
    { id: "product-list", label: "상품 목록" },
    { id: "product-register", label: "상품 등록" },
    { id: "sales-list", label: "판매 목록" },
    { id: "order-shipping", label: "주문/발송" },
    { id: "sales", label: "매출" },
  ];

  const topNavItems = [
    { name: "로그인", onClick: () => navigate("/login") },
    { name: "회원가입", onClick: () => navigate("/signup") },
    { name: "장바구니", onClick: () => navigate("/cart") },
    { name: "마이페이지", onClick: () => navigate("/admin-mypage") },
    { name: "커뮤니티", onClick: () => navigate("/") },
  ];

  const onColorInfo = (p) => alert(`[색상정보]\n${p.colors?.join(", ") || "-"}`);
  const onQtyInfo = (p) => alert(`[수량정보]\n등록 수량: ${p.qty ?? 0}`);
  const onOrderInfo = (p) => alert(`[주문정보]\n주문번호 예시: ORD-${p.id}\n수량: ${p.qty ?? 1}`);
  const onShip = (p) => alert(`[배송하기]\n${p.name} 발송 처리 (샘플)`);

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="max-w-[1440px] mx-auto bg-white">
        <header className="bg-[#d9d9d9] h-[244px] relative">
          <div className="absolute top-[33px] right-[133px]">
            <div className="flex gap-4 text-black text-[15px] leading-[21px]">
              {topNavItems.map((item, i) => (
                <Button key={i} variant="ghost" className="h-auto p-0 text-[15px] font-normal" onClick={item.onClick}>
                  {item.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="absolute top-[75px] left-1/2 -translate-x-1/2 w-[148px] h-[117px]">
            <div className="relative w-36 h-[117px]">
              <div className="absolute top-3 left-0 text-black text-[29.9px] text-center leading-[41.8px]">MY SALON</div>
              <div className="absolute top-0 left-7 text-black text-[11.1px] text-center leading-[15.5px]">당신만을 위한 옷장</div>
              <img className="absolute w-[67px] h-[66px] top-[51px] left-[38px]" alt="Main icon" src="https://c.animaapp.com/mfey8x558kisvz/img/main-icon-1.png" />
            </div>
          </div>

          <Button
            variant="ghost"
            className="absolute top-[15px] left-[25px] w-[58px] h-[58px] bg-neutral-100 rounded-[29px] p-0 hover:bg-neutral-200"
            onClick={() => navigate("/menu")}
          >
            <MenuIcon className="w-6 h-6" />
          </Button>

          <div className="absolute top-[61px] right-[37px] w-[296px] h-16">
            <div className="flex w-full h-16 items-center relative">
              <div className="flex items-center p-[11px] w-full bg-[#78788029] rounded-[100px]">
                <div className="flex items-center gap-2 flex-1">
                  <SearchIcon className="w-4 h-4 text-[#999999]" />
                  <Input placeholder="Search" className="border-0 bg-transparent text-[#999999] text-[17px] leading-[22px] placeholder:text-[#999999] focus-visible:ring-0" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <nav className="mt-[42px] mb-[118px]">
          <div className="flex justify-center gap-[190px]">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => setActiveTab(item.id)}
                className={`h-auto p-0 text-2xl leading-[20.7px] transition-all ${
                  activeTab === item.id ? "font-bold text-[#a40303]" : "font-normal text-black hover:text-[#a40303]"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </nav>

        <main className="px-[226px]">
          {/* 상품 목록 */}
          {activeTab === "product-list" && (
            <>
              <h1 className="mb-[78px] font-bold text-black text-[27px] leading-[37.8px]">상품 목록</h1>

              {loading ? (
                <div className="text-center py-8"><p className="text-[#828282]">상품 목록을 불러오는 중...</p></div>
              ) : products.length === 0 ? (
                <div className="text-center py-8"><p className="text-[#828282]">등록된 상품이 없습니다.</p></div>
              ) : (
                <div className="space-y-[41px]">
                  {products.map((product) => (
                    <Card key={product.productNum} className="border-0 shadow-none">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-[62px]">
                          <img
                            className="w-[119px] h-[159px] object-cover flex-shrink-0 cursor-pointer"
                            alt="Product image"
                            src={
                              product.mainImage && product.mainImage !== "default.jpg"
                                ? `http://localhost:8080${product.mainImage}`
                                : "https://c.animaapp.com/mfey8x558kisvz/img/image-1-2.png"
                            }
                            onClick={() => goToDetail(product)}
                          />
                          <div className="flex-1">
                            <div className="mb-[7px] text-[#828282] text-xs leading-[16.8px]">{product.productNum}</div>
                            <h3 className="mb-[10px] text-black text-xl text-center leading-7 cursor-pointer hover:underline" onClick={() => goToDetail(product)}>
                              {product.productName}
                            </h3>
                            <p className="mb-[21px] text-black text-[17px] leading-[23.8px] whitespace-pre-line">{product.description}</p>
                            <div className="text-black text-[23px] text-center leading-[32.2px]">{product.price?.toLocaleString()} 원</div>
                          </div>
                          <div className="flex flex-col gap-[16px] mt-[35px]">
                            <Button variant="outline" className="w-[105px] h-9 border-[0.91px] border-black bg-transparent hover:bg-gray-50 rounded-none" onClick={() => goToDetail(product)}>
                              <span className="text-black text-[15.4px] leading-[21.6px]">상품페이지</span>
                            </Button>
                            <Button className="w-[105px] h-9 bg-[#828282] hover:bg-[#707070] rounded-none" onClick={() => deleteProduct(product.productNum)}>
                              <span className="text-white text-[15.4px] leading-[21.6px]">삭제</span>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}

          {/* 상품 등록 */}
          {activeTab === "product-register" && (
            <>
              <h1 className="mb-8 font-bold text-black text-[27px] leading-[37.8px]">상품 등록</h1>
              <ProductRegisterForm onProductCreated={refreshProductList} />
            </>
          )}

          {/* 판매 목록 */}
          {activeTab === "sales-list" && (
            <>
              <h1 className="mb-[32px] font-bold text-black text-[27px] leading-[37.8px]">판매목록</h1>
              <div className="space-y-[36px]">
                {products.map((product) => (
                  <Card key={`sales-${product.id}`} className="border-0 shadow-none">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-[40px]">
                        <img src={product.image} alt={product.name} className="w-[119px] h-[159px] object-cover" />
                        <div className="flex-1">
                          <div className="text-[#828282] text-[12px] leading-[16px] mb-[8px]">{product.id}</div>
                          <div className="text-[15px] leading-[21px] text-black mb-[6px]"><span className="font-medium">{product.name}</span></div>
                          <p className="text-[14px] leading-[20px] text-[#333] max-w-[480px] line-clamp-2">{product.description}</p>
                          <div className="mt-[10px] text-[16px] font-semibold text-black">{product.price}</div>
                        </div>
                        <div className="flex flex-col gap-3 mt-[8px]">
                          <Button variant="outline" className="w-[90px] h-[26px] border border-[#8b8b8b] rounded-none bg-white hover:bg-gray-50 text-[12px]" onClick={() => alert("색상정보")}>
                            색상정보
                          </Button>
                          <Button className="w-[90px] h-[26px] bg-[#8b8b8b] hover:bg-[#6f6f6f] rounded-none text-white text-[12px]" onClick={() => alert("수량정보")}>
                            수량정보
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}

          {/* 주문/발송 */}
          {activeTab === "order-shipping" && (
            <>
              <h1 className="mb-[32px] font-bold text-black text-[27px] leading-[37.8px]">주문/발송</h1>
              <div className="space-y-[36px]">
                {products.map((product) => (
                  <Card key={`order-${product.id}`} className="border-0 shadow-none">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-[40px]">
                        <img src={product.image} alt={product.name} className="w-[119px] h-[159px] object-cover" />
                        <div className="flex-1">
                          <div className="text-[#828282] text-[12px] leading-[16px] mb-[8px]">{product.id}</div>
                          <div className="text-[15px] leading-[21px] text-black mb-[6px]"><span className="font-medium">{product.name}</span></div>
                          <p className="text-[14px] leading-[20px] text-[#333] max-w-[480px] line-clamp-2">{product.description}</p>
                          <div className="mt-[10px] text-[16px] font-semibold text-black">{product.price}</div>
                        </div>
                        <div className="flex flex-col gap-3 mt-[8px]">
                          <Button variant="outline" className="w-[90px] h-[26px] border border-[#8b8b8b] rounded-none bg-white hover:bg-gray-50 text-[12px]" onClick={() => alert("주문정보")}>
                            주문정보
                          </Button>
                          <Button className="w-[90px] h-[26px] bg-[#8b8b8b] hover:bg-[#6f6f6f] rounded-none text-white text-[12px]" onClick={() => alert("배송하기")}>
                            배송하기
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}

          {/* 매출 */}
          {activeTab === "sales" && (
            <div className="text-center py-16">
              <h1 className="mb-8 font-bold text-black text-[27px] leading-[37.8px]">매출</h1>
              <p className="text-[#828282] text-lg">매출 현황 페이지입니다.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
