import "./projects.scss";
import ProjectList from "../projectList/ProjectList";
import {GitHub} from '@material-ui/icons';

export default function Projects() {

    const list = [
      {
          "id" : 1,
          "title" : "Sorting Visualizer",
          "imgSrc" : "/assets/sort.png",
          "GitRepo" : "https://github.com/Sushmitha-94/SortingVisualizer",
          "liveLink" : "https://sushmitha-94.github.io/SortingVisualizer/",
          "langUsed" : "React/GitHub Pages"
      },
      {
          "id" : 2,
          "title" : "Short URL",
          "imgSrc" : "/assets/mongo.png",
          "GitRepo" : "https://github.com/Sushmitha-94/urlShortner",
          "liveLink" : "",
          "langUsed" : "Node.js/Express/MongoDB"
      },
      {
          "id" : 3,
          "title" : "DS and Algo",
          "imgSrc" : "/assets/dsAl.png",
          "GitRepo" : "https://github.com/Sushmitha-94/2021DS",
          "liveLink" : "",
          "langUsed" : "Java"
      }
    ]

    return <div className="projects" id="projects">
        <h1>Projects</h1>
        <div className="container">
            { list.map((item) => 
            <ProjectList title={item.title} imgSrc={item.imgSrc} git={item.GitRepo} live={item.liveLink} lang={item.langUsed}/>
            )
            }          
        </div>
        <a className="arrow" href="#resume">
            <img src={process.env.PUBLIC_URL + "/assets/down.png"} alt=""/>
        </a>

    </div>;
}
