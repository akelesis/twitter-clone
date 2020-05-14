import React from "react";
import "./Tweets.css";

import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FiShare } from "react-icons/fi";

import profilePicture from "../../assets/profile_pic.jpg";

const Tweets = (props) => {
  return (
    <div className="tweets-panel">
      <div className="tweet">
        <div className="tweet-pic-box">
          <div className="tweet-pic">
            <img src={profilePicture} alt="" />
          </div>
        </div>
        <div className="tweet-box-text">
          <div className="tweet-header">
            <h4 className="user-nick">Marcus Tavares</h4>
            <p className="user-id">@Marquelesis . May 10</p>
          </div>
          <div className="tweet-message">
            sem ideia pra twittar xD
          </div>
          <div className="tweet-reactions">
            <div className="tweet-reaction-module blue">
              <div className="tweet-icon-box">
                <FaRegComment className="tweet-reaction-icon" />
              </div>
              <p>2</p>
            </div>
            <div className="tweet-reaction-module green">
              <div className="tweet-icon-box">
                <FaRetweet className="tweet-reaction-icon" />
              </div>
              <p>2</p>
            </div>
            <div className="tweet-reaction-module red">
              <div className="tweet-icon-box">
                <FaRegHeart className="tweet-reaction-icon" />
              </div>
              <p>2</p>
            </div>
            <div className="tweet-reaction-module blue">
              <div className="tweet-icon-box">
                <FiShare className="tweet-reaction-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweets;
