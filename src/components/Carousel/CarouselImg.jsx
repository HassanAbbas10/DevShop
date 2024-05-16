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
      const res = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20');
      setApiData(res.data.photos);
    };
    fetchData();
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Carousel
        plugins={[Autoplay({ delay: 3000 })]}
        className="w-full h-full"
      >
        <CarouselContent className="w-full h-full">
          {apiDataa.length > 0 ? (
            apiDataa.map((data) => (
              <CarouselItem key={data.id} className="w-full h-full flex items-center justify-center">
                <div className="p-2 w-full h-full flex items-center justify-center">
                  <Card className="w-full h-full flex items-center justify-center">
                    <CardContent className="w-full h-full flex items-center justify-center p-2">
                      <img src={data.url} alt={data.photographer}  className="max-w-full object-cover " />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))
          ) : (
            <div className=" italic flex flex-auto  items-center justify-center text-2xl">LOADING 🎃✨</div>
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselImg;
