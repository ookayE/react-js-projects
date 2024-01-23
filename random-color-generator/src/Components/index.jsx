import { useState, useEffect } from "react";

export default function RandomColor() {
  // Define two state variables: typeOfColor to track color type (hex or rgb) and color to store the generated color.
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  // Function generates a random number between 0 and 'length' (exclusive).
  function createRandomColor(length) {
    return Math.floor(Math.random() * length);
  }

  // Function handles generating a random HEX color.
  function handleCreateRandomHexColor() {
    // Define an array of possible characters for HEX values.
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    // Generate a random HEX color by picking characters from 'hex' array.
    for (let i = 0; i < 6; i++) {
      hexColor += hex[createRandomColor(hex.length)]; // Append a random character from 'hex' array.
    }
    setColor(hexColor); // Set the generated HEX color as the new state.
  }

  // Function handles generating a random RGB color.
  function handleCreateRandomRgbColor() {
    // Generate random values for red, green, and blue components.
    const red = createRandomColor(256);
    const green = createRandomColor(256);
    const blue = createRandomColor(256);

    // Construct an RGB color string.
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    setColor(rgbColor); // Set the generated RGB color as the new state.
  }

  // Generate a random color when 'typeOfColor' changes.
  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRandomRgbColor(); // Call the RGB color generator function.
    } else {
      handleCreateRandomHexColor(); // Call the HEX color generator function.
    }
  }, [typeOfColor]); // This effect will run whenever 'typeOfColor' changes.

  // Render component
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      {/* Button to switch to HEX color generation */}
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      {/* Button to switch to RGB color generation */}
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      {/* Button to generate a random color based on 'typeOfColor' */}
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      {/* Display the selected color type (HEX or RGB) and the generated color */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#fff",
          fontSize: "60px",
          fontWeight: "bold",
          marginTop: "50px",
        }}
      >
        <h3>{typeOfColor}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
