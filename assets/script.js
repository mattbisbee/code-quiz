/*GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score */

var body = document.body;
var p1El = document.createElement('p');
var p2El = document.createElement('p');
var p3El = document.createElement('p');
var div = document.createElement('div');

p1El.textContent = 'View High Scores';
p2El.textContent = 'Time:';
p3El.textContent = "";
p1El.setAttribute('style','width: 100%;');
p2El.setAttribute('style','width:100%; text-align: right;');

div.setAttribute('style', 'display: flex;')

div.appendChild(p1El);
div.appendChild(p2El);
div.appendChild(p3El);
document.body.appendChild(div);

var h2El = document.createElement('h2');
h2El.textContent =
  'Coding Quiz Challenge';
h2El.setAttribute('style', 'width:100%; text-align:center;');
body.appendChild(h2El);

var mainContent = document.createElement('div');
mainContent.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds"
mainContent.setAttribute('style', 'font-size: 25px; text-align: center;');
body.appendChild(mainContent);
var btnEl = document.createElement('button');
btnEl.setAttribute('style', 'font-size: 20px; margin: auto; display: flex; justify-content; center; padding: 20px; border-radius: 25px; background-color: purple; color: white; margin-top: 25px;');
btnEl.textContent = 'Start Quiz';
body.appendChild(btnEl);
btnEl.setAttribute("id", "start-quiz");

var begin = document.querySelector('#start-quiz');
begin.addEventListener('click', function (){
  startQuiz();
})


function startQuiz () {

  //tracks correct answers
  var correctAnswers = 0;

  //will contain a question grabbed from an array
  var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    a: "Strings",
    b: "Booleans",
    c: "Alerts",
    d: "Numbers",
    answer: "c"
  },
  {
    question: "Insie which HTML element do we put the JavaScript?",
    a: "<scripting>",
    b: "<script>",
    c: "<js>",
    d: "<javascript",
    answer: "b" 
  },
  {
    question: "What is the correct syntax for referring to an external script called 'script.js'?",
    a: "<script name='script.js'>",
    b: "<script href='script.js'>",
    c: "<script src='script.js'>",
    d: "<script text='script.js'>",
    answer: "c" 
  },
  {
    question: "How do you write 'Hello everyobdy!' in an alert box?",
    a: "alert('Hello everybody!');",
    b: "alertText('Hello everybody!');",
    c: "alertBox('Hello everybody!');",
    d: "alertPrompt('Hello everybody!');",
    answer: "a" 
  },
  {
    question: "How do you call a function named 'startFunction'?",
    a: "call startFunction()",
    b: "get function startFunction()",
    c: "execute startFunction()",
    d: "startFunction()",
    answer: "d" 
  },
  ];

  //function to get elements in HTML
  function get(){
    return document.getElementById();
  }

  //Function to display the question
  function displayQuestion () {
    var body = document.body;
    var h1El = document.createElement('h1');
    h1El.textContent = [questions];
    body.appendChild(h1El);

  }

  //function to check the answer with for loop
  function checkResponse () {

  }

  //display question as soon as the page loads
  window.addEventListener('load', displayQuestion);

  //contain the user's selected answer
  var selAnswer 

  // contains the possible answers to choose (A-D)
  var choices 


  // contains a possible answer
  var ansA 

  // contains a possible answer
  var ansB 

  // contains a possible answer
  var ansC 

  // contains a possible answer
  var ansD 


  var startBtn = document.querySelector("#start-quiz");

  function countDown() {
    var timeLeft = 80;

    var timeInterval = setInterval(function() {
      if(timeLeft > 1) {
        p3El.textContent = timeLeft;
        timeLeft--;
      } else if (timeLeft === 1) {
        p3El.textContent = timeLeft;
        timeLeft--;
      } else {
        p3El.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
  }
  btnEl.addEventListener("click", countDown);
};


