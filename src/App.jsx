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
import { Screen as OuterPage } from "./routes/OuterPage/screens/Screen";
import { Screen as PantsPage } from "./routes/PantsPage/screens/Screen";
import { Screen as DressPage } from "./routes/DressPage/screens/Screen";
import { Screen as AccessoryPage } from "./routes/AccessoryPage/screens/Screen";
import { Screen as HomewearPage } from "./routes/HomewearPage/screens/Screen";
import { Screen as KidsPage } from "./routes/KidsPage/screens/Screen";
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
        <Route path="/category/상의" element={<Screen39 />} />
        <Route path="/category/아우터" element={<OuterPage />} />
        <Route path="/category/바지" element={<PantsPage />} />
        <Route path="/category/원피스" element={<DressPage />} />
        <Route path="/category/악세사리" element={<AccessoryPage />} />
        <Route path="/category/홈웨어" element={<HomewearPage />} />
        <Route path="/category/키즈" element={<KidsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
