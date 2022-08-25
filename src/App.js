import Header from "./components/Header";
import Presentation from "./components/Presentation";
import About from "./components/About";
import Projects from "./components/Projects";
import "./styles/vars.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="content">
        <Presentation />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
