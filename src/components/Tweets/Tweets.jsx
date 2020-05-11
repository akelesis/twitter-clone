import React from 'react'
import './Tweets.css'

import Badge from '../../assets/twitter-verified-badge.svg'

import {FaRegHeart} from 'react-icons/fa'
import {FaRegComment} from 'react-icons/fa'
import {FaRetweet} from 'react-icons/fa'
import {FiShare} from 'react-icons/fi'

const Tweets = (props) => {
    return(
        <div className="tweets-panel">
            <div className="tweet">
                <div className="tweet-pic-box">
                    <div className="tweet-pic">

                    </div>
                </div>
                <div className="tweet-text">
                    <div className="tweet-header">
                        <h4 className="user-nick">Satya Nadella</h4>
                        <img className="badge" src={Badge} alt=""/>
                        <p className="user-id">@satyanadella . May 8</p>
                    </div>
                    <div className="tweet-message">
                        Hey Marcus, I've been trying to get in touch with you for 
                        weeks! Please, I know you've been busy these days, but we
                        need you in this project! Call me on whatsapp!
                    </div>
                    <div className="tweet-reactions">
                        <div className="tweet-reaction-module blue">
                            <div className="tweet-icon-box">
                                <FaRegComment className="tweet-reaction-icon" />
                            </div>
                            <p>2</p>
                        </div>
                        <div className="tweet-reaction-module green">
                            <FaRetweet className="tweet-reaction-icon" /><p>2</p>
                        </div>
                        <div className="tweet-reaction-module red">
                            <FaRegHeart className="tweet-reaction-icon" /><p>2</p>
                        </div>
                        <div className="tweet-reaction-module blue">
                            <FiShare className="tweet-reaction-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweets