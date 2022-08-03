import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import "./Quiz.css";


const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    console.log(questions);

    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answer,
        ])
    );
  }, [questions]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>
  

{questions ? (
  <Question />
  ) : (
    <CircularProgress 
      style={{ margin: 100 }}
      color="inherit"
      size={150}
      thickness={1}
    />
  )}
    </div>
  )
};

export default Quiz;
