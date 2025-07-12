import React, { useState } from "react"
import Button from "../../components/Button"
import ToolTitle from "../../components/ToolTitle"

const PasswordGenerator: React.FC = () => {
  const [length, setLength] = useState(12)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [password, setPassword] = useState("")

  const generatePassword = () => {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789"
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?"

    let characters = letters
    if (includeNumbers) characters += numbers
    if (includeSymbols) characters += symbols

    let result = ""
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    setPassword(result)
  }

  // Generate password on first load
  React.useEffect(() => {
    generatePassword()
  }, [])

  return (
    <div className="p-6 rounded-2xl shadow-lg w-full max-w-xl mx-auto">
      <ToolTitle title="🔐 Password Generator" />

      <div className="text-xl font-mono rounded-xl p-4 mb-4 break-all">
        {password}
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">Password Length: {length}</label>
        <input
          type="range"
          min="6"
          max="32"
          value={length}
          onChange={(e) => {
            setLength(Number(e.target.value))
            generatePassword()
          }}
          className="w-full accent-primary hover:bg-hover"
        />
      </div>

      <div className="flex items-center gap-2 mb-4">
        <input
          id="numbers"
          type="checkbox"
          checked={includeNumbers}
          onChange={() => {
            setIncludeNumbers(!includeNumbers)
            generatePassword()
          }}
        />
        <label htmlFor="numbers">Include Numbers</label>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <input
          id="symbols"
          type="checkbox"
          checked={includeSymbols}
          onChange={() => {
            setIncludeSymbols(!includeSymbols)
            generatePassword()
          }}
        />
        <label htmlFor="symbols">Include Symbols</label>
      </div>
      <Button clickHandler={generatePassword} title="🔄 Regenerate Password" />
    </div>
  )
}

export default PasswordGenerator
