import { MovieDetailsType, MovieType } from "@/lib/movieType";
import axios from "axios";

export default async function Details({
  movieData,
}: {
  movieData: MovieDetailsType;
}) {
  return (
    <div>
      <div className="flex justify-between mb-6">
        <div>
          <p className="font-bold">{movieData.title}</p>
          <div className="flex gap-2">
            <p>{movieData.release_date}</p>
            <p>.</p>
            <div className="flex gap-1">
              <p>{Math.floor(movieData.runtime / 60)}h</p>
              <p>{movieData.runtime % 60}m</p>
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-[12px]">Rating</p>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M13.9997 2.33325L17.6047 9.63659L25.6663 10.8149L19.833 16.4966L21.2097 24.5233L13.9997 20.7316L6.78967 24.5233L8.16634 16.4966L2.33301 10.8149L10.3947 9.63659L13.9997 2.33325Z"
                fill="#FDE047"
                stroke="#FDE047"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <p className="text-[#09090B] font-[18px]">
                {movieData.vote_average}
              </p>
              <p className="text-[#71717A] font-[12px]">
                {movieData.vote_count}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-8 w-fit justify-between mb-6">
        <img
          className="w-[290px]"
          src={"https://image.tmdb.org/t/p/w500" + movieData.poster_path}
          alt=""
        />
        <img
          className="w-[788px]"
          src={"https://image.tmdb.org/t/p/w500" + movieData.backdrop_path}
          alt=""
        />
      </div>
      <div className="flex gap-3 ">
        {movieData.genres.map((genre: { name: string }) => {
          return (
            <div className="border-1px solid border-black text-[#09090B] text-[12px] font-semibold">
              {genre.name}
            </div>
          );
        })}
      </div>
      <div>
        <p className="text-[16px] font-normal text-[#09090B]">
          {movieData.overview}
        </p>
      </div>
      <div>
        
      </div>
    </div>
  );
}
