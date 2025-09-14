import { Edit3Icon, MenuIcon, SearchIcon, UploadIcon, Star } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useAuth } from "../../../lib/AuthContext";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export const Screen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product_detail_num } = useParams();
  const fileInputRef = useRef(null);
  const { token, loading, authFetch } = useAuth();

  const isEdit = new URLSearchParams(location.search).get("mode") === "edit";
  const passedReview = location.state?.review || null;

  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(passedReview?.productImage || "https://c.animaapp.com/mfeskhdjLsBCWm/img/image-2.png");

  useEffect(() => {
    if (loading) return; // Wait until auth state is loaded

    if (!token) {
        alert("로그인이 필요합니다.");
        navigate("/login");
    }

    if (isEdit && passedReview) {
      // setReviewText(passedReview.content ?? "");
    }
  }, [isEdit, passedReview, token, navigate, loading]);

  const navigationItems = [
    { name: "로그인", onClick: () => navigate('/login') },
    { name: "회원가입", onClick: () => navigate('/signup') },
    { name: "장바구니", onClick: () => navigate('/cart') },
    { name: "마이페이지", onClick: () => navigate('/mypage') },
    { name: "커뮤니티", onClick: () => navigate('/') },
  ];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!token) {
        alert("로그인이 필요합니다.");
        return navigate("/login");
    }
    if (rating === 0) return alert('별점을 선택해주세요.');
    if (!reviewText.trim()) return alert('리뷰 내용을 작성해주세요.');

    const formData = new FormData();
    formData.append('score', rating);
    formData.append('text', reviewText);
    if (imageFile) {
      formData.append('reviewImage', imageFile);
    }

    try {
      const response = await authFetch(`/api/reviews/${product_detail_num}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert(isEdit ? '리뷰가 수정되었습니다!' : '리뷰가 등록되었습니다!');
        navigate('/order-history');
      } else {
        const errorData = await response.json();
        alert(`오류: ${errorData.message}`);
      }
    } catch (error) {
      console.error('리뷰 제출 실패:', error);
      alert('리뷰 제출에 실패했습니다.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#f1f1f1] grid justify-items-center [align-items:start] w-screen">
      <div className="bg-[#f1f1f1] w-[1440px] h-[1080px] relative">
        <nav className="absolute top-[33px] left-[1080px]">
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
              src="https://c.animaapp.com/mfeskhdjLsBCWm/img/main-icon-1.png"
            />
          </div>
        </header>

        <Button
          variant="ghost"
          className="absolute w-[58px] h-[58px] top-[15px] left-[25px] bg-neutral-100 rounded-[29px/29.18px] p-0"
          onClick={() => navigate('/menu')}
        >
          <MenuIcon className="w-6 h-6" />
        </Button>

        <div className="absolute w-[223px] h-14 top-[238px] left-[197px]">
          <Edit3Icon className="absolute w-[34px] h-[34px] top-[11px] left-[234px]" />
          <h1 className="absolute top-0 left-0 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-[40px] text-center tracking-[0] leading-[56px] whitespace-nowrap">
            {isEdit ? "리뷰수정하기" : "리뷰작성하기"}
          </h1>
        </div>

        <Card className="absolute w-[971px] h-[627px] top-[333px] left-[234px] bg-white rounded-[10px]">
          <CardContent className="p-0 relative h-full">
            <img
              className="absolute w-[162px] h-[216px] top-[67px] left-[103px] object-cover"
              alt="Image Preview"
              src={imagePreview}
            />

            <div className="absolute top-[83px] left-[295px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[23px] text-center tracking-[0] leading-[32.2px] whitespace-nowrap">
              {passedReview?.productName || "여름블루 롱 원피스"}
            </div>

            <div className="absolute top-[132px] left-[295px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0] leading-[35px] whitespace-nowrap">
              {passedReview?.priceText || "50,000 원"}
            </div>

            <div className="absolute top-[66px] left-[295px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#828282] text-xs tracking-[0] leading-[16.8px] whitespace-nowrap">
              {passedReview?.productCode || "123456789"}
            </div>

            {/* ⭐ 별점: 0점(회색 아웃라인 5개) → n번째 클릭 시 1~n 빨간 채움 */}
            <div className="absolute top-[194px] left-[295px] flex gap-[9px]">
              {[1, 2, 3, 4, 5].map((n) => {
                const filled = rating >= n;
                return (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setRating(n)}
                    className="w-[61px] h-[57px] hover:scale-110 transition-transform"
                    aria-label={`${n}점`}
                  >
                    <Star
                      width={57}
                      height={57}
                      className={filled ? "text-red-500" : "text-gray-300"}
                      fill={filled ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth={1.5}
                    />
                  </button>
                );
              })}
            </div>

            <Textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="absolute w-[739px] h-[105px] top-[327px] left-[107px] rounded-[15px] border-[0.4px] border-solid border-black resize-none [font-family:'SF_Pro-Regular',Helvetica] text-[15px] p-4"
              placeholder="이 상품을 사용하면서 느낀 점을 작성해주세요"
            />

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
            <Button
              variant="outline"
              className="absolute w-[149px] h-12 top-[455px] left-[111px] rounded-[10px] border-[0.4px] border-solid border-black h-auto"
              onClick={() => fileInputRef.current.click()}
            >
              <UploadIcon className="w-[26px] h-[26px] mr-2" />
              <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-[21px]">
                사진 업로드
              </span>
            </Button>

            <div className="absolute w-[539px] h-[60px] top-[526px] left-[209px] flex gap-[9px]">
              <Button
                variant="outline"
                className="w-[242px] h-[60px] border border-solid border-[#828282] h-auto"
                onClick={() => navigate('/order-history')}
              >
                <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-7">
                  취소
                </span>
              </Button>

              <Button 
                className="w-[242px] h-[60px] bg-[#828282] hover:bg-[#707070] h-auto"
                onClick={handleSubmit}
              >
                <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-7">
                  {isEdit ? "수정하기" : "등록하기"}
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="absolute w-[296px] h-16 top-[61px] left-[1107px]">
          <div className="flex w-[296px] h-16 items-center relative rounded-[100px]">
            <div className="flex items-center p-[11px] relative flex-1 grow bg-[#78788029] rounded-[100px]">
              <div className="flex items-center gap-2 relative flex-1 grow">
                <SearchIcon className="w-4 h-4 text-[#999999]" />
                <Input
                  className="border-0 bg-transparent placeholder:text-[#999999] text-[17px] tracking-[-0.08px] leading-[22px] p-0 h-auto focus-visible:ring-0"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};