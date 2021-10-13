import React, { useState } from 'react'
import Cards from './components/Cards'
import ScoreDisplay from './components/ScoreDisplay';
import NewGame from './components/NewGame';
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [heros, setHeros] = useState([{
    id: 1,
    heroName: 'Yeehaw',
    url: '',
    clicked: false,
  }])
  const [loadScreen, setLoadScreen] = useState(true)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [game, setGame] = useState(true)

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
      url: hero.image.url,
      clicked: false
    }
  }
  const cardMount = () => {
    let heroIdArray = randomIdArrayGen(16, idMax);
    Promise.all(heroIdArray.map(id => {
      return heroFetch(API_KEY, id)
    }))
      .then(arr => {
        setHeros(arr)
        console.log(arr)
        setLoadScreen(false)
      })
      .catch(error => {
        alert('API not working, try reloading page')
        console.error(error.message)
      })
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      let t = array[i];
      array[i] = array[j];
      array[j] = t;
    }
    return array;
  }

  const onChoice = (e) => {
    let checkIfClicked = heros.filter(hero => hero.id === e.target.id.toString())
    if (checkIfClicked[0].clicked === true) {
      setScore(0);
      setLoadScreen(true)
      setGame(false)
    } else {
      let intermediateHeros = heros.map(hero => {
        let newHero
        if (e.target.id.toString() === hero.id) {
          newHero = {
            ...hero,
            clicked: true,
          }
        } else {
          newHero = {
            ...hero
          }
        }
        return newHero
      })
      setHeros(shuffleArray(intermediateHeros))
      setScore(score + 1);
      if (score + 1 >= highScore) {
        setHighScore(score + 1);
      }
      console.log(heros)
    }
  }
  const startGame = () => {
    setGame(true)
  }
  /*const mountCards = () => {
    setMount(true);
  }
  const unmountCards = () => {
    setMount(false);
  }*/

  return (
    <div>
      <ScoreDisplay score={score} highScore={highScore} />
      {/*<button onClick={mountCards}>mount</button>
      <button onClick={unmountCards}>unmount</button>
  {mount ? <Cards heros={heros} onChoice={onChoice} cardMount={cardMount} /> : null}*/}
      {
      game ?
       <Cards heros={heros} loadScreen={loadScreen} onChoice={onChoice} cardMount={cardMount} /> 
       :
       <NewGame startGame={startGame} />
      }
    </div>

  );
}

export default App;
