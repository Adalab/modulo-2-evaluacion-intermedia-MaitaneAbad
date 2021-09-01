'use strict';

const input = document.querySelector('.js-input');
const page = document.querySelector('.js-main');
const textTrack = document.querySelector('.js-textTrack')
const button = document.querySelector('.js-button')
const numberRandom = getRandomNumber();
const numberAttempts = document.querySelector('.js-numberAttempts')
let countClick = 0;
function getRandomNumber() {
    return  Math.ceil(Math.random() * 100);
  
    }
function addAttempts (){
countClick += 1;
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
        textTrack.innerHTML = 'Pista: Demasiado alto'
    }
    if(inputValue <= 0 || inputValue >=100){
    textTrack.innerHTML = 'Pista: El número debe ser entre 1 y 100'
    }

    addAttempts();
    
        
    
}

button.addEventListener ('click',guessNumber );
