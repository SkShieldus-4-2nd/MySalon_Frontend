import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Separator } from "../components/ui/separator";

export const Screen = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("buyer");
  const [gender, setGender] = useState("MALE");

  // 첫 번째 코드의 상태 관리
  const [form, setForm] = useState({
    id: "",
    password: "",
    passwordConfirm: "",
    secondPassword: "",
    userName: "",
    phone: "",
    tall: "",
    weight: "",
    storeName: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  // 첫 번째 코드의 API 호출
  const handleSignup = async () => {
    if (form.password !== form.passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const requestData = {
        id: form.id,
        password: form.password,
        userName: form.userName,
        secondPassword: form.secondPassword,
        gender: gender === "MALE" ? "MALE" : "FEMALE",
        tall: form.tall ? Number(form.tall) : null,
        weight: form.weight ? Number(form.weight) : null,
        type: userType === "buyer" ? "BUYER" : "SELLER",
        storeName: userType === "seller" ? form.storeName : null,
      };

      const response = await axios.post("http://localhost:8080/api/users", requestData);

      if (response.status === 200) {
        alert("회원가입이 완료되었습니다!");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
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
        {/* 네비게이션 */}
        <nav className="absolute top-[33px] left-[1080px]">
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
          <h1 className="text-center text-[25.5px] font-normal">MY SALON</h1>
          <p className="text-center text-[9.5px]">당신만을 위한 옷장</p>
          <img
            className="absolute w-[66px] h-[66px] top-[52px] left-[37px]"
            alt="Main icon"
            src="https://c.animaapp.com/mfeqluynHQoI9d/img/main-icon-1.png"
          />
        </header>

        <main>
          <h2 className="absolute top-[282px] left-[195px] text-[40px] font-bold">회원가입</h2>
          <Separator className="absolute w-[1115px] h-px top-[352px] left-[195px] bg-gray-300" />

          {/* 역할 선택 */}
          <RadioGroup
            className="absolute top-[311px] left-[372px]"
            value={userType}
            onValueChange={setUserType}
          >
            <div className="flex items-center space-x-[81px]">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="buyer" id="buyer" />
                <Label htmlFor="buyer">구매자</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="seller" id="seller" />
                <Label htmlFor="seller">판매자</Label>
              </div>
            </div>
          </RadioGroup>

          {/* 입력 폼 */}
          <section>
            <Label htmlFor="id" className="absolute top-[493px] left-[471px]">아이디</Label>
            <Input id="id" value={form.id} onChange={handleChange} className="absolute top-[492px] left-[606px] w-[398px]" />

            <Label htmlFor="password" className="absolute top-[553px] left-[462px]">비밀번호</Label>
            <Input id="password" type="password" value={form.password} onChange={handleChange} className="absolute top-[554px] left-[606px] w-[398px]" />

            <Label htmlFor="passwordConfirm" className="absolute top-[613px] left-[441px]">비밀번호 확인</Label>
            <Input id="passwordConfirm" type="password" value={form.passwordConfirm} onChange={handleChange} className="absolute top-[612px] left-[606px] w-[398px]" />

            <Label htmlFor="secondPassword" className="absolute top-[673px] left-[441px]">결제 비밀번호</Label>
            <Input id="secondPassword" type="password" placeholder="6자리 숫자" value={form.secondPassword} onChange={handleChange} className="absolute top-[672px] left-[606px] w-[398px]" />

            <Label htmlFor="userName" className="absolute top-[733px] left-[437px]">이름(닉네임)</Label>
            <Input id="userName" value={form.userName} onChange={handleChange} className="absolute top-[734px] left-[606px] w-[398px]" />

            <Label htmlFor="phone" className="absolute top-[794px] left-[462px]">전화번호</Label>
            <Input id="phone" value={form.phone} onChange={handleChange} className="absolute top-[793px] left-[606px] w-[398px]" />

            <Label className="absolute top-[854px] left-[481px]">성별</Label>
            <RadioGroup className="absolute top-[859px] left-[606px]" value={gender} onValueChange={setGender}>
              <div className="flex space-x-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="MALE" id="male" />
                  <Label htmlFor="male">남자</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FEMALE" id="female" />
                  <Label htmlFor="female">여자</Label>
                </div>
              </div>
            </RadioGroup>

            <Label htmlFor="tall" className="absolute top-[917px] left-[481px]">키</Label>
            <Input id="tall" type="number" value={form.tall} onChange={handleChange} className="absolute top-[914px] left-[606px] w-32" />

            <Label htmlFor="weight" className="absolute top-[914px] left-[773px]">몸무게</Label>
            <Input id="weight" type="number" value={form.weight} onChange={handleChange} className="absolute top-[914px] left-[876px] w-32" />

            <Label htmlFor="storeName" className="absolute top-[980px] left-[441px]">스토어 이름</Label>
            <Input id="storeName" value={form.storeName} onChange={handleChange} disabled={userType === "buyer"} className="absolute top-[979px] left-[606px] w-[398px]" />
          </section>

          {/* 버튼 */}
          <div className="absolute top-[1049px] left-[466px] flex gap-6">
            <Button variant="outline" className="w-[242px] h-[60px]" onClick={() => navigate("/")}>취소</Button>
            <Button className="w-[242px] h-[60px] bg-[#828282] hover:bg-[#707070]" onClick={handleSignup}>회원가입</Button>
          </div>
        </main>
      </div>
    </div>
  );
};
