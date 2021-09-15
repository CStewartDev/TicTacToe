const squares = [...document.querySelectorAll('.square')];
const reset = document.querySelector('.reset');
const banner = document.getElementById('banner');


const gameBoard = (() => {
    const playerFactory = (name,team,turn)=> {
    return {name,team,turn};
    }

    const player1 = playerFactory("P1","X",true)
    const player2 = playerFactory("P2","O",false)

    //create game board
    let board = [];
    let round = 1;
    let gameActive = true;
    ///making a move
    const makeMove = (e) => {
        if(!gameActive) return;
        if(player1.turn && e.target.textContent === ""){
            e.target.textContent = player1.team;
            handlePlayerChange()
        } else if(player2.turn && e.target.textContent === ""){
            e.target.textContent = player2.team;
            handlePlayerChange();
        } else return;
        updateBoardArr();
        if(round > 4) validateWinner();
        round = round + 1;
    }

    const handlePlayerChange = () => {
        player1.turn= !player1.turn;
        player2.turn= !player2.turn;
    }

    // Update Game Board Array
    const updateBoardArr = () => {
        let update = squares.map(content=>content.textContent)
        board = update;
    }

    // Check for a win
    const winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    const validateWinner = () => {
       let roundWon = false;
       let winningHand;
       let winningPlayer;
       winConditions.reduce((acc,curr)=> {
           let a = board[curr[0]];
           let b = board[curr[1]];
           let c = board[curr[2]];
           if(a === '' || b === '' || c === '') return;
           if(a === b && b === c) {
               roundWon = true;
               winningHand = curr;
           }
        },[])

        if(roundWon) {
            gameActive = false;
            winningHand.forEach(i => {
                squares[i].classList.add('winningSquare');
            })
        } 
    }

    // reset board
    reset.addEventListener('click',()=>{
        squares.forEach(square=>square.textContent = "");
        squares.forEach(square=>square.classList.remove('winningSquare'))
        player1.turn= true;
        player2.turn= false;
        board = [];
        round = 1;
        gameActive = true;
    })
    

    squares.forEach(square=>square.addEventListener('click',e=>makeMove(e)))
})();






