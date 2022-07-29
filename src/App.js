import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: "url(./bgimage.png)" }}>
        <Header />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
