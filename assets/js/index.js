const game = document.querySelector(".container-game");
const containerGame = document.getElementById("container-game");
const resultWrapper = document.getElementById("result-wrapper")
let winnerTitle = document.getElementById("winnerTitle")
let playAgain = document.getElementById("playAgain")
let score = document.getElementById("score")




game.addEventListener('click', (event) => {

    let target = event.target.closest("BUTTON");

    if (target.tagName != "BUTTON") {

        return;
    }


    if (target.id != "") {
        containerGame.classList.toggle('isHidden')
        resultWrapper.classList.toggle("isHidden")
        UpdateGame(target.id)
    }

})

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function UpdateGame(choice) {
    let userChoice;
    let machineChoice;

    let choices = {
        1: "paper",
        2: "scissors",
        3: "rock"
    }

    userChoice = choice
    machineChoice = choices[randomIntFromInterval(1, 3)]

    CheckForAWinner(userChoice, machineChoice);

}


function CheckForAWinner(userChoice, machineChoice) {

    let winner;
    
    if (userChoice == "paper" && machineChoice == "rock" || userChoice == "rock" && machineChoice == "scissors") {
       
        let sco = parseInt(score.textContent)
        sco += 1
        score.textContent = sco
        
        winner = "You win"
    }
    
    else if (userChoice == "rock" && machineChoice == "paper" || userChoice == "scissors" && machineChoice == "rock") {
        winner = "House"
    }
    
    else {
        winner = "Draw"
    }
    
    ShowResult(userChoice, machineChoice, winner)

}

function ShowResult(userChoice, machineChoice, winner) {

    let choices = ["paper", "rock", "scissors"]
    let imgMachineChoice = document.getElementById("imgMachineChoice")
    let userChoiceImg = document.getElementById("userChoiceImg")
    let outerUserCircle = document.getElementById("outerUserCircle")
    let HousePickedTitle = document.getElementById("HousePickedTitle")

    outerUserCircle.className = `outer-${userChoice}-circle`
    userChoiceImg.src = `./assets/img/icon-${userChoice}.svg`
    
    for (let i = 0; i < 3; i++) {


        setTimeout(() => {
            HousePickedTitle.innerHTML = "House choosing 🎲"

            imgMachineChoice.src = `./assets/img/icon-${choices[i]}.svg`
        }, i * 1000);
    }

    setTimeout(() => {
        
        HousePickedTitle.innerHTML = "The house picked"
        const selectedImage = machineChoice;
        playAgain.classList.toggle("playAgain")
        imgMachineChoice.src = `./assets/img/icon-${selectedImage}.svg`;
        winnerTitle.innerHTML = winner


      }, 3000);


      
}

function PlayAgain() {
    containerGame.classList.toggle('isHidden')
    playAgain.classList.toggle("playAgain")
    resultWrapper.classList.toggle("isHidden")
}