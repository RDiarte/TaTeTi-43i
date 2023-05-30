let player = "X";
let winner = "";
let board = [];
const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [3, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const squares = document.querySelectorAll(".squares");

squares.forEach((square, i) => {
  square.addEventListener("click", () => play(square, i));
});

const reset = document.getElementById("reset");
reset.addEventListener("click", () => resetGame());

const result = document.getElementById("result");

const play = (square, i) => {
  if (square.innerHTML === "" && winner === "") {
    square.innerHTML = player;
    board[i] = player;
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
    WINNING_COMBOS.forEach((combo) => {
      if (
        board[combo[0]] === board[combo[1]] &&
        board[combo[1]] === board[combo[2]] &&
        board[combo[0]]
      ) {
        winner = board[combo[0]];
        result.innerText = "El ganador es " + board[combo[0]] + "!";
      }
    });
  }
};

const resetGame = () => {
  squares.forEach((square) => (square.innerHTML = ""));
  player = "X";
  winner = "";
  board = [];
  result.innerText = "";
};
