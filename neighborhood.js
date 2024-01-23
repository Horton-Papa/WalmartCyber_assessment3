console.log('neighborhood.js')

/* * * * * * *  
 * Selectors * 
 * * * * * * */

const foodBtn = document.querySelector('#food-randomizer');
const recSelector = document.querySelector('#food-result')
/* * * * * * *  
 * Functions * 
 * * * * * * */

const foodRandomizer = (evt) => {
    console.log('randomizer clicked');


    const foodArr = ["A-mano", "Souvla", "Chez Maman", "Papito Hayes"];

    const recommendation = foodArr[Math.floor(Math.random() * foodArr.length)];

    recSelector.textContent = recommendation;
}
/* * * * * * *  
 * Listeners * 
 * * * * * * */

foodBtn.addEventListener('click',foodRandomizer)