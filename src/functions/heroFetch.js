async function heroFetch(apiKey, idNum) {//async function to get hero data from api
    const response = await fetch(`https://www.superheroapi.com/api.php/${apiKey}/${idNum}`);
    const hero = await response.json();
    return {
      id: hero.id,//set object to api call values
      heroName: hero.name,
      url: hero.image.url,
      clicked: false
    }
  }
  export default heroFetch;