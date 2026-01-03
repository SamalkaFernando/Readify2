//Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Get elements
const form = document.getElementById("feedbackForm");
const feedbackContainer = document.getElementById("feedbackContainer");
const successMsg = document.getElementById("successMsg");

// Load feedback from localStorage
let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

// Display feedback on page load
displayFeedback();

/* ========== FORM SUBMIT ========== */
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const rating = document.getElementById("rating").value;
    const message = document.getElementById("message").value.trim();

    // Validation
    if (name === "" || rating === "" || message === "") {
        return;
    }

    // Create feedback object
    const feedback = {
        name: name,
        rating: rating,
        message: message
    };

    // Save feedback
    feedbacks.push(feedback);
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

    // Reset form
    form.reset();

    // Show confirmation message ✅
    successMsg.style.display = "block";

    // Hide message after 3 seconds
    setTimeout(() => {
        successMsg.style.display = "none";
    }, 3000);

    // Refresh feedback list
    displayFeedback();
});

//Display Feedback
function displayFeedback() {
    feedbackContainer.innerHTML = "";

    feedbacks.forEach(fb => {
        const div = document.createElement("div");
        div.className = "feedback-card";

        div.innerHTML = `
            <h3>${fb.name}</h3>
            <p class="rating">${"★".repeat(fb.rating)}</p>
            <p>${fb.message}</p>
        `;

        feedbackContainer.appendChild(div);
    });
}

// Select all FAQ questions
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;

        // Toggle display
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

faqQuestions.forEach(button => {
    button.addEventListener("click", () => {
        faqQuestions.forEach(btn => btn.nextElementSibling.style.display = "none");
        const answer = button.nextElementSibling;
        answer.style.display = "block";
    });
});
