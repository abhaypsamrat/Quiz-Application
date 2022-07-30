import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Results from "./Pages/Result/Result";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: "url(./bgimage.png)" }}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/quiz" element={<Quiz />}></Route>
          <Route exact path="/result" element={<Results />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
