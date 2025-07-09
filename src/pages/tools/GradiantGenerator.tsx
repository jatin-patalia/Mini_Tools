import { useState } from "react"

const GradientGenerator = () => {
  const [color1, setColor1] = useState("#4F46E5")
  const [color2, setColor2] = useState("#06B6D4")
  const [copied, setCopied] = useState(false)
  const [direction, setDirection] = useState("to right")

  const gradientCSS = `linear-gradient(${direction}, ${color1}, ${color2})`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`background: ${gradientCSS};`)
    setCopied(true)
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-blue-400 text-center mb-6">
        Gradient Generator
      </h1>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-600 mb-1">Color 1</label>
          <input
            type="color"
            value={color1}
            onChange={(e) => {
              setColor1(e.target.value)
              setCopied(false)
            }}
            className="w-full h-12 p-1 rounded border cursor-pointer"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Color 2</label>
          <input
            type="color"
            value={color2}
            onChange={(e) => {
              setColor2(e.target.value)
              setCopied(false)
            }}
            className="w-full h-12 p-1 rounded border cursor-pointer"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-1">Direction</label>
        <select
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="to right">To Right</option>
          <option value="to left">To Left</option>
          <option value="to bottom">To Bottom</option>
          <option value="to top">To Top</option>
          <option value="to top right">To Top Right</option>
          <option value="to bottom left">To Bottom Left</option>
        </select>
      </div>

      <div
        className="h-32 rounded-lg border mb-4"
        style={{ background: gradientCSS }}
      />

      <div className="bg-gray-100 p-3 rounded-md text-center">
        <code className="text-blue-500 font-mono">{`background: ${gradientCSS};`}</code>
        <button
          onClick={copyToClipboard}
          className="block w-full mt-3 p-2 bg-blue-400 text-white rounded-md hover:bg-blue-500"
        >
          {copied ? "Copied" : "Copy CSS"}
        </button>
      </div>
    </div>
  )
}

export default GradientGenerator
