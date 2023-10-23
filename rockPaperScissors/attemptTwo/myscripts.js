// Returns a random integer from 0 to 10:
// Math.floor(Math.random() * 11);

let userInput = document.getElementById("userInput");
let move;
let moveLowerCase;
let computerMove;
let playerMove;
const rock = 0;
const paper = 1;
const scissors = 2;
let message;
let playerWins = 0;
let computerWins = 0;
let roundCount = 1;

function getRandom() {
    return Math.floor(Math.random() * 3); // Returns a number from 0-2
}

function getComputerMove() {
    switch (getRandom()) {
        case 0:
            console.log("The computer played 'rock!'");
            return computerMove = rock;
            break;
        case 1:
            console.log("The computer played 'paper!'");
            return computerMove = paper;
            break;
        case 2:
            console.log("The computer played 'scissors!'");
            return computerMove = scissors;
            break;
        default:
            return console.log("Let's try again!");
    }
}

function showComputerMove() {
    console.log("Show computer move button was clicked.");
    getComputerMove();
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

function getPlayerMove() {
    let move = prompt("What move will you play?");
    console.log(move);
    let moveLowerCase = move.toLowerCase();
    console.log(moveLowerCase);
    switch (moveLowerCase) {
        case 'rock':
            return playerMove = rock;
            break;
        case 'paper':
            return playerMove = paper;
            break;
        case 'scissors':
            return playerMove = scissors;
        break;
        default:
            return alert("Let's try again!");
            console.log("Let's try again!");
        break;
    }
}

function getWinner() {
    console.log((playerMove), (computerMove));
    if (playerMove === 0 && computerMove === 0) {
        console.log("It's a tie.");
        alert('Tie, you both played rock.');
        roundCount = roundCount + 1
    } else if (playerMove === 0 && computerMove === 1) {
        console.log('Player loses.');
        alert('You lose, paper beats rock.');
        computerWins = computerWins + 1;
        roundCount = roundCount + 1
    } else if (playerMove === 0 && computerMove === 2) {
        console.log('Player wins.');
        alert('You win, rock beats scissors.');
        playerWins = playerWins + 1;
        roundCount = roundCount + 1
    } else if (playerMove === 1 && computerMove === 0) {
        console.log('Player wins.');
        alert('You win, paper beats rock.');
        playerWins = playerWins + 1;
        roundCount = roundCount + 1
    } else if (playerMove === 1 && computerMove === 1) {
        console.log("It's a tie.");
        alert('Tie, you both played paper.');
        roundCount = roundCount + 1
    } else if (playerMove === 1 && computerMove === 2) {
        console.log('Player loses.');
        alert('You lose, scissors beats paper.');
        computerWins = computerWins + 1;
        roundCount = roundCount + 1
    } else if (playerMove === 2 && computerMove === 0) {
        console.log('Player loses.');
        alert('You lose, rock beats scissors.');
        computerWins = computerWins + 1;
        roundCount = roundCount + 1
    } else if (playerMove === 2 && computerMove === 1) {
        console.log("Player wins.");
        alert('You win, scissors beats paper.');
        playerWins = playerWins + 1;
        roundCount = roundCount + 1
    } else if (playerMove === 2 && computerMove === 2) {
        console.log("It's a tie.");
        alert('Tie, you both play scissors.');
        roundCount = roundCount + 1
    } else {
        console.log("Error, can't determine a winner.");
        return alert("Can't determine a winner right now.");
    }
}

function game() {
    console.log("This is round " + roundCount + " .");
    console.log("You have " + playerWins + " win(s) and the computer has " + computerWins + " win(s).");
    getPlayerMove()
    getComputerMove()
    getWinner()
    console.log("This is round " + roundCount + " .");
    console.log("You have " + playerWins + " win(s) and the computer has " + computerWins + " win(s).");
    getPlayerMove()
    getComputerMove()
    getWinner()
    console.log("This is round " + roundCount + " .");
    console.log("You have " + playerWins + " win(s) and the computer has " + computerWins + " win(s).");
    getPlayerMove()
    getComputerMove()
    getWinner()
    console.log("This is round " + roundCount + " .");
    console.log("You have " + playerWins + " win(s) and the computer has " + computerWins + " win(s).");
    getPlayerMove()
    getComputerMove()
    getWinner()
    console.log("This is round " + roundCount + " .");
    console.log("You have " + playerWins + " win(s) and the computer has " + computerWins + " win(s).");
    getPlayerMove()
    getComputerMove()
    getWinner()
    console.log("Finished! You have " + playerWins + " win(s) and the computer has " + computerWins + " win(s).");
}

/* function playGame() {
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
*/