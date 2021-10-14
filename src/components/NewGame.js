import React from 'react'
//this puts a screen that will allow the hero api to make a fresh call after the game is lost
const NewGame = (props) => {
    const { startGame } = props;
    return (
        <div className="interact">
            <div className="restartButton">
                <h1 style={{marginTop: '0px'}}>You Lost! Try Again</h1>
                <button onClick={startGame}>New Game</button>
            </div>
        </div>
    )
}

export default NewGame;