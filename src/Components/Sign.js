
import { useState } from "react";
import "../CSS/Sign.css";
import email from "../images/Message_fill.png";
import padlock from "../images/Lock_duotone_line.png";
import user from "../images/User_fill.png";
import image from "../images/Rectangle 14.png";

function Sign() {
    const [action,setAction] = useState("Welcome");

    return (
      <>
        <div className="container">
          <div className="header">
            <img src={image} alt="" />
            <div className="Text"> {action} </div>
            <div className="underline"></div>
            {action === "Welcome" ? (
              <div></div>
            ) : (
              <p> Login to your account </p>
            )}
            {action === "Welcome Back" ? (
              <div></div>
            ) : (
              <p> Create your new account </p>
            )}
          </div>
          <div className="inputs">
            {action === "Welcome Back" ? (
              <div></div>
            ) : (
              <div className="input">
                <img src={user} alt="" />
                <input type="text" placeholder="Full Name" />
              </div>
            )}
            <div className="input">
              <img src={email} alt="" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <img src={padlock} alt="" />
              <input type="password" placeholder="Password" />
            </div>
            {action === "Welcome Back" ? (
              <div></div>
            ) : (
              <div className="input">
                <img src={padlock} alt="" />
                <input type="password" placeholder="Confirm Password" />
              </div>
            )}
          </div>

          {action === "Welcome" ? (
            <div></div>
          ) : (
            <div className="forgot-password">
              Forget Password? <span> Click Here </span>
            </div>
          )}
          {action === "Welcome Back" ? (
            <div></div>
          ) : (
            <div className="forgot-password2">
              <span>By signing you agree to our </span>Team of use
              <br></br>
              <span>and</span> privacy notice
            </div>
          )}
          <div className="submit-container">
            <div
              className={action === "Welcome Back" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Welcome");
              }}
            >
              Sign Up
            </div>
            <div
              className={action === "Welcome" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Welcome Back");
              }}
            >
              Login
            </div>
          </div>
          ,.
        </div>
      </>
    );
}

export default Sign;