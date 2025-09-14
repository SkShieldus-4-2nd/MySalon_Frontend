import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Separator } from "../components/ui/separator";

export const Screen = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const userNum = 2; // 예시: 로그인된 유저 번호

  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    passwordConfirm: "",
    paymentPassword: "",
    name: "",
    gender: "male",
    height: "",
    weight: "",
    storeName: "",
    userType: "buyer",
    profileImageUrl: ""
  });

  const [loading, setLoading] = useState(true);

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

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setFormData(prev => ({ ...prev, profileImageUrl: url }));
  };

  // 페이지 로드 시 유저 정보 가져오기
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/users/${userNum}`);
        const user = res.data;
        setFormData({
          userId: user.id || "",
          password: "",
          passwordConfirm: "",
          paymentPassword: user.secondPassword || "",
          name: user.userName || "",
          gender: user.gender?.toLowerCase() || "male",
          height: user.tall || "",
          weight: user.weight || "",
          storeName: user.storeName || "",
          userType: user.type?.toLowerCase() || "buyer",
          profileImageUrl: user.profileImageUrl || ""
        });
        setLoading(false);
      } catch (error) {
        console.error("사용자 정보 로드 실패:", error);
        alert("사용자 정보를 가져오는데 실패했습니다.");
      }
    };
    fetchUser();
  }, [userNum]);

  // 수정 API 호출
  const handleSubmit = async () => {
    if (formData.password && formData.password !== formData.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    const payload = {
      id: formData.userId,
      userName: formData.name,
      secondPassword: formData.paymentPassword,
      password: formData.password || undefined,
      gender: formData.gender?.toUpperCase() || null,
      tall: Number(formData.height) || null,
      weight: Number(formData.weight) || null,
      storeName: formData.userType === "seller" ? formData.storeName : null,
      type: formData.userType.toUpperCase(),
      profileImageUrl: formData.profileImageUrl || null
    };

    console.log("서버로 보낼 데이터:", payload); // 🔍 여기서 확인

    try {
      await axios.put(`http://localhost:8080/api/users/${userNum}`, payload);
      alert('프로필이 수정되었습니다!');
      navigate('/mypage');
    } catch (error) {
      console.error("사용자 정보 수정 실패:", error);
      alert('수정에 실패했습니다.');
    }
  };


  if (loading) return <div className="text-center mt-20">로딩 중...</div>;

  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white w-[1440px] h-[1216px] relative">
        {/* 네비게이션 */}
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

        {/* 헤더 */}
        <header className="absolute w-[146px] h-[118px] top-[135px] left-[649px]">
          <div className="relative w-[142px] h-[118px]">
            <h1 className="absolute w-[142px] top-3 left-0 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[25.5px] text-center leading-[35.8px] whitespace-nowrap">
              MY SALON
            </h1>
            <p className="w-[87px] top-0 left-7 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[9.5px] leading-[13.3px] absolute text-center whitespace-nowrap">
              당신만을 위한 옷장
            </p>
            <img
              className="absolute w-[66px] h-[66px] top-[52px] left-[37px]"
              alt="Main icon"
              src="https://c.animaapp.com/mfew2ysnZg9rfL/img/main-icon-1.png"
            />
          </div>
        </header>

        <main>
          <h2 className="top-[293px] left-[195px] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#222222] text-[40px] leading-[56px] absolute text-center tracking-[0] whitespace-nowrap">
            프로필 수정하기
          </h2>

          <Separator className="absolute w-[1115px] h-px top-[352px] left-[195px] bg-gray-300" />

          {/* 역할 선택 */}
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
                <Label htmlFor="buyer" className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[15px] leading-[21px] whitespace-nowrap">
                  구매자
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="seller"
                  id="seller"
                  className="w-[22px] h-[22px] rounded-[11px] border-[0.7px] border-solid border-[#828282]"
                />
                <Label htmlFor="seller" className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[15px] leading-[21px] whitespace-nowrap">
                  판매자
                </Label>
              </div>
            </div>
          </RadioGroup>

          <section>
            <h3 className="top-[410px] left-[372px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[35px] leading-[49px] absolute text-center tracking-[0] whitespace-nowrap">
              기본정보
            </h3>

            {/* 아이디 */}
            <div className="absolute top-[493px] left-[471px]">
              <Label htmlFor="username" className="w-14 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl leading-7 whitespace-nowrap">
                아이디
              </Label>
            </div>
            <Input
              id="username"
              value={formData.userId}
              onChange={(e) => handleInputChange('userId', e.target.value)}
              className="top-[492px] absolute w-[398px] h-8 left-[606px] border-[0.6px] border-solid border-[#828282] rounded-none"
            />

            {/* 비밀번호 */}
            <div className="absolute top-[553px] left-[462px]">
              <Label htmlFor="password" className="w-[74px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl leading-7 whitespace-nowrap">
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

            {/* 비밀번호 확인 */}
            <div className="absolute top-[613px] left-[441px]">
              <Label htmlFor="passwordConfirm" className="w-[116px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl leading-7 whitespace-nowrap">
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

            {/* 결제 비밀번호 */}
            <div className="absolute top-[673px] left-[441px]">
              <Label htmlFor="paymentPassword" className="w-[116px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl leading-7 whitespace-nowrap">
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

            {/* 이름 */}
            <div className="absolute top-[733px] left-[437px]">
              <Label htmlFor="name" className="w-[125px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl leading-7 whitespace-nowrap">
                이름(닉네임)
              </Label>
            </div>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="top-[732px] absolute w-[398px] h-8 left-[606px] border-[0.6px] border-solid border-[#828282] rounded-none"
            />

            {/* 성별 */}
            <div className="absolute top-[792px] left-[437px]">
              <Label className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl leading-7 whitespace-nowrap">
                성별
              </Label>
            </div>
            <div className="absolute top-[791px] left-[606px] flex gap-10">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                /> 남
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                /> 여
              </label>
            </div>

            {/* 키 */}
            <div className="absolute top-[851px] left-[462px]">
              <Label htmlFor="height" className="w-[74px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl leading-7 whitespace-nowrap">
                키(cm)
              </Label>
            </div>
            <Input
              id="height"
              value={formData.height}
              onChange={(e) => handleInputChange('height', e.target.value)}
              className="top-[850px] absolute w-[398px] h-8 left-[606px] border-[0.6px] border-solid border-[#828282] rounded-none"
            />

            {/* 몸무게 */}
            <div className="absolute top-[911px] left-[437px]">
              <Label htmlFor="weight" className="w-[125px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl leading-7 whitespace-nowrap">
                몸무게(kg)
              </Label>
            </div>
            <Input
              id="weight"
              value={formData.weight}
              onChange={(e) => handleInputChange('weight', e.target.value)}
              className="top-[910px] absolute w-[398px] h-8 left-[606px] border-[0.6px] border-solid border-[#828282] rounded-none"
            />

            {/* 가게 이름 */}
            <div className="absolute top-[971px] left-[437px]">
              <Label htmlFor="storeName" className="w-[125px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl leading-7 whitespace-nowrap">
                가게 이름
              </Label>
            </div>
            <Input
              id="storeName"
              value={formData.storeName}
              disabled={formData.userType !== "seller"}
              onChange={(e) => handleInputChange('storeName', e.target.value)}
              placeholder={formData.userType === "seller" ? "" : "구매자는 입력 불가"}
              className="top-[970px] absolute w-[398px] h-8 left-[606px] border-[0.6px] border-solid border-[#828282] rounded-none"
            />

            {/* 프로필 이미지 */}
            <div className="absolute top-[1031px] left-[606px] flex items-center gap-4">
              <Button onClick={() => fileInputRef.current.click()}>사진 업로드</Button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
              {formData.profileImageUrl && (
                <img
                  src={formData.profileImageUrl}
                  alt="프로필"
                  className="w-16 h-16 rounded-full object-cover"
                />
              )}
            </div>

            {/* 제출 버튼 */}
            <Button
              className="absolute top-[1101px] left-[606px] w-[398px] h-12 bg-black text-white font-bold"
              onClick={handleSubmit}
            >
              수정 완료
            </Button>
          </section>
        </main>
      </div>
    </div>
  );
};
