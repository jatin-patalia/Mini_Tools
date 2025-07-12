// src/pages/Tools/UnitConverter.tsx
import { useState } from "react"

const units = {
  length: [
    { label: "Kilometer", value: "km", factor: 1000 },
    { label: "Meter", value: "m", factor: 1 },
    { label: "Centimeter", value: "cm", factor: 0.01 },
    { label: "Millimeter", value: "mm", factor: 0.001 },
    { label: "Mile", value: "mi", factor: 1609.34 },
    { label: "Yard", value: "yd", factor: 0.9144 },
    { label: "Foot", value: "ft", factor: 0.3048 },
    { label: "Inch", value: "in", factor: 0.0254 },
  ],
}

export default function UnitConverter() {
  const [category] = useState<"length">("length")
  const [fromUnit, setFromUnit] = useState("km")
  const [toUnit, setToUnit] = useState("m")
  const [inputValue, setInputValue] = useState(0)
  const [result, setResult] = useState(0)

  const convert = (value: number, from: string, to: string) => {
    const unitList = units[category]
    const fromFactor = unitList.find((u) => u.value === from)?.factor || 1
    const toFactor = unitList.find((u) => u.value === to)?.factor || 1
    return (value * fromFactor) / toFactor
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value)
    const converted = convert(val, fromUnit, toUnit)
    setInputValue(val)
    setResult(converted)
  }

  const handleFromUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value
    setFromUnit(val)
    setResult(convert(inputValue, val, toUnit))
  }

  const handleToUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value
    setToUnit(val)
    setResult(convert(inputValue, fromUnit, val))
  }

  return (
    <div className="p-6 rounded-2xl shadow-lg w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-title mb-4 text-center">
        Length Unit Converter
      </h2>

      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder="Enter value"
      />

      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block mb-1">From</label>
          <select
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={fromUnit}
            onChange={handleFromUnitChange}
          >
            {units[category].map((unit) => (
              <option key={unit.value} value={unit.value}>
                {unit.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="block mb-1">To</label>
          <select
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={toUnit}
            onChange={handleToUnitChange}
          >
            {units[category].map((unit) => (
              <option key={unit.value} value={unit.value}>
                {unit.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="text-lg">
        Result:{" "}
        <span className="font-medium text-primary">{result.toFixed(4)}</span>
      </div>
    </div>
  )
}
