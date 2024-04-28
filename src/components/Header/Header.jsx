import { Link } from "react-router-dom";
import Search from "./../Search/Search";

const Header = () => {
  return (
    <nav className="top-0 p-3 py-4 z-10 bg-whiterounded-b-md border-b border-solid 
    border-slate-300 border-1 sticky backdrop-filter 
    backdrop-blur-lg bg-opacity-30">
    <div className="relative">
      <div className="flex justify-between items-center px-2 ">
        <div className="flex">
        <p className="text-orange-300 text-3xl ">
          Dev <span className="text-red-500 italic">Shop</span>
        </p>
        </div>
     
        <Search />
        <div className="flex items-center justify-center list-none px-2 gap-10 text-white ">
          <li className="active:text-orange-400">
            <Link to="/" className="text-orange-500 italic">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-orange-500 italic ">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-orange-500 italic">
              Contact
            </Link>
          </li>
        </div>
      </div>
    </div>
    </nav>
  );
};

export default Header;
