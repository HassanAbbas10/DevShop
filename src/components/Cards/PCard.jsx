import { useState, useEffect } from "react";
// import ProductList from "../Search/ProductList";
const PCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    };

    fetchData();
  }, []);
  return (
    
    <div className="flex flex-col min-h-screen justify-between">
      <div className="container mx-auto flex flex-wrap justify-between">
        {products.map((product) => (
          <div
            className="w-full sm:w-1/2 md:w-1/3 px-4 h-full"
            key={product.id}
          >
            <div className="container mx-auto my-12 h-full">
              <div className="bg-white max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full">
                <div className="relative h-full">
                  <img
                    src={product.images[0]}
                    alt="Product Image"
                    className="w-full max-h-56 bg-current bg-center bg-cover"
                  />
                </div>
                <div className="p-4 h-full">
                  <div className="text-xl font-semibold mb-2">
                    {product.title}
                  </div>
                  <div className="text-gray-600 mb-4 overflow-hidden text-overflow-ellipsis h-full">
                    {product.description}
                  </div>
                  <p className="text-gray-700 mb-2">${product.price}</p>
                </div>
                <div className="p-4 bg-gray-100 h-full">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};
export default PCard;
