// DOM Selections
const playerChoiceElement = document.querySelector('.player-choice');
const computerChoiceElement = document.querySelector('.computer-choice');
const buttons = document.querySelectorAll('.btn');


const resultElement = document.querySelector('.result');
const detailsElement = document.querySelector('.details');
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');


let playerScore = 0;
let computerScore = 0;
let gameOver = true;

const choices = ['✊', '✋', '✌'];

const randomNum = () => Math.floor(Math.random() * 3);



function computerPlay() {
    return  choices[randomNum()];
}


function checkWinner(playerSelection,computerSelection) {

    if
    (   playerSelection === '✊' && computerSelection === '✌' ||
        playerSelection === '✌' && computerSelection === '✋'||
        playerSelection === '✋' && computerSelection === '✊'    
     ) {
         playerScore++;
        return `You Won! ${playerSelection} beats ${computerSelection}`   
       } else if 
    (  computerSelection === '✊' && playerSelection === '✌' ||
       computerSelection === '✌' && playerSelection === '✋'   ||
       computerSelection === '✋' && playerSelection === '✊'
    ) {
        computerScore++;
        return `You Lost! ${playerSelection} beats ${computerSelection}`   
    } else {
        return `It's a tie! ${playerSelection} ties with ${computerSelection} `
    }
}


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(playerScore === 5 || computerScore === 5) {
            gameOver = false;
        }

        if(gameOver) {
            const playerChoice = e.target.textContent;
            const computerChoice = computerPlay();
    
            playerChoiceElement.textContent = playerChoice;
            computerChoiceElement.textContent = computerChoice;
    
            const result = checkWinner(playerChoice , computerChoice);
      
    
            resultElement.textContent = result.split('!')[0] + "!";
            detailsElement.textContent = result.split('!')[1] ;
        
    
            playerScoreElement.textContent = playerScore;
            computerScoreElement.textContent = computerScore;
        }
        
        

    })
})





