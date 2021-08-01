import React from 'react'


const StrengthMessage = (props) => {
    if(props) {
        let scoreText = ''
        switch(props.level) {
            case 1:
                scoreText = 'weak'
                break;
            case 2:
                scoreText = 'medium'
                break;
            case 3:
                scoreText = 'strong'
                break;
            case 4:
                scoreText = 'strong'
                break;
            default:
                scoreText = 'very weak'
                break;
        }
        return (
            <p className="main__innerBottomMessageText">You have a {scoreText} password!</p>
        )
    }
}

export default StrengthMessage;