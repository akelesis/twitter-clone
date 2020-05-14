import React from "react";
import "./ProfileCard.css";

import { IconContext } from "react-icons";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

import profilePicture from "../../assets/profile_pic.jpg";

const profileCard = (props) => {
  return (
    <div className="profile-card">
      <div className="cover-pic"></div>
      <div className="profile-pic-box">
        <div className="profile-pic">
          <img src={profilePicture} alt="" />
        </div>
        <button className="edit-profile-button">Edit profile</button>
      </div>
      <div className="profile-info">
        <h4 className="user-name">Marcus Tavares</h4>
        <p className="user-id">@Marquelesis</p>
        <div className="personal-info">
          <div className="location-info">
            <IconContext.Provider
              value={{ style: { fontSize: "15px", color: "#779" } }}
            >
              <FaMapMarkerAlt /> <p>Itabuna, Bahia</p>
            </IconContext.Provider>
          </div>
          <div className="birth-info">
            <IconContext.Provider
              value={{ style: { fontSize: "15px", color: "#779" } }}
            >
              <FaBirthdayCake /> <p>Born October 1, 1994</p>
            </IconContext.Provider>
          </div>
          <div className="join-info">
            <IconContext.Provider
              value={{ style: { fontSize: "15px", color: "#779" } }}
            >
              <FaCalendarAlt /> <p>Joined July 2009</p>
            </IconContext.Provider>
          </div>
        </div>
        <div className="social-info">
          <div className="follow">
            <p>
              <strong>80 </strong> Following
            </p>
          </div>
          <div className="follow">
            <p>
              <strong>17 </strong> Followers
            </p>
          </div>
        </div>
        <div className="navigation">
          <div className="tweets-navigation active">
            <h3>Tweets</h3>
          </div>
          <div className="tweets-navigation">
            <h3>Tweets &#38; replies</h3>
          </div>
          <div className="tweets-navigation">
            <h3>Media</h3>
          </div>
          <div className="tweets-navigation">
            <h3>Likes</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profileCard;
