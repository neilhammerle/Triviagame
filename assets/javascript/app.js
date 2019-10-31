$(document).ready(function () {
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    var timeRemaining = 16;
    var intervalID;
    var indexQandA = 0;
    var answered = false;
    var correct;
    var triviaGame = [{
        question: "Which of the following teams is based in Calfornia?",
        answer: ["New York Yankees", "Golden State Warriors", "Dallas Cowboys", "Chicago Blackhawks"],
        correct: "1"

}, {
    question: "Which team does the Golden State Warriors like the least?",
    answer: ["Los Angeles Lakers", "Los Angeles Clippers", "Sacramento Kings", "Whatever team LeBron James is on.."],
    correct: "3"

}, {
    question: "Which player plays for the Golden State Warriors?",
    answer: ["Stephen Curry", "Monte Ellis", "LeBron James", "Kobe Bryant"],
    correct: "0"

}, {
    question: "Which season did the Golden State Warriors won their 1st NBA Championship in 50 years?",
    answer: ["2014-2015 Season", "2008-2009 Season", "2015-2016 Season", "2000-2001 Season"],
    correct: "0"

}, {
    question: "Which season did the Golden State Warriors famously want to forget?",
    answer: ["2002-2003 Season", "2015-2016 Season", "2008-2009 Season", "2018-2019 Season"],
    correct: "1"
}];

function startGame() {
    console.log("game has begun");
    $('.start-button').remove();
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredQuestions = 0;
    loadQandA();
}

function loadQandA() {
    answered = false; 
    timeRemaining = 16;
    intervalID = setInterval(timer, 1000);
    if (answered === false) {
        timer();
    }
    correct = triviaGame[indexQandA].correct;
    var question = triviaGame[indexQandA].question;
    $('.question').html(question);
    for (var i = 0; i < 4; i++) {
        var answer = triviaGame[indexQandA].answer[i];
        $('.answers').append('<h4 class= answersAll id=' + i + '>' + answer + '</h4>');
    }

    $("h4").click(function () {
        var id = $(this).attr('id');
        if (id === correct) {
            answered = true; 
            $('.question').text("THE ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
            correctAnswer();
        } else {
            answered = true; 
            $('.question').text("YOU CHOSE: " + triviaGame[indexQandA].answer[id] + ".....HOWEVER THE ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
            incorrectAnswer();
        }
    });
}

function timer() {
    if (timeRemaining === 0) {
        answered = true;
        clearInterval(intervalID);
        $('.question').text("THE CORRECT ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
        unAnswered();
    } else if (answered === true) {
        clearInterval(intervalID);
    } else {
        timeRemaining--;
        $('.timeRemaining').text('YOU HAVE ' + timeRemaining + ' SECONDS TO CHOOSE');
    }
}

function correctAnswer() {
    correctAnswers++;
    $('.timeRemaining').text("YOU HAVE ANSWERED CORRECTLY!").css({
        'color': '#3D414F'
    });
    resetRound();
}

function incorrectAnswer() {
    incorrectAnswers++;
    $('.timeRemaining').text("YOU HAVE ANSWERED INCORRECTLY!").css({
        'color': '#3D414F'
    });
    resetRound();

}

function unAnswered() {
    unansweredQuestions++;
    $('.timeRemaining').text("YOU FAILED TO CHOOSE AN ANSWER").css({
        'color': '#3D414F'
    });
    resetRound();
}

function resetRound() {
    $('.answersAll').remove();
    $('.answers').append('<img class=answerImage width="150" height="150" src="' + triviaGame[indexQandA].image + ' ">'); 
    indexQandA++; 
    if (indexQandA < triviaGame.length) {
        setTimeout(function () {
            loadQandA();
            $('.answerImage').remove();
        }, 5000); 
    } else {
        setTimeout(function () {
            $('.question').remove();
            $('.timeRemaining').remove();
            $('.answerImage').remove();
            $('.answers').append('<h4 class= answersAll end>Correct Answers: ' + correctAnswers + '</h4>');
            $('.answers').append('<h4 class= answersAll end>Incorrect Answers: ' + incorrectAnswers + '</h4>');
            $('.answers').append('<h4 class= answersAll end>Unanswer Quesions: ' + unansweredQuestions + '</h4>');
            setTimeout(function () {
                location.reload();
            }, 7000);
        }, 5000);
    }
};

$('.startButton').on("click", function () {
    $('.startButton');
    startGame();

});

});