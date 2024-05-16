import { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [apiData, setProducts] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://dummyjson.com/products?q&limit=4");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error I guess 🎃", error);
      }
    }
    fetchData();
  }, []);


  return (
    <div className="container bg-white p-10 text-black text-sm">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>

      {apiData.length > 0 ? (
        <div className="flex flex-col gap-4">
          {apiData.map((item) => (
            <div className="flex justify-between items-center border-b pb-2" key={item.id}>
              <div className="flex gap-4 items-center">
                <img src={item.thumbnail} alt={item.title} className="rounded-md h-24 w-48" />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold">{item.title}</h1>
                  <p className="text-gray-600 py-2">Price: ${item.price}</p>
                  <div className="flex items-center">
                    <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md mr-2">
                      -
                    </button>
                   
                    <span className="px-2">2</span>
                    <button  className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md ml-2">
                      +
                    </button>
                    
                    <button  className="text-indigo-600 ml-4">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
             
              <p className="font-semibold">${item.price * 2}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading </div>
      )}

      <div className="flex justify-between items-center mt-8">
        <h1 className="text-lg font-bold">Total</h1>
        <p className="font-semibold">$5460</p>
      </div>
    </div>
  );
};

export default Cart;
