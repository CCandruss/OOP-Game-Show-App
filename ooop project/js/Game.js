/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
    constructor(){
        this.missed = 0;
        this.phrases = ['going to hell in a hand basket',
        'rub a little dirt on it',
        'on a wild goose chase',
        'good things come to those who wait',
        'it is not rocket science',
        'bite the bullet',
        'aint nothin to it but to do it',
        'break a leg',
        'beat around the bush',
        'call it a day',
        'do or do not there is no try'];
        this.activePhrase = null;
    }
    
    getRandomPhrase(){
        let j = Math.floor(Math.random()*this.phrases.length);
        const phrase = new Phrase(this.phrases[j]);
        return phrase;
    }
    startGame(){
        const startScreen = document.getElementById('overlay');
        startScreen.style.display = 'none';
        const newPhrase = this.getRandomPhrase();
        this.activePhrase = newPhrase;
        this.activePhrase.addPhraseToDisplay(newPhrase);
    }
    handleInteraction(){

    }
    checkForWin(){
        const letters = document.querySelectorAll('#letters');
        let win = false;
        for(let i = 0; i < this.activePhrase.length; i++){
            if(letters[i].className !== 'show'){
                win = false;
            } else {
                win = true;
            }
        }
        return win;
    }
    //         `This method removes a life from the scoreboard, by replacing one
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
    }
//   This method displays the original start screen overlay, and
// depending on the outcome of the game, updates the overlay `h1` element with a
// friendly win or loss message, and replaces the overlay’s `start` CSS class with
// either the `win` or `lose` CSS class.
    gameOver(){
        const startScreen = document.getElementById('overlay');
        const winMessage = document.querySelector('#game-over-message');
        startScreen.style.display = 'inherit';
        if(this.checkForWin()){
            winMessage.textContent = `Congratulations you're a winner!`;
            startScreen.className = 'win';
        } else {
            winMessage.textContent = `You are out of lives!`;
            startScreen.className = 'lose';
        }
    }
}


    






