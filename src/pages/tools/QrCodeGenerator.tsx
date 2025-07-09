import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [useImage, setUseImage] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const qrValue = useImage ? imageUrl : text;

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-title">
        QR Code Generator
      </h2>

      <div className="flex items-center mb-4 gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={!useImage}
            onChange={() => setUseImage(false)}
          />
          Text
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={useImage}
            onChange={() => setUseImage(true)}
          />
          Image
        </label>
      </div>

      {!useImage ? (
        <div className="mb-4">
          <label className="block font-semibold mb-1">Enter Text:</label>
          <input
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text for QR code"
          />
        </div>
      ) : (
        <div className="mb-4">
          <label className="block font-semibold mb-1">Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full"
            value={imageUrl ? imageUrl : ""}
          />
        </div>
      )}

      {qrValue && (
        <div className="flex flex-col items-center gap-2 mt-6">
          <QRCodeSVG value={qrValue} size={200} />
          <a
            href={qrValue}
            download="qrcode.png"
            className="mt-2 text-sm text-blue-500 hover:text-blue-700"
          >
            ⬇ Download QR
          </a>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
