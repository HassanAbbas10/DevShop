import { useEffect,useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
const PerfumeC = () => {

    const[catData,setCatData] = useState([]);

    useEffect(() => {
        const getCatData = async () => {
            const res = await axios.get("https://dummyjson.com/products/category/fragrances?q&limit=3")
            setCatData(res.data.products);
        }

        getCatData();
        console.log(catData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <div className="mt-20">
        <h1 className="italic text-center text-3xl text-black ">Fragrances</h1>
    <div className="flex flex-col min-h-1/2 justify-between">
    {catData.length > 0 ? (
      <div className="container mx-auto flex flex-wrap justify-between">
        {catData.map((product) => (
          <div
            className="w-full sm:w-1/2 md:w-1/3 px-4 h-3/4"
            key={product.id}
          >
            <Link to={`products/${product.id}`}>
            <div className="container  mx-auto my-12 h-full">
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
                  <p className="text-gray-700 mb-2 ">${product.price}</p>
                  <p className="text-gray-700 mb-2">
                    {product.discountPercentage}% discount
                  </p>
                </div>
                <div className="p-4 bg-gray-100 h-full">
                  
                </div>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    ) : (
      <div className="text-2xl italic flex flex-1 items-center justify-center">
        LOADING <span className="animate-pulse">🛒</span>
        <span className="animate-spin">⚽</span>
      </div>
    )}
  </div>
  </div>
  )
}

export default PerfumeC;