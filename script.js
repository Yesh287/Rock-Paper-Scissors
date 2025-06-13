let user_score = 0;
let computer_score = 0;
let user_score_display = document.querySelector("#user-score");
let computer_score_display = document.querySelector("#computer-score");
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
computer_choice_generater = () => {
    let options = ["rock","paper","scissors"];
    let randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        let user_choice = choice.id;
        let computer_choice = computer_choice_generater();
        checkWinner(user_choice,computer_choice);
    })
})
checkWinner = (user_choice,computer_choice) =>{
    console.log(user_choice,computer_choice);
    let user_win = true;
    if(user_choice === computer_choice){
        msg.innerText = "Draw, Play Again!";
        msg.style.backgroundColor = "#081b31";
    }
    else{
        if(user_choice === "scissors"){
            if(computer_choice === "rock") user_win = false;
        }
        else if(user_choice === "paper"){
            if(computer_choice === "scissors") user_win = false;
        }
        else if(computer_choice === "paper") user_win = false;
        if(user_win){
            msg.innerText = `You Win! Your ${user_choice} beats ${computer_choice}`;
            user_score++;
            user_score_display.innerText = user_score;
            msg.style.backgroundColor = "green";
        }
        else{
            msg.innerText = `You Lose! ${computer_choice} beats your ${user_choice}`;
            computer_score++;
            computer_score_display.innerText = computer_score;
            msg.style.backgroundColor = "red";
        }
    }
}