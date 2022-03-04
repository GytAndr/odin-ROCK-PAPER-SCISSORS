let rock = document.getElementById('rock');
rock.addEventListener('click', (e) => {return game("rock")});

let paper = document.getElementById('paper');
paper.addEventListener('click', (e) => {return game("paper")});

let scissors = document.getElementById('scissors');
scissors.addEventListener('click', (e) => {return game("scissors")});

let display = document.getElementById('playerScore');

let counter = document.getElementById('totalGames');

let pcScore = document.getElementById('compSelection');

let winScore = document.getElementById('winScore');

let result = 0;

let wins = 0;



//declare function to get computer selection
function computerPlay() {
    //get random number. first get float between 0 and 1, then multipy by 100 and round it using floor.
     let randomNumber = Math.floor(Math.random()*100);
     //make if else statement and assing Rock,paper,scissors to different value ranges of random number
        if (randomNumber <= 33) {
            selection = "rock";
            pcScore.textContent = "Rock";
            return selection ;
        }
        else if (randomNumber > 33 && randomNumber < 66) {
            selection = "paper";
            pcScore.textContent = "Paper";
            return selection;
        }
        else if (randomNumber >= 66) {
            selection = "scissors";
            pcScore.textContent = "Scissors";
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
                wins ++;
                return `You Win! ${player} beats ${computer}.`;
            }
            break;
        case "paper":
            if (computer == "paper") {
                return `Draw! ${computer} eaquals ${player}.`;
            } else if (computer == "scissors") {
                return `You Lose! ${computer} beats ${player}.`;
            } else {
                wins ++;
                return `You Win! ${player} beats ${computer}.`;
            }
            break
        case "scissors":
            if (computer == "scissors") {
                return `Draw! ${computer} eaquals ${player}.`;
            } else if (computer == "rock") {
                return `You Lose! ${computer} beats ${player}.`;
            } else {
                wins++;
                return `You Win! ${player} beats ${computer}.`;
            }
            break;
        default:
            return "Error!";
            break;
    }
}

function game(playerSelection) {
        const computer = computerPlay();
        const player = playerSelection;
        //console.log(playRound(computer, player));
        display.innerText=""+playRound(computer, player)+"";
        result++;
        counter.innerText=`${result}`;
        winScore.textContent = `${wins}`;
        if (wins >= 5) {
            display.innerText="You won 5 rounds!!";
        }
    }

