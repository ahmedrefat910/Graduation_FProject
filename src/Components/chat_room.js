import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import searchIcon from "../icons/Search.png";
import "../CSS/chat_doc.css";
import { Base_URl } from "../App";
import axios from "axios";

function ChatRoom() {
  const [chats, SetChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found in localStorage");
      }

      const config = {
        headers: {
          Accept: "application/json",
          Authorization: `Token ${token}`,
        },
      };

      const response = await axios.get(`${Base_URl}/chat/chats/`, config);
      SetChats(response.data);
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

  return (
    <div className="mychat">
      <Sidebar />
      <Navbar />
      <div className="chat-room">
        <div className="l-side">
          <div className="chat-head">
            <h2>Messages</h2>
            <div className="search-bar">
              <img className="sr-ic" src={searchIcon} alt="searchicon" />
              <input
                className="search-input"
                type="search"
                placeholder="search"
              />
            </div>
          </div>
          {loading && <p>Loading...</p>}
          {error && <p>Error fetching data</p>}
          {!loading && !error && chats.length > 0 && (
            chats.map(chat => (
              <button
                key={chat.id}
                className="chat-butt"
                onClick={() => {
                  navigate("/ChatDoc");
                }}
              >
                <div className="chat-box">
                  <div className="profile">
                    <img src={chat.doctor_profile.image || searchIcon} alt="Doctor" />
                  </div>
                  <div className="last-chat">
                    <h3>{chat.doctor_profile.username}</h3>
                    <p>Hi, How are you doing today?</p>
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
        <div className="r-side">
          <div className="massage1"></div>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
  