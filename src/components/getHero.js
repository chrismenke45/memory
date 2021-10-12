export default async function getHero(API_KEY, heroId) {
    /*fetch(`https://superheroapi.com/api/${API_KEY}/${heroId}`, { mode: 'cors' });*/
    try {
        const response = await fetch(`https://superheroapi.com/api/${API_KEY}/${heroId}`, { mode: 'cors' });
        const heroData = await response.json();
        return heroData;
    } catch (error) {
        alert('nope')

    }
}