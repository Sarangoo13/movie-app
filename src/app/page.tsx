"use client";
import * as React from "react";

import Image from "next/image";
import { MovieType } from "@/lib/movieType";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Carouselpage } from "@/components/Carouselpage";
import { popular, topRated, upcoming } from "@/lib/movielist";
import { GroupedMovies } from "@/components/GroupedMovies";

export default function Home(props: { movie: MovieType[] }) {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Carouselpage></Carouselpage>
      </div>
      <GroupedMovies text={"Upcoming"} movies={upcoming}></GroupedMovies>
      <GroupedMovies text={"Popular"} movies={popular}></GroupedMovies>
      <GroupedMovies text={"Top Rated"} movies={topRated}></GroupedMovies>
    </div>
  );
}
