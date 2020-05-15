import React from "react";
import {connect} from 'react-redux'
import {changeFlagEdit} from '../../store/actions/flagEdit'

import "./ProfileCard.css";

import { IconContext } from "react-icons";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";



const profileCard = (props) => {
  const {profile, cover, userName, userNick, location, birth} = props
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  return (
    <div className="profile-card">
      <div className="cover-pic">
        <img src={cover} alt=""/>
      </div>
      <div className="profile-pic-box">
        <div className="profile-pic">
          <img src={profile} alt="" />
        </div>
        <button className="edit-profile-button" onClick={e => props.FlagEditDispatch(true)}>Edit profile</button>
      </div>
      <div className="profile-info">
        <h4 className="user-name">{userName}</h4>
        <p className="user-id">@{userNick}</p>
        <div className="personal-info">
          <div className="location-info">
            <IconContext.Provider
              value={{ style: { fontSize: "15px", color: "#779" } }}
            >
              <FaMapMarkerAlt /> <p>{location}</p>
            </IconContext.Provider>
          </div>
          <div className="birth-info">
            <IconContext.Provider
              value={{ style: { fontSize: "15px", color: "#779" } }}
            >
              <FaBirthdayCake /> <p>Born {months[parseInt(birth.slice(5,7)) - 1] + " " + parseInt(birth.slice(8,10)) + ", " + birth.slice(0,4)}</p>
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

const mapStateToProps = (state) => {
  return {
    profile: state.picture.profile,
    cover: state.picture.cover,
    userName: state.profile.userName,
    userNick: state.profile.userNick,
    bio: state.profile.bio,
    location: state.profile.location,
    birth: state.profile.birth
  }
}

const mapDispatchToProp = (dispatch) => {
  return{
    FlagEditDispatch(newBool){
      const action = changeFlagEdit(newBool)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(profileCard);
