import React from "react";
import { useState } from "react";
import {changeFlagTweet} from '../../store/actions/flagTweet'
import {connect} from 'react-redux'

import "./ModalTweet.css";
import ProfilePicture from "../../assets/profile_pic.jpg";

import TextareaAutosize from "react-textarea-autosize";

import { IconContext } from "react-icons";
import { FiX } from "react-icons/fi";

const ModalTweet = (props) => {
  const [post, setPost] = useState("");
  return (
    <div className="modal-tweet">
      <div className="modal-overlay" onClick={e => props.flagTweetDispatch(false)}></div>
      <div className="modal-field">
        <div className="modal-header">
          <div className="close-button" onClick={e => props.flagTweetDispatch(false)}>
            <IconContext.Provider
              value={{
                style: { color: "rgb(26, 136, 204)", fontSize: "25px" },
              }}
            >
              <FiX />
            </IconContext.Provider>
          </div>
        </div>
        <div className="modal-body">
          <div className="modal-pic-box">
            <div className="modal-pic">
              <img src={ProfilePicture} alt="" />
            </div>
          </div>
          <div className="modal-text-area">
            <TextareaAutosize
              placeholder="What's happening?"
              value={post}
              maxLength="280"
              onChange={(e) => setPost(e.target.value)}
              style={{ minHeight: "100px" }}
            />
          </div>
        </div>
        <div className="modal-footer">
          <div className="tweet-counter">
            <p>{280 - post.length}</p>
          </div>
          <button className="modal-tweet-button">Tweet</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
      flagTweet: state.flagTweet,
      flagEdit: state.tweet
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    flagTweetDispatch(newBool){
      const action = changeFlagTweet(newBool)
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProp)(ModalTweet);
