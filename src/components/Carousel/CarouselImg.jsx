import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import { summer, summer2, autumn, collage } from "@/assets/index";

import Autoplay from "embla-carousel-autoplay";
import LottieAnimationThird from "../Lotte/LotteanimationThird";

const CarouselImg = () => {
  const apiDataa = [
    {
      id: 1,
      url: summer,
    },
    {
      id: 2,
      url: summer2,
    },
    {
      id: 3,
      url: autumn,
    },
    {
      id: 4,
      url: collage,
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Carousel plugins={[Autoplay({ delay: 4000 })]} className="w-full h-full">
        <CarouselContent className="w-full h-full">
          {apiDataa.length > 0 ? (
            apiDataa.map((data) => (
              <CarouselItem key={data.id} className="w-full h-full">
                <div className="w-full sm:h-[37rem] h-full ">
                  <Card className="w-full h-full">
                    <CardContent className="w-full sm:h-full h-auto">
                      <img
                        src={data.url}
                        alt="photo"
                        className=" h-full w-full sm:object-contain object-fill "
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))
          ) : (
            <div className="flex flex-1 items-center justify-center">
              <LottieAnimationThird />
            </div>
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselImg;
