import { useState } from "react";

const TextCaseConverter = () => {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  const toCapitalizedCase = () => {
    const capitalized = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(capitalized);
  };

  const handleClear = () => {
    setText("");
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-2xl shadow-md border border-primary">
      <h2 className="text-2xl font-bold text-title mb-4 text-center">
        🔤 Text Case Converter
      </h2>

      <textarea
        placeholder="Enter your text here..."
        className="w-full h-40 p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex flex-wrap justify-center gap-3 mt-4">
        <button
          onClick={toUpperCase}
          className="bg-primary hover:bg-hover text-white px-4 py-2 rounded-xl transition"
        >
          UPPERCASE
        </button>
        <button
          onClick={toLowerCase}
          className="bg-primary hover:bg-hover text-white px-4 py-2 rounded-xl transition"
        >
          lowercase
        </button>
        <button
          onClick={toCapitalizedCase}
          className="bg-primary hover:bg-hover text-white px-4 py-2 rounded-xl transition"
        >
          Capitalized Case
        </button>
        <button
          onClick={handleCopy}
          className="bg-primary hover:bg-hover text-white px-4 py-2 rounded-xl transition"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <button
          onClick={handleClear}
          className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-xl transition"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default TextCaseConverter;
