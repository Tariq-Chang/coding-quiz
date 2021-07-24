import { useSelector } from "react-redux";
import "./App.css";
import { selectCategory, selectUser } from "./features/userSlice";
import LoginPage from "./LoginPage";
import Main from "./Main";
import EndingPage from "./EndingPage";
import { selectCorrectAnswers, selectLastQuestion, selectScore, selectTotQuestions } from "./features/gameSlice";
function App() {
  const lastQuestion = useSelector(selectLastQuestion);
  const score = useSelector(selectScore);
  const totQuestions = useSelector(selectTotQuestions);
  const correctAnswers = useSelector(selectCorrectAnswers);
  const user = useSelector(selectUser);
  const category = useSelector(selectCategory);
  return (
    <div className="App">
      {!(user && category) ? <LoginPage /> : (!lastQuestion ? <Main /> : <EndingPage score={score} totQuestions={totQuestions} correctAnswers={correctAnswers} />)}
    </div>
  );
}

export default App;
