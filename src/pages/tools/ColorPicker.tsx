import { useState } from "react"

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

const rgbToHsl = (r: number, g: number, b: number) => {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0,
    s = 0,
    l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
}

const ColorPicker = () => {
  const [color, setColor] = useState<string>("#4F46E5")
  const [copied, setCopied] = useState(false)

  const rgb = hexToRgb(color)
  const hsl = rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-blue-400 text-center mb-6">
        Color Picker
      </h1>

      <div className="flex items-center justify-center mb-6">
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value)
            setCopied(false)
          }}
          className="w-20 h-20 border rounded-lg shadow-md cursor-pointer"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 text-center">
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="font-medium text-gray-700">HEX</p>
          <div className="flex items-center justify-center gap-2 mt-1">
            <code className="font-mono text-blue-500">{color}</code>
            <button
              onClick={() => copyToClipboard(color)}
              className="text-sm bg-blue-400 text-white px-2 py-1 rounded hover:bg-blue-500"
            >
              {copied ? "copied" : "Copy"}
            </button>
          </div>
        </div>

        {rgb && (
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="font-medium text-gray-700">RGB</p>
            <div className="flex items-center justify-center gap-2 mt-1">
              <code className="font-mono text-blue-500">
                rgb({rgb.r}, {rgb.g}, {rgb.b})
              </code>
              <button
                onClick={() =>
                  copyToClipboard(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)
                }
                className="text-sm bg-blue-400 text-white px-2 py-1 rounded hover:bg-blue-500"
              >
                {copied ? "copied" : "Copy"}
              </button>
            </div>
          </div>
        )}

        {hsl && (
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="font-medium text-gray-700">HSL</p>
            <div className="flex items-center justify-center gap-2 mt-1">
              <code className="font-mono text-blue-500">
                hsl({hsl.h}, {hsl.s}%, {hsl.l}%)
              </code>
              <button
                onClick={() => {
                  copyToClipboard(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`)
                  setCopied(true)
                }}
                className="text-sm bg-blue-400 text-white px-2 py-1 rounded hover:bg-blue-500"
              >
                {copied ? "copied" : "Copy"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ColorPicker
