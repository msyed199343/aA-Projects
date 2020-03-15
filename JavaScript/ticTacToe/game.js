const Board = require("./board");
const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class Game {
    constructor() {
        this.board = new Board();
        this.currentPlayer = this.board.marks[0];
    }


    playMove(pos) {
        this.board.placeMark(pos, this.currentPlayer);
        this.swapTurn();
    }

    swapTurn(){

       let arr = this.board.marks
       let first = arr[0]
       arr[0] = arr[1]
       arr[1] = first
    };

    run(reader, gameCompletionCallback){
        
    }

   
}

module.exports = Game;
// let test = new Board

// console.log(test.placeMark([0, 0], "X"));
// console.log(test.board)
let testTwo = new Game


// testTwo.swapTurn();

// console.log(testTwo.board.marks);
// testTwo.swapTurn();

// console.log(testTwo.board.marks);