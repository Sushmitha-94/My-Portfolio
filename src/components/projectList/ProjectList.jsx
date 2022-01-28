import "./projectList.scss";

export default function ProjectList({title, imgSrc, git, live}){

    return (
        <div className="item">
            <img src={imgSrc} alt=""/>
            <h3>{title}</h3>
        </div>
    )
}