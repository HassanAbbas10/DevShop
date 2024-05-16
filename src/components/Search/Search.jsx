import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
const Search = () => {
  const [inputVal, setInputVal] = useState("");
  // export const [state, setState] = useState("");
  const [apiData, setApiData] = useState([]);

  const handlechange = (e) => {
    setInputVal(e.target.value);
  };
  console.log(inputVal);
  // const submitHandler = () => {
  //   setState(inputVal);
  // };

  const apiUrl = `https://dummyjson.com/products/search?q=${inputVal}&limit=4`;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setApiData(data.products);
    };

    if (inputVal) {
      fetchData();
    }
  }, [apiUrl, inputVal]);

  return (
    <div className="flex container max-w-lg flex-col">
      <div className="flex items-center justify-center">
        <input
          id="search"
          type="text"
          onChange={handlechange}
          value={inputVal}
          className=" px-8 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 rounded-full w-96"
        />

        <button className="bg-orange-500 hover:bg-blue-300 text-white font-bold py-1 px-1.5 border-orange-400 rounded-full relative right-10">
          <SearchIcon />
        </button>
      </div>
      {(apiData.length > 0) & (inputVal != "") ? (
        <ul className="absolute top-[2.60rem] px-2  bg-slate-100 w-[20rem] ml-7 rounded-b-md border border-orange-300">
          {apiData
            .filter((filters) => filters.title.toLowerCase().includes(inputVal))
            .map((dat) => (
              <li className="border-b  border-orange-500 py-2" key={dat.id}>
                <Link to={`products/${dat.id}`}>
                <div className="flex gap-5 max-h-[3.25rem] flex-1">
                  <img
                    className="bg-cover bg-center"
                    src={dat.thumbnail}
                    height={42}
                    width={64}
                  />
                  <div className="flex flex-col w-full justify-center"
                  >
                  <p className="my-1 text-sm italic">{dat.title}</p>
                  <p className="text-sm text-gray-500">{dat.category}</p>
                  </div>

                </div>
                </Link>
              </li>
            ))}
        </ul>
      ) : (
        <div></div>
      )}
    </div>
    //FIXME:  Add the functional of seach items shown in cards
  );
};

export default Search;
