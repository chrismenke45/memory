import React, { useState } from 'react'
import Cards from './components/Cards'
import ScoreDisplay from './components/ScoreDisplay';
import NewGame from './components/NewGame';
import shuffleArray from './functions/shuffleArray';
import heroFetch from './functions/heroFetch';
import randomIdArrayGen from './functions/randomIdArrayGen';
import randomHeroId from './functions/randomHeroId';
import GetNewHeros from './components/GetNewHeros';
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
  const [allHerosClicked, setAllHerosClicked] = useState(false)

  let idMax = 270;

  const cardMount = () => {
    let heroIdArray = randomIdArrayGen(16, idMax, randomHeroId);
    Promise.all(heroIdArray.map(id => {
      return heroFetch(API_KEY, id)
    }))
      .then(arr => {
        setHeros(arr)
        console.log(arr)
        setLoadScreen(false)
      })
      .catch(error => {
        alert('There was a problem loading heros, please reload the page')
        console.error(error.message)
      })
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
      if ((score + 1) % 16 == 0) {
        setAllHerosClicked(true)
      }
    }
  }
  const startGame = () => {
    setGame(true)
    setLoadScreen(true)
  }
  const onContinue = () => {
    setAllHerosClicked(false)
    setLoadScreen(true)
  }

  return (
    <div className="allSpace">
      <h1 className="title">Test Your Memory</h1>
      <p className="instructions">Don't pick the same hero twice!</p>
      <ScoreDisplay score={score} highScore={highScore} />
      {
        game ?
          !allHerosClicked ?
            <Cards heros={heros} loadScreen={loadScreen} onChoice={onChoice} cardMount={cardMount} />
            :
            <GetNewHeros onContinue={onContinue} />
          :
          <NewGame startGame={startGame} />
      }
    </div>

  );
}

export default App;
