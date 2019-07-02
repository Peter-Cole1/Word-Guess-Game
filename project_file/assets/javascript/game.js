//create array of possible words
const word = ['doge', 'corgi', 'shiba', 'pug']

//choose word randomly
let rng = Math.floor(Math.random() * word.length);
let chosenWord = word[rng];
let correctLetter = [];
let incorrectLetter = [];
let underScore = [];
let total = [];

let displayUnderScore = document.getElementsByClassName('underScoreHTML');
let displayIncorrectGuess = document.getElementsByClassName('incorrectGuess');
let displayCount = document.getElementsByClassName('countDown');

console.log(chosenWord);
//create underscores depending on length of chosenWord
let underScoreLength = () =>
{
    for(let i = 0; i < chosenWord.length; i++)
        {
            underScore.push('_');
        }
    return underScore;
}


//user chooses letter from alphabet
document.addEventListener('keypress', (event) => 
{
    let keyword = String.fromCharCode(event.keyCode);
    //keyword is whatever key is pressed as a guess
    


//if correct, add to correctLetters array
if (chosenWord.indexOf(keyword) > -1) 
    {
        //add correct letter to correctLetter array
        correctLetter.push(keyword);
        total.push(keyword);

        //replace underscore with correct letter
        underScore[chosenWord.indexOf(keyword)] = keyword;

        displayUnderScore[0].innerHTML = underScore.join(' ');
        displayCount[0].innerHTML = total.length;

    
        
        //check if chosenWord matches the guess
        if(underScore.join('') == chosenWord)
            {
                alert("You did the thing!");
            }
        
    }
//if incorrect, add to incorrectLetters array
else
    {
        incorrectLetter.push(keyword);
        total.push(keyword);
        displayIncorrectGuess[0].innerHTML = incorrectLetter.join(', ')
        displayCount[0].innerHTML = total.length;

    }
    

})


displayUnderScore[0].innerHTML = underScoreLength().join(' '); 
displayIncorrectGuess[0].innerHTML = incorrectLetter.join(',');



//choose letters until word is completely revealed, or attempts hits "0"
    //if word is revealed, reveal soothing dog pic, and reveal text "you win dawg!"
    //else, reveal word, display text "you lose, loser"

//player can choose to reset with a reset button
