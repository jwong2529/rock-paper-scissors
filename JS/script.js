
//Computer randomly picks between rock, paper, or scissors
function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    let random = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    return choices[random];
}

//Converts input into uppercase and returns result of a single round played
function playRound(playerSelection, computerSelection) {
    let play = playerSelection.toUpperCase();
    if (play === "ROCK" && computerSelection === "PAPER") {
        return "You lose!";
    }
    if (play === "ROCK" && computerSelection === "SCISSORS") {
        return "You win!";
    }
    if (play === "PAPER" && computerSelection === "ROCK") {
        return "You win!";
    }
    if (play === "PAPER" && computerSelection === "SCISSORS") {
        return "You lose!";
    }
    if (play === "SCISSORS" && computerSelection === "PAPER") {
        return "You win!";
    }
    if (play === "SCISSORS" && computerSelection === "ROCK") {
        return "You lose!";
    }
    else {
        return "It's a tie!";
    }
}

//Outputs final score message from five-round game
function calculateScore(player, computer) {
    if (player > computer) {
        console.log("You win with a score of " + player + "-" + computer + "!");
    }
    else if (player < computer) {
        console.log("You lose with a score of " + player + "-" + computer + "!");
    }
    else {
        console.log("It's a tie with a score of " + player + "-" + computer + "!");
    }
}

//Plays five rounds and keeps track of scores
// function game() {
//     let player = 0;
//     let comp = 0;
//     for (let i = 0; i < 5; i++) {
//         let result = playRound(prompt("Make your pick!"), getComputerChoice());
//         if (result === "You win!") {
//             player++;
//         }
//         if (result === "You lose!") {
//             comp++;
//         }
//         console.log(result);
//     }
//     calculateScore(player, comp);
// }

//Runs game
game();