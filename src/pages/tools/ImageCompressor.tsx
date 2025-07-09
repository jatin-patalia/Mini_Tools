import React, { useState } from "react";

const ImageCompressor = () => {
  const [originalImage, setOriginalImage] = useState<File | null>(null);
  const [compressedURL, setCompressedURL] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setOriginalImage(file);
      compressImage(file);
    }
  };

  const compressImage = (file: File) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          canvas.toBlob(
            (blob) => {
              if (blob) {
                const url = URL.createObjectURL(blob);
                setCompressedURL(url);
              }
            },
            file.type,
            1 // quality = 1 (lossless)
          );
        }
      };
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-primary mb-4 text-center">
        Image Compressor (Lossless)
      </h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full mb-4 px-4 py-2 border rounded"
      />

      {originalImage && (
        <div className="mb-4">
          <p className="font-semibold">Original:</p>
          <img
            src={URL.createObjectURL(originalImage)}
            alt="Original"
            className="w-full max-h-64 object-contain border rounded mb-2"
          />
          <p className="text-sm text-gray-600">
            Size: {(originalImage.size / 1024).toFixed(2)} KB
          </p>
        </div>
      )}

      {compressedURL && (
        <div>
          <p className="font-semibold">Compressed:</p>
          <img
            src={compressedURL}
            alt="Compressed"
            className="w-full max-h-64 object-contain border rounded mb-2"
          />
          <a
            href={compressedURL}
            download="compressed-image"
            className="bg-primary hover:bg-hover text-white font-bold py-2 px-4 rounded"
          >
            Download Compressed Image
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageCompressor;
