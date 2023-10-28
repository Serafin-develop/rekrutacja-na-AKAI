let turn = "x";
let symbols = ["", "", "", "", "", "", "", "", ""];
const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));

var resetMessage = document.querySelector(".new-round")
var winnerMessage = document.querySelector(".winner")

var resetButton = document.querySelector(".reset"); 
var turnHeader = document.querySelector(".turn"); 
var canPlay = true; 

board.addEventListener("click", ({ target }) => {
  
  if(canPlay){
    const classes = Array.from(target.classList);
    if (classes.includes("tile") && classes.length !== 1) return;
  
    const idx = tiles.indexOf(target);
  
    target.classList.add(`tile-${turn}`);
    symbols[(idx % 3) + Math.floor(idx / 3) * 3] = turn;
    console.log( (idx % 3) + Math.floor(idx / 3) * 3)
    turn = turn === "x" ? "o" : "x";
  
    displayTurn(turn);
    checkWin();
  }  else {
    alert("press reset to start new game")
  }

});

function displayTurn(turn) {
  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
  turnHeader.innerHTML = turn.toUpperCase() + " turn"; 
}

const combs = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function checkWin() {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
  for (let comb of combs) {
		if (symbols[comb[0]] == symbols[comb[1]] &&	symbols[comb[1]] == symbols[comb[2]]&& symbols[comb[0]] != "") { 
      resetMessage.style.display = "flex";
      winnerMessage.innerHTML = symbols[comb[0]].toUpperCase() + " WINS!";  
      winnerMessage.style.display = "flex"
      canPlay = false; 
      return true;
		}
	}
  return false; 
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
resetButton.addEventListener("click", reset)

function reset() {
   // 4. zresetuj stan gry
  canPlay = true;
  symbols = ["", "", "", "", "", "", "", "", ""];
  resetMessage.style.display = "none";
  winnerMessage.style.display = "none"
  tiles.forEach(tile => {
    tile.classList.remove("tile-x")
    tile.classList.remove("tile-o")
  });; 
}

function Opacity(){
  resetMessage.style.Opacity = "50%"; 
}

if(checkWin()){
  Opacity(); 
}
