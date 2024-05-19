let firstName = prompt("Enter First Player Name");
let secondName = prompt("Enter Second Player Name");
let choice = prompt("Choose Your Sign If you Choose Cross than enter 1 and If you choose Zero Than enter 2"
);
var scoreup = 0;
var scoreup1 = 0;
var fpname = document.getElementById("first-player-name");
var spname = document.getElementById("second-player-name");
let player1 = document.getElementById("player1-score");
let player2 = document.getElementById("player2-score");
let choiceVar = "";
fpname.innerText = firstName;
spname.innerText = secondName;
fpname = firstName;
spname = secondName;

fpname.innerText = firstName;
spname.innerText = secondName;
if ((firstName === "" || firstName === null) && (secondName === "" || secondName === null)) {
  fpname.innerHTML = "First Player";
  spname.innerHTML = "Second Player";
  fpname = "First Player";
  spname = "Second Player";
} else {
  alert("Enjoy Game 😊");
}
var btn = document.querySelectorAll("button");
isCross = false;
isZero = false;
if (choice == 1) {
  isCross = true;
  isZero = false;
  choiceVar = "X";
} else if (choice == 2) {
  isZero = true;
  isCross = false;
  choiceVar = "O";
} else if (choice == null || choice == "") {
  isZero = true;
  choiceVar = "X";
  alert("You Not choose Cross OR Zero than By default Zero is Selected");
}
for (let i = 0; i <= btn.length - 1; i++) {
  btn[i].addEventListener("click", () => {
    if (isCross == true) {
      isCross = false;
      isZero = true;
      btn[i].innerText = "X";
      btn[i].disabled = true;
    } else if (isZero == true) {
      isZero = false;
      isCross = true;
      btn[i].innerText = "O";
      btn[i].disabled = true;
    } else {
      console.log("Happy Ending");
    }
    winnerPlayer();
  });
}
const Pair = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let winnershow = document.getElementById("winner");
const winnerPlayer = () => {
  let isBoardFull = true;
  for (let pairs of Pair) {
    let btn1 = btn[pairs[0]].innerText;
    let btn2 = btn[pairs[1]].innerText;
    let btn3 = btn[pairs[2]].innerText;
    if (btn1 !== "" && btn2 !== "" && btn3 !== "") {
      if (btn1 === btn2 && btn2 === btn3) {
        if (btn1 === "X") {
          if (choiceVar === "X") {
            winnershow.innerText = `${fpname} Is Winner`;
            player1.innerText = ++scoreup;
          } else if (choiceVar === "O") {
            winnershow.innerText = `${spname} Is Winner`;
            player2.innerText = ++scoreup1;
          } else {
            console.log("No One Is Winner");
          }
        } else if (btn1 === "O") {
          if (choiceVar === "O") {
            winnershow.innerText = `${fpname} Is Winner`;
            player1.innerText = ++scoreup;
          } else if (choiceVar === "X") {
            winnershow.innerText = `${spname} Is Winner`;
            player2.innerText = ++scoreup1;
          } else {
            console.log("No One Is Winner");
          }
        } else {
          console.log("No One is Winner");
        }
        btn.forEach((button) => {
          button.disabled = true;
        });
        setTimeout(() => {
          restAll();
        }, 3000);
        checkForWin();
      }
    } else {
      isBoardFull = false;
    }
  }
  if (isBoardFull) {
    setTimeout(() => {
      restAll();
    }, 3000);
    winnershow.innerHTML = `No One is Winner Match is tie`;
  }
};
function restAll() {
  for (let i = 0; i <= btn.length - 1; i++) {
    btn[i].innerText = "";
    btn[i].disabled = false;
  }
}
function checkForWin() {
  if (scoreup >= 5) {
    winnershow.innerHTML = ` Congratulations 🎉 ${fpname}.. Winner Of The Game`;
    setTimeout(() => {
      refreshPage()
    }, 5000);
  }
  else if(scoreup1 >= 5) {
    winnershow.innerHTML = ` Congratulations 🎉 ${spname}.. Winner Of The Game`;
    setTimeout(() => {
      refreshPage()
    }, 5000);
  }
}
function refreshPage() {
  window.location.reload();
}