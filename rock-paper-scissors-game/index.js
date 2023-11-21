const buttons = document.querySelectorAll('button');
const resultEl = document.getElementById('result');
const playerScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

const PlayRound = (playerSelection, computerSelection,) => {
  if(playerSelection === computerSelection){
    return "It's a tie!";
  }
  else if(
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ){
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }else{
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const result = PlayRound(button.id, computerPlay());
    console.log(result);
    resultEl.textContent = result;
  });
});
