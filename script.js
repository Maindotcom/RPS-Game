let player = document.querySelector(".player");
let computer = document.querySelector(".computer");
let playerResult = document.querySelector(".player-result");
let computerResult = document.querySelector(".computer-result");
let choiceBtn = document.querySelectorAll(".choice-btn");
let imgContainer = document.querySelector(".img-container")
let imgContainer2 = document.querySelector(".img-com-con")
let playerImage = document.querySelector(".player-image");
let computerImage = document.querySelector(".computer-image");

let playerChoice;
let computerChoice;

choiceBtn.forEach(button => button.addEventListener("click", function () {
    playerChoice = button.textContent;

    player.textContent = `Player : ${playerChoice}`;
    computerTurn();
    computer.textContent = `Computer : ${computerChoice}`;

    playerResult.textContent = checkPlayerResult();
    computerResult.textContent = checkComputerResult();

    imageFun();
    colorFun();

    imgContainer.style.display = "block";
    imgContainer2.style.display = "block";

}))

function computerTurn() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            computerChoice = "Rock"
            break;
        case 2:
            computerChoice = "Paper"
            break;
        case 3:
            computerChoice = "Scissor"
            break;
    };
};

function imageFun() {
    if (playerChoice == "Rock") {
        playerImage.src = "images/Rock.png"
    }
    else if (playerChoice == "Paper") {
        playerImage.src = "images/Paper.png"
    }
    else if (playerChoice == "Scissor") {
        playerImage.src = "images/Scissors.png"
    }
    if (computerChoice == "Rock") {
        computerImage.src = "images/Rock.png"
    }
    else if (computerChoice == "Paper") {
        computerImage.src = "images/Paper.png"
    }
    else if (computerChoice == "Scissor") {
        computerImage.src = "images/Scissors.png"
    }
};

function colorFun() {
    if (playerResult.textContent == "Win") {
        playerResult.style.color = "green"
    }
    else if (playerResult.textContent == "Loss") {
        playerResult.style.color = "Red"
    }
    else {
        playerResult.style.color = "blue"
    }


    if (computerResult.textContent == "Win") {
        computerResult.style.color = "green"
    }
    else if (computerResult.textContent == "Loss") {
        computerResult.style.color = "Red"
    }
    else {
        computerResult.style.color = "blue"
    }

};

function checkPlayerResult() {
    if (playerChoice == computerChoice) {
        return "Draw"
    }
    else if (computerChoice == "Rock") {
        if (playerChoice == "Paper") {
            return "Win"
        }
        else {
            return "Loss"
        }
    }
    else if (computerChoice == "Paper") {
        if (playerChoice == "Scissor") {
            return "Win"
        }
        else {
            return "Loss"
        }
    }
    else if (computerChoice == "Scissor") {
        if (playerChoice == "Rock") {
            return "Win"
        }
        else {
            return "Loss"
        }
    }
}
function checkComputerResult() {
    if (playerChoice == computerChoice) {
        return "Draw"
    }
    else if (playerChoice == "Rock") {
        if (computerChoice == "Paper") {
            return "Win"
        }
        else {
            return "Loss"
        }
    }
    else if (playerChoice == "Paper") {
        if (computerChoice == "Scissor") {
            return "Win"
        }
        else {
            return "Loss"
        }
    }
    else if (playerChoice == "Scissor") {
        if (computerChoice == "Rock") {
            return "Win"
        }
        else {
            return "Loss"
        }
    }
};
