import constellations from "./utils/constellations.json";

const createQuiz = async () => {
  const questions_array: any[] = [];

  const quiz_source = {
    quizTitle: "Constellation Multiple Choice Quiz",
    quizSynopsis:
      "Try and guess the name of a constellation, given a Digitized Sky Survey image.",
    questions: questions_array,
  };

  const name_list = getUniqueConstellationNames(20);
  for (let i = 0; i < name_list.length; i++) {
    const new_question = await generateQuestion(name_list[i]);
    quiz_source.questions.push(new_question);
  }

  return quiz_source;
};

const generateQuestion = async (constellation_name: string) => {
  const question = {
    question: "What is the name of the constellation shown in this picture?",
    questionType: "text",
    questionPic: "https://dummyimage.com/600x400/000/fff&text=X",
    answerSelectionType: "single",
    answers: [
      "dummy_answer_1",
      "dummy_answer_2",
      "dummy_answer_3",
      "dummy_answer_4",
    ],
    correctAnswer: "1",
    messageForCorrectAnswer: "Correct answer. Good job!",
    messageForIncorrectAnswer: "Incorrect answer. Please try again.",
    explanation: "",
    point: "5",
  };

  const new_pic = await getPicture(constellation_name);
  const new_answers = getUniqueConstellationNames(4, constellation_name);
  const correct_answer_pos = (4 * Math.random()) << 0;

  new_answers.splice(correct_answer_pos, 1, constellation_name);

  question.questionPic = new_pic;
  question.answers = new_answers;
  question.correctAnswer = (correct_answer_pos + 1).toString();

  return question;
};

const getUniqueConstellationNames = (num_names: number, excluded_name = "") => {
  const name_list: string[] = [];
  const keys = Object.keys(constellations);

  while (name_list.length < num_names) {
    const constellation =
      // @ts-ignore
      constellations[keys[(keys.length * Math.random()) << 0]];
    const constellation_name = constellation.latinName;

    if (
      !name_list.includes(constellation_name) &&
      constellation_name != excluded_name
    ) {
      console.log(constellation_name);
      name_list.push(constellation_name);
      console.log(name_list);
    }
  }

  return name_list;
};

const getPicture = async (cname: string) => {
  console.log("querying for " + cname);
  const query_url =
    "http://www.strudel.org.uk/lookUP/json/?name=" + cname.replace(" ", "+");

  const constellation_json = await fetch(query_url).then((response) =>
    response.json()
  );
  const picture_url = constellation_json.image.src;

  return picture_url;
};

export { createQuiz, getPicture };
