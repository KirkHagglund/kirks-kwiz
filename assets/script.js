//Assignment section for required variables
let scoreDisplay = document.querySelector(".score-display");
let timeDisplay = document.getElementById("time-display");
let mainSection = document.querySelector(".main-container");
let startButton = document.getElementById("start-button");
let mainTitle = document.querySelector("h1");
let questionContent = document.querySelector(".question-content");
let timer = 75;
timeDisplay.textContent = "TIME LEFT: " + timer;
let secondsLeft;
let answerOne = document.getElementById("answer-one");
let answerTwo = document.getElementById("answer-two");
let answerThree = document.getElementById("answer-three");
let answerFour = document.getElementById("answer-four");
questionContent.hidden = true;
let answerOptions = document.querySelector(".answer-options");
answerOptions.hidden = true;
let rightWrong = document.querySelector('.right-wrong');
rightWrong.hidden = true;
let finalScore = document.querySelector('.final-score');
let highScores = document.querySelector('.high-scores');
let nameField = document.getElementById('hide');
let submitBtn = document.getElementById('submit-name');
let initials = document.getElementById('initials');
let gameTime;

let currentScore = JSON.parse(localStorage.getItem("highScore")) || [];
let list = document.getElementById('score-list');
let populateScore = document.createElement('li');
list.appendChild(populateScore);
list.hidden = true;
/*currentScore.forEach(element => {

    populateScore.textContent = element.userName + ' - ' + element.userScore;
});*/

//Question and answer array assignments
 
let questionList = ["Roses are:", "Violets are:", "I'm learning:", "What about:"];
let answerOneArr = ["Red", "Also Red", "To Speak Klingon", "Yew"];
let answerTwoArr = ["Stinky", "Weapons", "The Art of War", "You"];
let answerThreeArr = ["Delicious", "Blue", "JavaScript", "New"];
let answerFourArr = ["Insulting", "Not Real", "The Meaninglessness of Life", "Shoe"];
let currentQuestion = 0;
let correctAnswerARR = ["Red", "Blue", "JavaScript", "You"];

//Function section

//Create function to start game with an event listener on start game button
let startGame = function() {
    startTimer();
    generateQuiz();
    finalScore.hidden = true;
    list.hideen = true;
};




//Create a start timer function to nest inside the start game function
function startTimer() {
    
    secondsLeft = timer;    
        gameTime = setInterval(function() {
        timeDisplay.textContent = "TIME LEFT: " + secondsLeft;
        secondsLeft--;          
        if (secondsLeft <= 0) {
            clearInterval(gameTime);
            mainTitle.hidden = false;
            questionContent.hidden = true;
            rightWrong.hidden = true;
            mainTitle.textContent = "You ran out of time!";
            answerOptions.hidden = true;
            startButton.hidden = false;
        };
    }, 1000);
    startButton.hidden = true;
    mainTitle.hidden = true;
    questionContent.hidden = false;  
    answerOptions.hidden = false;
    rightWrong.hidden = false;
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
        rightWrong.textContent = "Wrong!"

    } else if (event.target.textContent === correctAnswerARR[currentQuestion]) {
        currentQuestion++;
        generateQuiz();
        rightWrong.textContent = "Correct!";
    };
    if (currentQuestion == questionList.length) {
        endQuiz();
    };
};

function endQuiz() {
    questionContent.hidden = true;
    answerOptions.hidden = true;
    console.log(finalScore);
    clearInterval(gameTime);
    mainTitle.hidden = false;
    mainTitle.textContent = 'Great Job!';
    startButton.hidden = false;
    currentQuestion = 0;
    finalScore.textContent = "Your Score: " + secondsLeft;
    finalScore.hidden = false;
    rightWrong.hidden = true;
    nameField.classList.remove('hide');
};

function setScore() {
    console.log(initials.value);
    let userRanking = {
        userName: '',
        userScore: ''
    }
    userRanking.userName = initials.value;
    userRanking.userScore = secondsLeft;
    currentScore.push(userRanking);
    localStorage.setItem('highScore', JSON.stringify(currentScore));
    nameField.hidden = true;
}

function showScores() {
    mainTitle.textContent = "High Scores:"
    console.log(currentScore);
    nameField.hidden = true;
    finalScore.hidden = true;
    list.hidden = false;
};

currentScore.forEach(element => {

    populateScore.textContent = element.userName + ' - ' + element.userScore;
});

/*var populateName = currentScore[0].userName;
var populateScore = currentScore[0].userScore;*/

//Event listener section
startButton.addEventListener("click", startGame);
answerOne.addEventListener('click', answerEval);
answerTwo.addEventListener('click', answerEval);
answerThree.addEventListener('click', answerEval);
answerFour.addEventListener('click', answerEval);
highScores.addEventListener('click', showScores);
submitBtn.addEventListener('click', setScore)