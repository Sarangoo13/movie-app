import Details from "@/components/Details";
import { Info } from "@/components/Info";

import { axiosInstance } from "@/lib/utils";

const getMovies = async (id: string) => {
  const response = await axiosInstance.get(`/movie/${id}`);

  return response.data;
};
const infoMovies = async (id: string) => {
  const response = await axiosInstance.get(
    `/movie/${id}/credits?language=en-US`
  );
  return response.data;
};

export default async function DetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const movieData = await getMovies(id);
  const infoData = await infoMovies(id);
  console.log(movieData, "movie");
  console.log(infoData, "info");

  return (
    <div>
      <Details movieData={movieData}></Details>
      <Info infoData={infoData}></Info>
    </div>
  );
}

// const getMovies = async () => {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
//       {
//         headers: {
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjkwMWUzNTJlOTFkMmU1OTcyNThhYzU1ZDM2ZmZmMiIsIm5iZiI6MTc1OTA1MDY1Ny4zMjUsInN1YiI6IjY4ZDhmYmExOTBlY2QwMDlhYWI5YTFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZd1y3tFFfxvZlPqBNIqCDw0G_aMwCZzWxffwENlwT8`,
//         },
//       }
//     );
