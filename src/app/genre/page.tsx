import { axiosInstance } from "@/lib/utils";

const genreMovies = async (props: { genreIds: number }) => {
  const response = await axiosInstance.get(
    `/discover/movie?language=en&with_genres=${genreIds}&page=${page}`
  );
  return response.data;
};

export default async function Home({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const genreData = await genreMovies();

  return {};
}
