/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
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
                li.setAttribute('class', `hide letter ${allSplit[i]}`)
                ul.appendChild(li);
            }
        }
    }
    checkLetter(letter){
        for(let i = 0; i < allSplit.length; i++){
            if(letter === allSplit.length[i]){
                return true;
            } else {
                return false;
            }
        }
    }
    showMatchedLetter(letter){
        if(this.checkLetter()){
            let letterInput = document.querySelectorAll(`.hide letter ${letter}`);
            letterInput.setAttribute('class', 'show')
        }
    }
}


// const test = new Phrase('Hello');
// console.log(test.addPhraseToDisplay());