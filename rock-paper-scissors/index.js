
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
        return "You Win! "+playerSelection + " beats " + computerSelection;  
    }else{
        return "You Lose! "+ computerSelection + " beats " + playerSelection;  
    }
  }
   
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
