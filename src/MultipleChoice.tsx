import { render } from "@testing-library/react";
import React from "react";
import Quiz from "react-quiz-component";
import QuizSource from "./QuizSource";

const MultipleChoice = () => {
  return <Quiz quiz={QuizSource} />;
};

export default MultipleChoice;
