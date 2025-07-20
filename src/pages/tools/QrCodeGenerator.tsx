import { useState, useRef } from "react"
import { QRCodeCanvas } from "qrcode.react"

const QRCodeGenerator = () => {
  const [text, setText] = useState("")
  const canvasRef = useRef<HTMLDivElement>(null)

  const downloadQR = () => {
    const canvas = canvasRef.current?.querySelector("canvas")
    const url = canvas?.toDataURL("image/png")
    const a = document.createElement("a")
    a.href = url as string
    a.download = "qrcode.png"
    a.click()
  }

  return (
    <div className="p-6 rounded-2xl shadow-lg w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4 text-title">
        QR Code Generator
      </h2>

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

      {text && (
        <div className="flex flex-col items-center gap-2 mt-6" ref={canvasRef}>
          <QRCodeCanvas value={text} size={200} />
          <button
            onClick={downloadQR}
            className="mt-2 text-sm text-blue-500 hover:text-blue-700"
          >
            ⬇ Download QR
          </button>
        </div>
      )}
    </div>
  )
}

export default QRCodeGenerator
