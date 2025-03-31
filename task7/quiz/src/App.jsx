import React, { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is 10 + 5?",
    options: ["10", "15", "20", "25"],
    correctAnswer: "15",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
];

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [completed, setCompleted] = useState(false);
  const [iscorr, setiscorr] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const restart = () => {
    setCompleted(false);
    setQuestionIndex(0);
  };

  const handleSubmit = () => {
    setiscorr(true)
    setTimeout(()=>{
      setiscorr(false)
    },2000)
    if (selectedOption === questions[questionIndex].correctAnswer) {
      setScore((prev) => prev + 1);
    }

    if (questionIndex + 1 < questions.length) {
      setTimeout(() => {
        setQuestionIndex((prev) => prev + 1);
        setSelectedOption("");
      }, 2000);
    } else {
      setTimeout(() => {
        setCompleted(true);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="m-4 text-3xl">Quiz</div>
      {completed ? (
        <div className="p-1">
          Quiz completed - Your score: {score} out of {questions.length},
          <span className="text-red-400 cursor-pointer px-1" onClick={restart}>
            Restart
          </span>
        </div>
      ) : (
        <div>
          <div>
            {questionIndex + 1}. {questions[questionIndex].question}
          </div>
          <div>
            {questions[questionIndex].options.map((option) => (
              <div key={option} className="m-1">
                <label className={`${(iscorr&&questions[questionIndex].correctAnswer==option)?'text-green-500':''}`}>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                    className="px-1"
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
          <button
            className="m-1 cursor-pointer rounded-md bg-red-600 p-1 px-2 text-white"
            onClick={handleSubmit}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
