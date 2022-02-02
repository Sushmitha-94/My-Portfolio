import "./projects.scss";
import ProjectList from "../projectList/ProjectList";

export default function Projects() {

    const list = [
      {
          "id" : 1,
          "title" : "Sorting Visualizer",
          "imgSrc" : "assets/project.jpeg",
          "GitRepo" : "https://github.com/Sushmitha-94/SortingVisualizer",
          "liveLink" : "https://sushmitha-94.github.io/SortingVisualizer/",
          "langUsed" : "React/GitHub Pages"
      },
      {
          "id" : 2,
          "title" : "Short URL",
          "imgSrc" : "assets/project.jpeg",
          "GitRepo" : "https://github.com/Sushmitha-94/urlShortner",
          "liveLink" : "",
          "langUsed" : "Node.js/Express/MongoDB"
      },
      {
          "id" : 3,
          "title" : "DS and Algo",
          "imgSrc" : "assets/project.jpeg",
          "GitRepo" : "https://github.com/Sushmitha-94/2021DS",
          "liveLink" : "",
          "langUsed" : "Java"
      }
    ]

    return <div className="projects" id="projects">
        <h1>Projects</h1>
        <div className="container">
            { list.map((item) => 
            <ProjectList title={item.title} imgSrc={item.imgSrc} git={item.GitRepo} live={item.liveLink}/>
            )
            }          
        </div>
        <a href="#resume">
            <img src="assets/down.png" alt=""/>
        </a>

    </div>;
}
