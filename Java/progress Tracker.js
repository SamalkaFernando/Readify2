//Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
/* =====================================================
   READING PROGRESS TRACKER LOGIC
===================================================== */

// Get elements
const totalPagesInput = document.getElementById("totalPages");
const pagesReadInput = document.getElementById("pagesRead");
const speedInput = document.getElementById("readingSpeed");

const calculateBtn = document.getElementById("calculateBtn");
const saveBtn = document.getElementById("saveBtn");

const percentText = document.getElementById("percentText");
const progressFill = document.getElementById("progressFill");
const finishTime = document.getElementById("finishTime");

const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");
const resetBtn = document.getElementById("resetBtn");


// Load saved data if available
let savedData = JSON.parse(localStorage.getItem("readingProgress"));

if (savedData) {
    updateUI(savedData.totalPages, savedData.pagesRead, savedData.speed);
}

/* ================= CALCULATE ================= */
calculateBtn.addEventListener("click", () => {
    const totalPages = Number(totalPagesInput.value);
    const pagesRead = Number(pagesReadInput.value);
    const speed = Number(speedInput.value);

    // Validation
    if (
        totalPages <= 0 ||
        pagesRead < 0 ||
        speed <= 0 ||
        pagesRead > totalPages
    ) {
        errorMsg.style.display = "block";
        return;
    }

    errorMsg.style.display = "none";
    updateUI(totalPages, pagesRead, speed);
});

/* ================= SAVE ================= */
saveBtn.addEventListener("click", () => {
    const data = {
        totalPages: Number(totalPagesInput.value),
        pagesRead: Number(pagesReadInput.value),
        speed: Number(speedInput.value)
    };

    localStorage.setItem("readingProgress", JSON.stringify(data));

    successMsg.style.display = "block";
    setTimeout(() => successMsg.style.display = "none", 3000);
});



/* ================= UPDATE UI ================= */
function updateUI(totalPages, pagesRead, speed) {

    //Percentage completed
    const percent = Math.round((pagesRead / totalPages) * 100);

    percentText.textContent = percent + "% completed";
    progressFill.style.width = percent + "%";

    //Estimated finish time
    const remainingPages = totalPages - pagesRead;
    const daysLeft = Math.ceil(remainingPages / speed);

    finishTime.textContent =
        daysLeft <= 0
            ? "Book completed 🎉"
            : `Estimated finish time: ${daysLeft} day(s)`;
}

resetBtn.addEventListener("click", resetTracker);
function resetTracker() {

    // Clear input fields
    totalPagesInput.value = "";
    pagesReadInput.value = "";
    speedInput.value = "";

    // Reset progress text and bar
    percentText.textContent = "0% completed";
    progressFill.style.width = "0%";

    // Reset finish time
    finishTime.textContent = "Estimated finish time: ";

    // Hide messages
    errorMsg.style.display = "none";
    successMsg.style.display = "none";
}

