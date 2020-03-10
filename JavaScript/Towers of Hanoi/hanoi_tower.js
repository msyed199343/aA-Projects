const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


class Game{
    run(){
        //until disks are from largest bottom 
        //to smallest top all the way to the right
        //get where player is moving disk
        // place disk (if disk smaller than 
        //one being placed on or spot empty)
        // 
        //
    }
    constructor(){
        this.towers = [[], [], []]  //// 3 towers so max index of (2) use of push and pop (stack) first in first out 
    }

    promptMove(){
        console.log(this.towers)
        reader.question("Where would you like to move it?", (move)=>{
            
        })
    }
} 

let test = new Game

// test.promptMove()