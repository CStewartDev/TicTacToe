# TicTacToe
TOP TicTacToe Project

Lessons learned: 
Factories return an object in which the params in get put into an object.
Not cluttering up the global scope is helpful, and having a module where they lives makes taking care of state easier. 
This lesson has really helped me understand why react was built the way it was and how it works. This project is purely JS, but i can see now why React was made.
I left the selectors in the global scope, but i think they could easily be refactored.

I would like to come back and take on the optional challenge, as well as clean up the styles for this one. It is definitely one of my weaker spots.

Overall, happy with how the project turned out.



Assignment

    Set up your project with a HTML, CSS and Javascript files and get the Git repo all set up.

    You’re going to store the gameboard as an array inside of a Gameboard object, so start there! Your players are also going to be stored in objects… and you’re probably going to want an object to control the flow of the game itself.

        Your main goal here is to have as little global code as possible. Try tucking everything away inside of a module or factory. Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories.

    Set up your HTML and write a JavaScript function that will render the contents of the gameboard array to the webpage (for now you can just manually fill in the array with "X"s and "O"s)

    Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker. Don’t forget the logic that keeps players from playing in spots that are already taken!

        Think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects.. but take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later!

    Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.

    Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that congratulates the winning player!

    Optional - If you’re feeling ambitious create an AI so that a player can play against the computer!
        Start by just getting the computer to make a random legal move.

        Once you’ve gotten that, work on making the computer smart. It is possible to create an unbeatable AI using the minimax algorithm (read about it here, some googling will help you out with this one)
        
        If you get this running definitely come show it off in the chatroom. It’s quite an accomplishment!

