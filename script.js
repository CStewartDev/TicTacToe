const squares = [...document.querySelectorAll('.square')];
const reset = document.querySelector('.reset');
const banner = document.getElementById('banner');
const menuBtn = document.querySelector('menuBtn')
const p1Name = document.getElementById('p1');
const p2Name = document.getElementById('p2');
const p1Score = document.getElementById('p1Score');
const p2Score = document.getElementById('p2Score');

const modal = ()=> {

}

const gameBoard = (() => {
    const playerName = ()=> {
        console.log(p1Name.firstChild.data,p2Name)
    }
    playerName();
    const playerFactory = (name,team,turn)=> {
    return {name,team,turn};
    }

    const player1 = playerFactory("P1","X",true)
    const player2 = playerFactory("P2","O",false)

    //create game board and declare variables
    let board = [];
    let round = 1;
    let gameActive = true;
    let roundWon = false;
    let winningHand;
    let winningPlayer;
    ///making a move
    const makeMove = (e) => {
        if(!gameActive) return;
        if(player1.turn && e.target.textContent === ""){
            e.target.textContent = player1.team;
        } else if(player2.turn && e.target.textContent === ""){
            e.target.textContent = player2.team;
        } else return;
        updateBoardArr();
        if(round > 4) validateWinner();
        handlePlayerChange();
        round = round + 1;
        handleBannerUpdate();
    }
    
    const handlePlayerChange = () => {
        player1.turn= !player1.turn;
        player2.turn= !player2.turn;
    }
    
    const handleBannerUpdate = () => {
        if(round === 1) banner.textContent = `${player1.name} is first to strike`;
        if(round >1) banner.textContent =  `It's ${player1.turn ? player1.name: player2.name}'s turn`
        if(round >9) banner.textContent = "It's a Draw. Reset!"
        if(roundWon) banner.textContent = `${winningPlayer} is the winner!`;
    };

    const handleScoreBoard = () => {
        let p1 = parseFloat(p1Score.textContent);
        let p2 = parseFloat(p2Score.textContent);
        winningPlayer === player1.name? p1Score.textContent= p1 +1 : p2Score.textContent = p2 +1;   
    }

    // Update Game Board Array
    const updateBoardArr = () => {
        let update = squares.map(content=>content.textContent)
        board = update;
    }

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
    

    // Check for a win
    const validateWinner = () => {
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
            winningPlayer = player1.turn ? player1.name : player2.name;
            handleBannerUpdate();
            handleScoreBoard();
            gameActive = false;
            winningHand.forEach(i => {
                squares[i].classList.add('winningSquare');
            })
        } 
    }


    // reset board
    reset.addEventListener('click',()=>{
        squares.forEach(square=>{
            square.textContent = "";
            square.classList.remove('winningSquare');
        })
        player1.turn= true;
        player2.turn= false;
        board = [];
        round = 1;
        roundWon = false;
        handleBannerUpdate()
        gameActive = true;
    })
    
    handleBannerUpdate()
    squares.forEach(square=>square.addEventListener('click',e=>makeMove(e)))
})();






