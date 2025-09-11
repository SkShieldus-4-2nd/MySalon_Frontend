import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Screen as MainScreen } from "./screens/Screen/Screen";
import { Screen as ShopScreen } from "./routes/Screen/screens/Screen";
import { Screen as MenuScreen } from "./routes/Screen7/screens/Screen";
import { Screen as Screen14 } from "./routes/Screen14/screens/Screen";
import { Screen as Screen20 } from "./routes/Screen20/screens/Screen";
import { Screen as Screen27 } from "./routes/Screen27/screens/Screen";
import { Screen as Screen34 } from "./routes/Screen34/screens/Screen";
import { Screen as Screen39 } from "./routes/Screen39/screens/Screen";
import { Screen as SignupPage } from "./routes/SignupPage/screens/Screen";
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
import { Screen as ProfileEditPage } from "./routes/Screen94/screens/Screen";
import { Screen as Screen101 } from "./routes/Screen101/screens/Screen";
import { Screen as MyReviewsPage } from "./routes/Screen108/screens/Screen";
import { Screen as LoginPage } from "./routes/Screen113/screens/Screen";
import { Screen as Screen120 } from "./routes/Screen120/screens/Screen";
import { Screen as Screen126 } from "./routes/Screen126/screens/Screen";
import { Screen as Screen133 } from "./routes/Screen133/screens/Screen";
import { Screen as Screen145 } from "./routes/Screen145/screens/Screen";
import { ScrollContainer } from "./components/ScrollContainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScrollContainer />} />
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
        <Route path="/category/원피스/스커트" element={<DressPage />} />
        <Route path="/category/ACC/BAG" element={<AccessoryPage />} />
        <Route path="/category/홈웨어/속옷" element={<HomewearPage />} />
        <Route path="/category/키즈" element={<KidsPage />} />
        <Route path="/profile-edit" element={<ProfileEditPage />} />
        <Route path="/screen101" element={<Screen101 />} />
        <Route path="/my-reviews" element={<MyReviewsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/screen120" element={<Screen120 />} />
        <Route path="/screen126" element={<Screen126 />} />
        <Route path="/screen133" element={<Screen133 />} />
        <Route path="/screen145" element={<Screen145 />} />
      </Routes>
    </Router>
  );
}

export default App;
