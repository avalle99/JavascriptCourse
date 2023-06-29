'use strict';

const rollBtn = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const holdBtn = document.querySelector('.btn--hold');
const resetBtn = document.querySelector('.btn--new');

// dice.attributes.src.nodeValue  <- Src value
const player1 = {
  name: document.querySelector('#name--0'),
  totalScore: 0,
  domTotalScore: document.querySelector('#score--0'),
  currentScore: 0,
  domCurrScore: document.querySelector('#current--0'),
  classSection: document.querySelector('.player--0'),
  isPlaying: 1,
  hasWon: 0,
};

const player2 = {
  name: document.querySelector('#name--1'),
  totalScore: 0,
  domTotalScore: document.querySelector('#score--1'),
  currentScore: 0,
  domCurrScore: document.querySelector('#current--1'),
  classSection: document.querySelector('.player--1'),
  isPlaying: 0,
  hasWon: 0,
};

rollBtn.addEventListener('click', function () {
  console.log('clicked');
  const randNum = Math.floor(Math.random() * 6) + 1;
  console.log(randNum);
  dice.attributes.src.nodeValue = `./images/dice-${randNum}.png`;

  if (player1.isPlaying === 1) {
    currentPlayerScore(randNum, player1, player2);
  } else if (player2.isPlaying === 1) {
    currentPlayerScore(randNum, player2, player1);
  }
});

function currentPlayerScore(randNum, player, secondaryPlayer) {
  player.currentScore += randNum;
  player.domCurrScore.textContent = player.currentScore;
  console.log(player.currentScore);

  if (randNum === 1) {
    player.isPlaying = 0;
    player.currentScore = 0;
    player.domCurrScore.textContent = player.currentScore;

    player.classSection.classList.toggle('player--active');
    secondaryPlayer.classSection.classList.toggle('player--active');

    secondaryPlayer.isPlaying = 1;
  }
}

holdBtn.addEventListener('click', function () {
  if (player1.isPlaying === 1) {
    totalPlayerScore(player1, player2);
  } else if (player2.isPlaying === 1) {
    totalPlayerScore(player2, player1);
  }

  winnerPlayer(player1, player2);
});

function totalPlayerScore(player, secondaryPlayer) {
  player.totalScore += player.currentScore;
  player.domTotalScore.textContent = player.totalScore;

  player.currentScore = 0;
  player.domCurrScore.textContent = player.currentScore;

  player.isPlaying = 0;
  secondaryPlayer.isPlaying = 1;

  player.classSection.classList.toggle('player--active');
  secondaryPlayer.classSection.classList.toggle('player--active');
}

function winnerPlayer(player, secondaryPlayer) {
  if (player.totalScore >= 100) {
    player.classSection.classList.toggle('player--winner');
    holdBtn.disabled = true;
    rollBtn.disabled = true;
    player.hasWon = 1;
  } else if (secondaryPlayer.totalScore >= 100) {
    secondaryPlayer.classSection.classList.toggle('player--winner');
    holdBtn.disabled = true;
    rollBtn.disabled = true;
    secondaryPlayer.hasWon = 1;
  }
}

function resetScores(player) {
  player.totalScore = 0;
  player.domTotalScore.textContent = 0;
  player.currentScore = 0;
  player.domCurrScore.textContent = 0;
}

resetBtn.addEventListener('click', function () {
  console.log('Reset');
  resetScores(player1);
  resetScores(player2);
  holdBtn.disabled = false;
  rollBtn.disabled = false;

  if (player1.isPlaying === 1) {
    player2.isPlaying = 0;
  } else if (player2.isPlaying === 1) {
    player1.isPlaying = 1;
    player2.isPlaying = 0;
    player1.classSection.classList.toggle('player--active');
    player2.classSection.classList.toggle('player--active');
  }

  if (player1.hasWon === 1) {
    player1.classSection.classList.toggle('player--winner');
    player1.hasWon = 0;
  } else if (player2.hasWon === 1) {
    player2.classSection.classList.toggle('player--winner');
    player2.hasWon = 0;
  }
});
