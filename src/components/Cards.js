import React, { useEffect } from 'react'
//import getHero from './getHero';
//const API_KEY = process.env.REACT_APP_API_KEY;

const Cards = (props) => {
    const { heros, loadScreen, onChoice, cardMount } = props;

    useEffect(() => {
        cardMount();//on mount pull data from api to make hero cards 
    }, []);

    return (
        <div className="interact">{/*div that fits in grid with respect to title, score, instructions*/}
         {/*make if then statement that either displays cards or loaign if cards arent loaded*/}   { 
            !loadScreen ? 
            <div className="cardBox"> {/*div that make grid inside it to hold all cards*/}

            {/* Next: map through hero arry and make div for each car
            then: use image from api or set as failed to load
            then: set it so onclick either improves score or looses game
            then: put hero name in the card
            or make loading screen*/}
                {heros.map((hero) => {
                    return <div
                        style={{ backgroundImage: `url(${hero.url}), url("https://via.placeholder.com/300x300?text=Failed To Load")`}} 
                        className="individualCard"
                        key={hero.id}
                        id={hero.id}
                        onClick={onChoice}
                    >
                        {hero.heroName}
                    </div>
                })}
            </div>
            :
            <div>Loading...</div>
            }
        </div>
    )
}
export default Cards;