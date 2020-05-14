import React from "react";
import {connect} from "react-redux"
import "./Tweets.css";

import Tweet from "../Tweet/Tweet";

const Tweets = (props) => {

  const {userName, userNick, tweets} = props

  return (
    <div className="tweets-panel">
      {
        tweets.slice(0).reverse().map((tweet, index) => 
          <Tweet
            key={index} 
            tweet={tweet.msg} 
            date={tweet.date} 
            comments={tweet.comments} 
            likes={tweet.likes} 
            retweets={tweet.retweets} 
            userName={userName} 
            userNick={userNick}
          />
        )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    userNick: state.userNick,
    tweets: state.tweets
  }
}

export default connect(mapStateToProps)(Tweets);
