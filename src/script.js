
const playerScore = 0;
const computerScore = 0;
const playerChoiceDisplay = document.getElementById('yourchoice');
const computerChoiceDisplay = document.getElementById('computerchoice');
const playerScoreDisplay =document.getElementById('yourscore');
const computerScoreDisplay =document.getElementById('computerscore');
const possibleChoices = document.querySelectorAll('button');
const resultDisplay = document.getElementById('result')
let playerChoice
let computerChoice
let result
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e)=> {
  playerChoice = e.target.id;
  playerChoiceDisplay.innerHTML = playerChoice
  generateComputerChoice();
  getResult();
}))
function generateComputerChoice()
{
  randomNumber = Math.floor(Math.random()*3);
  console.log(randomNumber)

  if(randomNumber === 0)
  {
    computerChoice = 'scissors';
  }
  if(randomNumber === 1)
  {
    computerChoice = 'paper';
  }
  if(randomNumber === 2)
  {
    computerChoice = 'rock';
  }
  computerChoiceDisplay.innerHTML= computerChoice
}

function getResult()
{
  if(computerChoice === 'rock')
  {
    if(playerChoice === 'rock')
    {
      result = 'It is a tie'
    }
    if(playerChoice === 'paper')
    {
      result = 'you win'
    }
    if(playerChoice === 'scissors')
    {
      result = 'You lose'
    }
  resultDisplay.innerHTML = result;
  }
  if(computerChoice === 'paper')
  {
    if(playerChoice === 'paper')
    {
      result = 'It is a tie'
    }
    if(playerChoice === 'scissors')
    {
      result = 'you win'
    }
    if(playerChoice === 'rock')
    {
      result = 'You lose'
    }
  resultDisplay.innerHTML = result;
  }
  if(computerChoice === 'scissors')
  {
    if(playerChoice === 'scissors')
    {
      result = 'It is a tie'
    }
    if(playerChoice === 'rock')
    {
      result = 'you win'
    }
    if(playerChoice === 'paper')
    {
      result = 'You lose'
    }
  resultDisplay.innerHTML = result;
  }
}
