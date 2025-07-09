// components/TwitterShareGenerator.tsx

import { useState } from "react";

const TwitterShareGenerator = () => {
  const [text, setText] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [via, setVia] = useState("");
  const [url, setUrl] = useState("");

  const generateLink = () => {
    const params = new URLSearchParams();
    if (text) params.append("text", text);
    if (hashtags) params.append("hashtags", hashtags);
    if (via) params.append("via", via.replace(/^@/, ""));
    if (url) params.append("url", url);

    return `https://twitter.com/intent/tweet?${params.toString()}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateLink());
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md max-w-xl mx-auto text-sm">
      <h2 className="text-xl font-semibold text-blue-400 mb-4">
        Twitter Share Link Generator
      </h2>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="Tweet text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Hashtags (comma separated)"
          value={hashtags}
          onChange={(e) => setHashtags(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Via (Twitter handle)"
          value={via}
          onChange={(e) => setVia(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="url"
          placeholder="URL (optional)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-2 border rounded-md"
        />

        <div className="mt-4 bg-gray-100 p-3 rounded-md break-all">
          <span className="font-medium text-gray-600">Generated Link:</span>
          <p className="text-blue-600">{generateLink()}</p>
        </div>

        <button
          onClick={handleCopy}
          className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition"
        >
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default TwitterShareGenerator;
