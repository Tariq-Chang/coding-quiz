import React from "react";
import Header from "./Header";
import "./EndingPage.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { clearGameData } from "./features/gameSlice";

function EndingPage({ score, totQuestions, correctAnswers }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div style={{ height: "100vh" }}>
      <Header user={user} />

      <div className="endingPage__container">
        <h1>Results</h1>
        <table>
          <tr>
            <td>Score</td>
            <td>{score}</td>
          </tr>
          <tr>
            <td>Questions</td>
            <td>{totQuestions}</td>
          </tr>
          <tr>
            <td>Correct</td>
            <td>{score / 10}</td>
          </tr>
        </table>
        <div className="game__controls">
          <button onClick={() => dispatch(clearGameData())}>Play Again</button>

          <button onClick={() => {
            dispatch(logout());
            dispatch(clearGameData());
          }}>Main Menu</button>
        </div>
      </div>
    </div >
  );
}

export default EndingPage;
