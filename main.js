function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error: code not 100%...');
    };
    return userInput;
};

// console.log(getUserChoice('sloan'));

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return 'rock';
    } else if (randomChoice === 1) {
        return 'paper';
    } else if (randomChoice === 2) {
        return 'scissors';
    } else {
        console.log('Not 100%');
    };
    
};

// console.log(getComputerChoice());

function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'This game is a tie!';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer has WON!';
        } else {
            return 'User WINS! FATALITY!';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Cpmputer WINS by using Scissors!';
        } else {
            return 'User does FATALITY and WINS!!!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer WINS this round!';
        } else {
            return 'Haha, user WINS!';
        }
    } else {
        console.log('Is the code working...???');
    }
};

function playGame() {
    let userChoice = getUserChoice('Paper');
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();