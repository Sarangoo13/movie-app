export type MovieType = {
  poster_path: string;
  vote_average: number;
  title: string[];
  id: number;
};
export type MovieDetailsType = {
  poster_path: string;
  vote_average: number;
  title: string;
  id: number;
  runtime: number;
  release_date: string;
  genres: { id: number; name: string }[];
  vote_count: number;
  backdrop_path: string;
  overview: string;
};
export type MovieInfoType = {
  poster_path: string;
  vote_average: number;
  title: string;
  id: number;
  runtime: number;
  release_date: string;
  genres: { id: number; name: string }[];
  vote_count: number;
  backdrop_path: string;
  overview: string;
};
