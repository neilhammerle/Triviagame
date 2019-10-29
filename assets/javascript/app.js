$(document).ready(function () {
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    var remainingTime = 16;
    var intervalID;
    var indexQandA = 0;
    var answered = false;
    var correct;
    var triviaGame = [{
        question: "Which of the following teams is based in Calfornia?",
        answer: ["New York Yankees", "Golden State Warriors", "Dallas Cowboys", "Chicago Blackhawks"],
        correct: "3"

}, {
    question: "Which team does the Golden State Warriors like the least?",
    answer: ["Los Angeles Lakers", "Los Angeles Clippers", "Sacramento Kings", "Whatever team LeBron James is on.."],
    correct: "4"

}, {
    question: "Which player plays for the Golden State Warriors?",
    answer: ["Stephen Curry", "Monte Ellis", "LeBron James", "Kobe Bryant"],
    correct: "1"

}, {
    question: "Which season did the Golden State Warriors won their 1st NBA Championship in 50 years?",
    answer: ["2014-2015 Season", "2008-2009 Season", "2015-2016 Season", "2000-2001 Season"],
    correct: "1"

}, {
    question: "Which season did the Golden State Warriors famously want to forget?",
    answer: ["2002-2003 Season", "2015-2016 Season", "2008-2009 Season", "2018-2019 Season"],
    correct: "2"
}];

function startGame (){
    console.log("game has started");
    $('.start-button').remove();
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredQuestions = 0;
    loadQandA();
}

function loadQandA() {
    answered = false;
    remainingTime = 16;
    intervalID = setInterval(timer, 1000);
    if (answered === false) {
        timer ();
    }
}