let elements = ['rock', 'papers', 'scissors'];

let playerSelection;
let computerSelection;

function Computerplay(){
    return elements[Math.floor(Math.random()*elements.length)];
}

function playRound(playerSelection, computerSelection)
{   // FOR TIE!
    if(computerSelection == playerSelection) console.log("It's a tie!");
    
    //FOR COMPUTER WIN
    else if((computerSelection == 'rock' && playerSelection == 'scissors')
    ||(computerSelection == 'papers' && playerSelection == 'rock')
    ||(computerSelection == 'scissors' && playerSelection == 'papers'))
    {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }

    //FOR PLAYER WIN
    else console.log(`You win! ${playerSelection} beats ${computerSelection}`);
}

function game()
{
    let i=0;
    while(i<5)
    {
        playerSelection = prompt("Write rock, papers or scissors");
        playerSelection = playerSelection.toLowerCase();
        computerSelection = Computerplay();
        playRound(playerSelection, computerSelection);
        i++;
    }
}

game();
