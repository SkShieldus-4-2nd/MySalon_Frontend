import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { HeartIcon } from "lucide-react";
import { useOutfits } from "../../context/OutfitContext";

const Divider = () => <div className="border-t border-gray-300 my-6" />;

export default function OutfitDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { outfits, toggleLike } = useOutfits();

  const outfit = outfits.find((o) => String(o.id) === String(id));

  if (!outfit) {
    return (
      <div className="p-10">
        <p>존재하지 않는 게시글입니다.</p>
        <Button className="mt-4" onClick={() => navigate(-1)}>
          돌아가기
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <div className="bg-[#d9d9d9] pt-6 pb-10">
        <h1 className="text-center text-[26px] font-semibold">MY SALON</h1>
        <p className="text-center text-xs opacity-70 mt-1">당신만을 위한 옷장</p>
      </div>

      <div className="max-w-5xl mx-auto bg-white p-10 -mt-8 shadow-sm">
        <h2 className="text-2xl font-bold text-center mb-8">오늘의 코디</h2>

        <div className="flex justify-between text-sm">
          <div>
            <span className="text-gray-500">제목 : </span>
            <span className="font-medium">{outfit.title}</span>
          </div>
          <div>
            <span className="text-gray-500">작성자: </span>
            <span className="font-medium">{outfit.username}</span>
          </div>
        </div>

        <Divider />

        <div className="grid grid-cols-2 gap-10">
          <div className="flex justify-center">
            <img
              src={outfit.image}
              alt={outfit.title}
              className="w-[420px] h-[520px] object-cover border"
            />
          </div>

          <div>
            <p className="whitespace-pre-line leading-7 text-[15px]">
              {outfit.description}
            </p>

            <Divider />

            <div
              className="flex items-center gap-3 cursor-pointer select-none"
              onClick={() => toggleLike(outfit.id)}
            >
              <HeartIcon
                className={`w-8 h-8 transition-colors ${
                  outfit.liked ? "text-red-500 fill-red-500" : "text-gray-700"
                }`}
              />
              <span className="text-lg">{outfit.likes}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-10">
          <Button variant="outline" onClick={() => navigate(-1)}>
            목록으로
          </Button>
        </div>
      </div>
    </div>
  );
}
