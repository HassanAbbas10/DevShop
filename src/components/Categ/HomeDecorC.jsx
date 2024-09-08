import { Link } from "react-router-dom";
import useFetch from "@/Hooks/useFetch/useFetch";
import LottieAnimationThird from "../Lotte/LotteanimationThird";


const HomeDecorC = ({ Category, Title }) => {
  const apiUrl = `https://dummyjson.com/products/category/${Category}?q&limit=3`
 
  const { data, error, isLoading } = useFetch([`${Category}`],apiUrl);
 


  if (error) {
    <div>The error is {error}</div>;
  }
  if (isLoading) {
    <div className="text-2xl italic flex flex-1 items-center justify-center">
      <LottieAnimationThird />
    </div>;
  }


  return (
    <div className="mt-5">
      <h1 className="italic text-center text-3xl text-black ">{Title}</h1>
      <div className="flex flex-col min-h-1/2 justify-between">
          <div className="container mx-auto flex flex-wrap justify-between">
          {Array.isArray(data) && data.length > 0 ? (
            data.map((product) => (
              <div
                className="w-full sm:w-1/2 md:w-1/3 px-4 h-3/4"
                key={product.id}
              >
                {console.log(product)}
                <Link to={`/products/${product.id}`}>
                  <div className="container mx-auto my-5 h-full">
                    <div className="bg-white border border-slate-200 max-w-sm rounded-lg overflow-hidden shadow-2xl shadow-slate-400 hover:shadow-lg transition duration-300 h-full">
                      <div className="relative h-full">
                        <img
                          src={product.images[0]}
                          width={350}
                          height={300}
                          alt="Product Image"
                          className="h-[20rem] flex flex-col justify-between p-4 object-contain"
                        />
                      </div>
                      <div className="p-4 h-full">
                        <div className="text-xl font-semibold mb-2">
                          {product.title}
                        </div>
                        <div className="text-gray-600 text-md mb-4 overflow-hidden text-overflow-ellipsis h-full">
                          <span className="text-black text-lg">Category: </span>
                          {product.category}
                        </div>
                        <p className="text-gray-700 mb-2">${product.price}</p>
                        <p className="text-gray-700 mb-2">
                          {product.discountPercentage}% discount
                        </p>
                      </div>
                      <div className="p-4 bg-gray-100 h-full"></div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div>No products available.</div>
          )}
          </div>
        
      </div>
    </div>
  );
};

export default HomeDecorC;
