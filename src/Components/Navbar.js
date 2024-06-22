
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";

import navbarImg from "../images/Rectangle 537.png";

function navbar() {
    return (
      <>
        <div className="navbar">
          <img src={navbarImg} alt="" />

          <Link className="ha" to="/">
            <h6> BT CARE </h6>
          </Link>
        </div>
      </>
    );
}


export default navbar;