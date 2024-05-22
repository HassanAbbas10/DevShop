import PCard from "@/components/Cards/PCard";
// import Search from "@/components/Search"
import { ToastContainer } from "react-toastify";
const Products = () => {
  return (
    <div>
       <div className="max-width-full h-24 bg-indigo-100 flex justify-center items-center">
        <h1 className="text-3xl text-black px-4">Product section 🛒</h1>
      </div>
      <PCard />
      <ToastContainer />
    </div>
  );
};

export default Products;
