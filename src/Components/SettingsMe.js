import "../CSS/Settings.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import Navbar from "./Navbar";
import me from "../icons/Settings/Ellipse 575.png";
import Notification from "../icons/Settings/notification.png";
import Security from "../icons/Settings/lock.png";
import Language from "../icons/Settings/language-square.png";
import info from "../icons/Settings/Info.png";
import img from "../icons/Settings/Ellipse 576.png";
import img2 from "../icons/Settings/Camera_fill.png";

import Edit from "../icons/Edit_light.png";

function SettingsMe() {
  const [Email, setEmail] = useState("AhmedOmar@gmail.com");
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  const toggleEditingEmail = () => {
    setIsEditingEmail(!isEditingEmail);
  };

  return (
    <>
      <Navbar />

      <div className="Side">
        <img src={me} className="Me" alt="" />
        <Link className="notification" to="/settings">
          <p> Mohamed Ahmed </p>
        </Link>
        <div className="underline"></div>
        <div className="Notification">
          <img src={Notification} className="Me" alt="" />
          <Link className="notification" to="/notification">
            <p> Notification </p>
          </Link>
        </div>
        <div className="underline"></div>
        <div className="Security">
          <img src={Security} className="Me" alt="" />
          <Link className="security" to="/security">
            <p> Security </p>
          </Link>
        </div>
        <div className="underline"></div>
        <div className="Language">
          <img src={Language} className="Me" alt="" />
          <Link className="language" to="/language">
            <p> Language </p>
          </Link>
        </div>
        <div className="underline"></div>
        <div className="Info">
          <img src={info} className="setIco" alt="" />
          <Link className="info" to="/info">
            <p> Info </p>
          </Link>
        </div>

        <div className="Ex">
          <div className="box">
            <img src={img} className="img1" alt=""></img>
            <img src={img2} className="img2" alt=""></img>


              <div className="name-box">
                <div className="name-prof">
                  <p>Ahmed Omar</p>
                </div>
              </div>

            <div className="box-info-inputs">
              <div>
                <input
                  disabled={!isEditingEmail}
                  type="text"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span onClick={toggleEditingEmail}>
                  <img src={Edit} alt="" />
                </span>
              </div>


            


              {isEditingEmail ? (
                <div>
                  <button
                    className="save-butt"
                    onClick={() => {
                      setIsEditingEmail(false);
                    }}
                  >
                    Save
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsMe;

//    <div
//      className="input-box-container w-50"
//      style={{
//        background: "red",
//      }}
//    >
//      <div className="input-box">
//        <label htmlFor="name">Name:</label>
//        <input type="text" id="name" value={name} onChange={handleNameChange} />
//        <button onClick={handleSaveName}>Save</button>
//      </div>
//      {isEditingName ? (
//        <div className="input-box">
//          <label htmlFor="name">Name:</label>
//          <input
//            type="text"
//            id="name"
//            value={name}
//            onChange={handleNameChange}
//          />
//          <button onClick={handleSaveName}>Save</button>
//        </div>
//      ) : (
//        <div className="display-box">
//          <p>{name ? `Hello, ${name}` : "No name entered"}</p>
//          <button onClick={toggleEditingName}>Enter/Change Name</button>
//        </div>
//      )}

//      {isEditingEmail ? (
//        <div className="input-box">
//          <label htmlFor="email">Email:</label>
//          <input
//            type="email"
//            id="email"
//            value={email}
//            onChange={handleEmailChange}
//          />
//          <button onClick={handleSaveEmail}>Save</button>
//        </div>
//      ) : (
//        <div className="display-box">
//          <p>{email ? `Email: ${email}` : "No email entered"}</p>
//          <button onClick={toggleEditingEmail}>Enter/Change Email</button>
//        </div>
//      )}
//    </div>;
