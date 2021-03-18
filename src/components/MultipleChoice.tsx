import Quiz from "react-quiz-component";
import { createQuiz } from "../QuizSource";
import React from "react";

const MultipleChoice: React.FC = () => {
  return <Quiz quiz={createQuiz()} />;
};

export default MultipleChoice;
