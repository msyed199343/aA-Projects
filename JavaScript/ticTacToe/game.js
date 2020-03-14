const Board = require("./board");
const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class Game {
    constructor() {
        this.board = new Board();
        this.currentPlayer = Board
    }


    playMove(pos) {
        this.board.placeMark(pos, this.currentPlayer);
        this.swapTurn();
    }

   
}

module.exports = Game;
let test = new Board

console.log(test.placeMark([0, 0], "X"));
console.log(test.board)


