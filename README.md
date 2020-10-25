# Timed Quiz Template

The purpose of this application is to provide a multiple-choice question based quiz that operates on the condition that the user answer within a set time frame that is displayed on the top right corner at all times.

## Installation

Clone repository to access the .html, .css, .js and Assets folder which contains images.

Repository is held at https://github.com/hector-gm/timedQuiz.git

## Sample

Live sample of the project is hosted at https://hector-gm.github.io/timedQuiz/ 
![timedQuiz Homepage](/images/homepage_screenshot.png)



## Usage

The quiz questions and answers can be easily replaced when the code content is accessed in the .js file. Once the user begins the quiz, a single question and its four associated possible answers will be displayed. Concurrently, a timer displayed at the top right corner will begin its countdown to zero.

As the user selects answers, the timer will continue diminishing without pause between questions. An incorrect answer will penalize the user and automatically deduct 10 seconds from the timer.

If the user answers all questions or the timer reaches 0, a message will be displayed indicating the end of the quiz and the score achieved. Then the user will be prompted to write their initials to record the score in local storage.