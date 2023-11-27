function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    let response;
    if(choice == 0) response = "ROCK";
    else if (choice == 1) response = "PAPER";
    else if (choice == 2) response = "SCISSORS";
    return response;
}

function cap(word){
    let first = word.charAt(0);
    let rest = word.charAt(1);
    for(let i = 2; i < word.length; i++){
        rest += word.charAt(i);
    }

    return first.toUpperCase() + rest.toLowerCase();
}

function round(){
    const playerSelection = prompt("Choose Rock, Paper, or Scissors: ").toUpperCase();
    const computerSelection = getComputerChoice();

    if(computerSelection === "ROCK" && playerSelection === "PAPER"){
        return "You Win! Paper beats Rock";
    }
    else if(computerSelection === "PAPER" && playerSelection === "SCISSORS"){
        return "You Win! Scissors beats Paper";
    }
    else if(computerSelection === "SCISSORS" && playerSelection === "ROCK"){
        return "You Win! Rock beats Scissors";
    }
    else if(computerSelection === playerSelection){
        return "Its a Tie!"
    }
    else{
        return "You Lose! " + cap(computerSelection) + " beats " + cap(playerSelection);
    }
}

for(let i = 0; i < 5; i++){
    console.log(round());
}