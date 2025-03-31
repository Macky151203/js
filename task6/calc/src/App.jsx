import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input));
    } catch {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="h-screen bg-gray-100">
      <div className="pb-2 p-2 text-xl text-center">Calculator</div>
      <div className="flex flex-col items-center justify-center mt-6 pb-4">
        <div className="mb-4 h-8 text-4xl font-bold text-gray-800">{input}</div>
        <div className="grid grid-cols-4 gap-4 ">
          {["7", "8", "9", "/"].map((item) => (
            <button
              key={item}
              className="p-6 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
              onClick={() => handleButtonClick(item)}
            >
              {item}
            </button>
          ))}
          {["4", "5", "6", "*"].map((item) => (
            <button
              key={item}
              className="p-6 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
              onClick={() => handleButtonClick(item)}
            >
              {item}
            </button>
          ))}
          {["1", "2", "3", "-"].map((item) => (
            <button
              key={item}
              className="p-6 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
              onClick={() => handleButtonClick(item)}
            >
              {item}
            </button>
          ))}
          {["0", ".", "+", "="].map((item) => (
            <button
              key={item}
              className="p-6 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
              onClick={
                item === "=" ? calculateResult : () => handleButtonClick(item)
              }
            >
              {item}
            </button>
          ))}
          <button
            className="col-span-4 p-6 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
            onClick={clearInput}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
