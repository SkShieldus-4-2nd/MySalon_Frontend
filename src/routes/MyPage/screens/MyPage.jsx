import { MenuIcon, SearchIcon, UserIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

export const MyPage = () => {
  const navigate = useNavigate();

  const navigationItems = [
    { name: "로그인", onClick: () => navigate('/login') },
    { name: "회원가입", onClick: () => navigate('/signup') },
    { name: "장바구니", onClick: () => navigate('/cart') },
    { name: "마이페이지", onClick: () => navigate('/mypage') },
    { name: "커뮤니티", onClick: () => navigate('/') },
  ];

  const menuItems = [
    { name: "내 주문 내역", onClick: () => navigate('/order-history') },
    { name: "찜한 상품", onClick: () => navigate('/wishlist') },
    { name: "장바구니", onClick: () => navigate('/cart') },
    { name: "나의 리뷰", onClick: () => navigate('/my-reviews') },
  ];

  const activityCards = [
    {
      icon: "https://c.animaapp.com/mfes62lkfn0ZhO/img/handbag-5562115-2.png",
      number: "10",
      label: "주문내역",
    },
    {
      icon: "https://c.animaapp.com/mfes62lkfn0ZhO/img/set-flat-outline-hearts-2.png",
      number: "5",
      label: "찜한 상품",
    },
    {
      icon: "https://c.animaapp.com/mfes62lkfn0ZhO/img/message-6500889-2.png",
      number: "12",
      label: "내가 쓴 리뷰",
    },
    {
      icon: "https://c.animaapp.com/mfes62lkfn0ZhO/img/internet-14559876-2.svg",
      number: "2",
      label: "내가 올린 게시글",
    },
  ];

  return (
    <div className="bg-[#f1f1f1] min-h-screen w-full">
      <div className="max-w-[1440px] mx-auto relative">
        {/* Header Navigation */}
        <nav className="flex justify-end pt-[33px] pr-[127px]">
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

        {/* Hamburger Menu */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-[15px] left-[25px] w-[58px] h-[58px] bg-neutral-100 rounded-[29px] hover:bg-neutral-200"
          onClick={() => navigate('/menu')}
        >
          <MenuIcon className="w-6 h-6" />
        </Button>

        {/* Logo Section */}
        <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 text-center">
          <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[9.5px] tracking-[0] leading-[13.3px] mb-3">
            당신만을 위한 옷장
          </div>
          <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[25.5px] tracking-[0] leading-[35.8px] mb-4">
            MY SALON
          </div>
          <img
            className="w-[66px] h-[66px] mx-auto"
            alt="Main icon"
            src="https://c.animaapp.com/mfes62lkfn0ZhO/img/main-icon-1.png"
          />
        </div>

        {/* Search Bar */}
        <div className="absolute top-[67px] right-[37px] w-[296px]">
          <div className="relative">
            <Input
              placeholder="Search"
              className="w-full h-16 pl-12 pr-12 bg-[#78788029] border-none rounded-[100px] [font-family:'SF_Pro-Regular',Helvetica] text-[17px] text-[#999999] placeholder:text-[#999999] focus-visible:ring-0"
            />
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#999999]" />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 [font-family:'SF_Pro-Regular',Helvetica] text-[17px] text-[#999999]">
              􀊱
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex mt-[278px] gap-8 px-[127px]">
          {/* Left Sidebar */}
          <aside className="w-[300px]">
            {/* User Profile */}
            <div className="mb-8">
              <Avatar className="w-[93px] h-[118px] mb-4 rounded-none">
                <AvatarImage
                  src="https://c.animaapp.com/mfes62lkfn0ZhO/img/chatgpt-image-2025--9--7-----04-10-17-2.png"
                  alt="Profile"
                />
                <AvatarFallback>
                  <UserIcon className="w-12 h-12" />
                </AvatarFallback>
              </Avatar>

              <h2 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[23px] text-center tracking-[0] leading-[32.2px] mb-4">
                HONG1234
              </h2>

              <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[23.8px] mb-6">
                가입일 2025.09.07
                <br />
                최근 접속일 2025.09.07
                <br />
                180cm / 70kg
              </div>

              <Button
                variant="outline"
                className="w-[132px] h-10 rounded-[11.61px] border-[0.62px] border-[#222222] [font-family:'SF_Pro-Regular',Helvetica] text-[13.2px] h-auto"
                onClick={() => navigate('/profile-edit')}
              >
                프로필 수정
              </Button>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-4">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[28.9px] tracking-[0] leading-[40.4px] cursor-pointer hover:text-gray-600"
                  onClick={item.onClick}
                >
                  {item.name}
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <h1 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[35px] text-center tracking-[0] leading-[49px] mb-8">
              활동내역
            </h1>

            <Card className="bg-white rounded-[10px] p-12">
              <CardContent className="p-0">
                <h2 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[25px] text-center tracking-[0] leading-[35px] mb-12">
                  홍길동님의 활동
                </h2>

                {/* Activity Cards Grid */}
                <div className="grid grid-cols-2 gap-8 mb-16">
                  {activityCards.map((card, index) => (
                    <Card
                      key={index}
                      className="w-[330px] h-[140px] rounded-[10px] border-[0.3px] border-black"
                    >
                      <CardContent className="p-0 relative h-full">
                        <img
                          className="absolute w-[70px] h-[72px] top-[30px] left-[37px] object-cover"
                          alt={card.label}
                          src={card.icon}
                        />
                        <div className="absolute top-[29px] left-[132px] [font-family:'Inter',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[56px]">
                          {card.number}
                        </div>
                        <div className="absolute top-[79px] left-[132px] [font-family:'Inter',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px]">
                          {card.label}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Tabs Section */}
                <Tabs defaultValue="posts" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-transparent h-auto p-0 mb-8">
                    <TabsTrigger
                      value="posts"
                      className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#a40303] text-[23px] text-center tracking-[0] leading-[32.2px] data-[state=active]:bg-transparent data-[state=active]:text-[#a40303] data-[state=inactive]:text-black"
                    >
                      내가 올린 게시물
                    </TabsTrigger>
                    <TabsTrigger
                      value="comments"
                      className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[23px] text-center tracking-[0] leading-[32.2px] data-[state=active]:bg-transparent data-[state=active]:text-[#a40303] data-[state=inactive]:text-black"
                    >
                      내가 쓴 댓글
                    </TabsTrigger>
                  </TabsList>

                  <div className="w-full h-px bg-black mb-8"></div>

                  <TabsContent value="posts" className="mt-0">
                    <div className="text-center [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-lg tracking-[0] leading-[25.2px]">
                      좋아요 받은 게시물과 댓글을 확인해보세요
                    </div>
                  </TabsContent>

                  <TabsContent value="comments" className="mt-0">
                    <div className="text-center [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-lg tracking-[0] leading-[25.2px]">
                      좋아요 받은 게시물과 댓글을 확인해보세요
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};
