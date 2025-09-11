import { MenuIcon, SearchIcon, UserIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export const Frame = () => {
  const navigate = useNavigate();
  const navigationItems = [
    "로그인",
    "회원가입",
    "장바구니",
    "마이페이지",
    "커뮤니티",
  ];

  return (
    <div className="bg-transparent grid justify-items-center [align-items:start] w-screen">
      <div className="w-[1440px] h-[1080px]">
        <div className="relative h-[1080px] bg-[#f1f1f1]">
          <nav className="absolute top-[33px] right-[80px]">
            <div className="flex gap-4 [font-family:'Crimson_Text',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[21px]">
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-auto p-0 text-[15px] font-normal"
                  onClick={() => {
                    if (item === "로그인") {
                      navigate('/login');
                    } else if (item === "회원가입") {
                      navigate('/signup');
                    } else if (item === "마이페이지") {
                      navigate('/mypage');
                    } else if (item === "장바구니") {
                      navigate('/cart');
                    } else if (item === "커뮤니티") {
                      navigate('/community');
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
            </div>
          </nav>

          <header className="absolute w-[146px] h-[118px] top-[55px] left-[649px]">
            <div className="relative w-[142px] h-[118px]">
              <div className="absolute w-[142px] top-3 left-0 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[25.5px] text-center tracking-[0] leading-[35.8px] whitespace-nowrap">
                MY SALON
              </div>

              <div className="absolute w-[87px] top-0 left-7 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[9.5px] text-center tracking-[0] leading-[13.3px] whitespace-nowrap">
                당신만을 위한 옷장
              </div>

              <img
                className="absolute w-[66px] h-[66px] top-[52px] left-[37px]"
                alt="Main icon"
                src="https://c.animaapp.com/mff200vpvB1ofv/img/main-icon-1.png"
              />
            </div>
          </header>

          <Button
            variant="ghost"
            size="icon"
            className="absolute w-[58px] h-[58px] top-[15px] left-[25px] bg-neutral-100 rounded-[29px/29.18px] h-auto"
          >
            <MenuIcon className="w-[27px] h-[27px]" />
          </Button>

          <section className="absolute w-[231px] h-14 top-[238px] left-[193px]">
            <h1 className="absolute top-0 left-0 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[40px] text-center tracking-[0] leading-[56px] whitespace-nowrap">
              코디 등록하기
            </h1>
          </section>

          <Card className="absolute w-[971px] h-[627px] top-[333px] left-[234px] bg-white rounded-[10px]">
            <CardContent className="p-0">
              <div className="absolute w-[274px] h-[49px] top-[95px] left-[107px]">
                <h2 className="absolute top-0 left-0 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[35px] text-center tracking-[0] leading-[49px] whitespace-nowrap">
                  나의 코디 자랑하기
                </h2>
              </div>

              <Input
                placeholder="코디의 제목을 지어주세요."
                className="absolute w-[739px] h-[51px] top-40 left-[107px] bg-[url(https://c.animaapp.com/mff200vpvB1ofv/img/rectangle-70.svg)] bg-[100%_100%] border-0 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-[15px] text-center tracking-[0] leading-[21px] pl-[25px]"
              />

              <Textarea
                placeholder="코디에 대해 설명해주세요."
                className="absolute w-[739px] h-[161px] top-[234px] left-[107px] bg-[url(https://c.animaapp.com/mff200vpvB1ofv/img/rectangle-70.svg)] bg-[100%_100%] border-0 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-[15px] tracking-[0] leading-[21px] pl-[25px] pt-[21px] resize-none"
              />

              <Button
                variant="outline"
                className="absolute w-[149px] h-12 top-[418px] left-[111px] rounded-[10px] border-[0.4px] border-solid border-black h-auto"
              >
                <UserIcon className="w-[26px] h-[26px] mr-2" />
                <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-[21px]">
                  사진 업로드
                </span>
              </Button>

              <div className="absolute w-[539px] h-[60px] top-[489px] left-[209px] flex gap-[9px]">
                <Button
                  variant="outline"
                  className="w-[242px] h-[60px] border border-solid border-[#828282] h-auto"
                >
                  <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-7">
                    취소
                  </span>
                </Button>

                <Button className="w-[242px] h-[60px] bg-[#828282] hover:bg-[#6a6a6a] h-auto">
                  <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-7">
                    등록하기
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <img
            className="absolute w-[34px] h-[34px] top-[249px] left-[431px] object-cover"
            alt="Pencil"
            src="https://c.animaapp.com/mff200vpvB1ofv/img/pencil-2361542-1.png"
          />

          <div className="absolute w-[296px] h-16 top-[61px] left-[1107px]">
            <div className="flex w-[296px] h-16 items-center relative rounded-[100px]">
              <div className="flex items-center p-[11px] relative flex-1 grow bg-[#78788029] rounded-[100px]">
                <div className="flex items-center gap-2 relative flex-1 grow">
                  <SearchIcon className="w-4 h-4 text-[#999999]" />
                  <span className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#999999] text-[17px] tracking-[-0.08px] leading-[22px] whitespace-nowrap">
                    SearchIcon
                  </span>
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#999999] text-[17px] tracking-[-0.08px] leading-[22px] whitespace-nowrap">
                  􀊱
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
