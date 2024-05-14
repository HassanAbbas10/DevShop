import { useState,useEffect } from "react"
import axios from "axios";


const Cart = () => {
  const [apiData,setProducts] = useState([])

  useEffect(() => {
    async function getPost() {
      const response = await axios.get("https://dummyjson.com/products?q&limit=5");
      setProducts(response.data.products);
      console.log(response.data.products)

    }
    getPost();
    
  }, [0]);
  return (
    <div className="flex-col flex items-center py-2 container bg-white gap-8 p-10 text-black text-sm">
  <h1 className="text-2xl font-bold">Cart</h1>

  {apiData.length > 0 ? 
  <div className="flex flex-col gap-4">
    
    {apiData.map((item) => (
      <div className="flex justify-between items-center" key={item.id}>
        <div className="flex gap-4">
          <img src={item.thumbnail} alt={item.title} className="rounded-md h-24 w-48" />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">{item.title}</h1>
            <p className="text-gray-600 py-4">price {item.price}$</p>
            
          </div>
        </div>
      </div>
    ))}
  </div>
  :(<div>Loading</div>)}

  <div className="flex justify-between items-center">
    <h1 className="text-lg font-bold">Total</h1>
    <p>3400$</p>
    </div>
  </div>
  

  )
}

export default Cart