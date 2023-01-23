//Assignment section for required variables
let scoreDisplay = document.querySelector(".score-display");
let timeDisplay = document.getElementById("time-display");
let mainSection = document.querySelector(".main-container");
let startButton = document.getElementById("start-button");
let questionSlide = document.querySelector(".question");
let mainTitle = document.querySelector("h1");
let questionContent = document.querySelector(".question-content");
let secondsLeft = 75;
let answerOne = document.getElementById("answer-one");
let answerTwo = document.getElementById("answer-two");
let answerThree = document.getElementById("answer-three");
let answerFour = document.getElementById("answer-four");
questionContent.hidden = true;
let answerOptions = document.querySelector(".answer-options");
answerOptions.hidden = true;

//Question and answer array assignments
let questionList = ["Roses are:", "Violets are:", "I'm learning:", "What about:"];
let answerOneArr = ["Red", "Also Red", "To Speak Klingon", "Yew"];
let answerTwoArr = ["Stinky", "Weapons", "The Art of War", "You"];
let answerThreeArr = ["Delicious", "Blue", "JavaScript", "New"];
let answerFourArr = ["Insulting", "Not Real", "The Meaninglessness of Life", "Shoe"];
let currentQuestion = 0;
let correctAnswerARR = ["Red", "Blue", "JavaScript", "You"];
let finalScore = 0;

//Function section

//Create function to start game with an event listener on start game button
let startGame = function() {
    startTimer();
    generateQuiz();
};




//Create a start timer function to nest inside the start game function
function startTimer() {
    var gameTime = setInterval(function() {
        secondsLeft--;
        timeDisplay.textContent = "TIME LEFT: " + secondsLeft;  
        
        if (secondsLeft === 0) {
            clearInterval(gameTime);
            questionContent.textContent = "You ran out of time!";
            answerOptions.hidden = true;
            startButton.hidden = false;
            secondsLeft = 75;
        };
    }, 1000);
    startButton.hidden = true;
    mainTitle.hidden = true;
    questionContent.hidden = false;  
    answerOptions.hidden = false;
};

//Create a generate quiz function to nest inside the start game function
function generateQuiz() {
    questionContent.textContent = questionList[currentQuestion];
    answerOne.textContent = answerOneArr[currentQuestion];
    answerTwo.textContent = answerTwoArr[currentQuestion];
    answerThree.textContent = answerThreeArr[currentQuestion];
    answerFour.textContent = answerFourArr[currentQuestion]; 
};



//Create two functions, one for right answers and one for wrong answers
function answerEval(event) {
    console.log(event.target.textContent);
    if (event.target.textContent !== correctAnswerARR[currentQuestion]) {      
        secondsLeft = secondsLeft - 15;     
    };
    /*if (questionList[3]) {
        endQuiz();
    };*/
    /*if(currentQuestion >= currentQuestion.length) {
        endQuiz();
    }*/
    currentQuestion++;
    generateQuiz();
};

function endQuiz() {
    questionContent.hidden = true;
    answerOptions.hidden = true;
    finalScore = secondsLeft;
    console.log(finalScore);
    clearInterval(gameTime);
};

//Event listener section
startButton.addEventListener("click", startGame);
answerOne.addEventListener('click', answerEval);
answerTwo.addEventListener('click', answerEval);
answerThree.addEventListener('click', answerEval);
answerFour.addEventListener('click', answerEval);

/*function questionOne() {
    questionList.textContent = "Roses are:";
};

function questionTwo() {
    questionList.textContent = "Violets are:";
};

function questionThree() {
    questionList.textContent = "I'm learning:"
};

function questionFour() {
    questionListt.textContent = "What about:";
};*/
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
