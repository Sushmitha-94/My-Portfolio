import "./topbar.scss";
import {Mail} from '@material-ui/icons';

export default function TopBar() {
  return <div className="topbar">
      <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">s</a>
            <div className="itemContainer">
              <Mail className="icon"/>
              <span>st.sushmi@gmail.com</span>
            </div>
          </div>
          <div className="right">
            <div className="hamburger">
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
      </div>
  </div>;
}
