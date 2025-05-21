let userScore=0;
let compScore=0;
const options=document.querySelectorAll(".option");
const msg=document.querySelector("#msg");
const userpara=document.querySelector("#user_score");
const comppara=document.querySelector("#comp_score");
const show=(userWin)=>{
    if(userWin){
        userScore++;
        userpara.innerText=userScore;
        msg.innerText="You win!!!";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        comppara.innerText=compScore;
        msg.innerText="You lost";
        msg.style.backgroundColor="red";
    }
}


const genChoice=()=>{
    const sel=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return sel[randomIndex];
}

const play=(userChoice)=>{
    const compChoice=genChoice();
    if(userChoice===compChoice){
        msg.innerText="It is a draw.play again";
        msg.style.backgroundColor="darkseagreen";
    }else{
        let userWin=true;
        if (userChoice==="rock" ){
            userWin= compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin= compChoice==="rock"?true:false;
        }else {
            userWin= compChoice==="rock"?false:true;
        }
        show(userWin);
    }
}

options.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        play(userChoice);
    });
});