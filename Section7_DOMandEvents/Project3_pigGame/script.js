'use strict';

const rollBtn = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');

// dice.attributes.src.nodeValue  <- Src value

rollBtn.addEventListener('click', function () {
  const randNum = Math.floor(Math.random() * 6) + 1;
  console.log(randNum);
  dice.attributes.src.nodeValue = `./images/dice-${randNum}.png`;
});
