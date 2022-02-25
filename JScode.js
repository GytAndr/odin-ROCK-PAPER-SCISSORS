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
                console.log(`Draw! ${computer} eaquals ${player}.`);
            } else if (computer == "paper") {
                console.log(`You Lose! ${computer} beats ${player}.`);
            } else {
                console.log(`You Win! ${player} beats ${computer}.`);
            }
            break;
        case "paper":
            if (computer == "paper") {
                console.log(`Draw! ${computer} eaquals ${player}.`);
            } else if (computer == "scissors") {
                console.log(`You Lose! ${computer} beats ${player}.`);
            } else {
                console.log(`You Win! ${player} beats ${computer}.`);
            }
            break;
        case "scissors":
            if (computer == "scissors") {
                console.log(`Draw! ${computer} eaquals ${player}.`);
            } else if (computer == "rock") {
                console.log(`You Lose! ${computer} beats ${player}.`);
            } else {
                console.log(`You Win! ${player} beats ${computer}.`);
            }
            break;
        default:
            console.log("Error!")
            break;
    }
}
const computer = computerPlay();
const player = "rock";

//call function
playRound(computer, player);