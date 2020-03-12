class Board{
    constructor(){
        this.board = [
                        [], [], [],
                        [], [], [],
                        [], [], []
                    ]
    }

    won(){
        //if three in a row of either "X" or "O" return true
        //make sure to check horizontal, vertical and diagonal 

    };


    winner(){
        //returns winner "X" or "O"
    }

    empty(pos){
        //check at pos given if available space ?  
    }

    placeMark(pos, mark){
        //place mark("X" or "O") if empty(pos) === true
    }
};

export default Board;