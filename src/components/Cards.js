import React, { useEffect } from 'react'
//import getHero from './getHero';
//const API_KEY = process.env.REACT_APP_API_KEY;

const Cards = (props) => {
    const { heros, loadScreen, onChoice, cardMount } = props;

    useEffect(() => {
        cardMount();
    }, []);

    return (
        <div className="interact">
            {
            !loadScreen ?
            <div className="cardBox">
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