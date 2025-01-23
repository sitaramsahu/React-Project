import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {  Carousel,  CarouselContent,} from "@/components/ui/carousel";
import {CarouselItem,  CarouselNext,  CarouselPrevious,} from '@/components/ui/carousel'
const Slide = () => {

  return (
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
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg38JuI3HTwj53KhhH0i-U0So57jScIBF6ANHCzIhI_8aQhbleoEH9HJVRi33nGkLCIP3p14KTYpdSKkcpgJzKEiwGHDnU-zA65zHjyv1vMA4BHnDiuGhQq53kDP1Nv3ymeytUt5Wu9HGv11PU-5hGcFaAffoT6w_GR71Bbg8qLH2_N0S3LG0lHSXQSuW91/w640-h640/2025_quotes_%20(5).jpg",
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnyFS4xkNnjQUM-9LpjsAXNUFReFKYZ92pc8O_-62fdE14P0pCYUt29bozxN9Ai4OCR1Ql9dRl7mWXbjNcmiMCfQE-eNRCo_1dKWQbjxvfMQ5Tedr-0iV9fs7wKRDIu8ZDK5hdf52US_yuOlXEwdWqMXzhVuF5J3i2Zc7x1cd6CZVldZkPMhevIHP7WS_y/w640-h640/2025_quotes_%20(2).jpg",
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWiblTD6L4TvAPO8reyrZpkNJlTJQxQOSCwjTLulaDPiaw9FjmbcpivZKdyXiO0B2QjDgk9dHptIcByoeuT8-RmclvSLxAzhK6KibrKCj-VMePMf1_HO44NQ57k1tV5qzIo053z9Vx4O1mCbPEeb-lxLfG9IBjoVKqWWtC3Ahk0rDk2Txbfg5BPatqK1mk/w640-h640/2025_quotes_%20(7).jpg",
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieIgrmAiGVer3TeNs2tdrHY8xjTea6Uy5hYfDJHazl-D1W_qYjVihZyaTfLgBaVC-YgyTKmlg7bb9Hawln5BCoS8-cot464vMqHMqcOD5IYQ2TvEyWud-BpwuIqNGFx6w63azY3w0sYvU8aE39iuQepvOVw2EVkJvUM5GSEGHUwpAnIJ6O-a6HhwBT9quC/w640-h640/2025_quotes_%20(8).jpg",
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg38JuI3HTwj53KhhH0i-U0So57jScIBF6ANHCzIhI_8aQhbleoEH9HJVRi33nGkLCIP3p14KTYpdSKkcpgJzKEiwGHDnU-zA65zHjyv1vMA4BHnDiuGhQq53kDP1Nv3ymeytUt5Wu9HGv11PU-5hGcFaAffoT6w_GR71Bbg8qLH2_N0S3LG0lHSXQSuW91/w640-h640/2025_quotes_%20(5).jpg",
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnyFS4xkNnjQUM-9LpjsAXNUFReFKYZ92pc8O_-62fdE14P0pCYUt29bozxN9Ai4OCR1Ql9dRl7mWXbjNcmiMCfQE-eNRCo_1dKWQbjxvfMQ5Tedr-0iV9fs7wKRDIu8ZDK5hdf52US_yuOlXEwdWqMXzhVuF5J3i2Zc7x1cd6CZVldZkPMhevIHP7WS_y/w640-h640/2025_quotes_%20(2).jpg",
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWiblTD6L4TvAPO8reyrZpkNJlTJQxQOSCwjTLulaDPiaw9FjmbcpivZKdyXiO0B2QjDgk9dHptIcByoeuT8-RmclvSLxAzhK6KibrKCj-VMePMf1_HO44NQ57k1tV5qzIo053z9Vx4O1mCbPEeb-lxLfG9IBjoVKqWWtC3Ahk0rDk2Txbfg5BPatqK1mk/w640-h640/2025_quotes_%20(7).jpg",
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieIgrmAiGVer3TeNs2tdrHY8xjTea6Uy5hYfDJHazl-D1W_qYjVihZyaTfLgBaVC-YgyTKmlg7bb9Hawln5BCoS8-cot464vMqHMqcOD5IYQ2TvEyWud-BpwuIqNGFx6w63azY3w0sYvU8aE39iuQepvOVw2EVkJvUM5GSEGHUwpAnIJ6O-a6HhwBT9quC/w640-h640/2025_quotes_%20(8).jpg",
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJ9OvLPYDsw7eruW4RfQr9sv_GlcwMFkrUmSUzAGTT9rgQoe8BgAaTPIBgZ0c94OnpKfIkverrDSX-WjsdAjGFMxJcofUEUrrAjyr4WDkFdiBfLjaJbYXVBImX50NMwxJxn6Cdm16PxwvP88iMRzlaDyCxNAPgT_PNVVLpGL-SBi-U3hY-LPNN1ljziDPJ/w640-h640/2025_quotes_%20(1).jpg",
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg69ju70_D2NaoVclHUY9evxGBHPhbyS-mRGxlVmsVtJDwRsLfgQDL-FMK7fxfiO4Bf8FqCu2C_UAOC5mBnXW4X4EVneY6utSmuYUbwbRZ1DvoMh32PCt3ZHG2PATemFOcJxYp7qPn5I_l5mnENijY6m292NYL1k3voG6jaQ7_hxbFWQgX9g4dpwqbY0CS3/w640-h640/2025_quotes_%20(3).jpg",
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
  );
};

export default Slide;
