import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
// import messages from "@/messages.json"
// import Autoplay from "embla-carousel-autoplay"
import { useState,useEffect} from "react";

const CarouselImg = () => {
  const [apiDataa, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?q&limit=5");
        const data = await response.json();
        setApiData(data);
        console.log(data.products);
      } catch (error) {
        console.error(error,"its not working 🎃");
      }
    };
    fetchData();
  }, []);
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {apiDataa.length > 0 ? (
          <div>
             {apiDataa.map((data) => (
          <CarouselItem key={data.products.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={data.products.images[1]} className="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
          </div>
          
         ) : <>not anything</> }
       
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselImg;
