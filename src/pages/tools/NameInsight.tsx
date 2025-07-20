import { useState } from "react"
import axios from "axios"

const NameInsights = () => {
  const [name, setName] = useState("")
  const [results, setResults] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const fetchInsights = async () => {
    if (!name.trim()) return
    setLoading(true)

    try {
      const [ageRes, genderRes, nationRes] = await Promise.all([
        axios.get(`https://api.agify.io/?name=${name}`),
        axios.get(`https://api.genderize.io/?name=${name}`),
        axios.get(`https://api.nationalize.io/?name=${name}`),
      ])

      setResults({
        age: ageRes.data.age,
        gender: genderRes.data.gender,
        nationality: nationRes.data.country,
        // quote: quoteRes.data.content,
      })
    } catch (err) {
      console.error("Error fetching data:", err)
      setResults(null)
    }

    setLoading(false)
  }

  const getCountryNames = (countries: any[]) =>
    countries
      .slice(0, 3)
      .map((c) => `${c.country_id} (${Math.round(c.probability * 100)}%)`)
      .join(", ")

  return (
    <div className="p-6 rounded-2xl shadow-lg w-full max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">🔎 Name Insights Tool</h2>
      <input
        type="text"
        className="w-full border p-2 rounded mb-4"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={fetchInsights}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-hover w-full"
        disabled={loading}
      >
        {loading ? "Loading..." : "Get Insights"}
      </button>

      {results && (
        <div className="mt-6 text-left space-y-2">
          <p>
            <strong>🧓 Predicted Age:</strong> {results.age || "N/A"}
          </p>
          <p>
            <strong>🚻 Gender:</strong> {results.gender || "N/A"}
          </p>
          <p>
            <strong>🌍 Likely Nationality:</strong>{" "}
            {getCountryNames(results.nationality)}
          </p>
        </div>
      )}
    </div>
  )
}

export default NameInsights
