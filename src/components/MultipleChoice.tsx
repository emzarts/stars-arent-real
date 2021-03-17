import Quiz from "react-quiz-component";
import QuizSource from "../QuizSource";
import React from "react";

const MultipleChoice: React.FC = () => {
  return <Quiz quiz={QuizSource} />;
};

export default MultipleChoice;
