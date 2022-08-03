import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Results from "./Pages/Result/Result";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestion(data.results);
  };

  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: "url(./bgimage.png)" }}>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          ></Route>
          <Route
            exact
            path="/quiz"
            element={
              <Quiz
                name={name}
                question={question}
                score={score}
                setScore={setScore}
                setQuestion={setQuestion}
              />
            }
          ></Route>
          <Route exact path="/result" element={<Results />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
