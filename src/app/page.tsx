import * as React from "react";

import Image from "next/image";
import { MovieType } from "@/lib/movieType";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Carouselpage } from "@/components/Carouselpage";
import { popular, topRated, upcoming } from "@/lib/movielist";
import { GroupedMovies } from "@/components/GroupedMovies";
import { Footer } from "@/components/Footer";
import axios from "axios";
import { axiosInstance } from "@/lib/utils";

export default async function Home(props: { movie: MovieType[] }) {
  const getMovies = async (category: string) => {
    const response = await axiosInstance.get(`/movie/${category}`);
    return response.data;
  };
  const upcomingMovieData = await getMovies("upcoming");
  const popularMovieData = await getMovies("popular");
  const topRatedMovieData = await getMovies("top_rated");

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Carouselpage></Carouselpage>
      </div>
      <GroupedMovies
        text={"Upcoming"}
        movies={upcomingMovieData.results}
      ></GroupedMovies>
      <GroupedMovies
        text={"Popular"}
        movies={popularMovieData.results}
      ></GroupedMovies>
      <GroupedMovies
        text={"Top Rated"}
        movies={topRatedMovieData.results}
      ></GroupedMovies>
      <Footer></Footer>
    </div>
  );
}
