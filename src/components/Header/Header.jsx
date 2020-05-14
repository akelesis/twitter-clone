import React from 'react'
import './Header.css'
import {connect} from 'react-redux'

import {IconContext} from 'react-icons'
import {FaArrowLeft} from 'react-icons/fa'

const Header = (props) => {
    const {userName, tweetsNumber} = props
    return (
        <div className="header">
            <div className="return-icon">
                <IconContext.Provider value={{style: {fontSize: "18px"}, color: "rgb(0, 123, 255)"}}>
                    <FaArrowLeft></FaArrowLeft>
                </IconContext.Provider>
            </div>
            <div className="page-header">
                <h3>{userName}</h3>
                <p>{tweetsNumber} {tweetsNumber > 1 ? "Tweets" : "Tweet"}</p>
            </div>
        </div>
        
    )
}


const mapStateToProps = (state) => {
    return {
        userName: state.userName,
        tweetsNumber: state.tweetsNumber
    }
}

export default connect(mapStateToProps)(Header)