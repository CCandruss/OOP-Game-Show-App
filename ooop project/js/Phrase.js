/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
    constructor(phrase){
        this.phrase = phrase;
    }
    //adds phrase to page
    addPhraseToDisplay(){
        let allSplit = this.phrase.split("");

        for(let i = 0; i < allSplit.length; i++){
            const div = document.getElementById('phrase');
            const ul = div.firstElementChild;
            const li = document.createElement('li');
            if(allSplit[i] === " "){
                li.setAttribute('class', 'space')
                ul.appendChild(li);
            } else{
                li.setAttribute('class', `hide letter ${allSplit[i]}`);
                li.setAttribute('id', 'letters')
                ul.appendChild(li);
            }
        }
    }
    //returns boolean value of true if letter is in phrase
    checkLetter(letter){
        let letterCheck = 0;
        for(let i = 0; i < this.phrase.length; i++){
            if(letter === this.phrase[i]){
                letterCheck += 1;
            } else {
                letterCheck += 0;
            }
        }
        if(letterCheck > 0){
            return true;
        } else {
            return false;
        }
    }
    //change classname and textcontent of li elements added in addPhraseToDisplay() method
    showMatchedLetter(letter){
        if(this.checkLetter(letter)){
            let letterInput = document.querySelectorAll(`#letters`);
            for(let i = 0; i < letterInput.length; i++){
                if(letterInput[i].className === `hide letter ${letter}`){ 
                    letterInput[i].textContent = letter;
                    letterInput[i].className = `show letter ${letter}`;
                }
            }
        }
    }
}
