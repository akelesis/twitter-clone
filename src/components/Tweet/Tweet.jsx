import React from "react";
import {connect} from 'react-redux'
import "../Tweets/Tweets.css";

import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FiShare } from "react-icons/fi";

const Tweet = (props) => {
	const { userName, userNick, tweet, date, comments, likes, retweets, profile } = props;
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	console.log(date)
  return (
    <div className="tweet">
      <div className="tweet-pic-box">
        <div className="tweet-pic">
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="tweet-box-text">
        <div className="tweet-header">
          <h4 className="user-nick">{userName}</h4>
          <p className="user-id">@{userNick} . {months[parseInt(date.slice(0,2)) - 1] + " " + parseInt(date.slice(3,5))}</p>
        </div>
        <div className="tweet-message">{tweet}</div>
        <div className="tweet-reactions">
          <div className="tweet-reaction-module blue">
            <div className="tweet-icon-box">
              <FaRegComment className="tweet-reaction-icon" />
            </div>
					<p>{comments}</p>
          </div>
          <div className="tweet-reaction-module green">
            <div className="tweet-icon-box">
              <FaRetweet className="tweet-reaction-icon" />
            </div>
						<p>{retweets}</p>
          </div>
          <div className="tweet-reaction-module red">
            <div className="tweet-icon-box">
              <FaRegHeart className="tweet-reaction-icon" />
            </div>
            <p>{likes}</p>
          </div>
          <div className="tweet-reaction-module blue">
            <div className="tweet-icon-box">
              <FiShare className="tweet-reaction-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
      profile: state.picture.profile
  }
}


export default connect(mapStateToProps)(Tweet);
