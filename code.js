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
}

function playRound(playerSelection, computerSelection){
    
    const lowerString = playerSelection.toLowerCase();
    switch(lowerString) {
        case "rock":
            if (computerSelection == "Rock")
                return "Empate! Rock e Rock nao acontece nada!";
            else if (computerSelection == "Paper")
                return "Voce perdeu! Paper vence de Rock!";
            else
                return "Voce Venceu! Rock vence de Scissors";
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
}

function game(){
    let i = 0;
    let player = 0;
    let computer = 0;

    while (i < 5)
    {
        const playerSelection = window.prompt("Escolha entre Rock, Paper, Scissors: ");
        const result = playRound(playerSelection, getComputerChoice());
        if (result.includes("venceu"))
            player += 1;
        else if (result.includes("perdeu"))
            computer += 1;
        console.log("Voce escolheu: ", playerSelection);
        console.log(result);
        console.log("O Player tem %d pontos e a Maquina tem %d pontos.", player, computer);
        i++;
    }
    if (player > computer)
        console.log("O player ganhou a melhor de 5 com %d pontos.", player);
    else if (computer < player)
        console.log("A Maquina ganhou a melhor de 5 com %d pontos.", computer);
    else
        console.log("O Player e Maquina empataram com %d pontos.", computer);
}

console.log(game());