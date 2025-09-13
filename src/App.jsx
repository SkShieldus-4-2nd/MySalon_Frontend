// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// ===== 화면들 =====
import { Screen as ShopScreen } from "./routes/Screen/screens/Screen";
import { Screen as MenuScreen } from "./routes/Screen7/screens/Screen";
import { Screen as Screen14 } from "./routes/Screen14/screens/Screen";
import { Screen as Screen20 } from "./routes/Screen20/screens/Screen";
import { Screen as Screen27 } from "./routes/Screen27/screens/Screen";
import { Screen as Screen34 } from "./routes/Screen34/screens/Screen";
import { Screen as Screen39 } from "./routes/Screen39/screens/Screen";

import { Screen as SignupPage } from "./routes/SignupPage/screens/Screen";
import { Screen as LoginPage } from "./routes/Screen113/screens/Screen";

import { Screen as MyPage } from "./routes/MyPage/screens/Screen";
import { Screen as AdminMyPage } from "./routes/AdminMyPage/screens/Screen";

import { Screen as OrderHistory } from "./routes/OrderHistory/screens/Screen";
import { Screen as ReviewPage } from "./routes/ReviewPage/screens/Screen";
import { Screen as WishlistPage } from "./routes/WishlistPage/screens/Screen";
import { Screen as CartPage } from "./routes/CartPage/screens/Screen";
import { Screen as PaymentPage } from "./routes/PaymentPage/screens/Screen";

import { Screen as OuterPage } from "./routes/OuterPage/screens/Screen";
import { Screen as PantsPage } from "./routes/PantsPage/screens/Screen";
import { Screen as DressPage } from "./routes/DressPage/screens/Screen";
import { Screen as AccessoryPage } from "./routes/AccessoryPage/screens/Screen";
import { Screen as HomewearPage } from "./routes/HomewearPage/screens/Screen";
import { Screen as KidsPage } from "./routes/KidsPage/screens/Screen";
import { Screen as MalePage } from "./routes/MalePage/screens/Screen";
import { Screen as FemalePage } from "./routes/FemalePage/screens/Screen";

import { Screen as ProfileEditPage } from "./routes/Screen94/screens/Screen";
import { Screen as Screen101 } from "./routes/Screen101/screens/Screen";
import { Screen as Screen120 } from "./routes/Screen120/screens/Screen"; // ← 판매자 상세
import { Screen as Screen126 } from "./routes/Screen126/screens/Screen"; // ← 구매자 상세
import { Screen as Screen133 } from "./routes/Screen133/screens/Screen";
import { Screen as Screen145 } from "./routes/Screen145/screens/Screen";

import { Screen as CommunityPage } from "./routes/CommunityPage/screens/Screen";
import { DivWrapper as BoardPage } from "./routes/DivWrapper/screens/DivWrapper";
import { Frame as OutfitWritePage } from "./routes/Frame/screens/Frame.jsx";
import { Screen as PostDetailPage } from "./routes/Screen168/screens/Screen";
import { ScrollContainer } from "./components/ScrollContainer";
import { Screen as PostWritePage } from "./routes/Screen162/screens/Screen";

/* ---------------------------
   역할 헬퍼 & 가드 컴포넌트
----------------------------*/
const getRole = () => localStorage.getItem("role"); // "BUYER" | "SELLER" | null

// 역할에 따라 서로 다른 element 렌더
function RoleElement({ buyer, seller, fallback = null }) {
  const role = getRole();
  if (role === "SELLER") return seller ?? fallback;
  return buyer ?? fallback; // 기본은 구매자
}

// 특정 역할 차단 (예: 구매자 구역에서 SELLER 차단)
function BlockRole({ denied = [], children, redirectTo }) {
  const role = getRole();
  if (role && denied.includes(role)) {
    return (
      <Navigate
        to={redirectTo ?? (role === "SELLER" ? "/admin-mypage" : "/shop")}
        replace
      />
    );
  }
  return children;
}

function AppContent() {
  return (
    <Routes>
      {/* 랜딩/공용 */}
      <Route path="/" element={<ScrollContainer />} />
      <Route path="/shop" element={<ShopScreen />} />
      <Route path="/menu" element={<MenuScreen />} />
      <Route path="/screen14" element={<Screen14 />} />
      <Route path="/dropdown-nav" element={<Screen20 />} />
      <Route path="/screen27" element={<Screen27 />} />
      <Route path="/screen34" element={<Screen34 />} />
      <Route path="/screen39" element={<Screen39 />} />

      {/* 인증 */}
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* 마이페이지: 역할 분기 (BUYER -> MyPage / SELLER -> AdminMyPage) */}
      <Route
        path="/mypage"
        element={<RoleElement buyer={<MyPage />} seller={<AdminMyPage />} />}
      />

      {/* 판매자 전용 마이페이지: 구매자 차단 */}
      <Route
        path="/admin-mypage"
        element={
          <BlockRole denied={["BUYER"]} redirectTo="/mypage">
            <AdminMyPage />
          </BlockRole>
        }
      />

      {/* 구매자 전용 메뉴들: 판매자 차단 */}
      <Route
        path="/order-history"
        element={
          <BlockRole denied={["SELLER"]} redirectTo="/admin-mypage">
            <OrderHistory />
          </BlockRole>
        }
      />
      {/* 리뷰 페이지는 판매자도 접근 가능(디자인 확인/테스트 용) */}
      <Route path="/review" element={<ReviewPage />} />
      <Route
        path="/wishlist"
        element={
          <BlockRole denied={["SELLER"]} redirectTo="/admin-mypage">
            <WishlistPage />
          </BlockRole>
        }
      />
      <Route
        path="/cart"
        element={
          <BlockRole denied={["SELLER"]} redirectTo="/admin-mypage">
            <CartPage />
          </BlockRole>
        }
      />
      <Route
        path="/payment"
        element={
          <BlockRole denied={["SELLER"]} redirectTo="/admin-mypage">
            <PaymentPage />
          </BlockRole>
        }
      />

      {/* 카테고리 */}
      <Route path="/category/상의" element={<Screen39 />} />
      <Route path="/category/아우터" element={<OuterPage />} />
      <Route path="/category/바지" element={<PantsPage />} />
      <Route path="/category/원피스" element={<DressPage />} />
      <Route path="/category/악세사리" element={<AccessoryPage />} />
      <Route path="/category/홈웨어" element={<HomewearPage />} />
      <Route path="/category/키즈" element={<KidsPage />} />
      <Route path="/category/남성" element={<MalePage />} />
      <Route path="/category/여성" element={<FemalePage />} />

      {/* 기타 페이지 */}
      <Route path="/profile-edit" element={<ProfileEditPage />} />
      <Route path="/screen101" element={<Screen101 />} />
      {/* 🔑 판매자 상세 페이지 (AdminMyPage → 이리로 이동) */}
      <Route path="/screen120" element={<Screen120 />} />
      {/* 🔑 구매자 상세 페이지 (Shop → 이리로 이동) */}
      <Route path="/screen126" element={<Screen126 />} />
      <Route path="/screen133" element={<Screen133 />} />
      <Route path="/screen145" element={<Screen145 />} />

      {/* 커뮤니티 */}
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/board" element={<BoardPage />} />
      <Route path="/board/write" element={<PostWritePage />} />
      <Route path="/write-post" element={<OutfitWritePage />} />
      <Route path="/post/:id" element={<PostDetailPage />} />

      {/* 존재하지 않는 경로는 역할 홈으로 */}
      <Route
        path="*"
        element={
          <RoleElement
            buyer={<Navigate to="/shop" replace />}
            seller={<Navigate to="/admin-mypage" replace />}
            fallback={<Navigate to="/shop" replace />}
          />
        }
      />
    </Routes>
  );
}

export default AppContent;
