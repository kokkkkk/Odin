
let playerScore = 0;
let computerScore = 0;
let counter = 0;

const container = document.querySelector('.result');
const playerScoreText = document.querySelector('.playerScore');
const computerScoreText = document.querySelector('.computerScore');

function getComputerChoice(){
    let choices = ["Rock","Paper","Scissors"];

    return choices[parseInt(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {

    console.log(playerSelection + " " + computerSelection);
    counter++;

    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1);
    if(playerSelection==computerSelection){
        container.textContent = "Draw."
    }else if((playerSelection=="Rock" && computerSelection == "Scissors") 
            ||(playerSelection=="Paper" && computerSelection == "Rock")
            ||(playerSelection=="Scissors" && computerSelection == "Paper")
    ){
        playerScore++;
        container.textContent = "You Win! "+playerSelection + " beats " + computerSelection;  
    }else{
        computerScore++;
        container.textContent = "You Lose! "+ computerSelection + " beats " + playerSelection;  
    }

    playerScoreText.textContent = "Player score: " + playerScore;
    computerScoreText.textContent = "Computer score: " + computerScore;

    if(counter == 5)
        updateFinalResult();
}

function updateFinalResult(){

    if(computerScore==playerScore)
        container.textContent = "Final result: Draw";
    else if(computerScore>playerScore){
        container.textContent = "Final result: Computer win!";
    }else{
        container.textContent = "Final result: Player win!";
    }

    removeEventListener();
}

function removeEventListener(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button=>button.disabled = true);
}
   
function game(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button=>button.addEventListener('click',function(){
        playRound(button.className,getComputerChoice())
    }));
    
}

game();
