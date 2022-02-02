import "./projectList.scss";
import {GitHub} from '@material-ui/icons';
import {PageviewOutlined} from '@material-ui/icons';



export default function ProjectList({title, imgSrc, git, live, lang}){

    return (
        <div className="itemCont">
            <div className="item">
                <img src={process.env.PUBLIC_URL + imgSrc} alt=""/>
                <div className="icons"> 
                    <h3>{title}</h3> 
                    <div className="icon">    
                        <a href={git} target="_blank"><GitHub/></a> 
                        {live.length > 0 &&
        <a href={live} target="_blank"><PageviewOutlined/></a>
      }
                        
                    </div>
                </div>
            </div>           
            <p className="itemP">{lang}</p> 
        </div>               
    )
}