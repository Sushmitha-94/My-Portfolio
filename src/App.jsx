import Topbar from "./components/topbar/TopBar";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects"
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Projects/>
      </div>
      
    </div>
  );
}

export default App;
