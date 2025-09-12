import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Separator } from "../components/ui/separator";

export const Screen = () => {
  const navigate = useNavigate();

  // 구매자/판매자
  const [userType, setUserType] = useState("buyer");

  // 프로필 사진 업로드
  const [profilePreview, setProfilePreview] = useState(null);
  const fileRef = useRef(null);

  const onClickUpload = () => fileRef.current?.click();
  const onSelectFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setProfilePreview(url);
  };

  const handleSubmit = () => {
    alert("회원가입이 완료되었습니다!");
    navigate("/");
  };

  const navigationItems = [
    { name: "로그인", onClick: () => navigate("/login") },
    { name: "회원가입", onClick: () => navigate("/signup") },
    { name: "장바구니", onClick: () => navigate("/") },
    { name: "마이페이지", onClick: () => navigate("/") },
    { name: "커뮤니티", onClick: () => navigate("/") },
  ];

  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white w-[1440px] h-[1216px] relative">
        {/* 상단 네비 */}
        <nav className="absolute top-[33px] left-[1080px] font-normal text-black text-[15px] leading-[21px] whitespace-nowrap">
          <div className="flex gap-4">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-auto p-0 text-[15px] font-normal"
                onClick={item.onClick}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </nav>

        {/* 로고 */}
        <header className="absolute w-[146px] h-[118px] top-[135px] left-[649px]">
          <div className="relative w-[142px] h-[118px]">
            <h1 className="absolute w-[142px] top-3 left-0 font-normal text-black text-[25.5px] text-center">
              MY SALON
            </h1>
            <p className="w-[87px] top-0 left-7 font-normal text-black text-[9.5px] leading-[13.3px] absolute text-center">
              당신만을 위한 옷장
            </p>
            <img
              className="absolute w-[66px] h-[66px] top-[52px] left-[37px]"
              alt="Main icon"
              src="https://c.animaapp.com/mfeqluynHQoI9d/img/main-icon-1.png"
            />
          </div>
        </header>

        <main>
          <h2 className="top-[282px] left-[195px] font-bold text-[#222222] text-[40px] leading-[56px] absolute">
            회원가입
          </h2>

          <Separator className="absolute w-[1115px] h-px top-[352px] left-[195px] bg-gray-300" />

          {/* 역할 선택 */}
          <RadioGroup
            className="absolute top-[311px] left-[372px]"
            value={userType}
            onValueChange={setUserType}
          >
            <div className="flex items-center space-x-[81px]">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="buyer"
                  id="buyer"
                  className="w-[22px] h-[22px] rounded-[11px] border-[0.7px] border-[#828282]"
                />
                <Label htmlFor="buyer" className="text-[15px]">
                  구매자
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="seller"
                  id="seller"
                  className="w-[22px] h-[22px] rounded-[11px] border-[0.7px] border-[#828282]"
                />
                <Label htmlFor="seller" className="text-[15px]">
                  판매자
                </Label>
              </div>
            </div>
          </RadioGroup>

          {/* 기본정보 폼 */}
          <section>
            <h3 className="top-[410px] left-[372px] font-normal text-[35px] leading-[49px] absolute">
              기본정보
            </h3>

            {/* 아이디 */}
            <div className="absolute top-[493px] left-[471px]">
              <Label htmlFor="username" className="w-14 text-xl leading-7">
                아이디
              </Label>
            </div>
            <Input
              id="username"
              className="top-[492px] absolute w-[398px] h-8 left-[606px] border-[0.6px] border-[#828282] rounded-none"
            />

            {/* 비밀번호 */}
            <div className="absolute top-[553px] left-[462px]">
              <Label htmlFor="password" className="w-[74px] text-xl leading-7">
                비밀번호
              </Label>
            </div>
            <Input
              id="password"
              type="password"
              className="top-[554px] absolute w-[398px] h-8 left-[606px] border-[0.6px] border-[#828282] rounded-none"
            />

            {/* 비밀번호 확인 */}
            <div className="absolute top-[613px] left-[441px]">
              <Label
                htmlFor="passwordConfirm"
                className="w-[116px] text-xl leading-7"
              >
                비밀번호 확인
              </Label>
            </div>
            <Input
              id="passwordConfirm"
              type="password"
              className="top-[612px] absolute w-[398px] h-8 left-[606px] border-[0.6px] border-[#828282] rounded-none"
            />
            <div className="top-[645px] left-[606px] text-[8px] absolute">
              비밀번호가 틀렸습니다.
            </div>

            {/* 결제 비밀번호 */}
            <div className="absolute top-[673px] left-[441px]">
              <Label
                htmlFor="paymentPassword"
                className="w-[116px] text-xl leading-7"
              >
                결제 비밀번호
              </Label>
            </div>
            <div className="absolute w-[398px] h-8 top-[672px] left-[606px] border-[0.6px] border-[#828282]">
              <Input
                id="paymentPassword"
                type="password"
                placeholder="6자리 숫자로 입력해주세요"
                className="w-full h-full border-none rounded-none text-xs text-center text-[#828282]"
              />
            </div>

            {/* 이름 */}
            <div className="absolute top-[733px] left-[437px]">
              <Label htmlFor="name" className="w-[125px] text-xl leading-7">
                이름(닉네임)
              </Label>
            </div>
            <Input
              id="name"
              className="top-[734px] absolute w-[398px] h-8 left-[606px] border-[0.6px] border-[#828282] rounded-none"
            />

            {/* 🔁 여기부터 변경: 전화번호 섹션 → 프로필 사진 업로드 섹션 */}
            <div className="absolute top-[790px] left-[462px]">
              <Label className="w-[90px] text-xl leading-7">프로필 사진</Label>
            </div>

            {/* 미리보기 + 업로드 버튼 */}
            <div className="absolute top-[784px] left-[606px] flex items-center gap-5">
              {/* 원형 프리뷰 박스 */}
              <div className="w-[64px] h-[64px] rounded-full border border-[#828282] bg-[#f7f7f7] overflow-hidden">
                {profilePreview ? (
                  <img
                    src={profilePreview}
                    alt="profile preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[10px] text-[#999]">
                    No Image
                  </div>
                )}
              </div>

              {/* 숨긴 파일 입력 */}
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onSelectFile}
              />

              {/* 업로드 버튼 */}
              <Button
                variant="outline"
                className="w-[149px] h-10 rounded-[8px] border-[0.6px] border-[#828282] bg-white hover:bg-gray-50"
                onClick={onClickUpload}
              >
                사진 업로드
              </Button>
            </div>
            {/* 🔁 변경 끝 */}

            {/* 성별 */}
            <div className="absolute top-[854px] left-[481px]">
              <Label className="w-[37px] text-xl leading-7">성별</Label>
            </div>
            <RadioGroup
              className="absolute w-[184px] h-[22px] top-[859px] left-[606px]"
              defaultValue="male"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    value="male"
                    id="male"
                    className="w-[22px] h-[22px] rounded-[11px] border-[0.7px] border-[#828282]"
                  />
                  <Label htmlFor="male" className="text-[15px]">
                    남자
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    value="female"
                    id="female"
                    className="w-[22px] h-[22px] rounded-[11px] border-[0.7px] border-[#828282]"
                  />
                  <Label htmlFor="female" className="text-[15px]">
                    여자
                  </Label>
                </div>
              </div>
            </RadioGroup>

            {/* 키/몸무게 */}
            <div className="absolute top-[917px] left-[481px]">
              <Label htmlFor="height" className="w-[37px] text-xl leading-7">
                키
              </Label>
            </div>
            <div className="absolute w-32 h-8 top-[914px] left-[606px] border-[0.6px] border-[#828282]">
              <Input id="height" type="number" className="w-full h-full border-none rounded-none pr-8" />
              <div className="absolute top-1 right-2 text-[#828282] text-[15px]">
                cm
              </div>
            </div>

            <div className="absolute top-[914px] left-[773px]">
              <Label htmlFor="weight" className="w-16 text-xl leading-7">
                몸무게
              </Label>
            </div>
            <div className="absolute w-32 h-8 top-[914px] left-[876px] border-[0.6px] border-[#828282]">
              <Input id="weight" type="number" className="w-full h-full border-none rounded-none pr-8" />
              <div className="absolute top-1 right-2 text-[#828282] text-[15px]">
                kg
              </div>
            </div>

            {/* 스토어 이름 (판매자만 활성화) */}
            <div className="absolute top-[980px] left-[441px] flex items-center gap-4">
              <Label
                htmlFor="storeName"
                className={`w-[116px] text-xl leading-7 text-right ${
                  userType === "seller" ? "text-black" : "text-[#999999]"
                }`}
              >
                스토어 이름
              </Label>

              <Input
                id="storeName"
                disabled={userType !== "seller"}
                className={`w-[398px] h-8 border-[0.6px] rounded-none ${
                  userType === "seller"
                    ? "border-[#828282] bg-white"
                    : "border-[#d0d0d0] bg-[#f5f5f5] text-[#999999] cursor-not-allowed"
                }`}
              />
            </div>
          </section>

          {/* 하단 버튼 */}
          <div className="absolute w-[539px] h-[60px] top-[1049px] left-[466px]">
            <Button
              variant="outline"
              className="absolute w-[242px] h-[60px] top-0 left-0 border border-[#828282] rounded-none bg-white hover:bg-gray-50 h-auto"
              onClick={() => navigate("/mypage")}
            >
              <span className="text-black text-xl leading-7">취소</span>
            </Button>

            <Button
              className="absolute w-[242px] h-[60px] top-0 left-[293px] bg-[#828282] hover:bg-[#707070] rounded-none h-auto"
              onClick={handleSubmit}
            >
              <span className="text-white text-xl leading-7">가입하기</span>
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};
