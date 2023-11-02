// RPS Game Global Variables

let winCount = 0;
let loseCount = 0;
let roundCounter = 5;

const wins = document.getElementById("wins");
document.getElementById("wins").textContent = "Wins: " + winCount;
const losses = document.getElementById("losses");
document.getElementById("losses").textContent = "Losses: " + loseCount;
const remainingRounds = document.getElementById("remaining-rounds");
document.getElementById("remaining-rounds").textContent = "Rounds Remaining " + roundCounter;

const playerShowcase = document.getElementById("move-showcase");
const computerShowcase = document.getElementById("computer-showcase");

const rockImage = document.getElementById("rock");
rockImage.src = "./images/janken_gu.png";
rockImage.alt = "A hand using rock.";
const paperImage = document.getElementById("paper");
paperImage.src = "./images/janken_pa.png";
paperImage.alt = "A hand using paper.";
const scissorsImage = document.getElementById("scissors");
scissorsImage.src = "./images/janken_choki.png";
scissorsImage.alt = "A hand using scissors.";

const winnerImage = document.createElement("img");
winnerImage.src = "./images/pose_win_girl.png";
winnerImage.alt = "A girl celebrating her win.";
const loserImage = document.createElement("img");
loserImage.src = "./images/pose_lose_boy.png";
loserImage.alt = "A boy lamenting his loss.";
const outcomePicture = document.getElementById("outcome-picture");
const computerMoveImg = document.getComputerMove("computer-move-img");

let userInput = document.getElementById("userInput");
let move;
let moveLowerCase;
let computerMove;
let playerMove;

const rock = 0;
const paper = 1;
const scissors = 2;

// End of Global Variables, Start of Functions

function getRandom() { // Picks a number between 0-2 for getComputerMove()
    return Math.floor(Math.random() * 3);
}

function getComputerMove() { // Switch case for selecting move with getRandom()
    switch (getRandom()) {
        case 0:
            return computerMove = rock;
            break;
        case 1:
            return computerMove = paper;
            break;
        case 2:
            return computerMove = scissors;
        break
        default:
            alert("The opponent broke!")
    }
    return computerMove
}

function showComputerMove() { // *Outdated* Used to test getComputerMove
    console.log("Show computer move button was clicked.");
    getComputerMove();
    console.log(computerMove)
    if (computerMove === 0) {
        return alert("The computer played 'rock'!");
    } else if (computerMove === 1) {
        return alert("The computer played 'paper'!");
    } else if (computerMove === 2) {
        return alert("The computer played 'scissors'!");
    } else {
        return alert("The computer is confused!");
    }
}


function playGame() { // Basic game loop
    getComputerMove();
    return getWinner();
}

function getWinner() { // Long if, else chain to determine winner
    console.log((playerMove), (computerMove));
    if (playerMove === 0 && computerMove === 0) {
        console.log("It's a tie.");
        alert('Tie, you both played rock.');
    } else if (playerMove === 0 && computerMove === 1) {
        console.log('Player loses.');
        alert('You lose, paper beats rock.');
    } else if (playerMove === 0 && computerMove === 2) {
        console.log('Player wins.');
        alert('You win, rock beats scissors.');
    } else if (playerMove === 1 && computerMove === 0) {
        console.log('Player wins.');
        alert('You win, paper beats rock.');
    } else if (playerMove === 1 && computerMove === 1) {
        console.log("It's a tie.");
        alert('Tie, you both played paper.');
    } else if (playerMove === 1 && computerMove === 2) {
        console.log('Player loses.');
        alert('You lose, scissors beats paper.');
    } else if (playerMove === 2 && computerMove === 0) {
        console.log('Player loses.');
        alert('You lose, rock beats scissors.');
    } else if (playerMove === 2 && computerMove === 1) {
        console.log("Player wins.");
        alert('You win, scissors beats paper.');
    } else if (playerMove === 2 && computerMove === 2) {
        console.log("It's a tie.");
        alert('Tie, you both play scissors.');
    } else {
        console.log("Error, can't determine a winner.");
        alert("Can't determine a winner right now.");
    }
}

// End of Functions, Start of DOM Manipulation for the moveSet

rockImage.addEventListener("click", function(e) {
    console.log("Rock was clicked.");
    playerMove = 0;
    playGame();
});

paperImage.addEventListener("click", function(e) {
    console.log("Paper was clicked.");
    playerMove = 1;
    playGame();
});

scissorsImage.addEventListener("click", function(e) {
    console.log("Scissors was clicked.");
    playerMove = 2;
    playGame();
});