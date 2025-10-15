"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";

export function GenreSlide(props: {
  genres: { id: number; page?: number; name: string }[];
}) {
  const { genres } = props;
  const router = useRouter();

  const handleOnclick = (id: number) => {
    router.push(`/genre?id=${id}&page1`);
  };
  return (
    <DropdownMenu>
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
                  handleOnclick(genre.id);
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
