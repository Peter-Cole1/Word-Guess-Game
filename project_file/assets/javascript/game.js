//create array of possible words
const word = ['doge', 'corgi', 'shiba', 'pug']

//choose word randomly

// ====================== MAIN VARIABLES =====================================

let rng = Math.floor(Math.random() * word.length);
let chosenWord = word[rng];
let correctLetter = [];
let incorrectLetter = [];
let underScore = [];
let total = [];

let displayUnderScore = document.getElementsByClassName('underScoreHTML');
let displayIncorrectGuess = document.getElementsByClassName('incorrectGuess');
let displayCount = document.getElementsByClassName('countDown');

// ===========================================================================


//create underscores depending on length of chosenWord
let underScoreLength = () =>
{
    for(let i = 0; i < chosenWord.length; i++)
        {
            underScore.push('_');
        }
    return underScore;
}


//user chooses letter on keyboard
document.addEventListener('keypress', (event) => 
{
    let keyword = String.fromCharCode(event.keyCode);
    //keyword is whatever key is pressed as a guess
    


//if correct
if (chosenWord.indexOf(keyword) > -1) 
    {
        if (total.includes(keyword))
        {

        }

        else
        {
        //add correct letter to correctLetter array
        correctLetter.push(keyword);
        total.push(keyword);

        //replace underscore with correct letter
        underScore[chosenWord.indexOf(keyword)] = keyword;

        //show underscores in html, seperated by spaces
        displayUnderScore[0].innerHTML = underScore.join(' ');

        //add to 'total' array/counter
        displayCount[0].innerHTML = total.length;
        }


    
        
        //check if chosenWord matches the guess
        if(underScore.join('') == chosenWord)
            {
                alert("You did the thing!");
            }
        

        //if counter hits 10, a "lose" alert will trigger
        if (total.length > 9 && underScore.join('') != chosenWord)
            {
                alert("Better luck next time, dawg");
            }
    
    }
//if incorrect
else
    {   //if key has already been pressed, do nothing
        if (total.includes(keyword)) {}

        //if not, do the things
        else
        {
        //add letter to incorrectLetter array
        incorrectLetter.push(keyword);

        //push to "total" array for the counter
        total.push(keyword);

        //show wrong guesses in the html with commas
        displayIncorrectGuess[0].innerHTML = incorrectLetter.join(', ')

        //add to 'total' array/counter
        displayCount[0].innerHTML = total.length;

        //if counter hits 10, a "lose" alert will trigger
        if (total.length > 9)
        {
            alert("Better luck next time, dawg");
        }
        }

    }
    

})


displayUnderScore[0].innerHTML = underScoreLength().join(' '); 
displayIncorrectGuess[0].innerHTML = incorrectLetter.join(',');



//choose letters until word is completely revealed, or attempts hits "0"
    //if word is revealed, reveal soothing dog pic, and reveal text "you win dawg!"
    //else, reveal word, display text "you lose, loser"

//player can choose to reset with a reset button
