import React, { useEffect, useState } from "react";
import { Screen as MainScreen } from "../screens/Screen/Screen";
import { Screen as ShopScreen } from "../routes/Screen/screens/Screen";

export const ScrollContainer = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* First Screen */}
      <div 
        className="relative z-10 transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(-${Math.min(scrollY * 0.5, window.innerHeight)}px)`
        }}
      >
        <MainScreen />
      </div>
      
      {/* Second Screen */}
      <div 
        className="relative z-20"
        style={{
          marginTop: scrollY > 100 ? `-${Math.min(scrollY * 0.3, 400)}px` : '0px'
        }}
      >
        <ShopScreen />
      </div>
      
      {/* Spacer to enable scrolling */}
      <div className="h-screen"></div>
    </div>
  );
};
