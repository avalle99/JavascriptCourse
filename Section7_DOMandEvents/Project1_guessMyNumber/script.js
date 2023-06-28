'use strict';

let secretNumber = generateNumber();
let score = 20;
let highScore = 0;

let message = document.querySelector('.message');
let scoreDom = document.querySelector('.score');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'No number!';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      scoreDom.textContent = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = guess > secretNumber ? 'Too High!' : 'Too Low!';
      score--;
      scoreDom.textContent = score;
    } else {
      message.textContent = 'You lost the game!';
      score = 0;
      scoreDom.textContent = score;
    }
  }
});

function generateNumber() {
  let num = Math.trunc(Math.random() * 20) + 1;
  return num;
}

const resetButton = document.querySelector('#resetButton');

resetButton.addEventListener('click', function () {
  score = 20;
  scoreDom.textContent = score;
  document.querySelector('.number').textContent = '?';
  message.textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  secretNumber = generateNumber();
});
