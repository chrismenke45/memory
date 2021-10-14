import React from 'react'
//similar to NewGame, it allows for the heros to be reloaded after all have been cleared
const GetNewHeros = (props) => {
    const { onContinue } = props;
    return (
        <div className="interact">
            <div className="restartButton">
                <h1>You got all of them!</h1>
                <button onClick={onContinue}>Continue</button>
            </div>
        </div>
    )
}

export default GetNewHeros;