import "./intro.scss";

export default function intro() {
  return <div className="intro" id="intro">
    <div className="left">
      <div className="wrapper">
        <img src="assets/girl_logo.png" alt=""/>     
        <h2> Hi There! I'm</h2>
        <h1>Susmitha Tamilselvan</h1>
      </div>            
    </div>
    <div className = "right">
      <div className="wrapper">
        <h3>
          FullStack Developer
        </h3>     
      </div>
      <a href="#projects">
        <img src="assets/down.png" alt=""/>
      </a>
    </div>    
  </div>;
}
