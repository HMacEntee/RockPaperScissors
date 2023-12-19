let playerScore = 0;
let computerScore = 0;
let turns = 0;

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

function round(playerSelection){
    turns++;
    
    const computerSelection = getComputerChoice();

    p_choice.textContent = playerSelection;
    c_choice.textContent = computerSelection;

    if(computerSelection === "ROCK" && playerSelection === "PAPER"){
        playerScore++;
        //return "You Win! Paper beats Rock";
    }
    else if(computerSelection === "PAPER" && playerSelection === "SCISSORS"){
        playerScore++;
        //return "You Win! Scissors beats Paper";
    }
    else if(computerSelection === "SCISSORS" && playerSelection === "ROCK"){
        playerScore++;
        //return "You Win! Rock beats Scissors";
    }
    else if(computerSelection === playerSelection){
        //return "Its a Tie!"
    }
    else{
        computerScore++;
    }
}

function updatePage(){
    p_content.textContent = playerScore;
    c_content.textContent = computerScore;
    t_content.textContent = turns;

    playerPoints.appendChild(p_content);
    compPoints.appendChild(c_content);
    turnCount.appendChild(t_content);
    playerChoice.appendChild(p_choice);
    compChoice.appendChild(c_choice);

    if(playerScore == 5){
        e_content.textContent = "You Won! :)";
        endGame.appendChild(e_content);
        endPage();
    }
    if(computerScore == 5){
        e_content.textContent = "You Lose :(";
        endGame.appendChild(e_content);
        endPage();
    }
}

function endPage(){
    const reset_button = document.createElement('button');
    reset_button.setAttribute("id", "rstbtn");
    reset_button.classList.add("button-reset");
    reset_button.textContent = "Reset Game";

    endGame.classList.add("active");
    shade.classList.add("active");
    endGame.appendChild(reset_button);

    const resetBtn = document.getElementById("rstbtn");
    
    if(resetBtn){
        resetBtn.addEventListener("click", function(){
            endGame.removeChild(reset_button);
            resetGame();
        });
    }
}

function resetGame(){
    endGame.classList.remove("active");
    shade.classList.remove("active");
    playerScore = 0;
    computerScore = 0;
    turns = 0;
    p_choice.textContent = "No Moves Yet";
    c_choice.textContent = "No Moves Yet";
    updatePage();
}

const rBtn = document.getElementById("rock");
const pBtn = document.getElementById("paper");
const sBtn = document.getElementById("scissors");
const playerPoints = document.querySelector("#player_score");
const compPoints = document.querySelector("#comp_score");
const playerChoice = document.querySelector("#player-choice");
const compChoice = document.querySelector("#comp-choice");
const turnCount = document.querySelector("#turn");
const endGame = document.querySelector("#endgame");
const shade = document.querySelector("#shading");


//logic for detecting button presses
rBtn.addEventListener("click", function(){
    round("ROCK");
    updatePage();
});
pBtn.addEventListener("click", function(){
    round("PAPER");
    updatePage();
});
sBtn.addEventListener("click", function(){
    round("SCISSORS");
    updatePage();
});

//create default look of webpage
const p_content = document.createElement('div');
p_content.classList.add('content');
p_content.textContent = playerScore;

const c_content = document.createElement('div');
c_content.classList.add('content');
c_content.textContent = computerScore;

const t_content = document.createElement('div');
t_content.classList.add('content');
t_content.textContent = turns;

const e_content = document.createElement('div');
e_content.classList.add('content');

const p_choice = document.createElement('div');
p_choice.classList.add('content');
p_choice.textContent = "No Move Yet";

const c_choice = document.createElement('div');
c_choice.classList.add('content');
c_choice.textContent = "No Move Yet";

playerPoints.appendChild(p_content);
compPoints.appendChild(c_content);
turnCount.appendChild(t_content);
playerChoice.appendChild(p_choice);
compChoice.appendChild(c_choice);
