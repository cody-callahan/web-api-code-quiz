var thing = 900

localStorage.setItem("localStorageTestItem", JSON.stringify(thing))

var savedFromStorage = JSON.parse(localStorage.getItem("localStorageTestItem"));

console.log(savedFromStorage)

let variable = "a strihg"

variable = "another string"

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
let score = 0



document.querySelector("#startButton").addEventListener("click", function () {
    // document.querySelector("#quizContainer").innerHTML="Commonly used data types do not include:"
    nextQuestion();
});

    // document.querySelector(".quizChoice").addEventListener("click",function(e){
    //     if(e.target.innerHTML == quizQuestions[currentQuestion].correctAnswer){
    //         score++;
    //         nextQuestion();
    //         var answerText = document.createElement("div");
    //         answerText.textContent = "Correct!";
    //         quizAnswerTextContainer.appendChild(answerText);
    //         // console.log("correct")
    //     } else if (e.target.innerHTML != quizQuestions[currentQuestion].correctAnswer) {
    //         debugger;
    //         var answerText = document.createElement("div");
    //         answerText.textContent = "Incorrect";
    //         quizAnswerTextContainer.appendChild(answerText);
    //         nextQuestion();
    //         // console.log("incorrect")
    //     }
    //  })


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
    } else {
        console.log("no mas questions")
    }
}


const endQuiz = function() {
    document.querySelector("#quizQuestionContainer").innerHTML = "Finished!"
    quizAnswerContainer.innerHTML = "";

    quizAnswerContainer.innerHTML = "Your final score is: "+score ;

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

const submitInitials = function() {
    // debugger;
    var userInitials = document.getElementById("userInput").value;
    var userScore = score;
    quizAnswerContainer.innerHTML = "";
    quizAnswerContainer.textContent = "High scores";
    quizAnswerContainer.textContent = userInitials+' - '+userScore

    quizAnswerTextContainer.innerHTML = "";

    var goBackButton = document.createElement("button");
    goBackButton.textContent = "Go back"
    goBackButton.setAttribute("onclick", "goBack();");

    var clearHighScoresButton = document.createElement("button");
    clearHighScoresButton.textContent = "Clear high scores"
    clearHighScoresButton.setAttribute("onclick", "clearHighScores();");



    localStorage.setItem(userInitials, JSON.stringify(score));
    // savedFromStorage = JSON.parse(localStorage.getItem(userInitials))
}





    // for (let index = 0; index < quizQuestions[0]["answers"].length; index++) {
    //     var answerButton = document.createElement("button");
    //     answerButton.textContent = quizQuestions[0]["answers"][index];
    //     answerButton.className = "quizChoice";
    //     // answerButton.setAttribute("data-task-id", taskId);
    //     quizAnswerContainer.appendChild(answerButton);
    // }
    // // debugger;
    // document.querySelector(".quizChoice").addEventListener("click",function(e){
    //     if(e.target.innerHTML == quizQuestions[currentAnswer].correctAnswer){
    //         score++
    //         // nextQuestion();
    //         var answerText = document.createElement("div");
    //         answerText.textContent = "Correct!";
    //         quizAnswerTextContainer.appendChild(answerText);
    //         // console.log("correct")
    //     } else {
    //         var answerText = document.createElement("div");
    //         answerText.textContent = "Incorrect.";
    //         quizAnswerTextContainer.appendChild(answerText);
    //         // console.log("incorrect")
    //     }
    //  })

    // var answerButton = document.createElement("button");
    // answerButton.textContent = quizQuestions[0]["answers"][0];
    // answerButton.className = "btn edit-btn";
    // // answerButton.setAttribute("data-task-id", taskId);

    // quizAnswerContainer.appendChild(answerButton);

    // var answerButton = document.createElement("button");
    // answerButton.textContent = quizQuestions[0]["answers"][0];
    // answerButton.className = "btn edit-btn";
    // // answerButton.setAttribute("data-task-id", taskId);

    // quizAnswerContainer.appendChild(answerButton);
// })



// create delete button

// var deleteButtonEl = document.createElement("button");
// deleteButtonEl.textContent = "Delete";
// deleteButtonEl.className = "btn delete-btn";
// deleteButtonEl.setAttribute("data-task-id", taskId);

// actionContainerEl.appendChild(deleteButtonEl);

//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];

//     }
//     document.querySelector("#quizAnswerContainer").innerHTML=quizQuestions[0]["answers"]


// document.querySelector("#hypotheticalQuizChoice").addEventListener("click",function(e){
//    if(e.target.innerHTML == quizQuestions[currentAnswer].correctAnswer){
//        score++
//        nextQuestion();
//    }
// })


//document.querySelectorAll(".quizbuttons")
//document.querySelectorAll(".quizbuttons")[0]

