// Returns a random integer from 0 to 10:
// Math.floor(Math.random() * 11);

const wins = document.getElementById("wins");
const losses = document.getElementById("losses");
let userInput = document.getElementById("userInput");
let move;
let moveLowerCase;
let computerMove;
let playerMove;
const rock = 0;
const paper = 1;
const scissors = 2;
// let message;

function getRandom() {
    return Math.floor(Math.random() * 3); // Returns a number from 0-2
}

function getComputerMove() {
    switch (getRandom()) {
        case 0:
            return computerMove = rock;
            console.log(computerMove);
            alert("The computer played 'rock!'");
            break;
        case 1:
            return computerMove = paper;
            console.log(computerMove);
            alert("The computer played 'paper!'");
            break;
        case 2:
            return computerMove = scissors;
            alert("The computer played 'scissors!'");
            console.log(computerMove);
        break
        default:
            alert("The opponent broke!")
            console.log("Let's try again!")
    }
    return computerMove
}

function showComputerMove() {
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


function playGame() {
    console.log("Button was clicked");
    let move = prompt("What move will you play?");
    console.log(move);
    let moveLowerCase = move.toLowerCase();
    console.log(moveLowerCase);
    switch (moveLowerCase) {
        case 'rock':
            playerMove = rock;
            console.log(playerMove);
            break;
        case 'paper':
            playerMove = paper;
            console.log(playerMove);
            break;
        case 'scissors':
            playerMove = scissors;
            console.log(playerMove);
        break;
        default:
            return alert("Let's try again!");
            console.log("Let's try again!");
        break;
    }
    getComputerMove();
    console.log(getComputerMove());
    console.log(computerMove);
    switch (computerMove) {
        case 0:
            message = 'rock';
            console.log(message);
            break;
        case 1:
            message = 'paper';
            console.log(message);
            break;
        case 2:
            message = 'scissors';
            console.log(message);
            break;
        default:
            alert("Can't return computer move.");
    }
    alert("The computer played " + message + "!");
    return getWinner();
}

function getWinner() {
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