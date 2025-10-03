import { MovieType } from "@/lib/movieType";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Images } from "lucide-react";

export function MovieCard(props: { movie: MovieType }) {
  const { movie } = props;
  return (
    <div className="bg-[#F4F4F5] w-[230px] rounded-md overflow-hidden"> 
     
        <img className="w-fit h-[340px]"  src={movie.images[0]} alt={movie.name}/>
        <div className="flex flex-col gap-2 px-3">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                d="M8.18913 1.33334L10.2491 5.50667L14.8558 6.18L11.5225 9.42667L12.3091 14.0133L8.18913 11.8467L4.06913 14.0133L4.85579 9.42667L1.52246 6.18L6.12913 5.50667L8.18913 1.33334Z"
                fill="#FDE047"
                stroke="#FDE047"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>{movie.rating}</p>
          </div>
          <h4 className="name text-black font-semibold">{movie.name}</h4>
        </div>
      
    </div>
  );
}
