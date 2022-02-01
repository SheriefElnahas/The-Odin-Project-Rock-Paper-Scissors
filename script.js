// DOM Selections
const playerChoiceElement = document.querySelector('.player-choice');
const computerChoiceElement = document.querySelector('.computer-choice');
const buttons = document.querySelectorAll('.btn');

const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal-text');
const overlay = document.querySelector('.overlay');



const resultElement = document.querySelector('.result');
const detailsElement = document.querySelector('.details');
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');

const playAgain = document.querySelector('.modal-button');


let playerScore = 0;
let computerScore = 0;
let gameOver = true;

const choices = ['rock', 'paper', 'scissors'];

const randomNum = () => Math.floor(Math.random() * 3);



function computerPlay() {
    return  choices[randomNum()];
}

function changeToEmoji(choice) {
    if(choice === 'paper') {
        choice = '✋';
    } else if(choice === 'rock') {
        choice = '✊';
    } else if (choice === 'scissors') {
        choice = '✌';
    }
    return choice;
}

function checkWinner(playerSelection,computerSelection) {

    if
    (   playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper'||
        playerSelection === 'paper' && computerSelection === 'rock'    
     ) {
         playerScore++;
        return `You Won! ${playerSelection} beats ${computerSelection}`   
       } else if 
    (  computerSelection === 'rock' && playerSelection === 'scissors' ||
       computerSelection === 'scissors' && playerSelection === 'paper'   ||
       computerSelection === 'paper' && playerSelection === 'rock'
    ) {
        computerScore++;
        return `You Lost! ${playerSelection} beats ${computerSelection}`   
    } else {
        return `It's a tie! ${playerSelection} ties with ${computerSelection} `
    }
}


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        const playerChoice = e.target.classList[1];
        const computerChoice = computerPlay();

        const result = checkWinner(playerChoice , computerChoice);


        if(playerScore === 5 || computerScore === 5) {
            gameOver = false;

            modalText.textContent = result.split('!')[0] + "!";
            modal.classList.remove('hide');
            overlay.classList.remove('hide');
        }

        if(gameOver) {
        
    
            playerChoiceElement.textContent = changeToEmoji(playerChoice);
            computerChoiceElement.textContent = changeToEmoji(computerChoice);
    
          
      
    
            resultElement.textContent = result.split('!')[0] + "!";
            detailsElement.textContent = result.split('!')[1] ;
        
    
            playerScoreElement.textContent = playerScore;
            computerScoreElement.textContent = computerScore;
        }
    })
})


playAgain.addEventListener('click', function() {
    reset();
});

function reset() {
    resultElement.textContent = 'Choose your weapon!';
    detailsElement.textContent = 'First to score 5 points wins the game';

    modal.classList.add('hide');
    overlay.classList.add('hide');

    playerChoiceElement.textContent = computerChoiceElement.textContent = '?';
    playerScoreElement.textContent = computerScoreElement.textContent = 0;

    playerScore = computerScore = 0;
    gameOver = true;
}





