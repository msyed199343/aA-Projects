const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


class Game {
    run() {
        //until disks are from largest bottom 
        //to smallest top all the way to the right
        //get where player is moving disk
        // place disk (if disk smaller than 
        //one being placed on or spot empty)
       
        
        this.promptMove() 
        
       
        
    }
    constructor() {
        this.towers = [[3, 2, 1], [], []]  //// 3 towers so max index of (2) use of push and pop (stack) first in first out 
    }


    validNum(num1, num2){

    }

    promptMove() {
        const towers = this.towers
        this.printIt();
        reader.question("What would you like to move?", (move1) => {
            if (move1 <= 2 && towers[move1].length > 0 ) {
                reader.question(`Where to?`, (move2) => {
                    if (move2 != move1 && move2 <= 2)
                        {towers[move2].push(towers[move1].pop())
                        this.printIt();
                    }
                    else{
                        console.log("Lets try that again.")
                        this.promptMove()
                    };
                })
            }
            else {
                console.log("Nothing there, lets try that again.")
                this.promptMove()
            };
        });  
    }

    isWon() {
        // move all the discs to the last or second tower
        return (this.towers[2].length == 3) || (this.towers[1].length == 3);
    }
    

    printIt(){
        console.log(this.towers)
    }
}; 

let test = new Game

// console.log(test.whereTo(val => { return val }));
test.run()