let userScore =0;
let compScore= 0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame=() =>{
    console.log("game draw");
    msg.innerText="game draw :|"
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;

        console.log("you won");
        msg.innerText=`you won!!:)  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="violet";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lost");
        msg.innerText= `you lost :( ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "salmon";
    }
}
const playgame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);
    if (userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice ==="rock"){
            userWin = compChoice ==="paper" ? false : true ;
        }else if(userChoice=== "paper"){
            userWin = compChoice === "scissor"? false:true;
        }
        else {
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playgame(userChoice);
    });
});