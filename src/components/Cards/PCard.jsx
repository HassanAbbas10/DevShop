import { useState, useEffect } from "react";
// import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { Link } from "react-router-dom";
const PCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col min-h-screen justify-between">
      {products.length > 0 ? (
        <div className="container mx-auto flex flex-wrap justify-between">
          {products.map((product) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 px-4 h-full"
              key={product.id}
            >
              <Link to={`/products/${product.id}`}>
              <div className="container mx-auto my-12 h-full">
                <div className="bg-white border border-slate-200 max-w-sm rounded-lg overflow-hidden shadow-2xl shadow-slate-400 hover:shadow-lg transition duration-300 h-full">
                  <div className="relative h-full">
                    <img
                      src={product.images[0]}
                      alt="Product Image"
                      className="h-56 w-full flex flex-col justify-between p-4 bg-cover bg-center"
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
                    <p className="text-gray-700 mb-2 ">Price: ${product.price}</p>
                    <p className={`text-lg  mb-2 ${product.stock > 0 ? "text-green-300" : "text-red-400" }`}>
                      {product.stock > 0 ? "In Stock" : "Out of Stock"}  
                    </p>
                    <p className="text-slate-400 mb-2">
                    <span className="text-orange-500">Rating :</span>   5 / {product.rating}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-100 h-full">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                      Add to Cart
                    </button>
                  </div>
                </div>

              </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-2xl italic flex flex-1 items-center justify-center">
          LOADING <spanc className="animate-pulse">🛒</spanc>
          <span className="animate-spin">🎃</span>
        </div>
      )}
    </div>
  );
};
export default PCard;
