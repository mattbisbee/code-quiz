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


function startQuiz () {
  window.addEventListener();

  //displays where the user is at compared to the entire test, i.e, question 3 out of 4
  var testLocation = 0;

  //tracks correct answers
  var correctAnswers = 0;

  //contains the test div
  var test 

  //contains the playerProgress heading and displays the progress in the test
  var playerProgress 

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
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    answer: "" 
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    answer: "" 
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    answer: "" 
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    answer: "" 
  },


  ];

  //function to get elements in HTML
  function get (x) {
    return document.getElementById(x);
  }

  //Function to display the question
  function displayQuestion () {

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


  function countDownTimer () {

  };
};


startQuiz ();