// Header.jsx
import React from 'react';
import './Header.css'; // CSS 파일을 임포트합니다.

// --- 아이콘 임포트 --- 
import navIcon from '../assets/image/nav_icon.png';
import mainIcon from '../assets/image/shop_icon.png'; // MY SALON 아이콘 임포트 (shop_icon으로 변경)

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-left-placeholder"></div> {/* 좌측 빈 공간 */}

      <div className="header-branding">
        <img src={mainIcon} alt="MY SALON Logo" className="branding-logo" />
      </div>

      <div className="header-right-section">
        <div className="header-top">
          <div className="header-right">
            <img src={navIcon} alt="Menu" className="menu-icon" />
            <nav className="top-menu">
              <a href="#">로그인</a>
              <a href="#">회원가입</a>
              <a href="#">장바구니</a>
              <a href="#">마이페이지</a>
              <a href="#">커뮤니티</a>
            </nav>
          </div>
        </div>
        <div className="header-bottom">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search" />
            <span className="mic-icon">🎤</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
