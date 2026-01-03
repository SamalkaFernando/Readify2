//Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {

    // ===== AUDIO CONTROLS =====
    const rainAudio = document.getElementById("rain-audio");
    const playBtn = document.getElementById("btn-play-sound");
    const stopBtn = document.getElementById("btn-stop-sound");

    playBtn.addEventListener("click", () => {
        rainAudio.play().catch(err => console.error("Audio play error:", err));
    });

    stopBtn.addEventListener("click", () => {
        rainAudio.pause();
        rainAudio.currentTime = 0;
    });

    // ===== COMPLETED BOOKS =====
    const bookInput = document.getElementById("input-book-title");
    const addBtn = document.getElementById("btn-add-book");
    const completedList = document.getElementById("completed-books-list");

    // Load books from localStorage
    let completedBooks = JSON.parse(localStorage.getItem("completedBooks")) || [];

    displayCompletedBooks();

    // Add book
    addBtn.addEventListener("click", () => {
        const title = bookInput.value.trim();
        if (title === "") return;

        completedBooks.push(title);
        localStorage.setItem("completedBooks", JSON.stringify(completedBooks));

        bookInput.value = "";
        displayCompletedBooks();
    });

    function displayCompletedBooks() {
        completedList.innerHTML = "";
        completedBooks.forEach(title => {
            const li = document.createElement("li");
            li.textContent = "📘 " + title;
            completedList.appendChild(li);
        });
    }

});
