import React from 'react'
import './Feed.css'

import Header from '../Header/Header'
import ProfileCard from '../ProfileCard/ProfileCard'
import Tweets from '../Tweets/Tweets'

const feed = (props) => {
    return (
        <div className="feed" id="feed">
            <Header name={props.name} tweetsNumber={props.tweetsNumber}></Header>
            <ProfileCard></ProfileCard>
            <Tweets></Tweets>
        </div>
    )
}

export default feed