import { Edit3Icon, MenuIcon, SearchIcon, UploadIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
// 공용 Textarea (src/components/ui/textarea.jsx)
import { Textarea } from "../../../components/ui/textarea";

// 🔹 전역 게시글 컨텍스트 (context/ 경로)
import { usePosts } from "../../../context/PostsContext.jsx";

export const Screen = () => {
  const navigate = useNavigate();
  const { addPost } = usePosts();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    hasImage: false,
  });

  const navigationItems = [
    { name: "로그인", onClick: () => navigate("/login") },
    { name: "회원가입", onClick: () => navigate("/signup") },
    { name: "장바구니", onClick: () => navigate("/cart") },
    { name: "마이페이지", onClick: () => navigate("/mypage") },
    { name: "커뮤니티", onClick: () => navigate("/community") },
  ];

  const handleSubmit = () => {
    if (!formData.title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (!formData.content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }

    // ✅ 전역 상태에 새 글 추가 → 목록 최상단 노출
    addPost({
      title: formData.title,
      author: formData.author,
      hasImage: formData.hasImage,
      content: formData.content,
    });

    // ✅ 게시판 목록으로 이동
    navigate("/board");
  };

  const handleCancel = () => navigate("/board");

  return (
    <div className="bg-[#f1f1f1] min-h-screen w-full">
      <div className="max-w-[1440px] mx-auto relative">
        {/* Header Navigation */}
        <nav className="flex items-center justify-between px-6 py-4">
          {/* Hamburger Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="w-[58px] h-[58px] bg-neutral-100 rounded-full"
            onClick={() => navigate("/menu")}
          >
            <MenuIcon className="w-6 h-6" />
          </Button>

          {/* Logo Section */}
          <div className="flex flex-col items-center">
            <div className="text-[9.5px] font-normal text-black text-center leading-[13.3px] mb-1">
              당신만을 위한 옷장
            </div>
            <div className="text-[25.5px] font-normal text-black text-center leading-[35.8px] mb-2">
              MY SALON
            </div>
            <img
              className="w-[66px] h-[66px]"
              alt="Main icon"
              src="https://c.animaapp.com/mff2arl9wgJtBz/img/main-icon-1.png"
            />
          </div>

          {/* Right Side Navigation */}
          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-4 text-black text-[15px] leading-[21px]">
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

            {/* Search Bar */}
            <div className="flex items-center bg-[#78788029] rounded-full px-4 py-3 w-[296px]">
              <SearchIcon className="w-4 h-4 text-[#999999] mr-2" />
              <Input
                placeholder="Search"
                className="border-0 bg-transparent text-[#999999] text-[17px] leading-[22px] placeholder:text-[#999999] focus-visible:ring-0 h-auto p-0 flex-1"
              />
              <div className="text-[#999999] text-[17px] leading-[22px]">􀊱</div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="px-6 mt-16">
          {/* Page Title */}
          <div className="flex items-center justify-center mb-16">
            <h1 className="font-bold text-black text-[40px] text-center leading-[56px] mr-4">
              글작성하기
            </h1>
            <Edit3Icon className="w-[34px] h-[34px]" />
          </div>

          {/* Form Card */}
          <div className="flex justify-center">
            <Card className="w-[971px] bg-white rounded-[10px] border-0 shadow-sm">
              <CardContent className="p-[107px]">
                <div className="space-y-6">
                  {/* Title */}
                  <Input
                    value={formData.title}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, title: e.target.value }))
                    }
                    className="w-full h-[51px] bg-[url(https://c.animaapp.com/mff2arl9wgJtBz/img/rectangle-72.svg)] bg-[100%_100%] border-0 px-[38px] py-3.5 text-[15px]"
                    placeholder="제목을 입력해주세요."
                  />

                  {/* Content */}
                  <Textarea
                    value={formData.content}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, content: e.target.value }))
                    }
                    className="w-full h-[242px] rounded-[15px] border-[0.4px] border-solid border-black px-[38px] py-5 text-[15px] resize-none"
                    placeholder="공유하고 싶거나 궁금한 이야기를 작성해주세요."
                  />

                  {/* Photo Upload (더미) */}
                  <div className="flex justify-start">
                    <Button
                      variant="outline"
                      className="w-[149px] h-12 rounded-[10px] border-[0.4px] border-solid border-black bg-white hover:bg-gray-50 flex items-center gap-3"
                    >
                      <UploadIcon className="w-[26px] h-[26px]" />
                      <span className="text-[15px]">사진 업로드</span>
                    </Button>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center gap-[51px] mt-[71px]">
                    <Button
                      variant="outline"
                      className="w-[242px] h-[60px] border border-solid border-[#828282] bg-white hover:bg-gray-50 text-black text-xl"
                      onClick={handleCancel}
                    >
                      취소
                    </Button>
                    <Button
                      className="w-[242px] h-[60px] bg-[#828282] hover:bg-[#707070] text-white text-xl"
                      onClick={handleSubmit}
                    >
                      등록하기
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};
