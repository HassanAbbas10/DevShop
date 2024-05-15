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
      setApiData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Carousel
        plugins={[Autoplay({ delay: 2000 })]}
        className="w-full h-full flex items-center justify-center"
      >
        <CarouselContent className="w-full h-full">
          {apiDataa.length > 0 ? (
            apiDataa.map((data) => (
              <CarouselItem key={data.id} className="w-full h-full flex items-center justify-center">
                <div className="p-1 w-full h-full flex items-center justify-center">
                  <Card className="w-full h-full flex items-center justify-center">
                    <CardContent className="w-full h-full flex items-center justify-center p-6">
                      <img src={data.url} alt={data.photographer}  className="max-h-full max-w-full object-contain" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))
          ) : (
            <div className="flex items-center justify-center w-full h-full">LOADING 🎃✨</div>
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselImg;
