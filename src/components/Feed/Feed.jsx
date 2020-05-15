import React from 'react'
import {connect} from 'react-redux'

import './Feed.css'

import Header from '../Header/Header'
import ProfileCard from '../ProfileCard/ProfileCard'
import Tweets from '../Tweets/Tweets'
import ModalTweet from '../ModalTweet/ModalTweet'
import ModalEdit from '../ModalEdit/ModalEdit'

const Feed = (props) => {
    const {flagTweet, flagEdit} = props

    return (
        <div className="feed" id="feed">
            <Header></Header>
            <ProfileCard></ProfileCard>
            <Tweets></Tweets>
            {flagTweet ? <ModalTweet/> : ""}
            {flagEdit? <ModalEdit/> : ""}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        flagTweet: state.flagTweet,
        flagEdit: state.flagEdit
    }
}

export default connect(mapStateToProps)(Feed)