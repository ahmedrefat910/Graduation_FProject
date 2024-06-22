

import "../CSS/Settings.css";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import me from "../icons/Settings/Ellipse 575.png";
import Notification from "../icons/Settings/notification.png";
import Security from "../icons/Settings/lock.png";
import Language from "../icons/Settings/language-square.png";
import info from "../icons/Settings/Info.png";


function SettingsLanguage() {
    return (
        <>
        <Navbar />
        
        <div className="Side">
                    <img src={me} className="Me" alt="" />
                    <Link className="notification" to="/settings"> <p> Mohamed Ahmed </p> </Link>
                <div className="underline"></div>
                <div className="Notification">
                    <img src={Notification} className="me" alt="" />
                    <Link className="notification" to="/notification"> <p> Notification </p> </Link>
                </div>
                <div className="underline"></div>
                <div className="Security">
                    <img src={Security} className="me" alt="" />
                    <Link className="security" to="/security"> <p> Security </p> </Link>
                </div>
                <div className="underline"></div>
                <div className="Language">
                    <img src={Language} className="me" alt="" />
                    <Link className="language" to="/language"> <p> Language </p> </Link>
                </div>
                <div className="underline"></div>
                <div className="Info">
                    <img src={info} className="me" alt="" />
                    <Link className="info" to="/info"> <p> Info </p> </Link>
                </div>
                    <div className="Lan">
                    <h5> Language </h5>
                    <div className="box">
                        <div className="underline"></div>
                        <p> Arabic </p>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        </div>
                        <div className="underline"></div>
                        <p> English </p>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        </div>
                        <div className="underline"></div>
                        <p> French </p>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        </div>
                        <div className="underline"></div>
                        <p> German </p>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        </div>
                        <div className="underline"></div>
                        <p> Indian </p>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        </div>
                        <div className="underline"></div>
                        <p> Japanese </p>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        </div>
                        <div className="underline"></div>
                        <p> Italian </p>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        </div>
                    </div>
                </div>
        </div>
            
        </>
    )
}

export default SettingsLanguage;