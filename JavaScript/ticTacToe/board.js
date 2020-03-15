class Board{
    constructor(){
        this.board = [
                        [null, null, null],
                        [null, null, null],
                        [null, null, null]
                    ]
        this.marks = ["X", "O"]
    }

    won(){
        //if three in a row of either "X" or "O" return true
        //make sure to check horizontal, vertical and diagonal 
        const possible = [
                        [[0, 0], [0, 1], [0, 2]],    //row
                        [[1, 0], [1, 1], [1, 2]], 
                        [[2, 0], [2, 1], [2, 2]],
                        [[0, 0], [1, 0], [2, 0]],    // column
                        [[0, 1], [1, 1], [2, 1]],
                        [[0, 2], [1, 2], [2, 2]],
                        [[0, 0], [1, 1], [2, 2]],                //across
                        [[0 ,2], [1, 1], [2, 0]]    
                        ]

        // iterate through ppossible
        // if any othe the above coordinates on grid is equal to true return boolean true    
        // push coordinates            
        //

        const arr = []
        for(let i = 0; i < possible.length; i++){
            for (let i_2 = 0; i_2 < 3; i_2++) {
                let idx_1 = possible[i][i_2][0]
                let idx_2 = possible[i][i_2][1]
                let boardPlace = this.board[idx_1][idx_2]
                
                //check if boardPlace === arr.last if yes then push boardPlace to arr
                // if arr.length === 3 return true else continue through whole thing and return false at end of method
                
                if (boardPlace === arr[arr.length-1] && i_2 != 0){  // 
                    arr.push(boardPlace)
                }
                    if (arr.length === 3) { 
                        this.winner(arr[0])
                        return true
                    }
                    else if (i_2 === 0) { 
                        arr.push(boardPlace)
                    };                          // ran into issue with arr[0] it didnt exists becuase it never hit the above
                                                // if statment , so fixed it with this if/else statement 
            }
        }
        
        return false;
    };


    winner(mark){
        //returns winner "X" or "O"
        console.log(`${mark} is the winner!`)
        
    }

    empty(pos){
        //check at pos given if available space ?  
        let idx_1 = pos[0]
        let idx_2 = pos[1]

        if (this.board[idx_1][idx_2] != null) {return false}
        else {return true};
    }

    placeMark(pos, mark){
        //place mark("X" or "O") if empty(pos) === true
        let idx_1 = pos[0]
        let idx_2 = pos[1]

        if(this.empty(pos)){
            this.board[idx_1][idx_2] = mark
        };
    }
};

module.exports = Board;