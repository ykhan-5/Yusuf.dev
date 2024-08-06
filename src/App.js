import "./App.css";
import Conveyer from "./components/Conveyer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Footer from "./components/Footer";
import star from "./assets/star.mp4";
import About from "./components/About";
import Current from "./components/Current";
// import Background from "./components/Background";

function App() {
  return (
    <div className="App">
      {<Navbar />}
      {<About />}
      {<Current />}
      {/* <Home /> */}
      {/* <Conveyer /> */}
      <Projects />
      {/* <Background /> */}
      <Footer />
    </div>
  );
}

export default App;
