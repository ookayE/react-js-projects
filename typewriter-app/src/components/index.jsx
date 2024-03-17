import { useState } from "react";
import NavBar from "./Navbar";

function Typewriter() {
  const [content, setContent] = useState("");

  function handleInputChange(e) {
    setContent(e.target.value);
  }

  return (
    <div>
      <NavBar />
      <div className="paper">
        <textarea
          className="paper-textarea"
          value={content}
          onChange={handleInputChange}
          placeholder="Type here..."
        />
      </div>
    </div>
  );
}

export default Typewriter;
