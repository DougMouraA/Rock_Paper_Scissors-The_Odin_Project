const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(function (button) {
  button.addEventListener('click', handleClick);

});


function handleClick(e) {
    const clickButton = e.target.value;
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
                return "Empate! Rock e Rock nao acontece nada!";
            else if (computerSelection == "Paper")
                return "Voce perdeu! Paper vence de Rock!";
            else
                return "Voce venceu! Rock vence de Scissors";
            break;
        case "paper":
            if (computerSelection == "Rock")
                return "Voce venceu! Paper vence de Rock!";
            else if (computerSelection == "Paper")
                return "Empate! Paper e Paper nao acontece nada!";
            else
                return "Voce perdeu! Scissors vence de Paper!";
            break;
        case "scissors":
            if (computerSelection == "Rock")
                return "Voce perdeu! Rock vence de Scissors";
            else if (computerSelection == "Paper")
                return "Voce venceu! Scissors vence de Paper!";
            else
                return "Empate! Scissors e Scissors nao acontece nada!";
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
        if (result.includes("venceu")) {
            player += 1;
        } 
        else if (result.includes("perdeu")) {
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
                msgScoreResult.textContent = "You won the best of five! If you want play again, click on Play Again!";
            }
            else if (computer > player){
                msgScoreResult.textContent = "You loose the best of five! If you want a revange, click on Play Again!";
            }
            else {
                msgScoreResult.textContent ="Wow it's a tie! If you want play agian just click on the button bellow";
            }
        }
    }
    else {
        const playAgainButton = document.querySelector(".again button");
        playAgainButton.addEventListener("click", resetGame);
    }
}