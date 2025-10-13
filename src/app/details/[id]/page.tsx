import Details from "@/components/Details";
import { GroupedMovies2 } from "@/components/GroupedMovies2";
import { Info } from "@/components/Info";

import { axiosInstance } from "@/lib/utils";

const getMovie = async (id: string) => {
  const response = await axiosInstance.get(`/movie/${id}`);
  return response.data;
};

const infoMovies = async (id: string) => {
  const response = await axiosInstance.get(
    `/movie/${id}/credits?language=en-US`
  );
  return response.data;
};

const similarMovies = async (id: string) => {
  const response = await axiosInstance.get(
    `/movie/${id}/similar?language=en-US&page=1`
  );
  return response.data;
};

export default async function Home({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const movieData = await getMovie(id);
  const infoData = await infoMovies(id);
  console.log(movieData, "movie");
  console.log("info", infoData);
  const moreMovieData = await similarMovies(id);
  console.log(similarMovies, "info");
  return (
    <div>
      <Details movieData={movieData}></Details>
      <Info infoData={infoData}></Info>
      <GroupedMovies2
        text={"More like this"}
        movies={moreMovieData.results}
      ></GroupedMovies2>
    </div>
  );
}
//  movies={moreMovieData.results}

// const getMovies = async () => {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
//       {
//         headers: {
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjkwMWUzNTJlOTFkMmU1OTcyNThhYzU1ZDM2ZmZmMiIsIm5iZiI6MTc1OTA1MDY1Ny4zMjUsInN1YiI6IjY4ZDhmYmExOTBlY2QwMDlhYWI5YTFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZd1y3tFFfxvZlPqBNIqCDw0G_aMwCZzWxffwENlwT8`,
//         },
//       }
//     );
