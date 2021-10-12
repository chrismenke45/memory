import React, { useState } from 'react'
import Cards from './components/Cards'
//import getHero from './components/getHero'




/*let info = {
  "response": "success",
  "id": "280",
  "name": "Ghost Rider",
  "powerstats": {
    "intelligence": "50",
    "strength": "55",
    "speed": "25",
    "durability": "100",
    "power": "100",
    "combat": "60"
  },
  "biography": {
    "full-name": "Johnny Blaze",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "-"
    ],
    "place-of-birth": "Waukegan, Illinois",
    "first-appearance": "Marvel Spotlight #5 (August, 1972)",
    "publisher": "Marvel Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Male",
    "race": "Demon",
    "height": [
      "6'2",
      "188 cm"
    ],
    "weight": [
      "220 lb",
      "99 kg"
    ],
    "eye-color": "Red",
    "hair-color": "No Hair"
  },
  "work": {
    "occupation": "Former stunt motorcyclist",
    "base": "Mobile, Quentin Carnival"
  },
  "connections": {
    "group-affiliation": "Quentin Carnival Formerly Midnight Sons, Legion of Monsters, The Champions",
    "relatives": "Barton (father, deceased), Clara (mother, deceased), Craig \"Crash\" Simpson (stepfather, deceased), Mona Simpson (stepmother, deceased), Roxanne Simpson (wife)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/67.jpg"
  }
}

let infoString = JSON.stringify(info)

let infoUse = JSON.parse(infoString)*/

let infoUse = [
  {
    name: 'charlie',
    id: 1
  },
  {
    name: 'bob',
    id: 2
  },
  {
    name: 'lisa',
    id: 3
  },
  {
    name: 'kat',
    id: 4
  },
  {
    name: 'nat',
    id: 5
  },
  {
    name: 'joe',
    id: 6
  },
]

function App() {
  const [heros, setHeros] = useState(infoUse)
  const [mount, setMount] = useState(true)

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      //
      let t = array[i];
      array[i] = array[j];
      array[j] = t;
      //[array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

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
  }
  let heroIdArray = randomIdArrayGen(16, idMax)
  //console.log(heroIdArray);
  */

  const onChoice = (e) => {
    let intermediateHeros = heros.map(hero => {
      let newHero
      if (e.target.id === hero.id) {
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
  }
  const mountCards = () => {
    setMount(true);
  }
  const unmountCards = () => {
    setMount(false);
  }

  return (
    <div>
      <button onClick={mountCards}>mount</button>
      <button onClick={unmountCards}>unmount</button>
      {mount ? <Cards onChoice={onChoice} /> : null}
    </div>

  );
}

export default App;
