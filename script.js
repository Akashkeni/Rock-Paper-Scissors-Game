// initiate all score to 0
let userScore = 0;
let compScore = 0;
let drawScore = 0;

// get html tags values using js dom manipulation
const choices = document.querySelectorAll(".choice");
const mssg = document.querySelector("#msg");
const uScore = document.querySelector("#user_score");
const cScore = document.querySelector("#comp_score");
const dScore = document.querySelector("#draw_score");

// generate computer choice 
const genCompChoice = () => {
  const options = ["rock", "scissors", "paper"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// game condition if game is draw
const drawGame = () => {
  drawScore++;
  dScore.innerText = drawScore;
  mssg.innerText = "Game DRAW! Play Again";
  mssg.style.backgroundColor = "black";
};

// game condition to update the scoreboard and msg
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    uScore.innerText = userScore;

    mssg.innerText = `You WIN! : ${userChoice} beats ${compChoice}`;
    mssg.style.backgroundColor = "green";
  } else {
    compScore++;
    cScore.innerText = compScore;

    mssg.innerText = `You LOSE!! : ${compChoice} beats ${userChoice}`;
    mssg.style.backgroundColor = "red";
  }
};

// lt user, comp select choice ; check condition
const playGame = (userChoice) => {
  console.log("User Choice=", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer Choice=", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// get choices from users 
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
