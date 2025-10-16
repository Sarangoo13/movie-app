import { Genre } from "@/components/Genre";
import { GnereGroupedMovie3 } from "@/components/GenreGroupedMovie3";
import { GenreSlide } from "@/components/GenreSlide";
import { axiosInstance } from "@/lib/utils";

type genrePageProps = {
  searchParams: Promise<{ id: number; page: number; name: string }>;
};
export default async function Home({ searchParams }: genrePageProps) {
  const params = await searchParams;
  const id = params.id;
  const page = params.page;
  const name =params.name;
  const getData = async () => {
    const response = await axiosInstance.get(
      `/discover/movie?language=en&with_genres=${id}&page=${page}`
    );
    console.log(response.data)
    return response.data;
  };




  const movieData = await getData();

  const getGenres = async () => {
    const response = await axiosInstance.get(`/genre/movie/list?language=en`);
    return await response.data;
  };
  const genres = await getGenres();

  console.log("movie data", movieData);
  return (
    <div className="flex">
      <div className="">
        {/* <h1 className="text-[30px] font-semibold">Search results</h1> */}
        <GenreSlide genres={genres.genres}></GenreSlide>
      </div>
      <div>
        {movieData.total_results} titles in {name}
      </div>
      <div>
        <GnereGroupedMovie3
          text={"in the given genre"}
          movies={movieData.results}
         
        />
      </div>
    </div>
  );
}
