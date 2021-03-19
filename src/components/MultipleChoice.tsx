import "../pages/learnPage.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageHeader from "./PageHeader/PageHeader";
import Quiz from "react-quiz-component";
import { createQuiz } from "../QuizSource";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
    <div className="quizPage">
      <PageHeader pageName="Constellation Quiz" />
      {quizGenerated ? (
        <Quiz quiz={questions} />
      ) : (
        <div className="loader">
          <h1 className="loadSpinner">
            <FontAwesomeIcon icon={faStar} spin />
          </h1>
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  );
};

export default MultipleChoice;
