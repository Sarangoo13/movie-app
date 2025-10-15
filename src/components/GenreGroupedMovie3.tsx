import { MovieType } from "@/lib/movieType";
import { MovieCard } from "./MovieCard";

export function GnereGroupedMovie3({
  movies,
  text,
}: {
  movies: MovieType[];
  text: string;
}) {
  return (
    <div>
      <div className="flex justify-between pt-[52px] pb-[32px] px-[400px]">
        <p className="text-2xl font-[600] text-[#09090B]">{text}</p>
        <p>See more → </p>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-wrap gap-8 w-[1300px]">
          {movies.splice(0, 5).map((movie, i) => {
            return <MovieCard isLaoding={true} key={i} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
}
