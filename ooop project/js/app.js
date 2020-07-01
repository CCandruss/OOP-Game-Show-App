/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//phrases hidden here

//start game event listener
let game;
const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', () => {
    game = new Game()
    game.startGame();
});

//event listener for letter guesses
const keyboard = document.querySelector('div#qwerty');
keyboard.addEventListener('click', event => {
    if(event.target.className === 'key'){
        game.handleInteraction(event.target);
    }
});
