'use strict';

const select = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const text = document.querySelector('.js-text');

let computerChoice;
let textResult;



//mi planteamiento es que cada raza buena y cada raza mala están en posiciones determinadas y al elegir se compara para saber cuál es más fuerte (pero es de manera manual, así que sé que no es la mejor idea porque es mucho código)


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function computerRandom() {
    const randomNumber = getRandomNumber(6);
    if(randomNumber === 1) {
        computerChoice = 'race1'
    }
    if(randomNumber === 2) {
        computerChoice = 'race2'
    }
    if(randomNumber === 3) {
        computerChoice = 'race3'
    }
    if(randomNumber === 4) {
        computerChoice = 'race4'
    }
    if(randomNumber === 5) {
        computerChoice = 'race5'
    }
    console.log(computerChoice);
    
}

/*function userChoice() {
    const selectValue = select.value;
    console.log (selectValue);
}*/


function result() { 
    const selectValue = select.value;

    //option 1
    if (computerChoice === 'race1' && selectValue === 'race1') {
        textResult = 'Ha ganado el Ejército del Mal! Vuelve a intentarlo.';
    }
    if (computerChoice === 'race1' && selectValue === 'race2') {
        textResult = 'Empate';
    }
    if (computerChoice === 'race1' && selectValue === 'race3') {
        textResult = 'Ha ganado el Ejército del Bien! Enhorabuena.';
    }
    if (computerChoice === 'race1' && selectValue === 'race4') {
        textResult = 'Ha ganado el Ejército del Bien! Enhorabuena.';
    }
    if (computerChoice === 'race1' && selectValue === 'race5') {
        textResult = 'Ha ganado el Ejército del Bien! Enhorabuena.';
    }
    
    //option2
    if (computerChoice === 'race2' && selectValue === 'race1') {
        textResult = 'Ha ganado el Ejército del Mal! Vuelve a intentarlo.';
    }
    if (computerChoice === 'race2' && selectValue === 'race2') {
        textResult = 'Empate';
    }
    if (computerChoice === 'race2' && selectValue === 'race3') {
        textResult = 'Ha ganado el Ejército del Bien! Enhorabuena.';
    }
    if (computerChoice === 'race2' && selectValue === 'race4') {
        textResult = 'Ha ganado el Ejército del Bien! Enhorabuena.';
    }
    if (computerChoice === 'race2' && selectValue === 'race5') {
        textResult = 'Ha ganado el Ejército del Bien! Enhorabuena.';
    }

    //option3
    if (computerChoice === 'race3' && selectValue === 'race1') {
        textResult = 'Ha ganado el Ejército del Mal! Vuelve a intentarlo.';
    }
    if (computerChoice === 'race3' && selectValue === 'race2') {
        textResult = 'Empate';
    }
    if (computerChoice === 'race3' && selectValue === 'race3') {
        textResult = 'Ha ganado el Ejército del Bien! Enhorabuena.';
    }
    if (computerChoice === 'race3' && selectValue === 'race4') {
        textResult = 'Ha ganado el Ejército del Bien! Enhorabuena.';
    }
    if (computerChoice === 'race3' && selectValue === 'race5') {
        textResult = 'Ha ganado el Ejército del Bien! Enhorabuena.';
    }

    //option4
    //option5

    text.innerHTML = textResult;
}



function handleClick(event) {
    event.preventDefault();
    computerRandom();
    result();
}

btn.addEventListener('click', handleClick);