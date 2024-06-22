

import "../CSS/Examination.css";
import Navbar from "./Navbar";

import background from "../images/Rectangle 538.png";
import upload from "../images/upload.png";


function Examination() {
  return (
    <>
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
