import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import Background from "./components/Background";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Background /> */}
    </div>
  );
}

export default App;
