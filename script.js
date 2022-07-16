'use strict';

const body = document.querySelector('body');
const input = document.querySelector('.guess');
const message = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const number = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
let randomNumber = 0;

const generateNumber = () => {
  return Math.trunc(Math.random() * 100) + 1;
};

const displayMessage = text => (message.textContent = text);

const resetGame = () => {
  input.value = '';
  checkBtn.disabled = false;
  number.textContent = '?';
  number.style.width = '15rem';
  body.style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  score = 100;
  scoreEl.textContent = score;
  randomNumber = generateNumber();
};

randomNumber = generateNumber();

let score = 100;
let highScore = 0;
scoreEl.textContent = score;
highScoreEl.textContent = highScore;

checkBtn.addEventListener('click', () => {
  if (score > 0) {
    const guess = Number(input.value);
    if (!guess) {
      displayMessage('⛔ No number!');
    } else if (guess < 1 || guess > 100) {
      displayMessage('⛔ Number must be between 1 and 100!');
    } else if (guess === randomNumber) {
      displayMessage('🎉 Congrats!');
      if (score > highScore) {
        highScore = score;
        highScoreEl.textContent = highScore;
      }
      checkBtn.disabled = true;
      body.style.backgroundColor = '#60b347';
      number.textContent = guess;
      number.style.width = '25rem';
    } else {
      const text = guess > randomNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(text);
      score--;
      scoreEl.textContent = score;
    }
  } else {
    displayMessage('💥 You lost!');
    checkBtn.disabled = true;
  }
});

againBtn.addEventListener('click', () => resetGame());
