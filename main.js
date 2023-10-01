const rockbtn = document.getElementById("rock");
const papperbtn = document.getElementById("paper");
const scissorsbtn = document.getElementById("scissors");
const message = document.getElementById("message");

function getsystemchoice() {
  const options = ["rock", "paper", "scissors"];
  const randomchoice = Math.floor(Math.random() * 3);
  return options[randomchoice];
}
function forWinner(userchoice, systemchoice) {
  if (userchoice === systemchoice) {
    return "DAAMMMNNNN IT'S A DRAW!😬";
  } else if (
    (userchoice === "rock" && systemchoice === "scissors") ||
    (userchoice === "paper" && systemchoice === "rock") ||
    (userchoice === "scissors" && systemchoice === "paper")
  ) {
    return "YEAAAHHHH BOIIII YOU WIN!😎";
  } else {
    return "YOU LOSE!!😵";
  }
}

function userchoicehandler (userchoice){
    const systemchoice = getsystemchoice();
    const result = forWinner(userchoice, systemchoice);
    message.textContent =` ${result}.`;
}

rockbtn.addEventListener("click", ()=> userchoicehandler("rock"));
papperbtn.addEventListener("click", ()=> userchoicehandler("paper"));
scissorsbtn.addEventListener("click", ()=> userchoicehandler("scissors"));
