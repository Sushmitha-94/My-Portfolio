import "./intro.scss";


import Projects from "../projects/Projects";
import Resume from "../resume/Resume";
import Contact from "../contact/Contact";

function intro(){


  return <div className="intro" id="intro">
    <div className="left">
      <div className="wrapper">
        <img src="assets/girl_logo.png" alt=""/>     
        <h2> Hi There! I'm</h2>
        <h1>Susmitha</h1>
        <h1>Tamilselvan</h1>
      </div>            
    </div>
    <div className = "right">
      <div className="wrapper">
        <h3>
          FullStack Developer
        </h3> 
        <p>
          Graduate student and Full Stack Developer with 6+ years of hands-on experience designing, developing, and implementing applications and solutions using a range of technologies and programming languages.
        </p>
        <div className="buttons">
        
          <button type="Submit" onClick={(e) => {
                                                  e.preventDefault();
                                                  window.location.href='#projects';
                                                  }}>Projects</button>
          <button type="Submit" onClick={(e) => {
                                                  e.preventDefault();
                                                  window.location.href='#resume';
                                                  }}>Resume</button>   
          <button type="Submit" onClick={(e) => {
                                                  e.preventDefault();
                                                  window.location.href='#contact';
                                                  }}>Contact</button> 
        </div>
      </div>
      
    </div>  
    <a href="#projects">
        <img src="assets/down.png" alt=""/>
      </a>  
  </div>;
}

export default intro;
