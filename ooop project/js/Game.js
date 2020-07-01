/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
    constructor(){
        this.missed = 0;
        this.phrases = ['on a wild goose chase',
        'bite the bullet',
        'break a leg',
        'beat around the bush',
        'call it a day'];
        this.activePhrase = null;
    }
    //method generating a random number to select a phrase based on index value
    getRandomPhrase(){
        let j = Math.floor(Math.random()*this.phrases.length);
        const phrase = new Phrase(this.phrases[j]);
        return phrase;
    }
    //method to begin game called in app.js
    startGame(){
        const startScreen = document.getElementById('overlay');
        startScreen.style.display = 'none';
        const newPhrase = this.getRandomPhrase();
        this.activePhrase = newPhrase;
        this.activePhrase.addPhraseToDisplay(newPhrase);
    }
    // handles on screen button clicks
    // param html button target
    handleInteraction(button){
        button.disabled = true;
        if(this.activePhrase.checkLetter(button.innerText) === true){
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter(button.innerText);
            if(this.checkForWin()){
                this.gameOver();
            }
        } else {
            button.className = 'wrong';
            this.removeLife();
        }
    }
    //return boolean value of true if alll letters have been found
    checkForWin(){
        const letters = document.querySelectorAll('#letters');
        let win = 0;
        for(let i = 0; i < letters.length; i++){
            if(letters[i].textContent === ''){
                win += 1;
            }
        }
        if(win === 0){
            return true;
        } else {
            return false;
        }

    }
    //This method removes a life from the scoreboard, by replacing one
// of the `liveHeart.png` images with a `lostHeart.png` image (found in the `images`
// folder) and increments the `missed` property. If the player has five missed
// guesses (i.e they're out of lives), then end the game by calling the `gameOver()`
// method.
    removeLife(){
        const lives = document.querySelectorAll('.tries');
        if(this.activePhrase.checkLetter() !== true){
            this.missed += 1;
            lives[this.missed - 1].firstElementChild.setAttribute('src', 'images/lostHeart.png');
        }
        if(this.missed === 5){
            this.gameOver();
        }
    }
//   This method displays the original start screen overlay, and
// depending on the outcome of the game, updates the overlay `h1` element with a
// friendly win or loss message, and replaces the overlay’s `start` CSS class with
// either the `win` or `lose` CSS class.
    gameOver(){
        const startScreen = document.getElementById('overlay');
        const winMessage = document.querySelector('#game-over-message');
        const lives = document.querySelectorAll('.tries');
        startScreen.style.display = 'inherit';
        if(this.checkForWin()){
            winMessage.textContent = `Congratulations you're a winner!`;
            startScreen.className = 'win';
        } else {
            winMessage.textContent = `You are out of lives!`;
            startScreen.className = 'lose';
        }
        this.missed = 0;
        const allKeys = document.querySelectorAll('#keys');
        for(let i = 0; i < allKeys.length; i++){
            allKeys[i].className = 'key';
            allKeys[i].disabled = false;
        }
        const div = document.getElementById('phrase');
        const ul = div.firstElementChild;
        while (ul.firstChild) {
            //The list is LIVE so it will re-index each call
            ul.removeChild(ul.firstChild);
        }
        for(let i = 0; i < lives.length; i++){
            lives[i].firstElementChild.setAttribute('src', 'images/liveHeart.png');
        }
    }
}
    






