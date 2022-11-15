"use strict";

//-------------------QUERYSELECTORS-------------------

const selectElement = document.querySelector(".js-select");
const btn = document.querySelector(".js-btn");
const resultText = document.querySelector(".js-text");

//-------------------FUNCIONES-------------------

function getRandomNumber(max) {
  //función que nos dan para calcular
  return Math.ceil(Math.random() * max);
}

function getComputerChoice() {
  //función para conseguir un número random según las razas malas. Mi planteamiento anterior estaba mal!
  const randomNumber = getRandomNumber(5);

  let result = 0;

  if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3) {
    result = 2;
  } else if (randomNumber === 4) {
    result = 3;
  } else {
    result = 5;
  }
  return result;
}

function getUserChoice() {
  //función para conseguir la raza que quiere la usuaria
  return parseInt(selectElement.value);
}

function getResult(userChoice, computerChoice) {
  //función para comparar y recibir un resultado
  if (userChoice > computerChoice) {
    resultText.innerHTML = "¡Ha ganado el Ejército del Bien! Enhorabuena.";
  } else if (userChoice < computerChoice) {
    resultText.innerHTML =
      "Ha ganado el Ejército del Mal! Vuelve a intentarlo.";
  } else {
    resultText.innerHTML = "Empate";
  }
}

function handleClick(event) {
  //función manejadora con todo lo que debe ocurrir al hacer click en el botón
  event.preventDefault();
  const computerChoice = getComputerChoice();
  const userChoice = getUserChoice();
  getResult(userChoice, computerChoice);
}

//-------------------EVENTOS-------------------

btn.addEventListener("click", handleClick);
