import { MenuIcon, SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";

export const Screen = () => {
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState("");

  const navigationItems = [
    { name: "로그인", onClick: () => navigate('/login') },
    { name: "회원가입", onClick: () => navigate('/signup') },
    { name: "장바구니", onClick: () => navigate('/cart') },
    { name: "마이페이지", onClick: () => navigate('/mypage') },
    { name: "커뮤니티", onClick: () => navigate('/community') },
  ];

  const comments = [
    {
      id: 1,
      username: "홍길동",
      comment: "핑크 크롭티요!",
      avatar:
        "https://c.animaapp.com/mff2hae8n4dhTh/img/chatgpt-image-2025--9--7-----04-10-17-2-4.png",
    },
    {
      id: 2,
      username: "홍길동",
      comment: "핑크 크롭티요!",
      avatar:
        "https://c.animaapp.com/mff2hae8n4dhTh/img/chatgpt-image-2025--9--7-----04-10-17-2-4.png",
    },
    {
      id: 3,
      username: "홍길동",
      comment: "핑크 크롭티요!",
      avatar:
        "https://c.animaapp.com/mff2hae8n4dhTh/img/chatgpt-image-2025--9--7-----04-10-17-2-4.png",
    },
    {
      id: 4,
      username: "홍길동",
      comment: "핑크 크롭티요!",
      avatar:
        "https://c.animaapp.com/mff2hae8n4dhTh/img/chatgpt-image-2025--9--7-----04-10-17-2-4.png",
    },
    {
      id: 5,
      username: "홍길동",
      comment: "핑크 크롭티요!",
      avatar:
        "https://c.animaapp.com/mff2hae8n4dhTh/img/chatgpt-image-2025--9--7-----04-10-17-2-4.png",
    },
  ];

  const handleCommentSubmit = () => {
    if (!newComment.trim()) {
      alert('댓글을 입력해주세요.');
      return;
    }
    alert('댓글이 등록되었습니다!');
    setNewComment("");
  };

  return (
    <div className="bg-[#f1f1f1] min-h-screen w-full flex justify-center">
      <div className="bg-[#f1f1f1] w-full max-w-[1440px] relative">
        {/* Header Navigation */}
        <nav className="absolute top-[33px] right-[160px]">
          <div className="flex gap-4 [font-family:'Crimson_Text',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px]">
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

        {/* Logo Section */}
        <header className="absolute w-[146px] h-[118px] top-[55px] left-1/2 transform -translate-x-1/2">
          <div className="relative w-[142px] h-[118px]">
            <h1 className="absolute w-[142px] top-3 left-0 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[25.5px] text-center tracking-[0] leading-[35.8px] whitespace-nowrap">
              MY SALON
            </h1>
            <p className="absolute w-[87px] top-0 left-7 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[9.5px] text-center tracking-[0] leading-[13.3px] whitespace-nowrap">
              당신만을 위한 옷장
            </p>
            <img
              className="absolute w-[66px] h-[66px] top-[52px] left-[37px]"
              alt="Main icon"
              src="https://c.animaapp.com/mff2hae8n4dhTh/img/main-icon-1.png"
            />
          </div>
        </header>

        {/* Hamburger Menu */}
        <Button
          variant="ghost"
          className="absolute w-[58px] h-[58px] top-[15px] left-[25px] bg-neutral-100 rounded-[29px] p-0 h-auto"
          onClick={() => navigate('/menu')}
        >
          <MenuIcon className="w-6 h-6" />
        </Button>

        {/* Search Bar */}
        <div className="absolute w-[296px] h-16 top-[61px] right-[37px]">
          <div className="flex w-[296px] h-16 items-center relative rounded-[100px]">
            <div className="flex items-center p-[11px] relative flex-1 grow bg-[#78788029] rounded-[100px]">
              <div className="flex items-center gap-2 relative flex-1 grow">
                <SearchIcon className="w-4 h-4 text-[#999999]" />
                <Input
                  placeholder="Search"
                  className="border-0 bg-transparent text-[#999999] text-[17px] tracking-[-0.08px] leading-[22px] placeholder:text-[#999999] focus-visible:ring-0 h-auto p-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <main className="absolute w-[1129px] top-[261px] left-[155px]">
          <Card className="bg-white rounded-[10px] border-0">
            <CardContent className="p-0">
              {/* Post Header */}
              <div className="p-[136px_136px_0_136px]">
                <div className="mb-[68px]">
                  <h2 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-2xl tracking-[-0.08px] leading-[20.7px] mb-[10px]">
                    이 옷에 어울리는 티 추천해주세요!
                  </h2>
                  <div className="flex gap-2 text-sm">
                    <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black tracking-[-0.08px] leading-[20.7px]">
                      홍길동
                    </span>
                    <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xs tracking-[-0.08px] leading-[20.7px]">
                      1시간 전
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="w-[860px] h-[338px] rounded-[15px] border-[0.4px] border-solid border-black p-16 mb-[53px] relative">
                  <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-7">
                    사진같은 바지를 구매했는데 어떤 옷이랑 코디하면
                    <br /> 좋을지 모르겠어서요.
                    <br />
                    코디 추천 부탁드립니다.
                  </div>
                  <div className="absolute w-[220px] h-[262px] top-[45px] right-[59px] bg-[#d9d9d9] flex items-center justify-center">
                    <span className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[35px] tracking-[-0.08px] leading-[20.7px]">
                      사진
                    </span>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="px-[124px] pb-[124px]">
                <div className="w-[860px] h-[651px] relative">
                  <img
                    className="absolute w-[860px] h-[651px] top-0 left-0"
                    alt="Rectangle"
                    src="https://c.animaapp.com/mff2hae8n4dhTh/img/rectangle-87.svg"
                  />

                  {/* Comment Input */}
                  <div className="absolute top-[55px] left-[59px] w-[763px] h-[57px] flex items-center gap-4">
                    <Input
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="댓글을 입력하세요."
                      className="flex-1 h-[57px] rounded-[20px] border-[0.4px] border-solid border-black bg-transparent [font-family:'Inter',Helvetica] font-normal text-[#828282] text-[17px]"
                    />
                    <Button 
                      className="w-[50px] h-8 bg-[#d9d9d9] rounded-[50px] text-black [font-family:'Inter',Helvetica] font-normal text-[13px] h-auto"
                      onClick={handleCommentSubmit}
                    >
                      완료
                    </Button>
                  </div>

                  {/* Comments List */}
                  <div className="absolute top-[163px] left-[59px] space-y-[30px]">
                    {comments.map((comment, index) => (
                      <div key={comment.id}>
                        <div className="flex items-start gap-2 w-[150px] h-[58px]">
                          <Avatar className="w-[58px] h-[58px]">
                            <AvatarImage
                              src={comment.avatar}
                              alt={comment.username}
                            />
                            <AvatarFallback>
                              {comment.username[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col justify-center h-[58px]">
                            <div className="[font-family:'Inter',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[normal]">
                              {comment.username}
                            </div>
                            <div className="[font-family:'Inter',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[normal]">
                              {comment.comment}
                            </div>
                          </div>
                        </div>
                        {index < comments.length - 1 && (
                          <Separator className="w-[743px] mt-[14px] h-px bg-black" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};
