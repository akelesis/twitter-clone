import React, { useState } from "react";
import "./ModalEdit.css";

import { IconContext } from "react-icons";
import { FiX } from "react-icons/fi";
import { FiCamera } from "react-icons/fi";

import profilePicture from "../../assets/profile_pic.jpg";

const ModalEdit = (props) => {
	const [name, setName] = useState("")
	const [bio, setBio] = useState("")
	const [location, setLocation] = useState("")
	const [website, setWebsite] = useState("")
  const [birth, setBirth] = useState("")
  
  const toggleFocus = () => {
    let bioDiv = document.getElementById('bio-div')
    bioDiv.classList.contains('focus') ? bioDiv.classList.remove('focus') : bioDiv.classList.add('focus')
  }

  return (
    <div className="modal-edit">
      <div className="edit-container">
        <div className="edit-header">
          <div className="title-container">
            <div className="close-button">
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
          <button>Save</button>
        </div>
        <div className="edit-body">
          <div className="profile-card">
            <div className="cover-pic">
              <div className="cover-pic-overlay">
                <div className="icon-edit">
                  <IconContext.Provider
                    value={{ style: { fontSize: "20px", color: "#fff" } }}
                  >
                    <FiCamera />
                  </IconContext.Provider>
                </div>
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
              <div className="profile-pic">
                <img src={profilePicture} alt="" />
                <div className="profile-pic-overlay">
                  <div className="icon-edit">
                    <IconContext.Provider
                      value={{ style: { fontSize: "20px", color: "#fff" } }}
                    >
                      <FiCamera />
                    </IconContext.Provider>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form action="" className="edit-form">
            <div className="edit-input">
              <label htmlFor="name">Name</label>
              <input
								value={name}
                onChange={e => setName(e.target.value)}
                maxLength="50"
                type="text"
                name="name"
                id="name"
                placeholder="Add your name"
              />
            </div>
            <div className="edit-counter-container">
              <small className="edit-counter">{name.length}/50</small>
            </div>
            <div className="edit-input-textarea" id="bio-div">
              <label htmlFor="bio">Bio</label>
              <textarea
								value={bio}
                onChange={e => setBio(e.target.value)}
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
              <small className="edit-counter">{bio.length}/160</small>
            </div>
            <div className="edit-input">
              <label htmlFor="location">Location</label>
              <input
								value={location}
                onChange={e => setLocation(e.target.value)}
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
                value={website} 
                type="text"
                onChange={e => setWebsite(e.target.value)}
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
                value={birth}
                type="date"
                onChange={e => setBirth(e.target.value)}
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

export default ModalEdit;
