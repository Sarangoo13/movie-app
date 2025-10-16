"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";
type genreType={
  id:number;
  name:string;
  page:number
}

export function GenreSlide({genres}: {genres:genreType[]}) {
 

  const router = useRouter();

  const handleOnclick = (id: number, name:string) => {
    router.push(`/genre?id=${id}&name=${name}&page=1`);
  };
  return (
       <div
          className="flex flex-wrap items-center min-w-[fit] w-[40vw] gap-3
        p-5"
        >
          {genres.map((genre: { id: number; name: string }, index: number) => {
            return (
              <div
                onClick={() => {
                  handleOnclick(genre.id, genre.name);
                }}
                key={index}
                className="border-2 rounded-[9999px]"
              >
                {genre.name + `   > `}
              </div>
            );
          })}
        </div>
  );
}
