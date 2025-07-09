import { useNavigate } from "react-router-dom";
import { toolsList } from "../utils.ts/toolList";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold align text-center mb-4 text-title">
        All tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 cursor-pointer">
        {toolsList.map((tool, index) => {
          return (
            <div
              className="border-2 border-primary rounded-lg p-4 flex justify-between items-start min-h-24"
              onClick={() => navigate(tool.path)}
              key={index}
            >
              <div className="flex flex-col max-w-80">
                <p className="text-xl font-bold">{tool.name}</p>
                <p className="text-sm">{tool.summary}</p>
              </div>
              <div className="flex justify-end">
                <img
                  className="w-12 h-12 object-contain"
                  src={tool.icon}
                  alt="icon"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
