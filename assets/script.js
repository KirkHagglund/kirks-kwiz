/*Tasks to be done:*/

//Assignment section for required variables
let scoreDisplay = document.querySelector(".score-display");
let timeDisplay = document.getElementById("time-display");
let mainSection = document.querySelector(".main-container");
let startButton = document.getElementById("start-button");
let questionSlide = document.querySelector(".question");
let mainTitle = document.querySelector("h1");
let questionContent = document.querySelector(".question-content");
let secondsLeft = 75;
let answerOptions = document.querySelector(".answer-options");
questionContent.hidden = true;
answerOptions.hidden = true;
let answerOne = document.querySelector("#answer-one");
let answerTwo = document.querySelector("#answer-two");
let answerThree = document.querySelector("#answer-three");
let answerFour = document.querySelector("#answer-four");
let functionArray = [answerOne, answerTwo, answerThree, answerFour];

//Create function to start game with an event listener on start game button
let startGame = function() {
    startTimer();
    generateQuiz();
};

startButton.addEventListener("click", startGame);


//Create a start timer function to nest inside the start game function
function startTimer() {
    var gameTime = setInterval(function() {
        secondsLeft--;
        timeDisplay.textContent = "TIME LEFT: " + secondsLeft;  
        
        if (secondsLeft === 0) {
            clearInterval(gameTime);
            questionContent.textContent = "You ran out of time!";
            answerOptions.hidden = true;
        };
    }, 1000);
    startButton.hidden = true;
    mainTitle.hidden = true;
    questionContent.hidden = false;  
    answerOptions.hidden = false;
};

//Create a generate quiz function to nest inside the start game function
function generateQuiz() {
    questionContent.textContent = "Arrays in JavaScript can be used to store:"

    answerOne.addEventListener("click", wrongAnswer());
    answerTwo.addEventListener("click", wrongAnswer());
    answerThree.addEventListener("click", wrongAnswer());
    answerFour.addEventListener("click", rightAnswer());    
};

//Create two functions, one for right answers and one for wrong answers
function rightAnswer() {

};

function wrongAnswer() {

};

function questionOne() {

};

function questionTwo() {

};

function questionThree() {

};

function questionFour() {

};
/*Quiz needs to generate a new window with a set of four buttons with one correct answer
above the buttons will be text that reads the question
if the correct answer is hit, move on to next question
if the incorrect answer is clicked, take 15 seconds off the timer and move to next question

repeat this section for three more questions
upon completion of last question, new window with final score pops up.

//Create a function to store the final score information in local storage
//Create a function to pull the local storage information into a high score display box

final score equal to time remaining
new window also displays a game reset function and highscore clear button
highscore display will need to pull info out of local storage

Banner in html will need to have a button that navigates to high score display
banner will include the timer text as well*/
