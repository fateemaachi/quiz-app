document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const registerMessage = document.getElementById("registerMessage");

    // Define the registration deadline (September 20th)
    const registrationDeadline = new Date(new Date().getFullYear(), 8, 20, 23, 59, 59); // September 20th, current year

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const schoolName = document.getElementById("schoolName").value.trim();
        const candidateName = document.getElementById("candidateName").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const repeatPassword = document.getElementById("repeat-password").value.trim();
        const termsAccepted = document.getElementById("terms").checked;

        // Check if the registration is late
        const currentDate = new Date();
        const isLate = currentDate > registrationDeadline;
        const lateFee = 5000; // N5,000

        // Validate form fields
        if (!schoolName || !candidateName || !email || !password || password !== repeatPassword) {
            registerMessage.textContent = "Please fill in all fields and ensure passwords match.";
            registerMessage.className = "text-red-500";
            return;
        }

        if (!termsAccepted) {
            registerMessage.textContent = "You must agree to the terms and conditions.";
            registerMessage.className = "text-red-500";
            return;
        }

        // Load registered schools from localStorage
        let schools = JSON.parse(localStorage.getItem("schools")) || {};

        // If the school doesn't exist yet, create it
        if (!schools[schoolName]) {
            schools[schoolName] = { candidates: [] };
        }

        // Check if the candidate is already registered
        const candidateExists = schools[schoolName].candidates.some(
            candidate => candidate.name.toLowerCase() === candidateName.toLowerCase()
        );

        if (candidateExists) {
            registerMessage.textContent = `Candidate ${candidateName} is already registered for ${schoolName}.`;
            registerMessage.className = "text-red-500";
            return;
        }

        // Add the new candidate to the school's list of candidates
        schools[schoolName].candidates.push({
            name: candidateName,
            password: password, // Note: Storing plain text passwords is not secure.
            email: email,
            lateFee: isLate ? lateFee : 0 // Include late fee if applicable
        });

        // Save updated schools back to localStorage
        localStorage.setItem("schools", JSON.stringify(schools));

        // Show success message
        // registerMessage.textContent = `Candidate ${candidateName} registered successfully for ${schoolName}. ${isLate ? `Late registration fee of N${lateFee} applied.` : ''}`;
        // registerMessage.className = "text-green-500";
        alert('Registration successful!')

        // Clear form fields
        registrationForm.reset();

        // Redirect to login page after a short delay
        setTimeout(() => {
            window.location.href = "login.html"; // Change this to your login page URL
        }, 2000);
    });
});
