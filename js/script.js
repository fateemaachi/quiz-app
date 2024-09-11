// // References
// let timeLeft = document.querySelector(".time-left");
// let quizContainer = document.getElementById("container");
// let nextBtn = document.getElementById("next-button");
// let countOfQuestion = document.querySelector(".number-of-question");
// let displayContainer = document.getElementById("display-container");
// let scoreContainer = document.querySelector(".score-container");
// let startScreen = document.querySelector(".start-screen");
// let startButton = document.getElementById("start-button");
// let questionCount = 0;
// let scoreCount = 0;
// let countdown; // Timer for individual question
// let overallCountdown; // Overall timer
// let totalQuizTime = 120; // Total quiz time in seconds
// let timePerQuestion = totalQuizTime / 10; // Time allotted per question
// let studentName = "John Doe"; // Replace with the actual student name
// let schoolName = "Example Academy"; // Replace with the actual school name

// // Retrieve login details from localStorage
// document.addEventListener("DOMContentLoaded", function () {
//   const loginDetails = JSON.parse(localStorage.getItem('loginDetails'));

//   if (loginDetails) {
//       const schoolNameElement = document.getElementById("school-name");
//       const studentNameElement = document.getElementById("student-name");
      
//       schoolNameElement.textContent = `School: ${loginDetails.school}`;
//       studentNameElement.textContent = `Student: ${loginDetails.student}`;
//       schoolName = loginDetails.school; // Update the schoolName variable
//       studentName = loginDetails.student; // Update the studentName variable
//   }
// });

// // Questions and Options array
// const quizArray = [
//     {
//       id: "0",
//       question: "Which is the most widely spoken language in the world?",
//       options: ["Spanish", "Mandarin", "English", "German"],
//       correct: "Mandarin",
//     },
//     {
//       id: "1",
//       question: "Which is the only continent in the world without a desert?",
//       options: ["North America", "Asia", "Africa", "Europe"],
//       correct: "Europe",
//     },
//     {
//       id: "2",
//       question: "Who invented the computer?",
//       options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
//       correct: "Charles Babbage",
//     },
//     {
//       id: "3",
//       question: "What is the capital of France?",
//       options: ["Berlin", "Madrid", "Paris", "Lisbon"],
//       correct: "Paris",
//     },
//     {
//       id: "4",
//       question: "Which planet is known as the Red Planet?",
//       options: ["Earth", "Mars", "Jupiter", "Venus"],
//       correct: "Mars",
//     },
//     {
//       id: "5",
//       question: "What is the chemical symbol for water?",
//       options: ["O2", "H2O", "CO2", "NaCl"],
//       correct: "H2O",
//     },
//     {
//       id: "6",
//       question: "What is the largest organ in the human body?",
//       options: ["Heart", "Lung", "Skin", "Liver"],
//       correct: "Skin",
//     },
//     {
//       id: "7",
//       question: "Who wrote 'Romeo and Juliet'?",
//       options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
//       correct: "William Shakespeare",
//     },
//     {
//       id: "8",
//       question: "What is the process by which plants make their food?",
//       options: ["Respiration", "Photosynthesis", "Fermentation", "Transpiration"],
//       correct: "Photosynthesis",
//     },
//     {
//       id: "9",
//       question: "Which element has the chemical symbol 'Au'?",
//       options: ["Silver", "Gold", "Copper", "Iron"],
//       correct: "Gold",
//     },
// ];

// // Display Results in Modal
// const showResultModal = () => {
//   const percentage = Math.round((scoreCount / quizArray.length) * 100);
//   const resultModal = document.getElementById("result-modal");
//   const modalMessage = document.getElementById("modal-message");
//   const modalDate = document.getElementById("modal-date");
//   const currentDate = new Date().toLocaleString(); // Display current date and time

//   modalMessage.innerHTML = `Name: ${studentName}<br>School: ${schoolName}<br>Score: ${percentage}%`;
//   modalDate.innerHTML = `Date and Time: ${currentDate}`;

//   resultModal.classList.remove("hidden");

//   // Save the winning school name in localStorage
//   let winners = JSON.parse(localStorage.getItem('winners')) || [];
//   winners.push({ school: schoolName, date: currentDate });
//   localStorage.setItem('winners', JSON.stringify(winners));
// };

// // Next Button
// nextBtn.addEventListener("click", () => {
//   questionCount += 1;
//   if (questionCount === quizArray.length) {
//     displayContainer.classList.add("hidden");
//     // scoreContainer.classList.remove("hidden");
//     showResultModal(); // Show the result modal
//   } else {
//     countOfQuestion.innerHTML = `${questionCount + 1} of ${quizArray.length} Questions`;
//     quizDisplay(questionCount);
//     resetTimer();
//   }
// });

// // Timer for individual questions
// const timerDisplay = () => {
//   countdown = setInterval(() => {
//     timePerQuestion--;
//     timeLeft.innerHTML = `${timePerQuestion}s`;
//     if (timePerQuestion <= 0) {
//       clearInterval(countdown);
//       nextBtn.click(); // Automatically go to the next question or end quiz
//     }
//   }, 1000);
// };

// // Reset individual question timer
// const resetTimer = () => {
//   timePerQuestion = totalQuizTime / 10; // Reset to time allotted for each question
//   clearInterval(countdown);
//   timerDisplay();
// };

// // Function to handle the end of the quiz
// const endQuiz = () => {
//   clearInterval(countdown);
//   clearInterval(overallCountdown);
  
//   displayContainer.classList.add("hidden");
//   scoreContainer.classList.remove("hidden");
//   showResultModal(); // Show the result modal
// };

// // Overall Timer
// const startOverallTimer = () => {
//   let overallTimeLeft = totalQuizTime;
//   overallCountdown = setInterval(() => {
//     overallTimeLeft--;
//     const minutes = Math.floor(overallTimeLeft / 60);
//     const seconds = overallTimeLeft % 60;
//     document.getElementById("countdown-timer").textContent = `Timer: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
//     if (overallTimeLeft <= 0) {
//       clearInterval(overallCountdown);
//       endQuiz(); // Automatically end quiz when time is up
//     }
//   }, 1000);
// };

// // Display Quiz
// const quizDisplay = (questionCount) => {
//   let quizCards = document.querySelectorAll(".container-mid");
//   quizCards.forEach((card) => {
//     card.classList.add("hidden");
//   });
//   quizCards[questionCount].classList.remove("hidden");
// };

// // Quiz Creation
// function quizCreator() {
//   quizArray.sort(() => Math.random() - 0.5);
//   for (let i of quizArray) {
//     i.options.sort(() => Math.random() - 0.5);
//     let div = document.createElement("div");
//     div.classList.add("container-mid", "hidden");
//     countOfQuestion.innerHTML = `1 of ${quizArray.length} Questions`;
//     let question_DIV = document.createElement("p");
//     question_DIV.classList.add("question");
//     question_DIV.innerHTML = i.question;
//     div.appendChild(question_DIV);
//     div.innerHTML += `
//       <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
//       <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
//       <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
//       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
//     `;
//     quizContainer.appendChild(div);
//   }
// }

// // Checker Function to check if option is correct or not
// function checker(userOption) {
//   let userSolution = userOption.innerText;
//   let question = document.getElementsByClassName("container-mid")[questionCount];
//   let options = question.querySelectorAll(".option-div");

//   if (userSolution === quizArray[questionCount].correct) {
//     userOption.classList.add("correct");
//     scoreCount++;
//   } else {
//     userOption.classList.add("incorrect");
//     options.forEach((element) => {
//       if (element.innerText === quizArray[questionCount].correct) {
//         element.classList.add("correct");
//       }
//     });
//   }

//   clearInterval(countdown);
//   options.forEach((element) => {
//     element.disabled = true;
//   });
// }

// // Initial Setup
// function initial() {
//   quizContainer.innerHTML = "";
//   questionCount = 0;
//   scoreCount = 0;
//   clearInterval(countdown);
//   clearInterval(overallCountdown);
//   startOverallTimer();
//   timerDisplay();
//   quizCreator();
//   quizDisplay(questionCount);
// }

// // When user clicks on start button
// startButton.addEventListener("click", () => {
//   startScreen.classList.add("hidden");
//   displayContainer.classList.remove("hidden");
//   initial();
// });

// // Hide quiz and display start screen
// window.onload = () => {
//   startScreen.classList.remove("hidden");
//   displayContainer.classList.add("hidden");
// };

let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount = 0;
let scoreCount = 0;
let countdown; // Timer for individual question
let overallCountdown; // Overall timer
let totalQuizTime = 120; // Total quiz time in seconds
let timePerQuestion = totalQuizTime / 10; // Time allotted per question
let studentName = "John Doe"; // Replace with the actual student name
let schoolName = "Example Academy"; // Replace with the actual school name

// Retrieve login details from localStorage
document.addEventListener("DOMContentLoaded", function () {
  const loginDetails = JSON.parse(localStorage.getItem('loginDetails'));

  if (loginDetails) {
    const schoolNameElement = document.getElementById("school-name");
    const studentNameElement = document.getElementById("student-name");
    
    schoolNameElement.textContent = `School: ${loginDetails.school}`;
    studentNameElement.textContent = `Student: ${loginDetails.student}`;
    schoolName = loginDetails.school; // Update the schoolName variable
    studentName = loginDetails.student; // Update the studentName variable
  }
});

// Questions and Options array
const quizArray = [
  {
          id: "0",
          question: "Which is the most widely spoken language in the world?",
          options: ["Spanish", "Mandarin", "English", "German"],
          correct: "Mandarin",
        },
        {
          id: "1",
          question: "Which is the only continent in the world without a desert?",
          options: ["North America", "Asia", "Africa", "Europe"],
          correct: "Europe",
        },
        {
          id: "2",
          question: "Who invented the computer?",
          options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
          correct: "Charles Babbage",
        },
        {
          id: "3",
          question: "What is the capital of France?",
          options: ["Berlin", "Madrid", "Paris", "Lisbon"],
          correct: "Paris",
        },
        {
          id: "4",
          question: "Which planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Jupiter", "Venus"],
          correct: "Mars",
        },
        {
          id: "5",
          question: "What is the chemical symbol for water?",
          options: ["O2", "H2O", "CO2", "NaCl"],
          correct: "H2O",
        },
        {
          id: "6",
          question: "What is the largest organ in the human body?",
          options: ["Heart", "Lung", "Skin", "Liver"],
          correct: "Skin",
        },
        {
          id: "7",
          question: "Who wrote 'Romeo and Juliet'?",
          options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
          correct: "William Shakespeare",
        },
        {
          id: "8",
          question: "What is the process by which plants make their food?",
          options: ["Respiration", "Photosynthesis", "Fermentation", "Transpiration"],
          correct: "Photosynthesis",
        },
        {
          id: "9",
          question: "Which element has the chemical symbol 'Au'?",
          options: ["Silver", "Gold", "Copper", "Iron"],
          correct: "Gold",
        },
];

// Display Results in Modal
const showResultModal = () => {
  const percentage = Math.round((scoreCount / quizArray.length) * 100);
  const resultModal = document.getElementById("result-modal");
  const modalMessage = document.getElementById("modal-message");
  const modalDate = document.getElementById("modal-date");
  const currentDate = new Date().toLocaleString(); // Display current date and time

  modalMessage.innerHTML = `Name: ${studentName}<br>School: ${schoolName}<br>Score: ${percentage}%`;
  modalDate.innerHTML = `Date and Time: ${currentDate}`;

  resultModal.classList.remove("hidden");

  // Save the winning school name and candidate in localStorage
  let winners = JSON.parse(localStorage.getItem('winners')) || [];
  winners.push({ 
    school: schoolName, 
    student: studentName,
    score: percentage,  // Save the score
    date: currentDate 
  });
  localStorage.setItem('winners', JSON.stringify(winners));

  displayWinners(); // Update the list of winners
};

// // Function to display winners in a table
// const displayWinners = () => {
//   const winnersTbody = document.getElementById("winners-tbody");
//   let winners = JSON.parse(localStorage.getItem('winners')) || [];

//   winnersTbody.innerHTML = ''; // Clear the existing table rows
//   winners.forEach(winner => {
//     let row = document.createElement("tr");
//     row.classList.add("bg-white", "border-b", "dark:bg-gray-800", "dark:border-gray-700");

//     row.innerHTML = `
//       <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//         ${winner.student}
//       </th>
//       <td class="px-6 py-4">
//         ${winner.school}
//       </td>
//       <td class="px-6 py-4">
//         ${winner.score} <!-- Display the score -->
//       </td>
//       <td class="px-6 py-4">
//         ${winner.date}
//       </td>
//     `;

//     winnersTbody.appendChild(row);
//   });
// };




// Next Button
nextBtn.addEventListener("click", () => {
  questionCount += 1;
  if (questionCount === quizArray.length) {
    displayContainer.classList.add("hidden");
    showResultModal(); // Show the result modal
  } else {
    countOfQuestion.innerHTML = `${questionCount + 1} of ${quizArray.length} Questions`;
    quizDisplay(questionCount);
    resetTimer();
  }
});

// Timer for individual questions
const timerDisplay = () => {
  countdown = setInterval(() => {
    timePerQuestion--;
    timeLeft.innerHTML = `${timePerQuestion}s`;
    if (timePerQuestion <= 0) {
      clearInterval(countdown);
      nextBtn.click(); // Automatically go to the next question or end quiz
    }
  }, 1000);
};

// Reset individual question timer
const resetTimer = () => {
  timePerQuestion = totalQuizTime / 10; // Reset to time allotted for each question
  clearInterval(countdown);
  timerDisplay();
};

// Function to handle the end of the quiz
const endQuiz = () => {
  clearInterval(countdown);
  clearInterval(overallCountdown);
  
  displayContainer.classList.add("hidden");
  scoreContainer.classList.remove("hidden");
  showResultModal(); // Show the result modal
};

// Overall Timer
const startOverallTimer = () => {
  let overallTimeLeft = totalQuizTime;
  overallCountdown = setInterval(() => {
    overallTimeLeft--;
    const minutes = Math.floor(overallTimeLeft / 60);
    const seconds = overallTimeLeft % 60;
    document.getElementById("countdown-timer").textContent = `Timer: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (overallTimeLeft <= 0) {
      clearInterval(overallCountdown);
      endQuiz(); // Automatically end quiz when time is up
    }
  }, 1000);
};

// Display Quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  quizCards.forEach((card) => {
    card.classList.add("hidden");
  });
  quizCards[questionCount].classList.remove("hidden");
};

// Quiz Creation
function quizCreator() {
  quizArray.sort(() => Math.random() - 0.5);
  for (let i of quizArray) {
    i.options.sort(() => Math.random() - 0.5);
    let div = document.createElement("div");
    div.classList.add("container-mid", "hidden");
    countOfQuestion.innerHTML = `1 of ${quizArray.length} Questions`;
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    div.innerHTML += `
      <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

// Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question = document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    options.forEach((element) => {
      if (element.innerText === quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  clearInterval(countdown);
  options.forEach((element) => {
    element.disabled = true;
  });
}

// Initial Setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  clearInterval(countdown);
  clearInterval(overallCountdown);
  startOverallTimer();
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
  displayWinners(); // Display the winners list on initialization
}

// When user clicks on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  displayContainer.classList.remove("hidden");
  initial();
});

// Hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hidden");
  displayContainer.classList.add("hidden");
};

