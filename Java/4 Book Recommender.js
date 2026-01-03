document.addEventListener("DOMContentLoaded", () => {
//Hamburger Menu
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    //Book Data
    const books = [
        { title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy", pages: 350 },
        { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", pages: 295 },
        { title: "Dune", author: "Frank Herbert", genre: "Science-Fiction", pages: 540 },
        { title: "Foundation", author: "Isaac Asimov", genre: "Science-Fiction", pages: 255 },
        { title: "Sherlock Holmes", author: "Arthur Conan Doyle", genre: "Mystery", pages: 307 },
        { title: "Gone Girl", author: "Gillian Flynn", genre: "Mystery", pages: 432 },
        { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", pages: 279 },
        { title: "Me Before You", author: "Jojo Moyes", genre: "Romance", pages: 369 },
        { title: "It", author: "Stephen King", genre: "Horror", pages: 600 },
        { title: "The Haunting of Hill House", author: "Shirley Jackson", genre: "Horror", pages: 246 },
        { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", genre: "Thriller", pages: 465 },
        { title: "The Da Vinci Code", author: "Dan Brown", genre: "Thriller", pages: 454 }
    ];

    //HTML Elements
    const genreSelect = document.getElementById("genreSelect");
    const lengthSelect = document.getElementById("lengthSelect");
    const pickBtn = document.getElementById("pickBtn");
    const againBtn = document.getElementById("againBtn");
    const saveBtn = document.getElementById("saveBtn");

    const card = document.getElementById("bookCard");
    const titleEl = document.getElementById("bookTitle");
    const authorEl = document.getElementById("bookAuthor");
    const infoEl = document.getElementById("bookInfo");
    const savedMsg = document.getElementById("savedMsg");

    let currentBook = null; // Currently suggested book

    //Event Listeners

    // Pick a random book
    pickBtn.addEventListener("click", pickBook);

    // Reset recommender
    againBtn.addEventListener("click", resetRecommender);

    // Save current book to localStorage safely
    saveBtn.addEventListener("click", () => {
        if (!currentBook) return;

        let list;

        // try/catch to prevent corrupted data errors
        try {
            list = JSON.parse(localStorage.getItem("readingList"));
            if (!Array.isArray(list)) list = []; // if parsed data is not array
        } catch (e) {
            list = []; // reset if corrupted
        }

        // Check for duplicates by title
        if (!list.some(book => book.title === currentBook.title)) {
            list.push(currentBook);
            localStorage.setItem("readingList", JSON.stringify(list));
        }

        // Show "Saved" message briefly
        savedMsg.style.display = "block";
        setTimeout(() => savedMsg.style.display = "none", 2000);
    });

    //Functions

    function resetRecommender() {
        genreSelect.value = "all";
        lengthSelect.value = "all";

        currentBook = null;

        titleEl.textContent = "";
        authorEl.textContent = "";
        infoEl.textContent = "";

        card.classList.add("hidden");
        savedMsg.style.display = "none";
    }

    function pickBook() {
        const genre = genreSelect.value;
        const length = lengthSelect.value;

        // Filter books based on genre and length
        const filteredBooks = books.filter(book => {
            const genreMatch = genre === "all" || book.genre === genre;
            let lengthMatch = true;

            if (length === "short") lengthMatch = book.pages < 300;
            if (length === "medium") lengthMatch = book.pages >= 300 && book.pages <= 500;
            if (length === "long") lengthMatch = book.pages > 500;

            return genreMatch && lengthMatch;
        });

        if (filteredBooks.length === 0) {
            alert("No books found for this selection.");
            return;
        }

        // Pick a random book
        currentBook = filteredBooks[Math.floor(Math.random() * filteredBooks.length)];

        // Restart animation for card
        card.classList.add("hidden");
        void card.offsetWidth; // force reflow
        card.classList.remove("hidden");

        // Update card content
        titleEl.textContent = currentBook.title;
        authorEl.textContent = "By " + currentBook.author;
        infoEl.textContent = `${currentBook.genre} • ${currentBook.pages} pages`;

        savedMsg.style.display = "none"; // hide saved message
    }

});
