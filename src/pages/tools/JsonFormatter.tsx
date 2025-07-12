import { useState } from "react"

const JsonFormatter = () => {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(input)
      const formatted = JSON.stringify(parsed, null, 2)
      setOutput(formatted)
      setError("")
    } catch (err) {
      setError("Invalid JSON format.")
      setOutput("")
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="p-6 rounded-2xl shadow-lg w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-title">
        🧾 JSON Formatter
      </h2>

      <textarea
        placeholder="Paste your JSON here..."
        className="w-full h-40 p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="text-center mt-4">
        <button
          onClick={handleFormat}
          className="bg-primary hover:bg-hover w-full text-white px-6 py-2 rounded-xl transition"
        >
          Format JSON
        </button>
      </div>

      {error && (
        <p className="text-red-500 mt-3 text-sm text-center">{error}</p>
      )}

      {output && (
        <div className="relative mt-6">
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 bg-primary hover:bg-hover text-white text-xs px-3 py-1 rounded-lg"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm text-left whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}
    </div>
  )
}

export default JsonFormatter
