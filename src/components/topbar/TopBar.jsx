import "./topbar.scss";
import {Mail} from '@material-ui/icons';

export default function TopBar({menuOpen, setMenuOpen}) {
  return <div className={"topbar "+(menuOpen && "active")}>
      <div className="wrapper">
          <div className="left">
            <div className="itemContainer">
              
              <span>
                <a href="#contact"><Mail className="icon"/><span>st.sushmi@gmail.com</span></a>
              </span>
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
      </div>
  </div>;
}
