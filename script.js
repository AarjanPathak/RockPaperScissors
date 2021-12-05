        //MAIN GAME 

let elements = ['rock', 'paper', 'scissors'];

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function Computerplay(){
    return elements[Math.floor(Math.random()*elements.length)];
}

function playRound(playerSelection, computerSelection)
{   // FOR TIE!
    if(computerSelection == playerSelection) {
            scoreinfo.textContent = 'TIE!';
    }
    
    //FOR COMPUTER WIN
    else if((computerSelection == 'rock' && playerSelection == 'scissors')
    ||(computerSelection == 'paper' && playerSelection == 'rock')
    ||(computerSelection == 'scissors' && playerSelection == 'paper'))
    {   
        scoreinfo.textContent = 'COMPUTER WINS!'; 
        computerScore++; 
        computerScoreInfo.textContent = `Computer: ${computerScore}`;
    }

    //FOR PLAYER WIN
    else {
            scoreinfo.textContent = 'YOU WIN!';
            playerScore++;
            playerScoreInfo.textContent = `Player: ${playerScore}`;
    }
}

const rockBtn = document.getElementById('B1');
const paperBtn = document.getElementById('B2');
const scissorsBtn = document.getElementById('B3');
const playerChoicePara = document.getElementById('playerSelection');
const computerChoicePara = document.getElementById('computerSelection');
const scoreinfo = document.getElementById('score');
const playerScoreInfo = document.getElementById('player');
const computerScoreInfo = document.getElementById('computer');

rockBtn.addEventListener('click',()=> Selection('rock'));
paperBtn.addEventListener('click',()=> Selection('paper'));
scissorsBtn.addEventListener('click',()=> Selection('scissors'));


function IsOver()
{
        if(playerScore>computerScore)
        {

                alert('YOU WON! :)  PRESS ON  RESTART  BUTTON TO PLAY THE GAME AGAIN');
        }
        else alert('YOU LOST! :(  PRESS ON  RESTART  BUTTON TO PLAY THE GAME AGAIN');

       
}

function Selection(playerChoice)
{
        if(playerScore == 5 || computerScore == 5)
        {
                IsOver();
                return;
        }
        playerSelection = playerChoice;
        computerSelection = Computerplay();
        playerChoicePara.textContent = playerSelection.toUpperCase();
        computerChoicePara.textContent = computerSelection.toUpperCase();
        playRound(playerSelection, computerSelection);    
}


