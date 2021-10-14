const randomIdArrayGen = (arrayLength, idMax, randomHeroId) => {//make array with random hero numbers
    let idArray = []//initialize empty array
    for (let i = 0; i <= arrayLength - 1; i++) {
      let id;
      do {
        id = randomHeroId(idMax)//set to random number
      } while (idArray.includes(id))//if number is aleady included in array, get random number again until no longer a number already included
      idArray[i] = id;//set id to random number just generated
    }
    return idArray;
  }
  export default randomIdArrayGen;