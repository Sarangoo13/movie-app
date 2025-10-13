import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/lib/utils";

export const Navbar = () => {
  const getGenres = async () => {
    const response = await axiosInstance.get(`/genre/movie/list?language=en`);
    return response.data.genres;
  };
  const genres = getGenres();
  console.log("genres", genres);
  return (
    <div className="flex justify-between">
      <div className="flex gap-[8px] items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
        >
          <path
            d="M4.83366 1.16675V17.8334M13.167 1.16675V17.8334M0.666992 9.50008H17.3337M0.666992 5.33341H4.83366M0.666992 13.6667H4.83366M13.167 13.6667H17.3337M13.167 5.33341H17.3337M2.48366 1.16675H15.517C16.5203 1.16675 17.3337 1.9801 17.3337 2.98341V16.0167C17.3337 17.0201 16.5203 17.8334 15.517 17.8334H2.48366C1.48034 17.8334 0.666992 17.0201 0.666992 16.0167V2.98341C0.666992 1.9801 1.48034 1.16675 2.48366 1.16675Z"
            stroke="#4338CA"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p className="text-[16px] text-[#4338CA]">Movie Z</p>
      </div>
      <div className="flex gap-[12px]">
        {/* <Genre></Genre>  */}

        <DropdownMenu>
          <DropdownMenuTrigger className="border-solid border-1 border-[#F4F4F5] p-[8px]">
            Genresssss
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Genres</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Action</DropdownMenuItem>
            <DropdownMenuItem>Adventure</DropdownMenuItem>
            <DropdownMenuItem>Animation</DropdownMenuItem>
            <DropdownMenuItem>Biography</DropdownMenuItem>
            <DropdownMenuItem>Comedy</DropdownMenuItem>
            <DropdownMenuItem>Crime</DropdownMenuItem>
            <DropdownMenuItem>Documentary</DropdownMenuItem>
            <DropdownMenuItem>Drama</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Input></Input>
      </div>
      <div className="items-center justify-center  border-1 border-rounded border-[#F4F4F5] w-[36px] h-[36px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M8 2.5C7.20435 3.29565 6.75736 4.37478 6.75736 5.5C6.75736 6.62522 7.20435 7.70435 8 8.5C8.79565 9.29565 9.87478 9.74264 11 9.74264C12.1252 9.74264 13.2044 9.29565 14 8.5C14 9.68669 13.6481 10.8467 12.9888 11.8334C12.3295 12.8201 11.3925 13.5892 10.2961 14.0433C9.19975 14.4974 7.99335 14.6162 6.82946 14.3847C5.66558 14.1532 4.59648 13.5818 3.75736 12.7426C2.91825 11.9035 2.3468 10.8344 2.11529 9.67054C1.88378 8.50666 2.0026 7.30026 2.45673 6.2039C2.91085 5.10754 3.67989 4.17047 4.66658 3.51118C5.65328 2.85189 6.81331 2.5 8 2.5Z"
            stroke="#18181B"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
