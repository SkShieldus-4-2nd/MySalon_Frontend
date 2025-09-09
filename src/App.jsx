import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Header 컴포넌트 임포트
import { MyPage } from "./pages/MyPage";
import ShoppingCart from "./pages/ShoppingCart"; // ShoppingCart 컴포넌트 임포트
import "./styles/reset.css"; // reset.css 추가
import "./styles/theme.css"; 

function App() {
  return (
    <Router>
      <Header /> {/* Header 컴포넌트 렌더링 */}
      <Routes>
        <Route path="/" element={<MyPage />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;