import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faUnderline,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar({ darkMode, setDarkMode }) {
  function toggleDarkMode() {
    setDarkMode(!darkMode);

    {
      darkMode ? console.log("Dark!") : console.log("Light!");
    }
  }

  return (
    <div className="pt-4">
      <button className="bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        <FontAwesomeIcon icon={faBold} />
      </button>
      <button className="bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        <FontAwesomeIcon icon={faItalic} />
      </button>
      <button className="bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        <FontAwesomeIcon icon={faUnderline} />
      </button>
      <button
        className="bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </button>
    </div>
  );
}
