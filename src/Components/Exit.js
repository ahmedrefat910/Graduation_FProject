import React, { useState } from "react";
import exit from "../images/exit.png";
import { useNavigate } from "react-router-dom";
import "../CSS/Exit.css";

function Exit() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <img
        onClick={() => {
          setIsOpen(true);
        }}
        src={exit}
        alt=""
      />

      {isOpen ? (
        <div className="examination-overlay">
          <div className="examination-overlay-container">
            <div className="examination-overlay-content">
              <h1>Logout</h1>
              <p>
                You’ll need to enter your username <br></br>and password next
                time<br></br> you want to login
              </p>
              <button
                className="exit-butt1"
                onClick={() => {
                  //remove any stored date
                  navigate("/examination");
                  setIsOpen(false);
                }}
              >
                Cancel
              </button>
              <button
                className="exit-butt2"
                onClick={() => {
                  //remove any stored date
                  navigate("/sign");
                  setIsOpen(false);
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Exit;
