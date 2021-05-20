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
//will contain a question grabbed from an array

var questions = [
  {
  question: "Commonly used data types DO NOT include:",
  options: ["Strings",
            "Booleans",
            "Alerts",
            "Numbers"],
  answer:   "Alerts",
  },
  {
  question: "Inside which HTML element do we put the JavaScript?",
  options:  ["<scripting>",
            "<script>",
            "<js>",
            "<javascript>",],
  answer: "<script>",
  },
  {
  question: "What is the correct syntax for referring to an external script called 'script.js'?",
  options: ["<script name='script.js'>",
            "<script href='script.js'>",
            "<script src='script.js'>",
            "<script text='script.js'>"],
  answer: "<script src='script.js'>",
  },
  {
  question: "How do you write 'Hello everybody!' in an alert box?",
  options: ["alert('Hello everybody!');",
            "alertText('Hello everybody!');",
            "alertBox('Hello everybody!');",
            "alertPrompt('Hello everybody!');"],
  answer: "alert('Hello everybody!');",
  },
  {
  question: "How do you call a function named 'startFunction'?",
  options: ["call startFunction( )",
            "get function startFunction( )",
            "execute startFunction( )",
            "startFunction( )"],
  answer: "startFunction( )"
  },
];

var score = 0;
var questionIndex = 0;
var currentTime = document.querySelector('#seconds');
var questionContent = document.querySelector("#questions");
var heading = document.querySelector(".heading");
var buttonWrapper = document.querySelector("#button-wrapper");
var penalty = 10;
var ulCreate = document.createElement('ul');
var startBtn = document.querySelector("#start-quiz");
var seconds = document.querySelector("#seconds")
var timeHeading = document.querySelector("#time");
console.log(startBtn);
var timeLeft = 80;
var timeInterval=0;

startBtn.addEventListener("click", function () {
    if (timeInterval === 0) {
      timeInterval = setInterval(function () {
        timeLeft--;
        seconds.textContent = timeLeft;

        if (timeLeft <= 0) {
          clearInterval(timeInterval);
          quizCompleted();
          timeHeading.textContent = "";
          seconds.textContent = "Outta Time!";
          seconds.setAttribute("style", "font-size: 25px");
        }
      }, 1000);
    }
    displayQuestion (questionIndex);
  });

function displayQuestion (questionIndex) {
  questionContent.innerHTML = "";
  ulCreate.innerHTML = "";
  buttonWrapper.innerHTML = "";

  for (var i = 0; i <questions.length; i ++) {
    var renderQuestion = questions[questionIndex].question;
    var renderOptions = questions[questionIndex].options;
    questionContent.textContent = renderQuestion;
  }
  renderOptions.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionContent.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", (checkAnswer));
  })
}

function checkAnswer(event) {
  var element = event.target;

  if (element.matches("li")) {

      var createDiv = document.createElement("div");
      createDiv.setAttribute("id", "createDiv");
      if (element.textContent == questions[questionIndex].answer) {
          score++;
          createDiv.textContent = "Correct!";
      } else {
            timeLeft = timeLeft - penalty;
            createDiv.textContent = "Incorrect!";
      }

      questionIndex++;

      if (questionIndex >= questions.length) {
        quizCompleted();
        createDiv.textContent = "You have finished the quiz! You got  " + score + "/" + questions.length + " correct!";
      } else {
        displayQuestion(questionIndex);
      }
      questionContent.appendChild(createDiv);
  }
}

function quizCompleted () {
  heading.innerHTML = "";
  questionContent.innerHTML = "";
  seconds.textContent = timeLeft;

  var newH1 = document.createElement("h1");
  newH1.setAttribute("id", "finalH1");
  newH1.textContent = "The Quiz is Over!";
  questionContent.appendChild(newH1);

  var pTag = document.createElement("p");
  pTag.setAttribute("id", "pTag");
  questionContent.appendChild(pTag);

  if (timeLeft >=0) {
    var timeScore = timeLeft;
    var newPtag = document.createElement("p");
    clearInterval(timeInterval);
    pTag.textContent = "Your score is " + timeScore;
    questionContent.appendChild(newPtag);
  }
}


