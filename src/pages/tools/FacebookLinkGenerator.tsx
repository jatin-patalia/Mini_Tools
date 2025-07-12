import { useState } from "react"
import { Copy } from "lucide-react"

const FacebookLinkGenerator = () => {
  const [url, setUrl] = useState("")
  const [shareLink, setShareLink] = useState("")

  const generateLink = () => {
    if (!url.trim()) return
    const encodedUrl = encodeURIComponent(url.trim())
    const link = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    setShareLink(link)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink)
  }

  return (
    <div className="p-6 rounded-2xl shadow-lg w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold text-center text-primary">
        Facebook Share Link Generator
      </h2>

      <input
        type="text"
        placeholder="Enter URL to share"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={generateLink} className="w-full">
        Generate Share Link
      </button>

      {shareLink && (
        <div className="flex items-center justify-between border p-2 rounded-md bg-muted">
          <span className="text-sm break-all">{shareLink}</span>
          <button onClick={copyToClipboard}>
            <Copy className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}

export default FacebookLinkGenerator
