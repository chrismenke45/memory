const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {//for each spot in aaray
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      let t = array[i];//set placeholder with i's value
      array[i] = array[j];//change i's value to random value
      array[j] = t;//change random value to i's initial value
    }
    return array;
  }

  export default shuffleArray;