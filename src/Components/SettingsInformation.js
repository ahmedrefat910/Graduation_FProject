

import "../CSS/Settings.css";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import me from "../icons/Settings/Ellipse 575.png";
import Notification from "../icons/Settings/notification.png";
import Security from "../icons/Settings/lock.png";
import Language from "../icons/Settings/language-square.png";
import info from "../icons/Settings/Info.png";


function SettingsInformation() {
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

                <div className="Inf">
                    <h5> Info </h5>
                    <div className="box">
                        <p> Advanced Brain Cancer Detection and Consultation Software
                            NeuroScan is an innovative program designed for both mobile phones and computers, aimed at detecting brain cancer with exceptional accuracy. It combines cutting-edge technology with real-time communication capabilities, enabling users to consult with specialized doctors and communicate effectively throughout the diagnostic and treatment process.
                            Key Features:
                            Brain Cancer Detection: NeuroScan utilizes state-of-the-art algorithms and artificial intelligence (AI) to analyze medical data and identify potential signs of brain cancer. By leveraging machine learning techniques and pattern recognition, it can rapidly process medical images, such as MRI scans and CT scans, to accurately detect and highlight any anomalies or suspicious areas that may indicate the presence of brain cancer.
                            High Accuracy: The program has undergone rigorous training and validation on vast datasets of brain cancer cases, ensuring a high level of accuracy in detection. NeuroScan's advanced algorithms continuously learn and improve, incorporating new information and refining their performance over time. This accuracy empowers both patients and doctors with reliable and timely information for early diagnosis and effective treatment planning.
                        </p>
                    </div>
                </div>
        </div>
            
        </>
    )
}

export default SettingsInformation;