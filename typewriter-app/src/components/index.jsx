import { useState } from "react";
import NavBar from "./Navbar";

function Typewriter() {
  const [content, setContent] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  function handleInputChange(e) {
    setContent(e.target.value);
  }
  function handleBold(e) {
    setBold(!bold);
  }
  function handleItalic(e) {
    setBold(!bold);
  }
  function handleUnderline(e) {
    setBold(!bold);
  }

  return (
    <div className={darkMode ? "dark-mode" : "day-mode"}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="paper">
        <textarea
          className={`paper-textarea ${darkMode ? "dark-mode" : "light-mode"}`}
          value={content}
          onChange={handleInputChange}
          placeholder="Type here..."
        />
      </div>
    </div>
  );
}

export default Typewriter;
