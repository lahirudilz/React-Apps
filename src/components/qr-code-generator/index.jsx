import { useState } from "react";
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
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={input}
        name="qr-code-generator"
        placeholder="Enter your value here"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button
        disabled={input && input.trim() !== "" ? false : true}
        onClick={handleGenerateQrCode}
      >
        Generate
      </button>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
