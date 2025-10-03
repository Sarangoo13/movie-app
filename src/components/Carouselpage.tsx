import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export const Carouselpage= ()=>{
  return (
    <Carousel className="h-[600px] w-full relative">
      <CarouselContent>
        <CarouselItem>
          <img src="./photos/movie1.jpg" className="h-[600px] w-full " />
        </CarouselItem>

        <CarouselItem>
          <img src="./photos/movie2.png" className="h-[600px] w-full" />
        </CarouselItem>

        <CarouselItem>
          <img src="./photos/movie3.jpg" className="h-[600px] w-full" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-11" />
      <CarouselNext className="absolute right-11" />
    </Carousel>
  );
}