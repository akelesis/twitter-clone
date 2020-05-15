import React, { useState } from "react";
import { connect } from "react-redux";
import { changeFlagEdit } from "../../store/actions/flagEdit";
import "./ModalEdit.css";

import axios from 'axios'

import { IconContext } from "react-icons";
import { FiX } from "react-icons/fi";
import { FiCamera } from "react-icons/fi";

import { changeProfile } from "../../store/actions/profile";
import { changeProfilePicture, changeCoverPicture } from "../../store/actions/pictures";

const ModalEdit = (props) => {
  const { profile, cover, userName, bio, location, website, birth } = props;
  const [localName, setName] = useState(userName);
  const [localBio, setBio] = useState(bio);
  const [localLocation, setLocation] = useState(location);
  const [localWebsite, setWebsite] = useState(website);
  const [localBirth, setBirth] = useState(birth);

  const toggleFocus = () => {
    let bioDiv = document.getElementById("bio-div");
    bioDiv.classList.contains("focus")
      ? bioDiv.classList.remove("focus")
      : bioDiv.classList.add("focus");
  };

  const uploadCoverPic = (event) => {
    if(event.files[0]){
      const fd = new FormData()
      fd.append('pic', event.files[0])
      axios.post('http://localhost:4000/upload', fd)
        .then(res => {
          props.CoverPicDispatch("http://localhost:4000/" + res.data.path.replace('\\', '/'))
        })
      
    }
  
  }
  const uploadProfilePic = (event) => {
    if(event.files[0]){
      const fd = new FormData()
      fd.append('pic', event.files[0])
      axios.post('http://localhost:4000/upload', fd)
        .then(res => {
          props.ProfilePicDispatch("http://localhost:4000/" + res.data.path.replace('\\', '/'))
        })
      
    }
  }

  return (
    <div className="modal-edit">
      <div className="edit-container">
        <div className="edit-header">
          <div className="title-container">
            <div
              className="close-button"
              onClick={(e) => props.FlagEditDispatch(false)}
            >
              <IconContext.Provider
                value={{
                  style: { color: "rgb(26, 136, 204)", fontSize: "25px" },
                }}
              >
                <FiX />
              </IconContext.Provider>
            </div>
            <h3>Edit Profile</h3>
          </div>
          <button
            onClick={(e) =>
              props.ProfileEditDispatch({
                userName: localName,
                bio: localBio,
                location: localLocation,
                website: localWebsite,
                birth: localBirth,
              })
            }
          >
            Save
          </button>
        </div>
        <div className="edit-body">
          <div className="profile-card">
            <div className="cover-pic">
              <img src={cover} alt=""/>
              <div className="cover-pic-overlay">
                <input
                  onChange={e => uploadCoverPic(e.currentTarget)}
                  type="file"
                  name="cover-pic"
                  accept=".jpg, .png"
                  id="cover-pic"
                  style={{ display: "none" }}
                />
                <label htmlFor="cover-pic">
                  <div className="icon-edit">
                    <IconContext.Provider
                      value={{ style: { fontSize: "20px", color: "#fff" } }}
                    >
                      <FiCamera />
                    </IconContext.Provider>
                  </div>
                </label>
                <div className="icon-edit">
                  <IconContext.Provider
                    value={{ style: { fontSize: "20px", color: "#fff" } }}
                  >
                    <FiX />
                  </IconContext.Provider>
                </div>
              </div>
            </div>
            <div className="profile-pic-box">
              <input
                type="file"
                name="profile-pic"
                accept=".jpg, .png"
                onChange={e => uploadProfilePic(e.currentTarget)}
                id="profile-pic"
                style={{ display: "none" }}
              />

              <div className="profile-pic">
                <img src={profile} alt="" />
                <div className="profile-pic-overlay">
                  <label htmlFor="profile-pic">
                    <div className="icon-edit">
                      <IconContext.Provider
                        value={{ style: { fontSize: "20px", color: "#fff" } }}
                      >
                        <FiCamera />
                      </IconContext.Provider>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <form action="" className="edit-form">
            <div className="edit-input">
              <label htmlFor="name">Name</label>
              <input
                value={localName}
                onChange={(e) => setName(e.target.value)}
                maxLength="50"
                type="text"
                name="name"
                id="name"
                placeholder="Add your name"
              />
            </div>
            <div className="edit-counter-container">
              <small className="edit-counter">{localName.length}/50</small>
            </div>
            <div className="edit-input-textarea" id="bio-div">
              <label htmlFor="bio">Bio</label>
              <textarea
                value={localBio}
                onChange={(e) => setBio(e.target.value)}
                onFocus={toggleFocus}
                onBlur={toggleFocus}
                maxLength="160"
                type="text"
                name="bio"
                id="bio"
                placeholder="Add your Bio"
              ></textarea>
            </div>
            <div className="edit-counter-container">
              <small className="edit-counter">{localBio.length}/160</small>
            </div>
            <div className="edit-input">
              <label htmlFor="location">Location</label>
              <input
                value={localLocation}
                onChange={(e) => setLocation(e.target.value)}
                maxLength="30"
                type="text"
                name="location"
                id="location"
                placeholder="Add your Location"
              />
            </div>
            <div className="edit-counter-container">
              <small className="edit-counter">{location.length}/30</small>
            </div>
            <div className="edit-input">
              <label htmlFor="website">Website</label>
              <input
                value={localWebsite}
                type="text"
                onChange={(e) => setWebsite(e.target.value)}
                maxLength="50"
                name="website"
                id="website"
                placeholder="Add your Website"
              />
            </div>
            <div className="edit-counter-container">
              <small className="edit-counter">0/50</small>
            </div>
            <div className="edit-input">
              <label htmlFor="birth date">Birth date</label>
              <input
                value={localBirth}
                type="date"
                onChange={(e) => setBirth(e.target.value) }
                name="birth-date"
                id="birth-date"
              />
            </div>
          </form>
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
    website: state.profile.website,
    birth: state.profile.birth,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    FlagEditDispatch(newBool) {
      const action = changeFlagEdit(newBool);
      dispatch(action);
    },
    ProfileEditDispatch(newInfo) {
      const action = changeProfile(newInfo);
      dispatch(action);
    },
    ProfilePicDispatch(newPic) {
      const action = changeProfilePicture(newPic)
      dispatch(action)
    },
    CoverPicDispatch(newPic) {
      const action = changeCoverPicture(newPic)
      dispatch(action)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(ModalEdit);
