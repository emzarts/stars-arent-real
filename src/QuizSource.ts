const QuizSource = {
  quizTitle: "React Quiz Component Demo",
  quizSynopsis: "",
  questions: [
    {
      question: "What is the name of the constellation shown in this picture?",
      questionType: "text",
      questionPic: "https://dummyimage.com/600x400/000/fff&text=X",
      answerSelectionType: "single",
      answers: ["Sirius", "Gemini", "Canis Major", "Cassiopeia"],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: "",
      point: "20",
    },
  ],
};

export default QuizSource;
