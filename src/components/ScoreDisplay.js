import React from 'react'

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
