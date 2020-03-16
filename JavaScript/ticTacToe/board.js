class Board{
    constructor(){
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
                    ]
        this.marks = [" X ", " O "]
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

        let arr = []
        let matches = []
        for(let i = 0; i < possible.length; i++){
            for (let i_2 = 0; i_2 < 3; i_2++) {
                let idx_1 = possible[i][i_2][0]
                let idx_2 = possible[i][i_2][1]
                let boardPlace = this.board[idx_1][idx_2]
                
                    if(boardPlace !== null && boardPlace === arr[arr.length-1] && i_2 != 0){
                        arr.push(boardPlace)
                    }
                    else if (i_2 === 0 && boardPlace !== null){
                        arr.push(boardPlace)
                    };

                this.pushArr(arr, matches)
            }

            arr = []
        }

        this.checkTie(matches)
    };


  
    

    pushArr(arr, arr_2){
        //push arr in arr_2 if arr has all same value arr will only be 3 in length

        if (arr[0] === arr[1] && arr[1] === arr[2] && arr.length === 3) {
            arr_2.push(arr)
        }

    }


    checkTie(arr){
        if (arr.length === 2){
            console.log(`Looks like a tie`)
            return true
        }
        else if (arr.length === 1 ){
            this.winner(arr[0][0]);
            return true
        }
        else {return false};
    }



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

test = new Board


