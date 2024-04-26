import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../Context/Context";

const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <ul className="flex justify-between h-20 text-xl font-bold">
        <li></li>
        <li>
          <NavLink to={"/"}>MOVIE APP</NavLink>
        </li>
        <div>
          <li>
            <NavLink to={"/watchlist"}>Watchlist</NavLink>
          </li>
          <li>
            <NavLink to={"/favorites"}>Favorites</NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
