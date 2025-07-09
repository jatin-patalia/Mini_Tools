import { useState, useRef, type JSX } from "react";

const colors = [
  "#F87171",
  "#60A5FA",
  "#34D399",
  "#FBBF24",
  "#A78BFA",
  "#FB7185",
  "#5EEAD4",
  "#FACC15",
  "#C084FC",
  "#F472B6",
];

const wheelSize = 300;

const RandomNameWheel = () => {
  const [names, setNames] = useState<string[]>([]);
  const [inputText, setInputText] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState("");
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef<SVGSVGElement>(null);

  const drawWheel = () => {
    const slices = names.length;
    const angle = 360 / slices;
    const radius = wheelSize / 2;
    const paths: JSX.Element[] = [];

    for (let i = 0; i < slices; i++) {
      const startAngle = (i * angle * Math.PI) / 180;
      const endAngle = ((i + 1) * angle * Math.PI) / 180;
      const x1 = radius + radius * Math.cos(startAngle);
      const y1 = radius + radius * Math.sin(startAngle);
      const x2 = radius + radius * Math.cos(endAngle);
      const y2 = radius + radius * Math.sin(endAngle);
      const largeArc = angle > 180 ? 1 : 0;

      const d = `
        M ${radius} ${radius}
        L ${x1} ${y1}
        A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}
        Z
      `;

      paths.push(
        <path
          key={i}
          d={d}
          fill={colors[i % colors.length]}
          stroke="white"
          strokeWidth="2"
        />
      );
    }

    return paths;
  };

  const drawLabels = () => {
    const labels: JSX.Element[] = [];
    const angle = 360 / names.length;
    const radius = wheelSize / 2.5;

    for (let i = 0; i < names.length; i++) {
      const rotation = i * angle + angle / 2;
      const x = wheelSize / 2 + radius * Math.cos((rotation * Math.PI) / 180);
      const y = wheelSize / 2 + radius * Math.sin((rotation * Math.PI) / 180);
      labels.push(
        <text
          key={i}
          x={x}
          y={y}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="12"
          transform={`rotate(${rotation}, ${x}, ${y})`}
        >
          {names[i]}
        </text>
      );
    }

    return labels;
  };

  const handleSpin = () => {
    if (names.length < 2 || spinning) return;

    const degrees = 360 * 5 + Math.floor(Math.random() * 360); // 5 full spins + random
    setSpinning(true);
    setRotation((prev) => prev + degrees);

    const winnerIndex =
      names.length - Math.floor(((degrees % 360) / 360) * names.length) - 1;
    const finalWinner = names[(winnerIndex + names.length) % names.length];

    setTimeout(() => {
      setWinner(finalWinner);
      setSpinning(false);
    }, 4000); // matches animation duration
  };

  const handleInput = () => {
    const parsed = inputText
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name !== "");
    setNames(parsed);
    setWinner("");
    setRotation(0);
  };

  return (
    <div className="max-w-xl mx-auto p-4 text-center bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-blue-400 mb-4">
        🎡 Random Name Wheel
      </h2>
      <textarea
        className="w-full p-2 border rounded-md mb-2 border-blue-300"
        placeholder="Enter names separated by commas"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={handleInput}
        className="bg-blue-400 text-white px-4 py-1 rounded mb-4 hover:bg-blue-500"
      >
        Load Names
      </button>

      {names.length > 1 && (
        <div className="relative mx-auto w-[300px] h-[300px] mb-4">
          <div className="absolute left-1/2 -top-4 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-red-500 z-10"></div>
          <svg
            width={wheelSize}
            height={wheelSize}
            ref={wheelRef}
            style={{
              transition: spinning
                ? "transform 4s cubic-bezier(0.33, 1, 0.68, 1)"
                : "none",
              transform: `rotate(${rotation}deg)`,
            }}
          >
            {drawWheel()}
            {drawLabels()}
          </svg>
        </div>
      )}

      {names.length > 1 && (
        <button
          onClick={handleSpin}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-all"
        >
          Spin 🎯
        </button>
      )}

      {winner && (
        <div className="mt-4 text-xl font-bold text-blue-500">
          🎉 Winner: {winner} 🎉
        </div>
      )}
    </div>
  );
};

export default RandomNameWheel;
