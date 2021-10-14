const randomHeroId = (idMax) => {//select random hero id
    return Math.floor(Math.random() * idMax) + 1//select random number between 1 and idMax
  }
  export default randomHeroId;