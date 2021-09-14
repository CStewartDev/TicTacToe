const squares = [...document.querySelectorAll('.square')];
const reset = document.querySelector('.reset');



const gameBoard = (() => {
    const playerFactory = (name,team,turn)=> {
    return {name,team,turn};
    }

    const player1 = playerFactory("P1","X",true)
    const player2 = playerFactory("P2","O",false)

    //create game board
    let board = [];
    
    ///making a move
    const makeMove = (e) => {
        if(player1.turn && e.target.textContent === ""){
            e.target.textContent = player1.team;
            player1.turn= !player1.turn;
            player2.turn= !player2.turn;            
        } else if(player2.turn && e.target.textContent === ""){
            e.target.textContent = player2.team;
            player1.turn= !player1.turn;
            player2.turn= !player2.turn;  
        } else return;
        updateBoardArr();
    } 
    // Update Game Board Array
    const updateBoardArr = () => {
        let update = squares.map(content=>content.textContent)
        board = update;
        console.log(board)
    }

    // Check for a win

    // reset board
    reset.addEventListener('click',()=>{
        squares.forEach(square=>square.textContent = "")
        player1.turn= true;
        player2.turn= false;
        board = [];
    })
    

    squares.forEach(square=>square.addEventListener('click',e=>makeMove(e)))
})();






