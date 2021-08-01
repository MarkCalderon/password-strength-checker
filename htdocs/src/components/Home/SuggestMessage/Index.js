import React from 'react'

const SuggestMessage = (props) => {
    if(props) {
        return (
            <p className="main__innerSuggestText">{props.message}</p>
        )
    }
}

export default SuggestMessage;