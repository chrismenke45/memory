import React, { useState, useEffect } from 'react'
//import getHero from './getHero';
const API_KEY = process.env.REACT_APP_API_KEY;

const Cards = (props) => {
    const { onChoice } = props;
    //const [count, setCount] = useState(0)
    const [heros, setHeros] = useState([{
        id: 1,
        heroName: 'Yeehaw',
        url: ''
    }])

    /*let idMax = 271;
    const randomHeroId = (idMax) => {
        return Math.floor(Math.random() * idMax)
    }

    const randomIdArrayGen = (arrayLength, idMax) => {
        let idArray = []
        for (let i = 0; i <= arrayLength - 1; i++) {
            let id;
            do {
                id = randomHeroId(idMax)
            } while (idArray.includes(id))
            idArray[i] = id;
        }
        return idArray;
    }*/



    useEffect(() => {
        let idMax = 271;
        const randomHeroId = (idMax) => {
            return Math.floor(Math.random() * idMax)
        }

        const randomIdArrayGen = (arrayLength, idMax) => {
            let idArray = []
            for (let i = 0; i <= arrayLength - 1; i++) {
                let id;
                do {
                    id = randomHeroId(idMax)
                } while (idArray.includes(id))
                idArray[i] = id;
            }
            return idArray;
        }

        async function heroFetch(apiKey, idNum) {
            const response = await fetch(`https://www.superheroapi.com/api.php/${apiKey}/${idNum}`);
            const hero = await response.json();
            return {
                id: hero.id,
                heroName: hero.name,
                url: hero.image.url
            }
        }
        let heroIdArray = randomIdArrayGen(16, idMax)
        Promise.all(heroIdArray.map(id => {
            return heroFetch(API_KEY, id)
        }))
            .then(arr => {
                setHeros(arr)
                console.log(arr)
            })
        //console.log(yeehaw)
        //console.log(heroFetch(API_KEY, 69))
        /*fetch(`https://www.superheroapi.com/api.php/${API_KEY}/69`)
            .then(response => response.json())
            .then(json => console.log(json))
        console.log('mount')*/
    }, []);
    /* const inc = () => {
         setCount(count + 1);
     }*/

    return (
        <div className="cardBox">
            {heros.map((hero) => {
                return <div
                    style={{backgroundImage: `url(${hero.url})`}}
                    className="individualCard"
                    key={hero.id}
                    id={hero.id}
                    onClick={onChoice}
                >
                    {hero.heroName}
                </div>
            })}
        </div>
    )
}
export default Cards;