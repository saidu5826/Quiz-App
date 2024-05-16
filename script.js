const questions = [
    {
        question: "Which type of JavaScript language is ___",
        answer: [
            { text: "Object-Oriented", correct: false },
            { text: "Object-Based", correct: false },
            { text: "Assembly-language", correct: false },
            { text: "High-level", correct: false },
        ]
    },
    {
        question: "When interpreter encounters an empty statements, what it will do:",
        answer: [
            { text: "Shows a warning", correct: false },
            { text: "Prompts to complete the statement", correct: false },
            { text: "Throws an error", correct: false },
            { text: "Ignores the statements", correct: false },
        ]
    },
    {
        question: "Which of the following number object function returns the value of the number?",
        answer: [
            { text: "toString()", correct: false },
            { text: "valueOf()", correct: false },
            { text: "toLocaleString()", correct: false },
            { text: "toPrecision()", correct: false },
        ]
    },
    {
        question: " In JavaScript, what will be used for calling the function definition expression:",
        answer: [
            { text: "Function prototype", correct: false },
            { text: "Function literal", correct: false },
            { text: "Function calling", correct: false },
            { text: "Function declaration", correct: false },
        ]
    },
];

const questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next'
    showQuestion()

}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestion + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question

    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButton.appendChild(button)
    })
}