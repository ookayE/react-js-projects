import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../Context/Context";

const Navbar = () => {
  return (
    <nav className="flex justify-center h-20 bg-black w-full text-white items-center">
      <h1>MOVIE APP</h1>
    </nav>
  );
};

export default Navbar;
