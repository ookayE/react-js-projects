import { useState, useEffect } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function createRandomColor(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[createRandomColor(hex.length)]; //Pass length of hex array to function
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const red = createRandomColor(256);
    const green = createRandomColor(256);
    const blue = createRandomColor(256);

    const rgbColor = `rgb(${red}, ${green}, ${blue}) `;

    setColor(rgbColor);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
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
