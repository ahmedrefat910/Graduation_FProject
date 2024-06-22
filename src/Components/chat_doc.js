import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import attach from "../icons/Attach.png";
import voice from "../icons/Mic_fill.png";
import send from "../icons/Shape.png";
import image from "../icons/Settings/Ellipse 577.png";
import image1 from "../icons/Settings/Ellipse 577 (1).png";
import image2 from "../icons/Settings/Ellipse 577 (2).png";
import image3 from "../icons/Settings/Ellipse 577 (4).png";
import image4 from "../icons/Settings/Ellipse 577 (3).png";
import image5 from "../icons/Settings/Ellipse 577 (5).png";
import image6 from "../icons/Settings/Ellipse 577 (6).png";
import image7 from "../icons/Settings/Ellipse 577 (7).png";
import searchIcon from "../icons/Search.png";

import "../CSS/chat_doc.css";
import axios from "axios";
import { Base_URl } from "../App";

function Chat() {


 


  return (
    <div className="myChat">
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
              ></input>
            </div>
          </div>

          <div className="chat-box-active">
            <div className="profile1">
              <img src={image} alt="" />
            </div>
            <div className="last-chat">
              <h3>Dr Ragab Hmada</h3>
              <p>Hi, How are doing today?</p>
            </div>
          </div>
          <div className="chat-box">
            <div className="profile">
              <img src={image1} alt="" />
            </div>
            <div className="last-chat">
              <h3>Dr Ali Mohamed</h3>
              <p>Hi, How are doing today?</p>
            </div>
          </div>
          <div className="chat-box">
            <div className="profile">
              <img src={image2} alt="" />
            </div>
            <div className="last-chat">
              <h3>Dr Malek Mohamed</h3>
              <p>Hi, How are doing today?</p>
            </div>
          </div>
          <div className="chat-box">
            <div className="profile">
              <img src={image3} alt="" />
            </div>
            <div className="last-chat">
              <h3>Dr Mona Ibrahem </h3>
              <p>Hi, How are doing today?</p>
            </div>
          </div>
          <div className="chat-box">
            <div className="profile">
              <img src={image4} alt="" />
            </div>
            <div className="last-chat">
              <h3>Dr Omar Ali </h3>
              <p>Hi, How are doing today?</p>
            </div>
          </div>
          <div className="chat-box">
            <div className="profile">
              <img src={image5} alt="" />
            </div>
            <div className="last-chat">
              <h3>Dr Salma Ahmed</h3>
              <p>Hi, How are doing today?</p>
            </div>
          </div>
          <div className="chat-box">
            <div className="profile">
              <img src={image6} alt="" />
            </div>
            <div className="last-chat">
              <h3>Dr kareem Adel </h3>
              <p>Hi, How are doing today?</p>
            </div>
          </div>
          <div className="chat-box">
            <div className="profile">
              <img src={image7} alt="" />
            </div>
            <div className="last-chat">
              <h3>Yaser Adel</h3>
              <p>Hi, How are doing today?</p>
            </div>
          </div>
        </div>
        <div className="r-side">
          <div className="head">
            <img src={image} alt="doctor1" />
            <h3>Dr Ragab Hmada</h3>
            <p>Online</p>
          </div>
          <div className="type-bar">
            <input
              className="text-input"
              type="text"
              placeholder="Send a massage"
            ></input>
            <button>
  
              <img src={attach} alt="">
      
              </img>
            </button>
            <button>

              <img src={voice} alt="">
              </img>
            </button>
          </div>
          <button className="send-msg">
            <img src={send} alt=""></img>
          </button>
          <div className="massage1">
            <p>Hello Doctor</p>
          </div>
          <div className="massage2">
            <p>Hi, How are doing today?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Chat;
