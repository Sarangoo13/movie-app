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
import { NavigationMenu } from "@radix-ui/react-navigation-menu";

export const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-[8px] items-center">
        <img src="film (1).svg" className="w-[20px] h-[20px]"></img>
        <p className="text-[16px] text-[#4338CA]">Movie Z</p>
      </div>
      <div className="flex gap-[12px]">
        <DropdownMenu>
          <DropdownMenuTrigger className="border-solid border-1 border-[#F4F4F5] p-[8px]">
            Genre
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
        <img src="moon.svg" className="w-[16px] h-[16px] mt-2 mr-2" />
      </div>
    </div>
  );
};
