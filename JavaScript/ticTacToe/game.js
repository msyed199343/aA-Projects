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
       console.log(`Your turn ${this.currentPlayer}!`)
    }

    swapTurn(){
        let arr = this.board.marks
        let first = arr[0]
        arr[0] = arr[1]
        arr[1] = first
        this.currentPlayer = arr[0]
    };

    print(){
        console.log(this.board.board)
    }

    run(){
            this.print();
        reader.question(`${this.currentPlayer}, row?`, (idx_1) =>{

            reader.question(`${this.currentPlayer}, column?`, (idx_2) => {

                let pos = [parseInt(idx_1), parseInt(idx_2)]

                if (this.board.empty(pos)) {
                    this.playMove(pos)
                    this.run();
                }
                else {
                    console.log(`Can't do that, try again!`)
                    this.run();
                    
                };
                
            })
                
        })

            
    }

   
}

   






module.exports = Game;
// let test = new Board

// console.log(test.placeMark([0, 0], "X"));
// console.log(test.board)
let testTwo = new Game

testTwo.run()
// testTwo.swapTurn();
// console.log(testTwo.board.marks);
// testTwo.swapTurn();
// console.log(testTwo.board.marks);

// testTwo.swapTurn();

// console.log(testTwo.board.marks);
// testTwo.swapTurn();

// console.log(testTwo.board.marks);