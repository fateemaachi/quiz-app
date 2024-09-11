// document.addEventListener("DOMContentLoaded", function () {
//     const schoolSelect = document.getElementById("schoolSelect");
//     const candidateSelect = document.getElementById("candidateSelect");
//     const loginForm = document.getElementById("loginForm");
//     const loginMessage = document.getElementById("loginMessage");

//     // Load registered schools from localStorage
//     let schools = JSON.parse(localStorage.getItem("schools")) || {};

//     // Populate the school dropdown
//     for (let schoolName in schools) {
//         const option = document.createElement("option");
//         option.value = schoolName;
//         option.textContent = schoolName;
//         schoolSelect.appendChild(option);
//     }

//     // Populate the candidate dropdown when a school is selected
//     schoolSelect.addEventListener("change", function () {
//         // Clear previous candidate options
//         candidateSelect.innerHTML = '<option value="" disabled selected>Select Candidate</option>';

//         const selectedSchool = schoolSelect.value;

//         if (selectedSchool && schools[selectedSchool] && schools[selectedSchool].candidates) {
//             // Populate the candidates for the selected school
//             schools[selectedSchool].candidates.forEach(candidate => {
//                 const option = document.createElement("option");
//                 option.value = candidate.name;
//                 option.textContent = candidate.name;
//                 candidateSelect.appendChild(option);
//             });
//         }
//     });

//     // Handle login form submission
//     loginForm.addEventListener("submit", function (e) {
//         e.preventDefault();

//         const selectedSchool = schoolSelect.value;
//         const selectedCandidate = candidateSelect.value;
//         const enteredPassword = document.getElementById("password").value;

//         if (!selectedSchool || !selectedCandidate) {
//             loginMessage.textContent = "Please select both school and candidate.";
//             loginMessage.className = "text-red-500";
//             return;
//         }

//         // Find the candidate and check the password
//         const candidate = schools[selectedSchool].candidates.find(
//             candidate => candidate.name === selectedCandidate
//         );

//         if (candidate && candidate.password === enteredPassword) {
//             // loginMessage.textContent = "Login successful!";
//             // loginMessage.className = "text-green-500";
//             alert('Login successful!')

//             // Redirect to the home page after a delay
//             setTimeout(() => {
//                 window.location.href = "home.html"; // Change this to your home page URL
//             }, 2000);
//         } else {
//             // loginMessage.textContent = "Incorrect password. Please try again.";
//             // loginMessage.className = "text-red-500";
//             alert('Incorrect password. Please try again.')
//         }
//     });
// });
// Handle login form submission
document.addEventListener("DOMContentLoaded", function () {
    const schoolSelect = document.getElementById("schoolSelect");
    const candidateSelect = document.getElementById("candidateSelect");
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    // Load registered schools from localStorage
    let schools = JSON.parse(localStorage.getItem("schools")) || {};

    // Populate the school dropdown
    for (let schoolName in schools) {
        const option = document.createElement("option");
        option.value = schoolName;
        option.textContent = schoolName;
        schoolSelect.appendChild(option);
    }

    // Populate the candidate dropdown when a school is selected
    schoolSelect.addEventListener("change", function () {
        // Clear previous candidate options
        candidateSelect.innerHTML = '<option value="" disabled selected>Select Candidate</option>';

        const selectedSchool = schoolSelect.value;

        if (selectedSchool && schools[selectedSchool] && schools[selectedSchool].candidates) {
            // Populate the candidates for the selected school
            schools[selectedSchool].candidates.forEach(candidate => {
                const option = document.createElement("option");
                option.value = candidate.name;
                option.textContent = candidate.name;
                candidateSelect.appendChild(option);
            });
        }
    });

    // Handle login form submission
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const selectedSchool = schoolSelect.value;
        const selectedCandidate = candidateSelect.value;
        const enteredPassword = document.getElementById("password").value;

        if (!selectedSchool || !selectedCandidate) {
            loginMessage.textContent = "Please select both school and candidate.";
            loginMessage.className = "text-red-500";
            return;
        }

        // Find the candidate and check the password
        const candidate = schools[selectedSchool].candidates.find(
            candidate => candidate.name === selectedCandidate
        );

        if (candidate && candidate.password === enteredPassword) {
            // Store login details in localStorage
            localStorage.setItem('loginDetails', JSON.stringify({
                school: selectedSchool,
                student: selectedCandidate
            }));

            alert('Login successful!');

            // Redirect to the home page after a delay
            setTimeout(() => {
                window.location.href = "home.html"; // Change this to your home page URL
            }, 2000);
        } else {
            loginMessage.textContent = "Incorrect password. Please try again.";
            loginMessage.className = "text-red-500";
        }
    });
});

