let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let gameContainer = document.querySelector('.game-container');

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) =>
  box.addEventListener("click", () => {
   // console.log("box was clicked");
    if (turnO) {
      box.innerText = "O";
      box.style.color = "rgb(87, 19, 151)";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "rgb(151, 51, 11)";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  })
);

const showWinner = (winner) => {
  msg.innerText = `Congratulations, our winner is ${winner}`;
  msgContainer.classList.remove("hide");
  gameContainer.classList.add("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (pattern of winPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );

    let pos1Value = boxes[pattern[0]].innerText;
    let pos2Value = boxes[pattern[1]].innerText;
    let pos3Value = boxes[pattern[2]].innerText;

    if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
      if (pos1Value == pos2Value && pos2Value == pos3Value) {
        //console.log("Winner: ", pos1Value);
        showWinner(pos1Value);
      }
    }
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText='';
  }
};

const resetGame = () =>{
turnO=true;
enableBoxes();
msgContainer.classList.add('hide');
gameContainer.classList.remove("hide");
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);