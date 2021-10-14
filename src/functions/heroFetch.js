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
  export default heroFetch;