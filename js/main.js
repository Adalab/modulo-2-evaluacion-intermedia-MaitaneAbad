'use strict';

const input = document.querySelector('.js-input');
const page = document.querySelector('.js-main');
const textTrack = document.querySelector('.js-textTrack')
const button = document.querySelector('.js-button')
const numberRandom = getRandomNumber();
function getRandomNumber() {
    return  Math.ceil(Math.random() * 100);
  
    }

function guessNumber(event){
    event.preventDefault();
   const inputValue = parseInt(input.value);

    console.log(numberRandom)
     
     

     if( inputValue === numberRandom){
        textTrack.innerHTML = 'Pista: ¡Has ganado Campeona!'
    
     }
    if ( inputValue < numberRandom){
        textTrack.innerHTML = 'Pista: Demasiado bajo'
    }
    if( inputValue > numberRandom){
        textTrack.innerHTML = 'Pista: Demasiado Alto'
    }

}
page
//window.onload = getRandomNumber;
button.addEventListener ('click',guessNumber )
