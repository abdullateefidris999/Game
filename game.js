// js code functionalities
const quizData = [
    {
        question: "1. What is the largest country in the world?",
        options: ["A. Russia", "B. Canada", "C. China", "D. Nigeria"],
        correctAnswer: "A. Russia"
    },
    {
        question: "2. What is the Course Title of SEN 305?",
        options: ["A. Web Development", "B. Web Technologies", "C. Database System", "D. Intro to computer"],
        correctAnswer: "A. Web Development",
    },
    {
        question: "3. What is the capital of Nigeria?",
        options: ["A. Paris", "B. Abuja", "C. Madrid", "D. Kaduna"],
        correctAnswer: "B. Abuja"
    },
    {
        question: "4. Mewar International University is located at?",
        options: ["A. Lagos", "B. Abuja", "C. Kano", "D. Nassarawa"],
        correctAnswer: "D. Nassarawa"
    },
    {
        question: "5. What is the full meaning of HTML?",
        options: ["A. Hyper Text Markup Liquid", "B. Hyper Toot Markup Languages", "C. Hyper Text Markup Language", "D. Hyper Text Makeup Language"],
        correctAnswer: "C. Hyper Text Markup Language"
    }

];

const quizContainer = document.querySelector(".quiz-container");
const questionElement = quizContainer.querySelector(".question");
const optionsContainer = quizContainer.querySelector(".options");
const submitButton = quizContainer.querySelector(".submit");
const resetButton = quizContainer.querySelector(".reset");
const resultElement = quizContainer.querySelector(".result");

let currentQuestionIndex = 0;
let userScore = 0;

function loadQuestion() {
    // get current question
    const currentQuestion = quizData[currentQuestionIndex];

    // update question text
    questionElement.textContent = currentQuestion.question;

    // clear options container
    optionsContainer.innerHTML = "";

    // loop through each option
    currentQuestion.options.forEach((option, index) => {
        // create option div
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");

        // the option in the inputelementvalue refer to the option in the classlist
        // create input element for radio button
        const inputElement = document.createElement("input");
        inputElement.type = "radio";
        inputElement.name = "option";
        inputElement.value = option;
        inputElement.id = "option" + index;

        // create label element for radio button
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", "option" + index);
        labelElement.textContent = option;

        // append input and label to option div
        optionElement.appendChild(inputElement);
        optionElement.appendChild(labelElement);
        optionsContainer.appendChild(optionElement);
    });
}


function checkAnswer() {
    // Check if an option is selected
    const selectedOption = optionsContainer.querySelector("input[name='option']:checked");

    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }

    // Check if the selected option is correct
    if (selectedOption.value === quizData[currentQuestionIndex].correctAnswer) {
        userScore++;
    }

    // Move to the next question
    currentQuestionIndex++;

    // Check if the quiz has ended
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        // Display the quiz result
        resultElement.textContent = "Congratulations! You have finished the quiz, Your score is: " + userScore + "/" + quizData.length;
    }
}


// Function to reset quiz
function resetQuiz() {
    // Reset result container
    document.querySelector('.result').innerHTML = "";

    // Reset current question index
    currentQuestionIndex = 0;
    // Reset user score
    userScore = 0;
    // Load the first question
    loadQuestion();
}



submitButton.addEventListener("click", checkAnswer);
resetButton.addEventListener("click", resetQuiz);

loadQuestion();