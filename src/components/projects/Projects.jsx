import "./projects.scss";


export default function Projects() {
  return <div className="projects" id="projects">
    <h1>Projects</h1>
    <div className="container">
      <div className="item">
        <img src="assets/project.jpeg" alt=""/>
        <h3>MongoDB</h3>
      </div>
      <div className="item">
        <img src="assets/project.jpeg" alt=""/>
        <h3>Java</h3>
      </div>
      <div className="item">
        <img src="assets/project.jpeg" alt=""/>
        <h3>JS</h3>
      </div>
      <div className="item">
        <img src="assets/project.jpeg" alt=""/>
        <h3>DS and Algoo</h3>
      </div>
    </div>
    <a href="#resume">
        <img src="assets/down.png" alt=""/>
      </a>

  </div>;
}
