import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import {
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Slide = () => {
  return (
    <>
      <div>
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <div className="items-center justify-center">
            <CarouselContent className="">
              {/* Replace Array.from with an array of image URLs */}
              {[
                "https://asrsnews.in/wp-content/uploads/2025/02/1._SS420.png",
                "https://asrsnews.in/wp-content/uploads/2025/02/2._SS420.png",
                "https://asrsnews.in/wp-content/uploads/2025/02/3._SS420.png",
                "https://asrsnews.in/wp-content/uploads/2025/02/4._SS420.png",
                "https://asrsnews.in/wp-content/uploads/2025/02/5._SS420.png",
                "https://asrsnews.in/wp-content/uploads/2025/02/6._SS420.png",
                "https://asrsnews.in/wp-content/uploads/2025/02/8._SS420.png",
                "https://asrsnews.in/wp-content/uploads/2025/02/9._SS420.png",
                "https://asrsnews.in/wp-content/uploads/2025/02/10._SS420.jpg",
                "https://asrsnews.in/wp-content/uploads/2025/02/7._SS420_QL85.png",
              ].map((image, index) => (
                <CarouselItem key={index} className="basis-1/4">
                  <div className="p-2">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        {/* Use the correct image source */}
                        <img
                          src={image}
                          alt={`Slide ${index + 1}`}
                          className="w-full h-full object-cover rounded-md"
                        />
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
    </>
  );
};

export default Slide;
