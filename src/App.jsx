import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainScreen } from "./screens/MainScreen/MainScreen";
import { ShopPage as ShopScreen } from "./routes/ShopPage/screens/ShopPage";
import { MenuPage as MenuScreen } from "./routes/MenuPage/screens/MenuPage";
import { CategoryPage as Screen14 } from "./routes/CategoryPage/screens/CategoryPage";
import { DropdownNavPage as Screen20 } from "./routes/DropdownNavPage/screens/DropdownNavPage";
import { Screen as Screen27 } from "./routes/Screen27/screens/Screen";
import { Screen as Screen34 } from "./routes/Screen34/screens/Screen";
import { TopPage as Screen39 } from "./routes/TopPage/screens/TopPage";
import { SignupPage } from "./routes/SignupPage/screens/SignupPage";
import { Screen as MyPage } from "./routes/MyPage/screens/Screen";
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
import { ProfileEditPage } from "./routes/ProfileEditPage/screens/ProfileEditPage";
import { Screen as Screen101 } from "./routes/Screen101/screens/Screen";
import { MyReviewsPage } from "./routes/MyReviewsPage/screens/MyReviewsPage";
import { LoginPage } from "./routes/LoginPage/screens/LoginPage";
import { Screen as Screen120 } from "./routes/Screen120/screens/Screen";
import { Screen as Screen126 } from "./routes/Screen126/screens/Screen";
import { Screen as Screen133 } from "./routes/Screen133/screens/Screen";
import { Screen as Screen145 } from "./routes/Screen145/screens/Screen";
import { Screen as AdminMyPage } from "./routes/AdminMyPage/screens/Screen";
import { Screen as CommunityPage } from "./routes/CommunityPage/screens/Screen";
import { BoardPage } from "./routes/BoardPage/screens/BoardPage";
import { PostWritePage } from "./routes/PostWritePage/screens/PostWritePage";
import { PostDetailPage } from "./routes/PostDetailPage/screens/PostDetailPage";
import { Screen as MalePage } from "./routes/MalePage/screens/Screen";
import { FemalePage } from "./routes/FemalePage/screens/FemalePage";
import { ScrollContainer } from "./components/ScrollContainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="/screen14" element={<Screen14 />} />
        <Route path="/dropdown-nav" element={<Screen20 />} />
        <Route path="/screen27" element={<Screen27 />} />
        <Route path="/screen34" element={<Screen34 />} />
        <Route path="/screen39" element={<Screen39 />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/category/상의" element={<Screen39 />} />
        <Route path="/category/아우터" element={<OuterPage />} />
        <Route path="/category/바지" element={<PantsPage />} />
        <Route path="/category/원피스" element={<DressPage />} />
        <Route path="/category/악세사리" element={<AccessoryPage />} />
        <Route path="/category/홈웨어" element={<HomewearPage />} />
        <Route path="/category/키즈" element={<KidsPage />} />
        <Route path="/category/남성" element={<MalePage />} />
        <Route path="/category/여성" element={<FemalePage />} />
        <Route path="/profile-edit" element={<ProfileEditPage />} />
        <Route path="/screen101" element={<Screen101 />} />
        <Route path="/my-reviews" element={<MyReviewsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/screen120" element={<Screen120 />} />
        <Route path="/screen126" element="<Screen126 />" />
        <Route path="/screen133" element="<Screen133 />" />
        <Route path="/screen145" element="<Screen145 />" />
        <Route path="/admin-mypage" element="<AdminMyPage />" />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/board" element="<BoardPage />" />
        <Route path="/write-post" element="<PostWritePage />" />
        <Route path="/post/:id" element="<PostDetailPage />" />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;