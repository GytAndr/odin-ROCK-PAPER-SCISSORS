//declare function to get computer selection
function computerPlay() {
    //get random number. first get float between 0 and 1, then multipy by 100 and round it using floor.
     let randomNumber = Math.floor(Math.random()*100);
     //make if else statement and assing Rock,paper,scissors to different value ranges of random number
        if (randomNumber <= 33) {
            selection = "rock";
            return selection ;
        }
        else if (randomNumber > 33 && randomNumber < 66) {
            selection = "paper";
            return selection;
        }
        else if (randomNumber >= 66) {
            selection = "scissors";
            return selection;
        }
}
function playRound (computer, player) {
    switch (player) {
        case "rock":
            if (computer == "rock") {
                return `Draw! ${computer} eaquals ${player}.`;
            } else if (computer == "paper") {
                return `You Lose! ${computer} beats ${player}.`;
            } else {
                return `You Win! ${player} beats ${computer}.`;
            }
            break;
        case "paper":
            if (computer == "paper") {
                return `Draw! ${computer} eaquals ${player}.`;
            } else if (computer == "scissors") {
                return `You Lose! ${computer} beats ${player}.`;
            } else {
                return `You Win! ${player} beats ${computer}.`;
            }
            break;
        case "scissors":
            if (computer == "scissors") {
                return `Draw! ${computer} eaquals ${player}.`;
            } else if (computer == "rock") {
                return `You Lose! ${computer} beats ${player}.`;
            } else {
                return `You Win! ${player} beats ${computer}.`;
            }
            break;
        default:
            return "Error!";
            break;
    }
}

//game function to loop 5 times. with each loop reask new variables
function game() {
    for (let index = 0; index < 5; index++) {
        const computer = computerPlay();
        const player = window.prompt("Enter your selection:");
        console.log(playRound(computer, player));
    }
}

game();