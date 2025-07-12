import { useState } from "react"
import ToolTitle from "../../components/ToolTitle"
import Button from "../../components/Button"

const TextCaseConverter = () => {
  const [text, setText] = useState("")
  const [copied, setCopied] = useState(false)

  const toUpperCase = () => {
    setText(text.toUpperCase())
  }

  const toLowerCase = () => {
    setText(text.toLowerCase())
  }

  const toCapitalizedCase = () => {
    const capitalized = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
    setText(capitalized)
  }

  const handleClear = () => {
    setText("")
    setCopied(false)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-2xl shadow-md border border-primary">
      <ToolTitle title=" 🔤 Text Case Converter" />
      <textarea
        placeholder="Enter your text here..."
        className="w-full h-40 p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex flex-wrap justify-center gap-3 mt-4">
        <Button title="UPPERCASE" clickHandler={toUpperCase} noFullWidth />
        <Button title="lowercase" clickHandler={toLowerCase} noFullWidth />
        <Button
          title="Capitalized Case"
          clickHandler={toCapitalizedCase}
          noFullWidth
        />
        <Button
          title={copied ? "Copied!" : "Copy"}
          clickHandler={handleCopy}
          noFullWidth
        />
        <Button
          title="Clear"
          clickHandler={handleClear}
          cssClass="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-xl transition"
          noFullWidth
        />
      </div>
    </div>
  )
}

export default TextCaseConverter
