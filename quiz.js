document.getElementById("clickButton").addEventListener("click", function(){
    document.getElementById("myQuestions").innerHTML = questions;
    });


    var questions = [
        {
          title: "Commonly used data types DO NOT include:",
          choices: ["strings", "booleans", "alerts", "numbers"],
          answer: "alerts"
        },
        {
          title: "The condition in an if / else statement is enclosed within ____.",
          choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
          answer: "parentheses"
        },
        {
          title: "What year was Javascript initially created?",
          choices: ["2000", "1825", "1995", "1992"],
          answer: "1992"
        },
        {
          title: "Which symbol is used to create single line comments in Javascript?",
          choices: ["//", "question marks", "parentheses", "$$"],
          answer: "//"
        },
        {
          title: "What text do you need to start building a for-loop?",
          choices: ["begin", "for", "start text", "none, just use square brackets"],
          answer: "for"
        },
        
      ];





// var choices = [];
// var currentQuestion = 0
//     for (currentQuestion = 0; answer < choices.length; currentQuestion++) {
//         text += choices[i] + "";
//       }
// document.getElementById("myQuestions").innerHTML = text;


//Other attempts:
//If you put a variable to .value it makes the input what you get from the user into a value you can use
//Abby's suggestion of currentQuestion++ instead of for loop
//Unordered list within form <ul id = "question-list">; li id = "0"
