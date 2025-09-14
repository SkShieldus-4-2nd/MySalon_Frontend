import {
  ChevronDownIcon,
  MenuIcon,
  ShoppingCartIcon,
  Trash2Icon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

export const Screen = () => {
  const navigate = useNavigate();
  const userNum = 1; // 로그인 기능이 없으니 고정값

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigationItems = [
    { name: "로그인", onClick: () => navigate("/login") },
    { name: "회원가입", onClick: () => navigate("/signup") },
    { name: "장바구니", onClick: () => navigate("/cart") },
    { name: "마이페이지", onClick: () => navigate("/mypage") },
    { name: "커뮤니티", onClick: () => navigate("/") },
  ];

  // 장바구니 불러오기
  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`http://localhost:8080/api/cart/user-cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCartItems(res.data);
      fetchTotalPrice(); // 장바구니 로드 시 총합도 가져오기
    } catch (error) {
      console.error("장바구니 불러오기 실패:", error);
    }
  };

  // 총합 가격 API
  const fetchTotalPrice = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`http://localhost:8080/api/cart/total`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTotalPrice(res.data);
    } catch (error) {
      console.error("총합 가격 불러오기 실패:", error);
    }
  };


  useEffect(() => {
    fetchCart();
  }, []);

  // 수량 업데이트
  const updateQuantity = async (productDetailNum, newQuantity) => {
    newQuantity = Number(newQuantity); // 문자열이면 숫자로 변환
    if (isNaN(newQuantity) || newQuantity < 1) return; // 유효하지 않으면 중단

    try {
      const token = localStorage.getItem("token");
      const res = await axios.patch(
        "http://localhost:8080/api/cart/update-count",
        null,
        {
          params: { productDetailNum, count: newQuantity },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCartItems((prev) =>
        prev.map((item) =>
          item.productDetailNum === productDetailNum
            ? { ...item, count: res.data.count }
            : item
        )
      );

      fetchTotalPrice(); // 총합 갱신
    } catch (error) {
      console.error("수량 변경 실패:", error);
    }
  };


  // 상품 삭제
  const removeItem = async (productDetailNum) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete("http://localhost:8080/api/cart", {
        data: { userNum, productDetailNum },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCartItems((prev) =>
        prev.filter((item) => item.productDetailNum !== productDetailNum)
      );
      fetchTotalPrice(); // 삭제 후 총합 갱신
    } catch (error) {
      console.error("상품 삭제 실패:", error);
    }
  };

  // 선택 여부 변경
  const toggleSelection = async (productDetailNum, isChecked) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.patch(
        "http://localhost:8080/api/cart/selection",
        null,
        {
          params: { userNum, productDetailNum, isSelected: isChecked },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCartItems((prev) =>
        prev.map((item) =>
          item.productDetailNum === productDetailNum
            ? { ...item, selected: res.data.selected } // updated
            : item
        )
      );
      fetchTotalPrice(); // 선택 변경 후 총합 갱신
    } catch (error) {
      console.error("선택 변경 실패:", error);
    }
  };

  const handlePayment = async () => {
    const token = localStorage.getItem("token");
    const orderItems = cartItems
      .filter((item) => item.selected)
      .map((item) => ({
        productDetailNum: item.productDetailNum,
        count: item.count,
      }));

    if (orderItems.length === 0) {
      alert("결제할 상품을 선택해주세요.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/orders/create",
        { orderItems },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/screen133", { state: { orderData: response.data } });
    } catch (error) {
      console.error("결제 실패:", error);
      alert("결제에 실패했습니다.");
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("ko-KR").format(price) + " 원";
  };

  return (
    <div className="bg-white min-h-screen w-full">
      {/* Header */}
      <header className="bg-[#d9d9d9] h-[244px] w-full relative">
        <div className="absolute top-4 left-[25px]">
          <Button
            variant="ghost"
            size="icon"
            className="w-[58px] h-[58px] bg-neutral-100 rounded-full hover:bg-neutral-200"
            onClick={() => navigate("/menu")}
          >
            <MenuIcon className="w-6 h-6" />
          </Button>
        </div>

        <nav className="absolute top-[34px] right-[37px]">
          <div className="flex gap-4 text-black text-[15px]">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-auto p-0 text-[15px] font-normal"
                onClick={item.onClick}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </nav>

        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-black text-[9.5px] mb-3">당신만을 위한 옷장</div>
          <div className="text-black text-[25.5px] mb-4">MY SALON</div>
          <img
            className="w-[66px] h-[66px] mx-auto"
            alt="Main icon"
            src="https://c.animaapp.com/mfetjhbp9LgKUV/img/main-icon-1.png"
          />
        </div>
      </header>

      {/* Main */}
      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-12">
          <ShoppingCartIcon className="w-20 h-20" />
          <h1 className="text-[40px] font-bold">장바구니</h1>
          <span className="text-[32px]">({cartItems.length})</span>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCartIcon className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <p className="text-[#828282] text-lg">장바구니가 비어있습니다.</p>
          </div>
        ) : (
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <div className="grid grid-cols-6 gap-4 py-4 text-[20px] font-bold text-center">
                <div>선택</div>
                <div>상품정보</div>
                <div>사이즈/색상</div>
                <div>수량</div>
                <div>가격</div>
                <div>삭제</div>
              </div>

              <Separator className="mb-4" />

              {cartItems.map((item, index) => (
                <div key={item.productDetailNum}>
                  <div className="grid grid-cols-6 gap-4 items-center py-6">
                    {/* 체크박스 */}
                    <div className="flex justify-center">
                      <input
                        type="checkbox"
                        checked={item.selected ?? true} // 기존 isSelected → selected
                        onChange={(e) =>
                          toggleSelection(item.productDetailNum, e.target.checked)
                        }
                        className="w-6 h-6"
                      />
                    </div>

                    {/* 상품정보 */}
                    <div className="flex items-center gap-4">
                      <img
                        className="w-[58px] h-[78px] object-cover"
                        alt="Product"
                        src={item.productImage}
                      />
                      <div className="text-[15px]">{item.productName}</div>
                    </div>

                    {/* 사이즈/색상 */}
                    <div className="text-[15px] text-center">
                      {item.size} / {item.color}
                    </div>

                    {/* 수량 */}
                    <div className="flex justify-center">
                      <div className="flex items-center bg-[#f1f1f1] rounded-full px-4 py-2 min-w-[84px]">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0 h-auto text-lg"
                          onClick={() =>
                            updateQuantity(item.productDetailNum, item.count - 1)
                          }
                        >
                          -
                        </Button>
                        <span className="text-lg font-bold mx-3">{item.count}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0 h-auto text-lg"
                          onClick={() =>
                            updateQuantity(item.productDetailNum, item.count + 1)
                          }
                        >
                          +
                        </Button>
                        <ChevronDownIcon className="w-3.5 h-2.5 ml-2" />
                      </div>
                    </div>

                    {/* 가격 */}
                    <div className="text-center text-[20px] font-bold">
                      {formatPrice(item.productPrice * item.count)}
                    </div>

                    {/* 삭제 */}
                    <div className="flex justify-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-[35px] h-[35px] hover:text-red-500"
                        onClick={() => removeItem(item.productDetailNum)}
                      >
                        <Trash2Icon className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                  {index < cartItems.length - 1 && <Separator />}
                </div>
              ))}

              <Separator className="my-8" />

              {/* 합계 */}
              <div className="space-y-4 text-[20px]">
                <div className="flex justify-between">
                  <span>상품 합계</span>
                  <span className="font-bold">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <div className="flex justify-center mt-12">
                <Button
                  className="bg-[#828282] hover:bg-[#707070] text-white text-[25px] px-12 py-3 rounded-[5px] h-auto"
                  onClick={handlePayment}
                >
                  결제하기
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

