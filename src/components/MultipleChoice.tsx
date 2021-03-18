import React, { useEffect, useState } from "react";
import Quiz from "react-quiz-component";
import { createQuiz } from "../QuizSource";

const MultipleChoice: React.FC = () => {
  const [quizGenerated, setQuizGenerated] = useState(false);
  const [questions, setQuestions] = useState({});
  useEffect(() => {
    createQuiz().then((res) => {
      setQuestions(res);
      setQuizGenerated(true);
      console.log("created");
    });
  }, []);
  return (
    <div className="">
      {quizGenerated ? <Quiz quiz={questions} /> : <div></div>}
    </div>
  );
};

export default MultipleChoice;
