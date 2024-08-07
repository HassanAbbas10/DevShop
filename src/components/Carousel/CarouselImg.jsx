import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import Autoplay from "embla-carousel-autoplay";

import { useState, useEffect } from "react";
import axios from "axios";
import LottieAnimationThird from "../Lotte/LotteanimationThird";

const CarouselImg = () => {
  const [apiDataa, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://api.slingacademy.com/v1/sample-data/photos?offset=4&limit=4"
      );
      setApiData(res.data.photos);

      // Preload images
      res.data.photos.forEach((photo) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = photo.url;
        document.head.appendChild(link);
      });
    };

    fetchData();
  }, []);

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
                      width={700}
                      height={400}
                      className="max-w-full object-cover "
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))
          ) : (
            <div className="m flex flex-1  items-center justify-center ">
              <LottieAnimationThird/>
            </div>
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselImg;
