var thing = 900

localStorage.setItem("localStorageTestItem",JSON.stringify(thing))

var savedFromStorage = JSON.parse(localStorage.getItem("localStorageTestItem"));

console.log(savedFromStorage)

let variable = "a strihg"

variable = "another string"

var quizQuestions = [
    {
    question:"who is the president of the US?", 
    answers:["joe biden","margaret thatcher","hulk hogan","catherine zeta-jones"],
    correctAnswer:"joe biden"
},
{
    question:"who is the president of the US?", 
    answers:["joe biden","margaret thatcher","hulk hogan","catherine zeta-jones"],
    correctAnswer:"joe biden"
}
]

document.querySelector("#startButton").addEventListener("click",function(){
    // document.querySelector("#quizContainer").innerHTML="Commonly used data types do not include:"
    quizQuestionNumber = 0
    document.querySelector("#quizQuestionContainer").innerHTML=quizQuestions[0]["question"]
    
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";
    
    // create edit button
    for (let index = 0; index < quizQuestions[0]["answers"].length; index++) {
        var answerButton = document.createElement("button");
        answerButton.textContent = quizQuestions[0]["answers"][index];
        answerButton.className = "btn edit-btn";
        // answerButton.setAttribute("data-task-id", taskId);
        quizAnswerContainer.appendChild(answerButton);
    }

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
})



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

