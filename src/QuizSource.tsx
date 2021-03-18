const QuizSource = {
  quizTitle: "React Quiz Component Demo",
  quizSynopsis: "",
  questions: [
    {
      question: "What is the name of the constellation shown in this picture?",
      questionType: "text",
      questionPic:
        "http://server7.sky-map.org/imgcut?survey=DSS2&w=256&h=256&ra=16.88722222&de=-27.0313889&angle=45&output=PNG",
      answerSelectionType: "single",
      answers: ["Scorpius", "Not Scorpius"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job!",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: "",
      point: "20",
    },
  ],
};

const createQuiz = async () => {
  const questions_array: any[] = [];

  const QuizSource = {
    quizTitle: "Constellation Multiple Choice Quiz",
    quizSynopsis:
      "Try and guess the name of a constellation, given a Digitized Sky Survey image.",
    questions: questions_array,
  };

  const new_question = await generateQuestion();
  QuizSource.questions.push(new_question);

  return QuizSource;
};

const generateQuestion = async () => {
  const question = {
    question: "What is the name of the constellation shown in this picture?",
    questionType: "text",
    questionPic: "https://dummyimage.com/600x400/000/fff&text=X",
    answerSelectionType: "single",
    answers: ["Scorpius", "Not Scorpius"],
    correctAnswer: "1",
    messageForCorrectAnswer: "Correct answer. Good job!",
    messageForIncorrectAnswer: "Incorrect answer. Please try again.",
    explanation: "",
    point: "20",
  };

  const new_pic = await getPicture("Scorpius");
  question.questionPic = new_pic;

  return question;
};

const getPicture = async (constellation_name: string) => {
  const query_url =
    "http://www.strudel.org.uk/lookUP/json/?name=" + constellation_name;

  const constellation_json = await fetch(query_url).then((response) =>
    response.json()
  );
  const picture_url = constellation_json.image.src;

  return picture_url;
};

export { createQuiz, getPicture };
