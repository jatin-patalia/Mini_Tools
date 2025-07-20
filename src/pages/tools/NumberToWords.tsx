import { useState } from "react"

const ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
]

const tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
]

const convertToWords = (num: number): string => {
  if (num === 0) return "zero"

  const helper = (n: number): string => {
    if (n < 20) return ones[n]
    if (n < 100)
      return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + ones[n % 10] : "")
    if (n < 1000)
      return (
        ones[Math.floor(n / 100)] +
        " hundred" +
        (n % 100 !== 0 ? " and " + helper(n % 100) : "")
      )
    if (n < 1000000)
      return (
        helper(Math.floor(n / 1000)) +
        " thousand" +
        (n % 1000 !== 0 ? " " + helper(n % 1000) : "")
      )

    return "number too large"
  }

  return helper(num)
}

const NumberToWordsConverter = () => {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInput(value)

    const num = parseInt(value.trim(), 10)
    if (!isNaN(num) && num >= 0) {
      setOutput(convertToWords(num))
    } else {
      setOutput("")
    }
  }

  return (
    <div className="p-6 rounded-2xl shadow-lg w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4 text-title">
        Number to Words Converter
      </h2>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Enter a Number:</label>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="e.g. 123"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {output && (
        <div className="mt-4 text-center text-lg font-medium text-gray-700">
          {output}
        </div>
      )}
    </div>
  )
}

export default NumberToWordsConverter
