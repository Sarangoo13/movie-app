import { Genre } from "@/components/Genre";
import { GnereGroupedMovie3 } from "@/components/GenreGroupedMovie3";
import { GenreSlide } from "@/components/GenreSlide";
import { axiosInstance } from "@/lib/utils";

type genrePageProps = {
  searchParams: Promise<{ id: number; page: number }>;
};
export default async function Home({ searchParams }: genrePageProps) {
  const params = await searchParams;
  const id = params.id;
  const page = params.page;
  const getData = async () => {
    const response = await axiosInstance.get(
      `/discover/movie?language=en&with_genres=${id}&page=${page}`
    );
    return response.data.results;
  };
  const movieData = await getData();

  const getGenres = async () => {
    const response = await axiosInstance.get(`/genre/movie/list?language=en`);
    return await response.data.genres;
  };
  const genres = await getGenres();

  console.log("movie data", movieData);
  return (
    <div className="flex">
      <div>
        {/* <h1 className="text-[30px] font-semibold">Search results</h1> */}
        <GenreSlide genres={genres}></GenreSlide>
      </div>
      <div>
        <GnereGroupedMovie3
          text={"in the given genre"}
          movies={movieData}
        ></GnereGroupedMovie3>
      </div>
    </div>
  );
}
