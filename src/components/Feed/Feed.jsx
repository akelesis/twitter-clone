import React, { useState } from 'react'
import './Feed.css'

import Header from '../Header/Header'
import ProfileCard from '../ProfileCard/ProfileCard'
import Tweets from '../Tweets/Tweets'
import ModalTweet from '../ModalTweet/ModalTweet'
import ModalEdit from '../ModalEdit/ModalEdit'

const Feed = (props) => {

    const [tweetFlag, setTweetFlag] = useState(false)
    const [editFlag, setEditFlag] = useState(false)

    return (
        <div className="feed" id="feed">
            <Header name={props.name} tweetsNumber={props.tweetsNumber}></Header>
            <ProfileCard></ProfileCard>
            <Tweets></Tweets>
            {tweetFlag ? <ModalTweet/> : ""}
            {editFlag ? <ModalEdit/> : ""}
        </div>
    )
}

export default Feed