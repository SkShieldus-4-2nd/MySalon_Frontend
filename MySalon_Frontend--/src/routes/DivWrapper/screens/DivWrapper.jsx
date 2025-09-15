import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { SearchIcon } from "lucide-react";

// shadcn/ui (라우트 폴더 내부의 components 경로 그대로 사용)
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";

export const DivWrapper = () => {
  const navigate = useNavigate();

  // 상단 네비 (우측)
  const navigationLinks = [
    { label: "로그인", to: "/login" },
    { label: "회원가입", to: "/signup" },
    { label: "장바구니", to: "/cart" },
    { label: "마이페이지", to: "/mypage" },
    { label: "커뮤니티", to: "/community" },
  ];

  // 게시판 더미 데이터
  const posts = [
    { id: 1, title: "이 옷에 어울리는 바지 추천해주세요!", author: "홍길동", ago: "1시간 전", comments: 1, hasImage: true },
    { id: 2, title: "이 옷에 어울리는 바지 추천해주세요!", author: "홍길동", ago: "1시간 전", comments: 3, hasImage: false },
    { id: 3, title: "이 옷에 어울리는 바지 추천해주세요!", author: "홍길동", ago: "1시간 전", comments: 2, hasImage: false },
    { id: 4, title: "이 옷에 어울리는 바지 추천해주세요!", author: "홍길동", ago: "1시간 전", comments: 1, hasImage: false },
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="max-w-[1440px] mx-auto bg-white min-h-[1080px] relative">

        {/* 우측 상단 네비 */}
        <nav className="absolute top-[33px] right-[37px]">
          <div className="flex gap-4 text-[15px] leading-[21px]">
            {navigationLinks.map((n) => (
              <Button
                key={n.label}
                variant="ghost"
                className="h-auto p-0"
                onClick={() => navigate(n.to)}
              >
                {n.label}
              </Button>
            ))}
          </div>
        </nav>

        {/* 중앙 로고 */}
        <header className="absolute w-[146px] h-[118px] top-[55px] left-1/2 -translate-x-1/2">
          <div className="relative w-[142px] h-[118px]">
            <h1 className="absolute w-[142px] top-3 left-0 text-black text-[25.5px] text-center">MY SALON</h1>
            <p className="absolute w-[87px] top-0 left-7 text-black text-[9.5px] text-center">당신만을 위한 옷장</p>
            <img className="absolute w-[66px] h-[66px] top-[52px] left-[37px]" alt="Main icon"
                 src="https://c.animaapp.com/mfezbbicpZVDGC/img/main-icon-1.png" />
          </div>
        </header>

        {/* 검색(우측 상단) */}
        <div className="absolute w-[296px] h-16 top-[67px] right-[37px]">
          <div className="flex w-[296px] h-16 items-center rounded-[100px]">
            <div className="flex items-center px-[11px] py-[8px] flex-1 bg-[#78788029] rounded-[100px]">
              <SearchIcon className="w-4 h-4 text-[#999999] mr-2" />
              <Input
                placeholder="Search"
                className="border-none bg-transparent text-[#999999] text-[17px] placeholder:text-[#999999] focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto"
              />
            </div>
          </div>
        </div>

        {/* 상단 탭: 오늘의 코디 / 게시판 */}
        <div className="absolute w-full top-[195px] left-0">
          <div className="flex justify-center gap-12">
            <Link to="/community">
              <span className="text-[18px] leading-[20.7px] text-black">오늘의 코디</span>
            </Link>
            <span className="text-[18px] leading-[20.7px] font-bold text-[#a40303]">게시판</span>
          </div>
          <Separator className="mt-4" />
        </div>

        {/* 본문: 게시판 리스트 */}
        <main className="pt-[260px] px-[180px] pb-20">
          {/* 페이지 타이틀 */}
          <h2 className="text-[24px] font-bold mb-6">게시판</h2>

          {/* 검색 입력 + 글쓰기 버튼 */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1">
              <Input
                placeholder="무엇을 찾고싶으신가요?"
                className="h-10 rounded-[6px] border border-[#ddd] px-4"
              />
            </div>
            <Button
              variant="outline"
              className="h-10 px-4 border border-[#999] text-[12px]"
              onClick={() => navigate("/board/write")}  // ← 여기만 바뀜!
            >
              글쓰기
            </Button>
          </div>

          {/* 리스트 카드 */}
          <Card className="rounded-[8px] border border-black/30">
            <CardContent className="p-0">
              {posts.map((post, idx) => (
                <div key={post.id}>
                  <div className="flex items-stretch px-6 py-5">
                    {/* 왼쪽 컨텐츠 */}
                    <div className="flex-1 pr-6">
                      <button
                        className="text-[16px] font-semibold text-left hover:underline"
                        onClick={() => navigate(`/post/${post.id}`)}
                      >
                        {post.title}
                      </button>

                      <div className="mt-2 text-[12px] text-[#666] flex items-center gap-3">
                        <span>{post.author}</span>
                        <span>{post.ago}</span>
                        <span>댓글 {post.comments}개</span>
                      </div>
                    </div>

                    {/* 우측 사진 자리 */}
                    <div className="w-[64px] h-[64px] border border-[#ccc] bg-[#f5f5f5] flex items-center justify-center text-[12px] text-[#444] shrink-0">
                      {post.hasImage ? "사진" : " "}
                    </div>
                  </div>

                  {idx !== posts.length - 1 && <Separator className="bg-[#eee]" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};
