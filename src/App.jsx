import Topbar from "./components/topbar/TopBar";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects"
import Menu from "./components/menu/Menu"
import Resume from "./components/resume/Resume"
import Contact from "./components/contact/Contact"

import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
         <Intro/> 
         <Projects/> 
         <Resume/>
      </div>
      
    </div> 
  );
}

export default App;
