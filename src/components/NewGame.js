import React from 'react'

const NewGame = (props) => {
    const { startGame } = props;
    return (
        <div className="newGame">
            <h1>You Lost!</h1>
            <button onClick={startGame}>New Game</button>
        </div>
    )
}

export default NewGame;