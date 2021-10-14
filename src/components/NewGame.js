import React from 'react'

const NewGame = (props) => {
    const { startGame } = props;
    return (
        <div className="interact">
            <div className="restartButton">
                <h1>You Lost!</h1>
                <button onClick={startGame}>New Game</button>
            </div>
        </div>
    )
}

export default NewGame;