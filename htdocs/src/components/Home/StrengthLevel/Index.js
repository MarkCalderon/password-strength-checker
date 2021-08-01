import React from 'react'

const StrengthLevel = (props) => {
    let classStrength = 'main__innerStrengthLevelBar u-itemsOf'
    if(props) {
        return (
            <div className={classStrength + props.level}>
                <div className="main__innerStrengthLevelBarItem"></div>
                <div className="main__innerStrengthLevelBarItem"></div>
                <div className="main__innerStrengthLevelBarItem"></div>
                <div className="main__innerStrengthLevelBarItem"></div>
            </div>
        )
    }
}

export default StrengthLevel