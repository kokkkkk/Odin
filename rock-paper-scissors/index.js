
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choices = ["Rock","Paper","Scissors"];

    return choices[parseInt(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1);
    if(playerSelection==computerSelection){
        return "Draw."
    }else if((playerSelection=="Rock" && computerSelection == "Scissors") 
            ||(playerSelection=="Paper" && computerSelection == "Rock")
            ||(playerSelection=="Scissors" && computerSelection == "Paper")
    ){
        playerScore++;
        return "You Win! "+playerSelection + " beats " + computerSelection;  
    }else{
        computerScore++;
        return "You Lose! "+ computerSelection + " beats " + playerSelection;  
    }
}
   
function game(){
    for(let i = 0;i<5;i++){
        console.log(playRound(prompt("Paper,Scissors,Rock?"),getComputerChoice()));
    }
    if(computerScore==playerScore)
        console.log("Final result: Draw");
    else if(computerScore>playerScore){
        console.log("Final result: Computer win!");
    }else{
        console.log("Final result: Player win!");
    }
}

game();
