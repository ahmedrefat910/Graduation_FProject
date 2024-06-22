import "../CSS/Examination.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";




import background from "../images/Rectangle 538.png";
import upload from "../images/upload.png";
import Sidebar from "./Sidebar";

function Examination() {
  return (
    <>
      
      <Sidebar />
      <Navbar />

      <div className="home">
        <p> X-ray Examination</p>
        <img src={background} className="background" alt="" />
        <div class="box">
          <div className="text-box">
            <img src={upload} alt="" />
          </div>
        </div>
      </div>
      <button className="exa-button">Examination</button>
    </>
  );
}

export default Examination;
