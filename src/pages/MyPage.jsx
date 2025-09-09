// MyPage.jsx
import React from "react";
import "./MyPage.css";

// --- 아이콘 임포트 --- 
import profileImage from '../assets/image/profile.png';
import shopIcon from '../assets/image/shop_icon.png';
import shoppingbagIcon from '../assets/image/shoppingbag.png';
import heartIcon from '../assets/image/empty_heart.png';
import reviewIcon from '../assets/image/review.png';
import feedIcon from '../assets/image/feed.png';

import { Link } from "react-router-dom"; // Link 컴포넌트 임포트

const SidebarItem = ({ title, to }) => (
  to ? (
    <Link to={to} className="sidebar-item">{title}</Link>
  ) : (
    <div className="sidebar-item">{title}</div>
  )
);

// 활동내역 카드 컴포넌트
const ActivityCard = ({ icon, count, label }) => (
  <div className="activity-card">
    <img src={icon} alt={label} className="activity-card-icon" />
    <div className="activity-card-count">{count}</div>
    <div className="activity-card-label">{label}</div>
  </div>
);

export const MyPage = () => {
  return (
    <div className="mypage-container">
      <main className="main-content">
        {/* ==================== 2. 좌측 사이드바 ==================== */}
        <aside className="sidebar">
          <div className="profile-section">
            <img
              className="profile-img"
              src={profileImage}
              alt="프로필"
            />
            <div className="profile-name">HONG1234</div>
            <div className="profile-info">
              가입일 2025.09.07<br />
              최근 접속일 2025.09.07<br />
              180cm / 70kg
            </div>
            <button className="edit-profile-btn">프로필 수정</button>
          </div>

          <nav className="sidebar-menu">
            {["내 주문 내역", "찜한 상품", "장바구니", "나의 리뷰", "스타일 실험실"].map(
              (item) => (
                <SidebarItem
                  key={item}
                  title={item}
                  to={item === "내 주문 내역" ? "/shoppingcart" : null}
                />
              )
            )}
          </nav>
        </aside>

        {/* ==================== 3. 메인 콘텐츠 ==================== */}
        <section className="content-section">
          
          {/* ==================== MY SALON 이미지 섹션 ==================== */}
          <div className="my-salon-image-section">
            <img src={shopIcon} alt="My Salon Banner" />
          </div>

          {/* ==================== 활동내역 섹션 ==================== */}
          <div className="activity-section">
            <h2 className="activity-title">홍길동님의 활동</h2>
            
            <div className="activity-grid">
              <ActivityCard icon={shoppingbagIcon} count={10} label="주문내역" />
              <ActivityCard icon={heartIcon} count={5} label="찜한 상품" />
              <ActivityCard icon={reviewIcon} count={12} label="내가 쓴 리뷰" />
              <ActivityCard icon={feedIcon} count={2} label="내가 올린 게시글" />
            </div>

            {/* 상세 정보 영역 다시 추가 */}
            <div className="activity-tabs">
              <div className="tab-item active">내가 올린 게시물</div>
              <div className="tab-item">내가 쓴 댓글</div>
            </div>

            <div className="activity-content">
              <p>좋아요 받은 게시물과 댓글을 확인해보세요</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};