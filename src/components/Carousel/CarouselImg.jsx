import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import Autoplay from "embla-carousel-autoplay";

import { useState, useEffect } from "react";
import axios from "axios";

const CarouselImg = () => {
  const [apiDataa, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
      );
      setApiData(res.data.photos);
    };
    fetchData();
  }, [setApiData]);

  return (
    <div className="max-w-full max-h-full flex items-center justify-center overflow-hidden">
      <Carousel plugins={[Autoplay({ delay: 3000 })]} className="w-full h-full">
        <CarouselContent className="w-full h-full ">
          {apiDataa.length > 0 ? (
            apiDataa.map((data) => (
              <CarouselItem
                key={data.id}
                className="w-full h-full flex items-center justify-center"
              >
                <Card className="">
                  <CardContent className="w-full h-full flex items-center justify-center p-2">
                    <img
                      src={data.url}
                      alt={data.photographer}
                      className="max-w-full object-cover "
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))
          ) : (
            <div className="mt-60 italic flex flex-1  items-center justify-center text-2xl">
              LOADING <span className="animate-spin">🎃</span><span className="animate-pulse">🛒</span>
            </div>
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselImg;
