
let yourScore = document.querySelector(".your-score");
let yourPoints = 0;
yourScore.textContent = yourPoints;
let cpuScore = document.querySelector(".cpu-score");
let cpuPoints = 0;
cpuScore.textContent = cpuPoints;

const playerRock = document.querySelector(".rock");
const playerPaper = document.querySelector(".paper");
const playerScissors = document.querySelector(".scissors");
const cpuChoice = document.querySelector(".cpu-choice");

//Computer randomly picks between rock, paper, or scissors
function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    let random = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    return choices[random];
}

//Changes icon in CPU box based on random choice
function checksComputerChoice(choice) {
    if (choice === "ROCK") {
        cpuChoice.textContent = "🪨";
    }
    if (choice === "PAPER") {
        cpuChoice.textContent = "🧻";
    }
    if (choice === "SCISSORS") {
        cpuChoice.textContent = "✂️";
    }
}

//Resets icon in CPU box after 1 second
function resetComputerChoice() {
    setTimeout(() => {
        cpuChoice.textContent = "❓";
    }, 1000)
}

//Changes box border colors based on right/wrong choice
function rightAnswer(box) {
    box.style.borderColor = "green";
}
function wrongAnswer(box) {
    box.style.borderColor = "red";
}
function tieAnswer(box1, box2) {
    box1.style.borderColor = "yellow";
    box2.style.borderColor = "yellow";
}

//Resets box border colors after 1 second
function resetBorders(box1, box2) {
    setTimeout(() => {
        box1.style.borderColor  = "black";
        box2.style.borderColor = "black";
    }, 1000)
}

//Plays one match
//This function is kind of bloated and I probably should have made another function. 
//I also should have had a better system for inputting arguments for the user's choices.
function playRound(playerSelection, computerSelection) {
    let play = playerSelection.toUpperCase();
    checksComputerChoice(computerSelection);
    if (play === "ROCK" && computerSelection === "PAPER") {
        cpuPoints += 1;
        updateCpuScore();
        resetComputerChoice();
        rightAnswer(cpuChoice);
        wrongAnswer(playerRock);
        resetBorders(playerRock, cpuChoice);
    }
    if (play === "ROCK" && computerSelection === "SCISSORS") {
        yourPoints += 1;
        updateYourScore();
        resetComputerChoice();
        rightAnswer(playerRock);
        wrongAnswer(cpuChoice);
        resetBorders(playerRock, cpuChoice);
    }
    if (play === "PAPER" && computerSelection === "ROCK") {
        yourPoints += 1;
        updateYourScore();
        resetComputerChoice();
        rightAnswer(playerPaper);
        wrongAnswer(cpuChoice);
        resetBorders(playerPaper, cpuChoice);
    }
    if (play === "PAPER" && computerSelection === "SCISSORS") {
        cpuPoints += 1;
        updateCpuScore();
        resetComputerChoice();
        rightAnswer(cpuChoice);
        wrongAnswer(playerPaper);
        resetBorders(playerPaper, cpuChoice);
    }
    if (play === "SCISSORS" && computerSelection === "PAPER") {
        yourPoints += 1;
        updateYourScore();
        resetComputerChoice();
        rightAnswer(playerScissors);
        wrongAnswer(cpuChoice);
        resetBorders(playerScissors, cpuChoice);
    }
    if (play === "SCISSORS" && computerSelection === "ROCK") {
        cpuPoints += 1;
        updateCpuScore();
        resetComputerChoice();
        rightAnswer(cpuChoice);
        wrongAnswer(playerScissors);
        resetBorders(playerScissors, cpuChoice);
    }
    if (play === computerSelection) {
        resetComputerChoice();
        if (play === "ROCK") {
            tieAnswer(playerRock, cpuChoice);
            resetBorders(playerRock, cpuChoice);
        }
        if (play === "PAPER") {
            tieAnswer(playerPaper, cpuChoice);
            resetBorders(playerPaper, cpuChoice);
        }
        if (play === "SCISSORS") {
            tieAnswer(playerScissors, cpuChoice);
            resetBorders(playerScissors, cpuChoice);
        }
    }
    if (yourPoints === 5 || cpuPoints === 5) {
        setTimeout(() => {
            calculatingResult();
            toggleOverlay();
        },1000);
    }
}

const overlay = document.querySelector("#overlay");
const mask = document.querySelector("#mask");

//Sets the end-game overlay by blurring out background
function toggleOverlay() {
    overlay.style.display = "block";
    mask.style.filter = "blur(30px)";
}

//Sets end-game result by calculating winner
const result = document.querySelector(".result");
function calculatingResult() {
    if (yourPoints > cpuPoints) {
        result.textContent = "You win! 🎉";
    }
    else {
        result.textContent = "You lost! 😔";
    }
}

//Updates the scoreboard
function updateYourScore() {
    yourScore.textContent = yourPoints;
}
function updateCpuScore() {
    cpuScore.textContent = cpuPoints;
}

//Plays a round when user clicks one of their game options
playerRock.addEventListener('click', function(e) {
    playRound("ROCK", getComputerChoice());
});
playerPaper.addEventListener('click', function(e) {
    playRound("PAPER", getComputerChoice());
});
playerScissors.addEventListener('click', function(e) {
    playRound("SCISSORS", getComputerChoice());
});

//Resets the game by unblurring background, hiding overlay, and changing scores back to 0
const replayButton = document.querySelector(".play-again");
function replay() {
    overlay.style.display = "none";
    mask.style.filter = "blur(0px)";
    yourPoints = 0;
    cpuPoints = 0;
    updateYourScore();
    updateCpuScore();
}

//Resets game when user presses button
replayButton.addEventListener('click', function(e) {
    replay();
});


//The functions below were written for the beginning RPS assignment.


//Outputs final score message from five-round game
// function calculateScore(player, computer) {
//     if (player > computer) {
//         console.log("You win with a score of " + player + "-" + computer + "!");
//     }
//     else if (player < computer) {
//         console.log("You lose with a score of " + player + "-" + computer + "!");
//     }
//     else {
//         console.log("It's a tie with a score of " + player + "-" + computer + "!");
//     }
// }

// Plays five rounds and keeps track of scores
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
// game();



