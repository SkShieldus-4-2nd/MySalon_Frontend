import React from "react";

const CATEGORIES = ["성인", "틴즈", "남성", "여성", "키즈"];

export default function Detail() {
  return (
    <div className="detail">
      <header className="detail-header">
        <div className="logo">MY SALON</div>
        <div className="search-bar">
          <input placeholder="Search" />
        </div>
      </header>

      <section className="category-row">
        {CATEGORIES.map((c) => (
          <button key={c} className="category-chip">{c}</button>
        ))}
      </section>

      <h2 className="section-title">당신을 위한 추천상품</h2>

      <section className="card-grid">
        {Array.from({ length: 4 }).map((_, i) => (
          <article key={i} className="card">
            <div className="thumb" />
            <div className="meta">
              <p className="name">상품 이름 예시 ({i + 1})</p>
              <p className="desc">설명/사이즈/컬러 등</p>
            </div>
          </article>
        ))}
      </section>

      <div className="more">
        <button>더보기</button>
      </div>

      <footer className="footer">
        <small>ⓒ My Salon. All rights reserved.</small>
      </footer>
    </div>
  );
}