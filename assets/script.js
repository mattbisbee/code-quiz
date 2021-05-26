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
var points = 5;
var ulCreate = document.createElement('ul');
var startBtn = document.querySelector("#start-quiz");
var seconds = document.querySelector("#seconds")
var timeHeading = document.querySelector("#time");
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

    var renderQuestion = questions[questionIndex].question;
    var renderOptions = questions[questionIndex].options;
    questionContent.textContent = renderQuestion;
    
  renderOptions.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionContent.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", (checkAnswer));
  })
}
//compares player answer to the correct solution
function checkAnswer(event) {
  var element = event.target;

  if (element.matches("li")) {

      var createDiv = document.createElement("div");
      createDiv.setAttribute("id", "createDiv");
      if (element.textContent == questions[questionIndex].answer) {
          score++;
          createDiv.textContent = "Correct!";
          timeLeft = timeLeft + points;
          createDiv.setAttribute("style", "color:green; padding: 20px");
      } else {
            timeLeft = timeLeft - penalty;
            createDiv.textContent = "Incorrect!";
            createDiv.setAttribute("style", "color:red; padding: 20px");
      }

      questionIndex++;

      if (questionIndex >= questions.length) {
        quizCompleted();
        createDiv.textContent = "You have finished the quiz! You got  " + score + "/" + questions.length + " correct!";
        createDiv.setAttribute("style", "color:black; padding: 20px; border-top: 0px;");
      } else {
        displayQuestion(questionIndex);
      }
      questionContent.appendChild(createDiv);
  }
}

function createInput () {
  var nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "userInitials");
  nameInput.placeholder = "Enter your name/initials here!";
  nameInput.setAttribute("style", "border: 2px solid black; font-size: 25px; text-align: center; border-radius:20px; background-color: lightblue; color: red; font-weight: bold; margin: 20px; padding: 20px; width: 80%;");
  questionContent.appendChild(nameInput);
}


function createDiv () {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("id", "highScoreDiv");
  questionContent.appendChild(newDiv);
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
  createInput();

  var scoreSubmit = document.createElement("button");
  scoreSubmit.setAttribute("type", "submit");
  scoreSubmit.setAttribute("style", "font-size: 30px; border-radius: 20px; background-color: blue; color: white; padding: 10px; margin: auto; display: block;");
  scoreSubmit.textContent = "Submit";
  questionContent.appendChild(scoreSubmit);

  scoreSubmit.addEventListener("click", function() {
    scoreBoard ();

  });

  var returnSubmit = document.createElement("button");
  returnSubmit.setAttribute("type", "submit");
  returnSubmit.setAttribute("style", "font-size: 30px; border-radius: 20px; background-color: orange; color: blue; padding: 10px; margin: auto; margin-top: 20px; display: block");
  returnSubmit.textContent = "REDO";
  questionContent.appendChild(returnSubmit);

  returnSubmit.addEventListener("click", function() {
    window.location.replace("./index.html");
  })
}

function scoreBoard () {
  var highScores = [];
  var userInitialsValue = document.getElementById('userInitials').value;
  var savedScore = {
    initials: userInitialsValue,
    score: timeLeft
  };
  highScores.push(savedScore);

  highScores = highScores.concat(JSON.parse(localStorage.getItem('highScores') || '[]'));

  localStorage.setItem("highScores", JSON.stringify(highScores));
  console.log(highScores);

  for (i = 0; i <highScores.length; i++) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "high-score")
    newDiv.innerHTML = highScores[i].initials + ":" + highScores[i].score;
    document.body.appendChild(newDiv);
  };
};

