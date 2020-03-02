let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let grid = new Array(8)

   for(let i = 0; i < grid.length; i++){
     grid[i] = Array(8)
     for (let i_2 = 0; i_2 < grid.length; i_2++) {                                  // [ [], [], [], [] [] [] [] [] ]
       if ((i === 3 && i_2 === 4 ) || (i === 4 && i_2 === 3) ){
        grid[i][i_2] = new Piece("black")
       }
       else if (i === 3 && i_2 === 3 || i === 4 && i_2 === 4){
        grid[i][i_2] = new Piece("white")
       };
     };
   };
  return grid
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  return this.grid[pos[0]][pos[1]]
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
    return this.validMoves(color).length === 0;
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let position = this.getPiece(pos)
  if (position === undefined ){
    return false 
  }
  else if(position.color === color){
    return true
  }
  else{return false};
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  let position = this.getPiece(pos)
  if(position === undefined ){return true}
  else{return false};
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  for(let i = 0; i < this.grid.length; i++) {
    for (let i_2 = 0; i_2 < this.grid.length; i_2++) {
      if (this.grid[i][i_2] === undefined){return false} 
      else{
        return true
      };
    };
  };
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  return (pos[0] >= 0 && pos[0] < 8) && (pos[1] >= 0 && pos[1] < 8);
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
  if (!piecesToFlip) {
    piecesToFlip = [];
  } else {
    piecesToFlip.push(pos);
  };

  let nextPos = [pos[0] + dir[0], pos[1] + dir[1]];

  if (!board.isValidPos(nextPos)) {
    return null;
  } else if (!board.isOccupied(nextPos)) {
    return null;
  } else if (board.isMine(nextPos, color)) {
    return piecesToFlip.length == 0 ? null : piecesToFlip;
  } else {
    return _positionsToFlip(board, nextPos, color, dir, piecesToFlip);
  };
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if (!this.validMove(pos, color)) {
    throw new Error('Invalid move!');
  }

  let positionsToFlip = [];
  for (let dirIdx = 0; dirIdx < Board.DIRS.length; dirIdx++) {

    positionsToFlip = positionsToFlip.concat(
      _positionsToFlip(this, pos, color, Board.DIRS[dirIdx]) || []
    );
  }

  for (let posIdx = 0; posIdx < positionsToFlip.length; posIdx++) {
    this.getPiece(positionsToFlip[posIdx]).flip();
  }

  this.grid[pos[0]][pos[1]] = new Piece(color);
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  for (let i = 0; i < 8; i++) {
    let rowString = " " + i + " |";

    for (let j = 0; j < 8; j++) {
      let pos = [i, j];
      rowString +=
        (this.getPiece(pos) ? this.getPiece(pos).toString() : ".");
    }

    console.log(rowString);
  }
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  if (this.isOccupied(pos)) {
    return false;
  };

  for (let i = 0; i < Board.DIRS.length; i++) {
    const piecesToFlip =
      _positionsToFlip(this, pos, color, Board.DIRS[i]);
    if (piecesToFlip) {
      return true;
    }
  }

  return false;

};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  const validMovesList = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (this.validMove([i, j], color)) {
        validMovesList.push([i, j]);
      }
    }
  }

  return validMovesList;
};

module.exports = Board;


console.log(_makeGrid())