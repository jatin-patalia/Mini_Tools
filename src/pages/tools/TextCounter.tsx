import { useState } from "react"

const countWords = (text: string) =>
  text.trim().split(/\s+/).filter(Boolean).length

const countLines = (text: string) =>
  text.split(/\r\n|\r|\n/).filter(Boolean).length

const countChars = (text: string, excludeSpaces = false) =>
  excludeSpaces ? text.replace(/\s/g, "").length : text.length

const countUniqueWords = (text: string) => {
  const words = text
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .map((w) => w.replace(/[^\w]/g, "")) // remove punctuation
    .filter(Boolean)

  const uniqueSet = new Set(words)
  return uniqueSet.size
}

const estimateReadingTime = (wordCount: number) => {
  const wordsPerMinute = 200
  const time = wordCount / wordsPerMinute
  return time < 1
    ? `${Math.ceil(time * 60)} sec`
    : `${Math.floor(time)} min ${Math.round((time % 1) * 60)} sec`
}

const TextCounter = () => {
  const [text, setText] = useState("")

  const words = countWords(text)
  const lines = countLines(text)
  const charsWithSpaces = countChars(text)
  const uniqueWords = countUniqueWords(text)
  const charsWithoutSpaces = countChars(text, true)
  const readingTime = estimateReadingTime(words)

  const copyToClipboard = () => navigator.clipboard.writeText(text)

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-blue-400 text-center mb-6">
        Text Stats Counter
      </h1>

      <textarea
        rows={8}
        placeholder="Paste or type your text here..."
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 mb-4"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <button
        onClick={copyToClipboard}
        className="mb-4 w-full p-2 bg-blue-400 text-white rounded-md hover:bg-blue-500"
      >
        Copy Text
      </button>

      <div className="grid grid-cols-1 gap-3 text-center bg-gray-100 p-4 rounded-md">
        <p className="text-gray-700">
          <span className="font-medium">Words:</span> {words}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Unique Words:</span> {uniqueWords}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Characters (with spaces):</span>{" "}
          {charsWithSpaces}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Characters (without spaces):</span>{" "}
          {charsWithoutSpaces}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Lines:</span> {lines}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Reading Time:</span> {readingTime}
        </p>
      </div>
    </div>
  )
}

export default TextCounter
