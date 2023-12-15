const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(function (button) {
  button.addEventListener('click', handleClick);

});


function handleClick(e) {
    const clickButton = e.currentTarget.value;
    let string = clickButton;

    switch (clickButton) {
        case 'rock':
            string = 'rock';
            break;
        case 'paper':
            string = 'paper';
            break;
        case 'scissors':
            string = 'scissors';
            break;
        case 'again':
            string = 'again';
            break;
    }
    game(string);
};


function getComputerChoice(){
    const numAleatorio = Math.floor(Math.random() * 3);
    switch (numAleatorio) {
        case 0:
            return ("Rock");
            break;
        case 1:
            return ("Paper");
            break;
        case 2:
            return ("Scissors");
            break;
    }
};

function playRound(playerSelection, computerSelection){
    
    const lowerString = playerSelection;
    switch(lowerString) {
        case "rock":
            if (computerSelection == "Rock")
                return "It's a tie! you and the computer choose Rock!";
            else if (computerSelection == "Paper")
                return "You loose! you choose Rock and the computer choose Paper";
            else
                return "You win! you choose Rock and the computer choose Scissors";
            break;
        case "paper":
            if (computerSelection == "Rock")
                return "You win! you choose Paper and the computer choose Rock";
            else if (computerSelection == "Paper")
                return "It's a tie! you and the computer choose Paper!";
            else
                return "You loose! you choose Paper and the computer choose Scissors";
            break;
        case "scissors":
            if (computerSelection == "Rock")
                return "You loose! you choose Scissors and the computer choose Rock";
            else if (computerSelection == "Paper")
                return "You win! you choose Scissors and the computer choose Paper";
            else
                return "It's a tie! you and the computer choose Scissors!";
            break;
    }
};


function disableButtons(){
    const divButtons = document.querySelector('.buttons-disable');
    const disableButton = divButtons.querySelectorAll('button');

    for (const buttons of disableButton) {
        buttons.disabled = true;
    }
};

function enableButtons(){
    const divButtons = document.querySelector('.buttons-disable');
    const enableButton = divButtons.querySelectorAll('button');

    for (const buttons of enableButton) {
        buttons.disabled = false;
    }
};

let scorePlayer = document.querySelector(".scorePlayer");
let scoreComputer = document.querySelector(".scoreComputer");
let msgScoreResult = document.querySelector(".resultWinner");;

let player = 0;
let computer = 0;
let i = 0;

function resetGame(){
    player = 0;
    computer = 0;
    i = 0;
    scorePlayer.textContent = player;
    scoreComputer.textContent = computer;
    msgScoreResult.textContent = "";
    enableButtons();
}


function game(playerSelection){
    
    if (playerSelection !== 'again'){
        computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result.includes("win")) {
            player += 1;
        } 
        else if (result.includes("loose")) {
            computer += 1;
        }

        scorePlayer.textContent = player;
        scoreComputer.textContent = computer;
        msgScoreResult.textContent = result;
        i = i + 1;
        console.log(i);
        if (i == 5){
            disableButtons();
            if (player > computer){
                msgScoreResult.textContent = "You won the best of five! If you want a revenge, click on Play Again!";
            }
            else if (computer > player){
                msgScoreResult.textContent = "You lost the best of five! If you want a revenge, click on Play Again!";
            }
            else {
                msgScoreResult.textContent ="Wow! It's a tie! If you want play again, click on Play Again!";
            }
        }
    }
    else {
        const playAgainButton = document.querySelector(".again button");
        playAgainButton.addEventListener("click", resetGame);
    }
}