'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    displayMessage('😭Enter Your Guess');
  } //Correct Guess
  else if (guess === secretNumber) {
    displayMessage('🥳Correct Guess Bro');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } //guess greater or lesser then secret number
  else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '👆Too High Guess Bro!' : '👇Too Low Guess Bro!'
      );
      score--;
      document.querySelector('.message').style.color = 'Orange';

      document.querySelector('.score').textContent = score;
      score--;
    } else {
      displayMessage('💥 Lost the game Try Agan!');
      document.querySelector('.message').style.color = 'Red';
      document.querySelector('.score').textContent = 0;
    }
  }
});
//Reset game with not changing Highscore
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15 rem';
});
