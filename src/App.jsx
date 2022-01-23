import Topbar from "./components/topbar/TopBar";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects"
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Projects/>
      </div>
      
    </div>
  );
}

export default App;
