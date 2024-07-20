let humanScore = 0;
let computerScore = 0;  

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 100)
    if (randomNumber <= (100/3)){
        return "r"
    }else if (randomNumber > (100 /3) && randomNumber <= 2/3){
        return "p"
    }else{
        return "s"
    }
}

function getHumanChoice(){

    let userValue = prompt(` USE "r" for rock, "p"   for paper, "s" for scissors: `).toLowerCase()
    if (userValue != " " ){
        return userValue
    }
}



function playRound(humanChoice, computerChoice){
    

    console.log(`computerChoice: ${computerChoice}`)
    console.log(`your choice was: ${humanChoice}`)

    if (computerChoice === "r" && humanChoice === "r"){
        console.log("IT'S A TIE")
        return;
    }
    else if (computerChoice === "r" && humanChoice === "p"){
        console.log("YOU WIN")
        humanScore++;
        return;

    }
    else if (computerChoice === "r" && humanChoice === "s"){
        console.log("YOU LOSE ")
        computerScore++
        return;

    }   


    else if (computerChoice === "p" && humanChoice === "r"){
        console.log("YOU LOSE")
        computerScore++
        return;

    }
    else if (computerChoice === "p" && humanChoice === "p"){
        console.log("IT'S A TIE")
        return;

    }
    else if (computerChoice === "p" && humanChoice === "s"){
        console.log("YOU WIN ")
        humanScore++
        return;

    }

    else if (computerChoice === "s" && humanChoice === "r"){
        console.log("I WIN")
        humanScore++
        return;

    }
    else if (computerChoice === "s" && humanChoice === "p"){
        console.log("YOU LOSE")
        computerScore++;
        return;

    }
    else if (computerChoice === "s" && humanChoice === "s"){
        console.log("It's a tie ")
        return;
    }else{
        console.log("invalid input")
    }

    
}

function playGame(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice()
    
    playRound(humanChoice, computerChoice)
    console.log(`computer Score: ${computerScore}`)
    console.log(`player Score: ${humanScore}`)


}

for (i = 0; i <= 5; i++){
    playGame()
}

