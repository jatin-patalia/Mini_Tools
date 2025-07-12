import { useState } from "react"
import { Copy } from "lucide-react"
import ToolTitle from "../../components/ToolTitle"

const NumberConverter = () => {
  const [input, setInput] = useState("")
  const [base, setBase] = useState("decimal")

  const parseInput = () => {
    try {
      if (input.trim() === "") return NaN
      switch (base) {
        case "binary":
          return parseInt(input, 2)
        case "decimal":
          return parseInt(input, 10)
        case "octal":
          return parseInt(input, 8)
        case "hex":
          return parseInt(input, 16)
        default:
          return NaN
      }
    } catch {
      return NaN
    }
  }

  const parsed = parseInput()
  const isValid = !isNaN(parsed)

  const formats = {
    binary: isValid ? parsed.toString(2) : "-",
    decimal: isValid ? parsed.toString(10) : "-",
    octal: isValid ? parsed.toString(8) : "-",
    hex: isValid ? parsed.toString(16).toUpperCase() : "-",
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="p-6 rounded-2xl shadow-lg w-full max-w-xl mx-auto">
      <ToolTitle title="Number System Converter" />

      <div className="mb-4">
        <label className="block font-semibold mb-1">Input Number:</label>
        <input
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter number"
        />
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-1">Input Base:</label>
        <select
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={base}
          onChange={(e) => setBase(e.target.value)}
        >
          <option value="binary">Binary</option>
          <option value="decimal">Decimal</option>
          <option value="octal">Octal</option>
          <option value="hex">Hexadecimal</option>
        </select>
      </div>

      {Object.entries(formats).map(([key, value]) => (
        <div
          key={key}
          className="flex items-center justify-between bg-gray-100 p-2 rounded mb-2"
        >
          <div>
            <span className="font-semibold capitalize">{key}:</span>{" "}
            <span className="text-blue-600">{value}</span>
          </div>
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={() => copyToClipboard(value)}
            title="Copy"
          >
            <Copy size={18} />
          </button>
        </div>
      ))}
    </div>
  )
}

export default NumberConverter
