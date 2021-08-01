import React from 'react'

const TimeMessage = (props) => {
    if(props) {
        return (
            <p className="main__innerDescText">It will take {props.message} to guess your password. {props.warningText}</p>
        )
    }
}

export default TimeMessage;