
// Define our initial score and time at the start of the quiz
var score = 0;
var timeRemaining = 0;
var timer;
var currentQuestion= -1;

// Define the questions, multiple choice options and correct answers for our quiz
var questions = [ 
    {
    display:"A very useful tool used during development and debuggin for printing content to the debugger is:",
    options:["JavaScript","Terminal/Bash","for loops", "console log"],
    answer:"console log"
    },

    { 
    display:"String values must be enclosed within ____ when being assigned to variables.",
    options:["Commas", "Curly brackets", "Quotes", "Parentheses"],
    answer: "Quotes"
    },

    {
    display:"Arrays in JavaScript can be used to store ___.",
    options:["Numbers and strings","Other arrays","Booleans","All of the above"],
    answer:"All of the above"
    },

    {
    display:"The condition in an if/else statement is enclosed within ___.",
    options:["Quotes","Curly brackets","Parentheses","Square brackets"],
    answer:"Parentheses"
    },

    {
    display:"Commonly used data types do not include:",
    options:["Strings","Booleans","Alerts","Numbers"],
    answer:"Alerts"
    }
]

// Start the countdown clock once quiz begins
function startQuiz() {
    timeRemaining=75; // Set max Timer
   document.getElementById("countdown").innerHTML=timeRemaining; //display countdown in html
   
   timer=setInterval(function(){ // set function on an interval to repeat
       timeRemaining--; // set countdown to reduce 1 value at a time
       document.getElementById("countdown").innerHTML=timeRemaining; //displays new countdown value in html
       if (timeRemaining<=0) {  // set countdown value at which function will stop the quiz
           clearInterval(timer);    // clear the repeat interval
            endQuiz();          // end the quiz if the condition is met
        } //Close IF argument
   },1000); // Close interval with repeat cycle set to 1000 milliseconds

   nextQuestion(); // Instruction to run the next question function
}

function endQuiz() {
    clearInterval(timer);
    var quiz = '<h2>End of quiz!!!</h2> <input type="text" id="user" placeholder="Initials"> <button onclick="saveScore()">Submit your score to the scoreboard!</button>';

    document.getElementById("displayQuizContent").innerHTML=quiz;
}

function saveScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName", document.getElementById("name").value);
    getScore();
}

function getScore() {
    var quiz = "<h2>" + localStorage.getItem("highscore")+"</h2>";
    document.getElementById("displayQuizContent").innerHTML=quiz;
}

function wrongAnswer() {
    timeRemaining-= 15;
    nextQuestion();
}

function correctAnswer () {
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;  // Increase the index of the current question by value of 1 every time the function is called

    if (currentQuestion>questions.length) { // Set condition to stop the quiz once all questions have been presented
        endQuiz(); // Run the function to end quiz
        return; //
    }
    var quiz= "<h2>" + questions[currentQuestion].display + "</h2>" // Current question text to be displayed from "display" property

    for (var runQuestions=0;runQuestions<questions[currentQuestion].choices.length; runQuestions++) {
        var showChoices="<button onclick=\"[ANS]\">[OPTION]</button>";
        showChoices=showChoices.replace("[OPTION]", questions[currentQuestion].choices[runQuestions]);
        if (questions[currentQuestion].choices[runQuestions]==questions[currentQuestion].answer){
            showChoices=showChoices.replace("[ANS]", "correct()");
        } else {
            showChoices=showChoices.replace("[ANS]", "incorrect()");
        }
        quiz += runQuestions
    }
    document.getElementById("displayQuizContent").innerHTML=quiz;
}



