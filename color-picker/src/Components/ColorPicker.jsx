import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <input type="color" value={color} onChange={handleColorChange} />
      <p>Current color: {color}</p>
    </div>
  );
}
