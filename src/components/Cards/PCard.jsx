import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LottieAnimationSec from "../Lotte/LotteAnimationSec";

const PCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
    };

    fetchData();
  }, [setProducts]);

  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-50">
      {products.length > 0 ? (
        <div className="container mx-auto flex flex-wrap justify-between py-5">
          {products.map((product) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4 h-fit "
              key={product.id}
            >
              <Link to={`/products/${product.id}`}>
                <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                 
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-full">
                      {Math.floor(product.discountPercentage)}% OFF
                    </span>
                  </div>
                  
                  
                  <div className="relative border border-slate-300 rounded-2xl flex justify-center items-center overflow-hidden aspect-square bg-gray-100">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      
                      className="w-fit h-[12rem]  object-cover p-4 transform group-hover:scale-105 transition-transform duration-300"
                    />
                    
                   
                    <div className="absolute bottom-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        product.stock > 0 
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}>
                        {product.stock > 0 ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>
                  </div>

                  
                  <div className="p-6">
                  
                    <div className="text-sm text-blue-600 font-medium mb-2 uppercase tracking-wide">
                      {product.category}
                    </div>
                    
                    
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 h-14">
                      {product.title}
                    </h3>
                    
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-sm line-through">
                          ${(product.price * 1.2).toFixed(2)}
                        </span>
                        <span className="text-2xl font-bold text-gray-800">
                          ${product.price}
                        </span>
                      </div>
                      
                      <div className="flex items-center bg-gray-50 px-3 py-1 rounded-lg">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="text-sm font-medium text-gray-600">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                 
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-2xl italic flex flex-1 items-center justify-center">
          <LottieAnimationSec />
        </div>
      )}
    </div>
  );
};

export default PCard;