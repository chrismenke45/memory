const randomIdArrayGen = (arrayLength, idMax, randomHeroId) => {
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
  export default randomIdArrayGen;