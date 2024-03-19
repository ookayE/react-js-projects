import { useEffect, useState } from "react";
import NavBar from "./Navbar";
import key1 from "../sfx/RandomKey.mp3";
import key2 from "../sfx/RandomKey2.mp3";
import spacebar from "../sfx/Spacebar.mp3";
import shift from "../sfx/shift.mp3";

function Typewriter() {
  const [content, setContent] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const typewriterSounds = [key1, key2];
  const spacebarAudio = new Audio(spacebar);
  const shiftAudio = new Audio(shift);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Ensure the pressed key is not a modifier key like Shift or Ctrl
      if (
        !event.metaKey &&
        !event.altKey &&
        !event.ctrlKey &&
        !event.shiftKey &&
        event.key != "Backspace" &&
        event.key != " "
      ) {
        // Play a random typewriter sound
        const randomIndex = Math.floor(Math.random() * typewriterSounds.length);
        const audio = new Audio(typewriterSounds[randomIndex]);
        audio.play();
      } else if (event.key === " " && !event.repeat) {
        //play spacebar sound
        spacebarAudio.play();
      } else if (event.key === "Shift") {
        //play shift sound
        shiftAudio.play();
      }
    };

    // Add event listener for keydown event
    window.addEventListener("keydown", handleKeyDown);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [typewriterSounds]); // Ensure the effect runs only when typewriterSounds change

  function handleInputChange(e) {
    setContent(e.target.value);
  }
  function handleBold(e) {
    setBold(!bold);
  }
  function handleItalic(e) {
    setItalic(!italic);
  }
  function handleUnderline(e) {
    setUnderline(!underline);
  }

  //Text Area
  return (
    <div className={darkMode ? "dark-mode" : "day-mode"}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="paper">
        <textarea
          className={`paper-textarea text-xl ${
            darkMode ? "dark-mode" : "light-mode"
          }`}
          style={{ fontSize: "36px" }}
          value={content}
          onChange={handleInputChange}
          placeholder="Type here..."
        />
      </div>
    </div>
  );
}

export default Typewriter;
