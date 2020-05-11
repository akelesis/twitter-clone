import React from "react";
import "./Menu.css";

import { IconContext } from "react-icons";
import { FaTwitter } from "react-icons/fa";
import { RiHome7Line } from "react-icons/ri";
import { FaHashtag } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import { FaFeatherAlt } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";

const defaultStyle = { className: 'react-icons' };

const menu = (props) => {
  return (
    <div className="main-menu" id="main-menu">
      <div className="main-menu-box">
        <ul>
          <li className="list-logo">
            <IconContext.Provider
              value={{ style: { fontSize: "30px", color: "rgb(0, 123, 255)" } }}
            >
              <FaTwitter className="menu-icons" />
            </IconContext.Provider>
          </li>
          <li className="list-options">
            <IconContext.Provider value={{ className: 'react-icons' }}>
              <RiHome7Line className="menu-icons" />
            </IconContext.Provider>
            <h3>Home</h3>
          </li>
          <li className="list-options">
            <IconContext.Provider value={defaultStyle}>
              <FaHashtag className="menu-icons" />
            </IconContext.Provider>
            <h3>Explore</h3>
          </li>
          <li className="list-options">
            <IconContext.Provider value={defaultStyle}>
              <FaRegBell className="menu-icons" />
            </IconContext.Provider>
            <h3>Notifications</h3>
          </li>
          <li className="list-options">
            <IconContext.Provider value={defaultStyle}>
              <FaRegEnvelope className="menu-icons" />
            </IconContext.Provider>
            <h3>Messages</h3>
          </li>
          <li className="list-options">
            <IconContext.Provider value={defaultStyle}>
              <FaRegBookmark className="menu-icons" />
            </IconContext.Provider>
            <h3>Bookmarks</h3>
          </li>
          <li className="list-options">
            <IconContext.Provider value={defaultStyle}>
              <FaRegFileAlt className="menu-icons" />
            </IconContext.Provider>
            <h3>List</h3>
          </li>
          <li className="list-options active">
            <IconContext.Provider value={defaultStyle}>
              <FaUser className="menu-icons" />
            </IconContext.Provider>
            <h3>Profile</h3>
          </li>
          <li className="list-options">
            <IconContext.Provider value={defaultStyle}>
              <FaEllipsisH className="menu-icons" />
            </IconContext.Provider>
            <h3>More</h3>
          </li>
          <li className="tweet-button">
            <h4 className="tweet-text">Tweet</h4>
            <div className="tweet-icon">
                <IconContext.Provider value={defaultStyle}>
                    <FaFeatherAlt />
                </IconContext.Provider>
            </div>
          </li>
        </ul>
        <div className="user-button">
          <div className="user-picture"></div>
          <div className="user-button-data">
            <h4 className="user-name">Marcus Tavares</h4>
            <p className="user-id">@Markelesis</p>
          </div>
          <IconContext.Provider value={{ style: { fontSize: "28px" } }}>
            <MdExpandMore />
          </IconContext.Provider>
        </div>
        <div className="user-button-hidden">
          <div className="user-picture"></div>
        </div>
      </div>
    </div>
  );
};

export default menu;
