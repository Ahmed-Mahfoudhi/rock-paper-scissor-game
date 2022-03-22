const winColor = "green";
const loseColor = "red";
const drawColor = "gray";

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;
let color;

possibleChoices.forEach(possibleChoice => {
    possibleChoice.addEventListener('click', e => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        computerChoice = generateChoice(['paper','rock','scissor']);
        computerChoiceDisplay.innerHTML = computerChoice;
        result = interpretSituation(computerChoice,userChoice);
        resultDisplay.innerHTML = result;
        resultDisplay.style.color = color;
        
    });
});


function generateChoice(arr){
    let randomIndex = Math.floor(Math.random()*arr.length);
    return arr[randomIndex]
}

function interpretSituation(computerChoice,userChoice){
    if(computerChoice === userChoice){
        color = drawColor;
        return "DRAW";
    }
    let lose = "YOU LOST! :(";
    let win = "YOU WON! :)";
    switch (userChoice) {
        case 'rock' : if(computerChoice === 'paper') {
                        color = loseColor;
                        return lose;
                    }else {
                        color = winColor;
                        return win;
                    }
        case 'paper' : if(computerChoice === 'rock') {
                        color = winColor;
                        return win;
                    }else {
                        color = loseColor;
                        return lose;
                    }
        case 'scissor' : if(computerChoice === 'rock') {
                            color = loseColor;
                            return lose;
                        }else{
                            color = winColor;
                            return win;
                        }
    }
}