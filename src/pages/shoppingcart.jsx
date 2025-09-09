// src/pages/ShoppingCart.jsx
import React, { useState } from 'react'; // useState 임포트
import './ShoppingCart.css'; // Import CSS file
import shoppingcartIcon from '../assets/image/shoppingcart.png';
import deleteIcon from '../assets/image/delete.png'; // 휴지통 아이콘 임포트

// 임시 상품 데이터 (의류 관련)
const initialProducts = [
  {
    id: 1,
    image: 'https://via.placeholder.com/80/FF5733/FFFFFF?text=T-Shirt', // 임시 상품 이미지
    name: '베이직 라운드 티셔츠',
    option: '색상: 화이트, 사이즈: M',
    quantity: 1,
    price: 25000,
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/80/33FF57/FFFFFF?text=Jeans', // 임시 상품 이미지
    name: '슬림핏 데님 팬츠',
    option: '색상: 블루, 사이즈: 30',
    quantity: 2,
    price: 58000,
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/80/3357FF/FFFFFF?text=Hoodie', // 임시 상품 이미지
    name: '오버핏 후드티',
    option: '색상: 그레이, 사이즈: L',
    quantity: 1,
    price: 42000,
  },
];

const ShoppingCart = () => {
  const [products, setProducts] = useState(initialProducts); // useState로 상태 관리

  // 수량 변경 핸들러
  const handleQuantityChange = (id, newQuantity) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, quantity: parseInt(newQuantity) } : product
      )
    );
  };

  // 상품 삭제 핸들러
  const handleDeleteItem = (id) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  const subtotal = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const shippingFee = subtotal >= 50000 ? 0 : 3000; // 5만원 이상 무료배송
  const total = subtotal + shippingFee;

  return (
    <div className="shopping-cart-container">
      <div className="cart-title-section">
        <img src={shoppingcartIcon} alt="Shopping Cart" className="cart-title-icon" />
        <h1 className="cart-title">장바구니 ({products.length})</h1>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>상품정보</th>
            <th>수량</th>
            <th>가격</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className="product-item-info">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-details">
                    <span className="product-name">{product.name}</span>
                    <span className="product-option">{product.option}</span>
                  </div>
                </div>
              </td>
              <td>
                <select
                  value={product.quantity}
                  onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                  className="quantity-select"
                >
                  {[...Array(10).keys()].map((i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </td>
              <td>{product.price.toLocaleString()}원</td>
              <td>
                <img
                  src={deleteIcon}
                  alt="Delete"
                  className="delete-icon"
                  onClick={() => handleDeleteItem(product.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="summary-section">
        <div className="summary-row">
          <span>상품 합계</span>
          <span>{subtotal.toLocaleString()}원</span>
        </div>
        <div className="summary-row">
          <span>배송비</span>
          <span>{shippingFee.toLocaleString()}원</span>
        </div>
        <div className="summary-row total">
          <span>최종 결제 금액</span>
          <span>{total.toLocaleString()}원</span>
        </div>
      </div>

      <div className="checkout-button-container">
        <button className="checkout-button">결제하기</button>
      </div>
    </div>
  );
};

export default ShoppingCart;