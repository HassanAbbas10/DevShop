import CarouselImg from "@/components/Carousel/CarouselImg";
import PerfumeC from "@/components/Categ/PerfumeC";
import LaptopC from "@/components/Categ/LaptopC";
import HomeDecorC from "@/components/Categ/HomeDecorC";
const Home = () => {
  return (
    <div>
      <CarouselImg />
      <div className="max-width-full h-28 bg-indigo-100 flex justify-center items-center mt-10">
        <h1 className="text-3xl text-black px-4">Category section </h1>
      </div>
      <PerfumeC/>
      <LaptopC/>
      <HomeDecorC/>
    </div>
  );
};

export default Home;
