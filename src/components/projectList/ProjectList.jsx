import "./projectList.scss";
import {GitHub} from '@material-ui/icons';
import {PageviewOutlined} from '@material-ui/icons';



export default function ProjectList({title, imgSrc, git, live}){

    return (
        <div className="item">
            <img src={imgSrc} alt=""/>
            <h3>{title}</h3>
        </div>
    )
}