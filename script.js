

const playerFactory = (name,team,turn)=> {
return {name,team,turn};
}

const gameBoard = () => {
    let squares = document.querySelectorAll('.square');
    console.log(squares)
    return squares;    
};

const game = (() => {
    const player1 = playerFactory("P1","X",true)
    const player2 = playerFactory("P2","O",false)

    //creat game board
    gameBoard();
    console.log(gameBoard[1])
    ///making a move

})();






