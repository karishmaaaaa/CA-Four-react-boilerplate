import React, { useState } from "react";
import "../App.css";

function Quiz() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isDark,setisDark] = useState(false)

  const questions = [
    {
      text: "What is ReactJS?",
      options: [
        { id: 0, text: "Server-side framework", isCorrect: false },
        { id: 1, text: "user interface framework", isCorrect: true },
        { id: 2, text: "both a and b", isCorrect: false },
        { id: 3, text: "none of the above", isCorrect: false },
      ],
    },
    {
      text: "React.js is written in which of the following language?",
      options: [
        { id: 0, text: "JavaScript", isCorrect: true},
        { id: 1, text: "Java", isCorrect:  false },
        { id: 2, text: "C", isCorrect:  false },
        { id: 3, text: "C++", isCorrect: false },
      ],
    },
    {
      text: "What is a state in React?",
      options: [
        { id: 0, text: "A permanent storage.", isCorrect: false },
        { id: 1, text: "Internal storage of the component.", isCorrect: true },
        { id: 2, text: "External storage of the component.", isCorrect:  false },
        { id: 3, text: "None of the above.", isCorrect:  false },
      ],
    },
    {
      text: "What is the return value of the useState hook?",
      options: [
        { id: 0, text: " Pair of current state and function updating it", isCorrect: true },
        { id: 1, text: "Current State", isCorrect:  false },
        { id: 2, text: "Function updating the current state", isCorrect:  false },
        { id: 3, text: "UseState returns nothing", isCorrect:  false },
      ],
    },
    {
      text: "How many elements can a valid react component return?",
      options: [
        { id: 0, text: "1", isCorrect: true},
        { id: 1, text: "2", isCorrect:  false },
        { id: 2, text: "3", isCorrect:  false },
        { id: 3, text: "4", isCorrect:  false },
      ],
    },
  ];
  
  const divStyle = {
    backgroundColor: isDark ?"black" : "white"
  } 

  const optionClicked = (isCorrect) => {
    
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const themeChange = () =>{
    setisDark(!isDark)
  }

  const textStyle={
    color : isDark ? 'white' : 'darkblue'
  }

  return (
    <div className="App" style={divStyle}>
      <h1 style={textStyle}> Quiz </h1>

      <h2 style={textStyle}>Score: {score}</h2>

      {showResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (

        <div className="question-card">
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul>  
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <button onClick={themeChange}>Theme</button>
    </div>
  );
}

export default Quiz ;