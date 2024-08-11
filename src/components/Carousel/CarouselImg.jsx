import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import Autoplay from "embla-carousel-autoplay";
import LottieAnimationThird from "../Lotte/LotteanimationThird";

const CarouselImg = () => {
  const apiDataa = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/10677487/pexels-photo-10677487.jpeg?auto=compress&cs=largesrgb&w=2400",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/16917459/pexels-photo-16917459/free-photo-of-young-blonde-woman-in-oversized-olive-green-shirt-walking-through-a-house-entrance.jpeg?auto=compress&cs=largesrgb&w=1900",
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/57750/pexels-photo-57750.jpeg",
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/6941458/pexels-photo-6941458.jpeg",
    },
  ];

  return (
    <div className="w-full sm:h-[35rem] flex items-center justify-center overflow-hidden">
      <Carousel plugins={[Autoplay({ delay: 4000 })]} className="w-full h-full">
        <CarouselContent className="w-full h-full">
          {apiDataa.length > 0 ? (
            apiDataa.map((data) => (
              <CarouselItem key={data.id} className="w-full h-full">
                <Card className="w-full h-full">
                  <CardContent className="pt-1 w-full h-screen">
                    <img
                      src={data.url}
                      alt="photo"
                      className="w-full sm:h-[35rem] sm:object-cover object-contain "
                    />
                  </CardContent>
                </Card>
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
