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
        return this.phrases[j];
    }
}
let game = new Game;
//phrases hidden here
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
console.log(game.getRandomPhrase());

