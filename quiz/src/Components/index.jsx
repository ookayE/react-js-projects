import { useState } from "react";

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Orca"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
    correctAnswer: "Harper Lee",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    correctAnswer: "Au",
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1912", "1905", "1898", "1923"],
    correctAnswer: "1912",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    correctAnswer: "2",
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
    correctAnswer: "Mount Everest",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(quizQuestions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);

  //moves question backwards one index if there is room to do so
  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  //fills null array with selected answers based on received optionItem, receiving index from the current question
  const handleSelectedOption = (optionItem) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestion] = optionItem;
    setSelectedOptions(updatedSelectedOptions);
  };

  console.log(selectedOptions);

  //move question forward one index
  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      if (
        selectedOptions[currentQuestion] ===
        quizQuestions[currentQuestion].correctAnswer
      ) {
        setScore(score + 1);
      }
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOptions(new Array(quizQuestions.length).fill(null));
    setShowResult(false);
  };

  return (
    <div className="quiz">
      <h1>Quiz App</h1>
      {!showResult ? (
        <div>
          <h2>Question: {currentQuestion + 1}</h2>
          <p>{quizQuestions[currentQuestion].question}</p>
          <div className="options">
            {quizQuestions[currentQuestion].options.map((optionItem) => (
              <button
                key={optionItem}
                onClick={() => handleSelectedOption(optionItem)}
                className={`option ${
                  selectedOptions[currentQuestion] === optionItem
                    ? "selected"
                    : ""
                }`}
              >
                {optionItem}
              </button>
            ))}
          </div>
          <div className="button-container">
            <button
              disabled={currentQuestion === 0}
              className="previous-button"
              onClick={handlePreviousQuestion}
            >
              Previous
            </button>
            <button onClick={handleNextQuestion} className="next-button">
              {currentQuestion < quizQuestions.length - 1 ? "Next" : "Finish"}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3>Quiz Completed</h3>
          <p>Your Score: {score}</p>
          <button onClick={handleRestartQuiz} className="restart-button">
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
