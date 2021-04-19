var quizQuestions = [
    {
        question: "who is the president of the US?",
        answers: ["joe biden", "margaret thatcher", "hulk hogan", "catherine zeta-jones"],
        correctAnswer: "joe biden"
    },
    {
        question: "where do the dbacks play",
        answers: ["utah", "arizona", "new mexico", "new york"],
        correctAnswer: "arizona"
    },
    {
        question: "who was the first overall pick in the 2019 MLB draft?",
        answers: ["Adley Rutschman", "Bobby Witt Jr.", "Andrew Vaughn", "JJ Bleday"],
        correctAnswer: "Adley Rutschman"
    },
    {
        question: "where do the angels play",
        answers: ["salt lake city", "phoenix", "los angeles", "new york city"],
        correctAnswer: "los angeles"
    }

]

let currentQuestion = 0;
let score = 0;

var timerEl = document.getElementById('time-left');

var timeLeft = 0;
function countdown() {
    let timeLeft = 75;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // End Quiz
        endQuiz();
      }
    }, 1000);
  }



document.querySelector("#startButton").addEventListener("click", function () {
    // document.querySelector("#quizContainer").innerHTML="Commonly used data types do not include:"
    countdown();
    quizAnswerTextContainer.innerHTML = "";
    nextQuestion();
});

const nextQuestion = function () {

    // document.querySelector("#startButton").innerHTML = "";
    document.querySelector("#startButton").style.display = "none";

    document.querySelector("#quizQuestionContainer").innerHTML = quizQuestions[currentQuestion]["question"];
    quizAnswerContainer.innerHTML = "";

    if (currentQuestion < 4) {
        for (let index = 0; index < quizQuestions[currentQuestion]["answers"].length; index++) {
            var answerButton = document.createElement("button");
            answerButton.textContent = quizQuestions[currentQuestion]["answers"][index];
            answerButton.className = "quizChoice";
            // answerButton.setAttribute("data-task-id", taskId);
            quizAnswerContainer.appendChild(answerButton)
        }
        document.querySelectorAll(".quizChoice").forEach(item => {
            item.addEventListener('click', event => {
                //handle click
                if (event.target.innerHTML == quizQuestions[currentQuestion].correctAnswer) {
                    score++;
                    answerText = "Correct!";
                } else {
                    answerText = "Incorrect";
                    timeLeft-=10;
                }
                currentQuestion = currentQuestion + 1;
                quizAnswerTextContainer.textContent = answerText;
                if (currentQuestion >= 4) {
                    endQuiz();
                } else {
                    nextQuestion();
                }

            }
            )
        })
    }
}


const endQuiz = function () {
    document.querySelector("#quizQuestionContainer").innerHTML = "Finished!"
    quizAnswerContainer.innerHTML = "";

    quizAnswerContainer.innerHTML = "Your final score is: " + score;

    var EnterHighScore = document.createElement("label");
    EnterHighScore.textContent = 'Enter initials:';
    quizAnswerContainer.appendChild(EnterHighScore);

    var SubmitInitialsTextBox = document.createElement("input");
    SubmitInitialsTextBox.setAttribute("type", "text");
    SubmitInitialsTextBox.setAttribute("id", "userInput");

    var SubmitInitialsButton = document.createElement("input");
    SubmitInitialsButton.setAttribute("type", "submit");
    SubmitInitialsButton.setAttribute("onclick", "submitInitials();");

    quizAnswerContainer.appendChild(SubmitInitialsTextBox);
    quizAnswerContainer.appendChild(SubmitInitialsButton);
}

const submitInitials = function () {
    // debugger;
    var userInitials = document.getElementById("userInput").value;
    var userScore = score;
    quizAnswerContainer.innerHTML = "";
    quizAnswerContainer.textContent = "High scores";
    quizAnswerContainer.textContent = userInitials + ' - ' + userScore

    quizAnswerTextContainer.innerHTML = "";

    var goBackButton = document.createElement("button");
    var clearHighScoresButton = document.createElement("button");

    quizAnswerTextContainer.appendChild(goBackButton);
    quizAnswerTextContainer.appendChild(clearHighScoresButton);


    goBackButton.textContent = "Go back"
    goBackButton.setAttribute("onclick", "goBack();");


    clearHighScoresButton.textContent = "Clear high scores"
    clearHighScoresButton.setAttribute("onclick", "clearHighScores();");


    localStorage.setItem(userInitials, JSON.stringify(score));
    // savedFromStorage = JSON.parse(localStorage.getItem(userInitials))

}

const goBack = function () {
    // debugger;
    quizAnswerTextContainer.innerHTML = "";
    currentQuestion = 0;
    score = 0;
    // return currentQuestion;
    nextQuestion();
}


const clearHighScores = function () {
    quizAnswerTextContainer.innerHTML = "";
    currentQuestion = 0;
    score = 0;

    localStorage.clear();
    nextQuestion();
}


function allStorage() {

    var allScores = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        key = Object.keys(localStorage)[i];
        value = localStorage.getItem(keys[i]);
        obj = { key, value };
        allScores.push(obj);
    }

    // quizQuestionContainer.innerHTML = "";
    // quizAnswerContainer.innerHTML = "";
    quizAnswerTextContainer.innerHTML = "";

    quizAnswerTextContainer.innerHTML = JSON.stringify(allScores);

    document.querySelector("#startButton").style.display = "block";


    // return allScores;
}

document.querySelector("#high-scores").addEventListener("click", function () {
    allStorage();
}
)