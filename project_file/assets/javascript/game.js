//create array of possible words
const word = ['Doge', 'Corgi', 'German Shepherd', 'Pitbull', 'Snoop', 'Keyboard Dog', 'Shiba', 'Rich mom dog', 'Pug']

//choose word randomly
let rng = Math.floor(Math.random() * word.length);
let chosenWord = word[rng];
let correctLetter = [];
let incorrectLetter = [];
let underScore = [];

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

console.log(underScoreLength());

//user chooses letter from alphabet
document.addEventListener('keypress', (event) => 
    {
    let keyword = String.fromCharCode(event.keyCode);
    console.log(keyword);
    });


//if correct, add to correctLetters array
if (chosenWord.indexOf(keyword) > -1) 
    {
        //add correct letter to correctLetter array
        correctLetter.push(keyword);
        //replace underscore with correct letter
        underScore[chosenWord.indexOf(keyword)] = keyword;
        //check if chosenWord matches the guess
        if(underScore.join('') == chosenWord)
            {
                alert("You did the thing");
            }
        console.log(correctLetter);
    }
//if incorrect, add to incorrectLetters array
else
    {
        incorrectLetter.push(keyword);
    }

//choose letters until word is completely revealed, or attempts hits "0"
    //if word is revealed, reveal soothing dog pic, and reveal text "you win dawg!"
    //else, reveal word, display text "you lose, loser"

//player can choose to reset with a reset button
