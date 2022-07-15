'use strict';

const body = document.querySelector('body');
const input = document.querySelector('.guess');
const message = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const randomNumber = Math.trunc(Math.random() * 100) + 1;
console.log(randomNumber);

checkBtn.addEventListener('click', () => {
  const guess = Number(input.value);
  if (!guess) {
    message.textContent = '⛔ No number!';
  } else if (guess === randomNumber) {
    number.textContent = guess;
    message.textContent = '🎉 Congrats!';
    highScore.textContent = score.textContent;
    score.textContent = 20;
    // TODO: change bg color to green
    // TODO: disable the check button
  } else {
    // TODO: change message depending on whether the number is less or more
    message.textContent = '❌ Try again';
    score.textContent = Number(score.textContent) - 1;
  }
});

// TODO: add an event listener to the again button to reset the game and regenerate the random number
