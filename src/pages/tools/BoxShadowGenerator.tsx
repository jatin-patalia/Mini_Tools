import { useState } from "react"
import Button from "../../components/Button"
import ToolTitle from "../../components/ToolTitle"

const BoxShadowGenerator = () => {
  const [hOffset, setHOffset] = useState(10)
  const [vOffset, setVOffset] = useState(10)
  const [blur, setBlur] = useState(20)
  const [spread, setSpread] = useState(0)
  const [color, setColor] = useState("#000000")

  const shadow = `${hOffset}px ${vOffset}px ${blur}px ${spread}px ${color}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`box-shadow: ${shadow};`)
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xl mx-auto mt-10">
      <ToolTitle title="Box Shadow Generator" />

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-gray-600 block mb-1">
            Horizontal Offset (px)
          </label>
          <input
            type="range"
            min={-100}
            max={100}
            value={hOffset}
            onChange={(e) => setHOffset(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-sm text-gray-500 mt-1">{hOffset}px</p>
        </div>

        <div>
          <label className="text-gray-600 block mb-1">
            Vertical Offset (px)
          </label>
          <input
            type="range"
            min={-100}
            max={100}
            value={vOffset}
            onChange={(e) => setVOffset(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-sm text-gray-500 mt-1">{vOffset}px</p>
        </div>

        <div>
          <label className="text-gray-600 block mb-1">Blur Radius (px)</label>
          <input
            type="range"
            min={0}
            max={100}
            value={blur}
            onChange={(e) => setBlur(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-sm text-gray-500 mt-1">{blur}px</p>
        </div>

        <div>
          <label className="text-gray-600 block mb-1">Spread Radius (px)</label>
          <input
            type="range"
            min={-50}
            max={50}
            value={spread}
            onChange={(e) => setSpread(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-sm text-gray-500 mt-1">{spread}px</p>
        </div>

        <div className="col-span-2">
          <label className="text-gray-600 block mb-1">Shadow Color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full h-12 rounded border cursor-pointer"
          />
        </div>
      </div>

      <div
        className="mb-6 h-32 rounded-lg border border-gray-300 bg-white"
        style={{ boxShadow: shadow }}
      />

      <div className="bg-gray-100 p-4 rounded-md text-center">
        <code className="text-blue-500 font-mono">box-shadow: {shadow};</code>

        <Button clickHandler={copyToClipboard} title="Copy CSS" />
      </div>
    </div>
  )
}

export default BoxShadowGenerator
