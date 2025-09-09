import React from "react";
import { SidebarSearchField } from "./SidebarSearchField";
import chatgptImage2025960847261 from "./chatgpt-image-2025-9-6-08-47-26-1.png";
import line11 from "./line-11.svg";
import line12 from "./line-12.svg";
import line13 from "./line-13.svg";
import line14 from "./line-14.svg";
import "./style.css";

export const Screen = () => {
  return (
    <div className="screen">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />

          <div className="text-wrapper-2">오늘 나의 모습을 자랑해보세요</div>

          <div className="text-wrapper-3">스타일 실험실로 입장하기</div>
        </div>

        <div className="overlap-group">
          <div className="view">
            <div className="overlap-group-2">
              <img
                className="chatgpt-image"
                alt="Chatgpt image"
                src={chatgptImage2025960847261}
              />

              <img className="line" alt="Line" src={line11} />

              <img className="img" alt="Line" src={line14} />

              <img className="line-2" alt="Line" src={line12} />

              <img className="line-3" alt="Line" src={line13} />

              <div className="my-salon">
                <br />
                My&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;salon
              </div>
            </div>
          </div>

          <div className="view-2">
            <p className="p">
              하나의 옷을 여러 가지로 입는 나만의 스타일링 팁<br />
              사람들과 공유해보세요.
            </p>

            <p className="div-2">
              <span className="span">
                요즘 당신에게 <br />
                영감을 <br />
              </span>

              <span className="text-wrapper-4">주는 것은 무엇인가요?</span>
            </p>
          </div>
        </div>

        <div className="text-wrapper-5">
          로그인&nbsp;&nbsp;&nbsp;&nbsp;회원가입&nbsp;&nbsp;&nbsp;&nbsp;장바구니&nbsp;&nbsp;
          마이페이지&nbsp;&nbsp; 커뮤니티
        </div>

        <div className="group">
          <div className="overlap-2">
            <SidebarSearchField className="sidebar-search-field-instance" />
            <div className="rectangle-2" />

            <div className="text-wrapper-6">당신의 스타일을 이야기해보세요</div>
          </div>
        </div>
      </div>
    </div>
  );
};
