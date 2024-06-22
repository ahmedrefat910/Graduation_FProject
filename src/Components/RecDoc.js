import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import chat from "../images/Group 3.png";
import D2 from "../icons/Frame 1000005880.png";
import location from "../icons/Rectangle 555.png";
import "../CSS/RecDoc.css";
import { Base_URl } from "../App";

function RecDoc() {
  const [isAbout, setIsAbout] = useState("ABOUT");
  const [doctors, setDoctors] = useState([]);
  const [doctorDetails, setDoctorDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentDoctor, setCurrentDoctor] = useState(null);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Accept: "application/json",
          Authorization: `Token ${token}`,
        },
      };

      const response = await axios.get(`${Base_URl}/profile/Alldoctors/`, config);
      setDoctors(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
      setLoading(false);
    }
  };

  const fetchDetails = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Accept: "application/json",
          Authorization: `Token ${token}`,
        },
      };

      const response = await axios.get(`${Base_URl}/profile/doctor/${userId}/`, config);
      setDoctorDetails(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (currentDoctor !== null) {
      setLoading(true);
      fetchDetails(currentDoctor);
    }
  }, [currentDoctor]);

  const handleChatButtonClick = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Accept: "application/json",
          Authorization: `Token ${token}`,
        },
      };

      const doctorId = doctorDetails.id;
   

      const response = await axios.post(`${Base_URl}/chat/chats/?doctor_id=${doctorId}`, {}, config);
      console.log("Response:", response.data);

      navigate("/chatroom");
    } catch (error) {
      console.error("Error sending POST request:", error.response || error.message);
    }
  };

  return (
    <div className="content">
      <Sidebar />
      <Navbar />

      <div className="image">
        <h3> Recommendation Doctors </h3>
        <div className="img">
          {doctors.map((doctor, index) => (
            <React.Fragment key={doctor.id}>
              <span className="D1" onClick={() => setCurrentDoctor(doctor.id)}>
                <img src={D2} alt="..." />
                {doctor.username}
              </span>
              {(index + 1) % 3 === 0 && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="Doctors">
        {loading && <p>Loading...</p>}
        {error && <p>Error fetching data</p>}
        {doctorDetails && (
          <div>
            <img src={doctorDetails.image} alt="Doctor" />
            <h2>{doctorDetails.username}</h2>
            <p>{doctorDetails.email}</p>
            <div className="Buttons">
              <div className="btn1">
                <span className="about-button" onClick={() => setIsAbout("ABOUT")}>About</span>
                <p className="underline"></p>
              </div>
              <div className="btn2">
                <span className="location-button" onClick={() => setIsAbout("LOCATION")}>Location</span>
                <p className="underline"></p>
              </div>
            </div>
            {isAbout === "ABOUT" ? (
              <div className="About">
                <h5>About me</h5>
                <p>{doctorDetails.about || "No Bio available"}</p>
                <h5>Working Time</h5>
                <p>{doctorDetails.working_time || "No working time available"}</p>
                
                <button className="chat-button" onClick={handleChatButtonClick}>
                  Chat with doctor <img src={chat} alt="" />
                </button>
              </div>
            ) : (
              <div className="Location">
                <img src={doctorDetails.location || location} alt="Location" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecDoc;
