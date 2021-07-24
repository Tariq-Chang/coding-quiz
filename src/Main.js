import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleEndingPage } from "./features/gameSlice";
import { logout, selectCategory, selectUser } from "./features/userSlice";
import Header from "./Header";
import "./Main.css";
import cppQuestions, { jsQuestions, totCppQuestions, totJsQuestions } from "./QuestionsData";
function Main() {
  const user = useSelector(selectUser);
  const category = useSelector(selectCategory);
  const dispatch = useDispatch();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const isRightAns = (questions, option) => {
    if (option === 1) {
      return questions[currentQuestion].opt1 === questions[currentQuestion].ans ? true : false;
    }
    else if (option === 2) {
      return questions[currentQuestion].opt2 === questions[currentQuestion].ans ? true : false;
    }
    else if (option === 3) {
      return questions[currentQuestion].opt3 === questions[currentQuestion].ans ? true : false;
    }
    else if (option === 4) {
      return questions[currentQuestion].opt4 === questions[currentQuestion].ans ? true : false;
    }
  }
  return (
    <div className="main">
      <Header user={user} />
      {category === "C++" ? (
        <div className="game__wrapper">
          <div className="game__container">
            <div className="game__questions">
              <h3>{cppQuestions[currentQuestion].question}</h3>
            </div>
            <div className="game__options">
              <div
                className="option1"
                onClick={() => {
                  isRightAns(cppQuestions, 1)
                    ? setScore(score + 10)
                    : setScore(score - 10);

                  !cppQuestions[currentQuestion].lastQuestion
                    ? setCurrentQuestion(currentQuestion + 1)
                    :
                    dispatch(handleEndingPage({
                      lastQuestion: cppQuestions[currentQuestion].lastQuestion, score: isRightAns(cppQuestions, 1) ? score + 10 : score - 10, totQuestions: totCppQuestions
                    }))

                }}
              >
                {cppQuestions[currentQuestion].opt1}
              </div>
              <div
                className="option2"
                onClick={() => {

                  isRightAns(cppQuestions, 2)
                    ? setScore(score + 10)
                    : setScore(score - 10);
                  !cppQuestions[currentQuestion].lastQuestion ? (
                    setCurrentQuestion(currentQuestion + 1)
                  ) : (
                    dispatch(handleEndingPage({
                      lastQuestion: cppQuestions[currentQuestion].lastQuestion, score: isRightAns(cppQuestions, 2) ? score + 10 : score - 10, totQuestions: totCppQuestions
                    }))
                  );
                }}
              >
                {cppQuestions[currentQuestion].opt2}
              </div>
              <div
                className="option3"
                onClick={() => {
                  isRightAns(cppQuestions, 3)
                    ? setScore(score + 10)
                    : setScore(score - 10);
                  !cppQuestions[currentQuestion].lastQuestion ? (
                    setCurrentQuestion(currentQuestion + 1)
                  ) : (
                    dispatch(handleEndingPage({
                      lastQuestion: cppQuestions[currentQuestion].lastQuestion, score: isRightAns(cppQuestions, 3) ? score + 10 : score - 10, totQuestions: totCppQuestions
                    }))
                  );
                }}
              >
                {cppQuestions[currentQuestion].opt3}
              </div>
              <div
                className="option4"
                onClick={() => {
                  isRightAns(cppQuestions, 4)
                    ? setScore(score + 10)
                    : setScore(score - 10);
                  !cppQuestions[currentQuestion].lastQuestion ? (
                    setCurrentQuestion(currentQuestion + 1)
                  ) : (
                    dispatch(handleEndingPage({
                      lastQuestion: cppQuestions[currentQuestion].lastQuestion, score: isRightAns(cppQuestions, 4) ? score + 10 : score - 10, totQuestions: totCppQuestions
                    }))
                  );
                }}
              >
                {cppQuestions[currentQuestion].opt4}
              </div>
            </div>
          </div>
        </div>
      ) :
        category === "Javascript" ? (
          <div className="game__wrapper">
            <div className="game__container">
              <div className="game__questions">
                <h3>{jsQuestions[currentQuestion].question}</h3>
              </div>
              <div className="game__options">
                <div
                  className="option1"
                  onClick={() => {
                    isRightAns(jsQuestions, 1)
                      ? setScore(score + 10)
                      : setScore(score - 10);

                    !jsQuestions[currentQuestion].lastQuestion
                      ? setCurrentQuestion(currentQuestion + 1)
                      :
                      dispatch(handleEndingPage({
                        lastQuestion: jsQuestions[currentQuestion].lastQuestion, score: isRightAns(jsQuestions, 1) ? score + 10 : score - 10, totQuestions: totJsQuestions
                      }))

                  }}
                >
                  {jsQuestions[currentQuestion].opt1}
                </div>
                <div
                  className="option2"
                  onClick={() => {
                    isRightAns(jsQuestions, 2)
                      ? setScore(score + 10)
                      : setScore(score - 10);

                    !jsQuestions[currentQuestion].lastQuestion
                      ? setCurrentQuestion(currentQuestion + 1)
                      :
                      dispatch(handleEndingPage({
                        lastQuestion: jsQuestions[currentQuestion].lastQuestion, score: isRightAns(jsQuestions, 2) ? score + 10 : score - 10, totQuestions: totJsQuestions
                      }))

                  }}
                >
                  {jsQuestions[currentQuestion].opt2}
                </div>
                <div
                  className="option3"
                  onClick={() => {
                    isRightAns(jsQuestions, 3)
                      ? setScore(score + 10)
                      : setScore(score - 10);

                    !jsQuestions[currentQuestion].lastQuestion
                      ? setCurrentQuestion(currentQuestion + 1)
                      :
                      dispatch(handleEndingPage({
                        lastQuestion: jsQuestions[currentQuestion].lastQuestion, score: isRightAns(jsQuestions, 3) ? score + 10 : score - 10, totQuestions: totJsQuestions
                      }))

                  }}
                >
                  {jsQuestions[currentQuestion].opt3}
                </div>
                <div
                  className="option4"
                  onClick={() => {
                    isRightAns(jsQuestions, 4)
                      ? setScore(score + 10)
                      : setScore(score - 10);

                    !jsQuestions[currentQuestion].lastQuestion
                      ? setCurrentQuestion(currentQuestion + 1)
                      :
                      dispatch(handleEndingPage({
                        lastQuestion: jsQuestions[currentQuestion].lastQuestion, score: isRightAns(jsQuestions, 4) ? score + 10 : score - 10, totQuestions: totJsQuestions
                      }))

                  }}
                >
                  {jsQuestions[currentQuestion].opt4}
                </div>
              </div>
            </div>
          </div>
        ) : ""
      }
      <h1 className="game__score">
        Score : {score}
      </h1>
      <div className="game__controls">
        <button onClick={() => dispatch(logout())}>Main Menu</button>
        <button
          onClick={() => {
            setCurrentQuestion(0);
            setScore(0);
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default Main;
