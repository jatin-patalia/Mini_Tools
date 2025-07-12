import { useState } from "react"
import { fullAge } from "../../utils.ts/fullAge"
import ToolTitle from "../../components/ToolTitle"

const AgeCalculator = () => {
  const [dob, setDob] = useState("")
  const age = fullAge(dob)

  return (
    <div className="p-6 rounded-2xl shadow-lg w-full max-w-xl mx-auto">
      <ToolTitle title="Age Calculator" />

      <div className="mb-6">
        <label className="block font-semibold mb-1">
          Select Date of Birth:
        </label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Select your date of birth"
        />
      </div>

      {age && (
        <div className="bg-gray-100 p-4 rounded-md text-center space-y-2">
          <p>
            <span className="font-semibold">Age:</span> {age.years} Years,{" "}
            {age.months} Months, {age.days} Days
          </p>
          <p>
            <span className="font-semibold">Next Birthday In:</span>{" "}
            {age.daysToBirthday} Days
          </p>
        </div>
      )}
    </div>
  )
}

export default AgeCalculator
