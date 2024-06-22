import { Link } from "react-router-dom";
import chat from "../images/Group 3.png";
import setting from "../images/Setting_line_duotone_line.png";
import home from "../images/Group.png";
import scan from "../images/Scan.png";
import me from "../images/Ellipse 13.png";
import Exit from "./Exit";
import "../CSS/Sidebar.css"

function Sidebar() {
    return (
      <>
        <div className="sidebar">
          <Link className="me" to="/settings">
            {" "}
            <img src={me} className="me" alt="" />{" "}
          </Link>
          <Link className="home_me" to="/home">
            {" "}
            <img src={home} className="home" alt="" />{" "}
          </Link>
          <Link className="scan" to="/examination">
            {" "}
            <img src={scan} className="scan" alt="" />{" "}
          </Link>
          <Link className="chat" to="/chatRoom">
            {" "}
            <img src={chat} className="chat" alt="" />{" "}
          </Link>

          <div className="sidebar-B">
            <Link className="settings" to="/settings">
              {" "}
              <img src={setting} className="setting" alt="" />{" "}
            </Link>
            <Exit />
          </div>
        </div>
      </>
    );
}

export default Sidebar;