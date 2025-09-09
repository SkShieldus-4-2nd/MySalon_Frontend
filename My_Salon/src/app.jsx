import React, { useRef } from "react";
import Landing from "./components/Landing.jsx";
import Detail from "./components/Detail.jsx";

export default function App() {
  const detailRef = useRef(null);

  const goDetail = () => {
    detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    // 스크롤 스냅 컨테이너
    <div className="page-snap">
      <section className="snap-section">
        <Landing onGoDetail={goDetail} />
      </section>

      <section className="snap-section" ref={detailRef}>
        <Detail />
      </section>
    </div>
  );
}