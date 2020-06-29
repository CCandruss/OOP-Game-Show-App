/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
    constructor(){
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
    }

    createPhrases(phrase){
        this.phrases.push(phrase);
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
}
const game = new Game();
function plugInPhrases(){
    game.createPhrases('going to hell in a hand basket');
    game.createPhrases('rub a little dirt on it');
    game.createPhrases('on a wild goose chase');
    game.createPhrases('good things come to those who wait');
    game.createPhrases('it is not rocket science');
    game.createPhrases('bite the bullet');
    game.createPhrases('aint nothin to it but to do it');
    game.createPhrases('break a leg');
    game.createPhrases('beat around the bush');
    game.createPhrases('call it a day');
    game.createPhrases('do or do not there is no try');
};
plugInPhrases();




