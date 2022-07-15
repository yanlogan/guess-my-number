'use strict';

const body = document.querySelector('body');
const input = document.querySelector('.guess');
const message = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const number = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');

const generateNumber = () => {
  return Math.trunc(Math.random() * 100) + 1;
};

// TODO: add resetGame() function

let randomNumber = generateNumber();
console.log(randomNumber);

let score = 10;
let highScore = 0;
scoreEl.textContent = score;
highScoreEl.textContent = highScore;

checkBtn.addEventListener('click', () => {
  if (score > 0) {
    const guess = Number(input.value);
    // TODO: check if 0 <= guess <= 100
    if (!guess) {
      message.textContent = '⛔ No number!';
    } else if (guess === randomNumber) {
      number.textContent = guess;
      message.textContent = '🎉 Congrats!';
      if (score > highScore) {
        highScore = score;
        highScoreEl.textContent = highScore;
      }
      // resetGame();
      // FIXME: change score only on reset
      score = 10;
      scoreEl.textContent = score;
      body.style.backgroundColor = '#60b347';
      number.style.width = '25rem';
    } else if (guess > randomNumber) {
      message.textContent = '📈 Too high!';
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = '📉 Too low!';
      score--;
      scoreEl.textContent = score;
    }
    if (!score) {
      message.textContent = '💥 You lost!';
      // resetGame();
    }
  }
});

// TODO: add an event listener to the again button to reset the game and regenerate the random number
