import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>Generate QR Code</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter value here..."
        />

        <button
          disabled={input && input.trim !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate Code
        </button>
      </div>

      <div>
        <QRCode name="qr-code" value={qrCode} size={500} />
      </div>
    </div>
  );
}
