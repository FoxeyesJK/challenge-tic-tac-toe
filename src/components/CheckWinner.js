export const checkWinner = (board) => {
    let winner = null

    //Horizontal
    for (let col = 0; col < 3; col++) {
        if (equals(board[col][0], board[col][1], board[col][2])) {
            winner = board[col][0]
        }
    }

    //Vertical
    for (let row = 0; row < 3; row++) {
        if(equals(board[0][row], board[1][row], board[2][row])) {
            winner = board[0][row]
        }
    }

    //Diagonal
    if (equals(board[0][0], board[1][1], board[2][2])) 
        winner = board[0][0]

    if (equals(board[2][0], board[1][1], board[0][2]))
        winner = board[2][0]

    //Check for open spots
    let openSpots = 0
    for (let col = 0; col < 3; col++) {
        for (let row = 0; row < 3; row++) {
            if (board[col][row] === "") 
                openSpots++
        }
    }
    
    if (winner === null && openSpots === 0) {
        return "TIE"
    }

    return winner
}

const equals = (a, b, c) => {
    return a !== "" && a === b && b === c
}