import React from 'react'
//this displayes the score in the top right corner
const ScoreDisplay = (props) => {
    const { score, highScore } = props;
    return (
        <div className="scoresArea">
            <div>Score: {score}</div>
            <div>Highscore: {highScore}</div>
        </div>
    )
}

export default ScoreDisplay;
