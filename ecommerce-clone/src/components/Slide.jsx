import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {  Carousel,  CarouselContent,} from "@/components/ui/carousel";
import {CarouselItem,  CarouselNext,  CarouselPrevious,} from '@/components/ui/carousel'
const Slide = () => {
  return (
    <div>
      <Carousel
        className="w-full "
        opts={{
            align: "start",
            loop: true,
        }}
        w-full
        max-w-sm
      >
        <div className="items-center justify-center ">
        <CarouselContent className="">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className=" basis-1/3">
              <div className="p-2 ">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        </div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slide;
