import React from 'react'
import './Header.css'

import {IconContext} from 'react-icons'
import {FaArrowLeft} from 'react-icons/fa'

const header = (props) => {
    return (
        <div className="header">
            <div className="return-icon">
                <IconContext.Provider value={{style: {fontSize: "18px"}, color: "rgb(0, 123, 255)"}}>
                    <FaArrowLeft></FaArrowLeft>
                </IconContext.Provider>
            </div>
            <div className="page-header">
                <h3>{props.name}</h3>
                <p>{props.tweetsNumber} Tweets</p>
            </div>
        </div>
        
    )
}

export default header