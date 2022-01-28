import "./projects.scss";

import ProjectList from "../projectList/ProjectList";

export default function Projects() {

  const list = [
    {
      "id" : 1,
      "title" : "Java",
      "imgSrc" : "assets/project.jpeg",
      "GitRepo" : "",
      "liveLink" : ""
  },
  {
      "id" : 2,
      "title" : "JS",
      "imgSrc" : "assets/project.jpeg",
      "GitRepo" : "",
      "liveLink" : ""
  },
  {
      "id" : 3,
      "title" : "DS and Algo",
      "imgSrc" : "assets/project.jpeg",
      "GitRepo" : "",
      "liveLink" : ""
  },
  {
      "id" : 4,
      "title" : "Ticket",
      "imgSrc" : "assets/project.jpeg",
      "GitRepo" : "",
      "liveLink" : ""
  }
  ]

  return <div className="projects" id="projects">
    <h1>Projects</h1>
    <div className="container">
      
        { list.map((item) => 
        <ProjectList title={item.title} imgSrc={item.imgSrc} git={item.GitRepo} live={item.liveLink}/>
        )

        }
      
    </div><a href="#resume">
        <img src="assets/down.png" alt=""/>
      </a>

  </div>;
}
