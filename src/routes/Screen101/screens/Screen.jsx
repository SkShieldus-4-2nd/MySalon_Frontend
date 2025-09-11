import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Separator } from "../components/ui/separator";

export const Screen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    passwordConfirm: "",
    paymentPassword: "",
    name: "",
    phone: "",
    gender: "male",
    height: "",
    weight: "",
    storeName: "",
    userType: "buyer"
  });

  const navigationItems = [
    { name: "로그인", onClick: () => navigate('/login') },
    { name: "회원가입", onClick: () => navigate('/signup') },
    { name: "장바구니", onClick: () => navigate('/cart') },
    { name: "마이페이지", onClick: () => navigate('/mypage') },
    { name: "커뮤니티", onClick: () => navigate('/') },
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (formData.password !== formData.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    alert('정보가 저장되었습니다!');
    navigate('/');
  };

  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white w-[1440px] h-[1080px] relative">
        <nav className="absolute top-[33px] left-[1080px] [font-family:'Crimson_Text',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px] whitespace-nowrap">
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

        <header className="absolute w-[146px] h-[118px] top-[135px] left-[649px]">
          <div className="relative w-[142px] h-[118px]">
            <h1 className="absolute w-[142px] top-3 left-0 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[25.5px] text-center tracking-[0] leading-[35.8px] whitespace-nowrap">
              MY SALON
            </h1>

            <p className="w-[87px] top-0 left-7 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[9.5px] leading-[13.3px] absolute text-center tracking-[0] whitespace-nowrap">
              당신만을 위한 옷장
            </p>

            <img
              className="absolute w-[66px] h-[66px] top-[52px] left-[37px]"
              alt="Main icon"
              src="https://c.animaapp.com/mfewauurjMcMNr/img/main-icon-1.png"
            />
          </div>
        </header>

        <main>
          <h2 className="top-[293px] left-[195px] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#222222] text-[40px] leading-[56px] absolute text-center tracking-[0] whitespace-nowrap">
            정보 입력
          </h2>

          <Separator className="absolute w-[1115px] h-px top-[352px] left-[195px] bg-gray-300" />

          <RadioGroup
            className="absolute top-[311px] left-[372px]"
            value={formData.userType}
            onValueChange={(value) => handleInputChange('userType', value)}
          >
            <div className="flex items-center space-x-[81px]">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="buyer"
                  id="buyer"
                  className="w-[22px] h-[22px] rounded-[11px] border-[0.7px] border-solid border-[#828282]"
                />
                <Label
                  htmlFor="buyer"
                  className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[15px] leading-[21px] text-center tracking-[0] whitespace-nowrap"
                >
                  구매자
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="seller"
                  id="seller"
                  className="w-[22px] h-[22px] rounded-[11px] border-[0.7px] border-solid border-[#828282]"
                />
                <Label
                  htmlFor="seller"
                  className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[15px] leading-[21px] text-center tracking-[0] whitespace-nowrap"
                >
                  판매자
                </Label>
              </div>
            </div>
          </RadioGroup>

          <section>
            <h3 className="top-[410px] left-[372px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[35px] leading-[49px] absolute text-center tracking-[0] whitespace-nowrap">
              기본정보
            </h3>

            <div className="absolute top-[493px] left-[471px]">
              <Label
                htmlFor="username"
                className="w-14 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl leading-7 text-center tracking-[0] whitespace-nowrap"
              >
                아이디
              </Label>
            </div>
            <Input
              id="username"
              value={formData.userId}
              onChange={(e) => handleInputChange('userId', e.target.value)}
              className="top-[492px] absolute w-[398px] h-8 left-[606px] border-[0.6px] border-solid border-[#828282] rounded-none"
            />

            <div className="absolute top-[553px] left-[462px]">
              <Label
                htmlFor="password"
                className="w-[74px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl leading-7 text-center tracking-[0] whitespace-nowrap"
              >
                비밀번호
              </Label>
            </div>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="top-[554px] absolute w-[398px] h-8 left-[606px] border-[0.6px] border-solid border-[#828282] rounded-none"
            />

            <div className="absolute top-[613px] left-[441px]">
              <Label
                htmlFor="passwordConfirm"
                className="w-[116px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl leading-7 text-center tracking-[0] whitespace-nowrap"
              >
                비밀번호 확인
              </Label>
            </div>
            <Input
              id="passwordConfirm"
              type="password"
              value={formData.passwordConfirm}
              onChange={(e) => handleInputChange('passwordConfirm', e.target.value)}
              className="top-[612px] absolute w-[398px] h-8 left-[606px] border-[0.6px] border-solid border-[#828282] rounded-none"
            />
            {formData.password && formData.passwordConfirm && formData.password !== formData.passwordConfirm && (
              <div className="top-[645px] left-[606px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-red-500 text-[8px] leading-[11.2px] absolute text-center tracking-[0] whitespace-nowrap">
                비밀번호가 틀렸습니다.
              </div>
            )}

            <div className="absolute top-[673px] left-[441px]">
              <Label
                htmlFor="paymentPassword"
                className="w-[116px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl leading-7 text-center tracking-[0] whitespace-nowrap"
              >
                결제 비밀번호
              </Label>
            </div>
            <div className="absolute w-[398px] h-8 top-[672px] left-[606px] border-[0.6px] border-solid border-[#828282]">
              <Input
                id="paymentPassword"
                type="password"
                value={formData.paymentPassword}
                onChange={(e) => handleInputChange('paymentPassword', e.target.value)}
                placeholder="6자리 숫자로 입력해주세요"
                className="w-full h-full border-none rounded-none [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-xs leading-[16.8px] text-center tracking-[0]"
              />
            </div>

            <div className="absolute top-[733px] left-[437px]">
              <Label
                htmlFor="name"
                className="w-[125px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl leading-7 text-center tracking-[0] whitespace-nowrap"
              >
                이름(닉네임)
              </Label>
            </div>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="top-[734px] absolute w-[398px] h-8 left-[606px] border-[0.6px] border-solid border-[#828282] rounded-none"
            />

            <div className="absolute top-[794px] left-[462px]">
              <Label
                htmlFor="phone"
                className="w-[74px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl leading-7 text-center tracking-[0] whitespace-nowrap"
              >
                전화번호
              </Label>
            </div>
            <div className="absolute w-[398px] h-8 top-[793px] left-[606px] border-[0.6px] border-solid border-[#828282]">
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="- 없이 입력하세요."
                className="w-full h-full border-none rounded-none [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#999999] text-[10px] leading-[14px] text-center tracking-[0]"
              />
            </div>

            <div className="absolute top-[854px] left-[481px]">
              <Label className="w-[37px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl leading-7 text-center tracking-[0] whitespace-nowrap">
                성별
              </Label>
            </div>
            <RadioGroup
              className="absolute w-[184px] h-[22px] top-[859px] left-[606px]"
              value={formData.gender}
              onValueChange={(value) => handleInputChange('gender', value)}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    value="male"
                    id="male"
                    className="w-[22px] h-[22px] rounded-[11px] border-[0.7px] border-solid border-[#828282]"
                  />
                  <Label
                    htmlFor="male"
                    className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[15px] leading-[21px] text-center tracking-[0] whitespace-nowrap"
                  >
                    남자
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    value="female"
                    id="female"
                    className="w-[22px] h-[22px] rounded-[11px] border-[0.7px] border-solid border-[#828282]"
                  />
                  <Label
                    htmlFor="female"
                    className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[15px] leading-[21px] text-center tracking-[0] whitespace-nowrap"
                  >
                    여자
                  </Label>
                </div>
              </div>
            </RadioGroup>

            <div className="absolute top-[917px] left-[481px]">
              <Label
                htmlFor="height"
                className="w-[37px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl leading-7 text-center tracking-[0] whitespace-nowrap"
              >
                키
              </Label>
            </div>
            <div className="absolute w-32 h-8 top-[914px] left-[606px] border-[0.6px] border-solid border-[#828282]">
              <Input
                id="height"
                type="number"
                value={formData.height}
                onChange={(e) => handleInputChange('height', e.target.value)}
                className="w-full h-full border-none rounded-none pr-8"
              />
              <div className="absolute top-1 right-2 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-[15px] text-center tracking-[0] leading-[21px] whitespace-nowrap">
                cm
              </div>
            </div>

            <div className="absolute top-[914px] left-[773px]">
              <Label
                htmlFor="weight"
                className="w-16 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl leading-7 text-center tracking-[0] whitespace-nowrap"
              >
                몸무게
              </Label>
            </div>
            <div className="absolute w-32 h-8 top-[914px] left-[876px] border-[0.6px] border-solid border-[#828282]">
              <Input
                id="weight"
                type="number"
                value={formData.weight}
                onChange={(e) => handleInputChange('weight', e.target.value)}
                className="w-full h-full border-none rounded-none pr-8"
              />
              <div className="absolute top-1 right-2 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-[15px] text-center tracking-[0] leading-[21px] whitespace-nowrap">
                kg
              </div>
            </div>

            {/* Store name field - only show for buyers, disabled for sellers */}
            <div className="absolute w-[116px] h-[30px] top-[980px] left-[441px]">
              <Label
                htmlFor="storeName"
                className={`w-[116px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-xl text-center tracking-[0] leading-7 whitespace-nowrap ${
                  formData.userType === "seller" ? "text-[#999999]" : "text-black"
                }`}
              >
                스토어 이름
              </Label>
              <Input
                id="storeName"
                type="text"
                value={formData.storeName}
                onChange={(e) => handleInputChange('storeName', e.target.value)}
                disabled={formData.userType === "seller"}
                className={`absolute w-[398px] h-8 left-[165px] top-[-1px] border-[0.6px] border-solid rounded-none ${
                  formData.userType === "seller" 
                    ? "border-[#d0d0d0] bg-[#f5f5f5] text-[#999999] cursor-not-allowed" 
                    : "border-[#828282] bg-white"
                }`}
              />
            </div>
          </section>

          <div className="absolute w-[539px] h-[60px] top-[1049px] left-[466px]">
            <Button
              variant="outline"
              className="absolute w-[242px] h-[60px] top-0 left-0 border border-solid border-[#828282] rounded-none bg-white hover:bg-gray-50 h-auto"
              onClick={() => navigate('/')}
            >
              <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl leading-7 text-center tracking-[0] whitespace-nowrap">
                취소
              </span>
            </Button>

            <Button 
              className="absolute w-[242px] h-[60px] top-0 left-[293px] bg-[#828282] hover:bg-[#707070] rounded-none h-auto"
              onClick={handleSubmit}
            >
              <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-white text-xl leading-7 text-center tracking-[0] whitespace-nowrap">
                저장하기
              </span>
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};
