"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";

export function Genre(props: {
  genres: { id: number; page?: number; name?: string }[];
}) {
  const { genres } = props;
  const router = useRouter();
  const handleOnclick = (id: number, name:string) => {
    router.push(`/genre?id=${id}&name=${name}&page=1`);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-solid border-1 border-[#F4F4F5] p-[8px]">
        Genre
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuLabel>
          <p className="text-[#09090B] text-[24px] font-semibold">Genres</p>
          <p className="text-[#09090B] text-[16px] font-normal">
            See lists of movies by genre
          </p>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <div
          className="flex flex-wrap items-center min-w-[fit] w-[40vw] gap-3
            p-5"
        >
          {genres.map((genre: { id: number; name: string }, index: number) => {
            return (
              <DropdownMenuItem
                onClick={() => {
                  handleOnclick(genre.id, genre.name);
                }}
                key={index}
                className="border-2 rounded-[9999px]"
              >
                {genre.name + `   > `}
              </DropdownMenuItem>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
