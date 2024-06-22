import "../CSS/Choose.css";
import { Link } from "react-router-dom";
import logo1 from "../images/doctor.png";
import logo2 from "../images/clarity_user-solid.png";
import logo3 from "../images/fluent_guest-20-filled.png";

function Choose() {
  return (
    <>
      <div className="Page-choose">
        <div className="text-choose">
          <h3 className="T-choose"> Choose your type </h3>
          <p> Choose what you want to register </p>
        </div>

        <div className="doc-c">
          <img src={logo1} className="Home" alt="" />
          <img src={logo2} className="Home" alt="" />
          <img src={logo3} className="Home" alt="" />
        </div>
        <div className="link-choose">
          <Link className="btn" to="/verification">
            Doctor
          </Link>
          
          <Link className="btn" to="/sign">
            User
          </Link>

          <Link className="btn" to="/guest">
            Guest
          </Link>
        </div>
      </div>
    </>
  );
}

export default Choose;
