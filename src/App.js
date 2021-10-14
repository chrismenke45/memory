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
  const [heros, setHeros] = useState([{//initialize a heros array as a state
    id: 1,
    heroName: 'Yeehaw',
    url: '',
    clicked: false,
  }])
  const [loadScreen, setLoadScreen] = useState(true)//set loadscreen to true so it shows loading on open
  const [score, setScore] = useState(0)//set score to zero
  const [highScore, setHighScore] = useState(0)//set highscore to zero
  const [game, setGame] = useState(true)//set game, a variable that allows you to play to true
  const [allHerosClicked, setAllHerosClicked] = useState(false)//this will turn true when all visible heros have been clicked, it will prompt new api call

  let idMax = 270;//maximum id number for heros from the api

  const cardMount = () => {//this will run in cards.js when it is mounted
    let heroIdArray = randomIdArrayGen(16, idMax, randomHeroId);//make an array with 16 random id numbers
    Promise.all(heroIdArray.map(id => {//make a promise for all api calls
      return heroFetch(API_KEY, id)//get hero for each id in heroIdArray
    }))
      .then(arr => {//set heros state to the new array with api info
        setHeros(arr)
        setLoadScreen(false)//make it so cards are displayed, and it no longer says loading
      })
      .catch(error => {//alert user of error and tell them to reload page to fix the issue
        alert('There was a problem loading heros, please reload the page')
        console.error(error.message)
      })
  }

  const onChoice = (e) => {//when a hero card is clicked this will happen
    let checkIfClicked = heros.filter(hero => hero.id === e.target.id.toString())//check if the card has already been clicked
    if (checkIfClicked[0].clicked === true) {//if its already been clicked then score resets, and the loss game screen is shown
      setScore(0);
      setLoadScreen(true)
      setGame(false)
    } else {//if they made an good choice
      let intermediateHeros = heros.map(hero => {//map through array
        let newHero//initialize variable
        if (e.target.id.toString() === hero.id) {//if id is the same as the one that was just clciked, update it so it is marked as clicked
          newHero = {
            ...hero,
            clicked: true,
          }
        } else {//else leave it the same
          newHero = {
            ...hero
          }
        }
        return newHero//return new object
      })
      setHeros(shuffleArray(intermediateHeros))//set heros array to the updated array but shuffle it first so they will be in new order
      setScore(score + 1);//set score
      if (score + 1 >= highScore) {//set high score if applicable
        setHighScore(score + 1);
      }
      if ((score + 1) % (heros.length) == 0) { //if all heros have been clicked, then make it so api must be called again
        setAllHerosClicked(true)
      }
    }
  }
  const startGame = () => {//will be clicked in newgame to set loadscreen and make it so new api call is made
    setGame(true)
    setLoadScreen(true)
  }
  const onContinue = () => {//will be clicked in GetNewHeros to set loadscreen and make it so new api call is made
    setAllHerosClicked(false)
    setLoadScreen(true)
  }

  return (
    <div className="allSpace">
      <h1 className="title">Test Your Memory</h1>
      <p className="instructions">Don't pick the same hero twice!</p>
      <ScoreDisplay score={score} highScore={highScore} />
      {/*make if then statements to decide if loss screen is shown, loading/api with cards is shown (this are both in Cards), or if the GetNewHeros is shown to continue game once all have been clicked */}
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
