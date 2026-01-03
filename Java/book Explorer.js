//Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//  BOOK DATA (JSON OBJECT) 
const bookData = [
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        image: "/Images/Harry Potter.jpg",
        synopsis: "A young boy discovers he is a wizard and attends Hogwarts.",
        series: ["Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban"],
        reviews: [
            { reviewer: "Alice", rating: "5/5", comment: "Magical experience" },
            { reviewer: "John", rating: "4.5/5", comment: "Loved the story" }
        ]
    },

    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        image: "/Images/The Hobbit.jpg",
        synopsis: "Bilbo Baggins joins a group of dwarves on a dangerous quest to reclaim their homeland, discovering courage and wisdom through adventure.",
        series: [
            "The Lord of the Rings",
            "The Two Towers"
        ],
        reviews: [
            { reviewer: "Anna", rating: "5/5", comment: "Timeless fantasy adventure." },
            { reviewer: "Daniel", rating: "4/5", comment: "Simple yet magical storytelling." }
        ]
    },

    {
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        genre: "Fantasy",
        image: "/Images/The name of the wind.jpg",
        synopsis: "Kvothe recounts his extraordinary life filled with tragedy, magic, and pursuit of forbidden knowledge.",
        series: [
            "The Wise Man's Fear",
            "The Slow Regard of Silent Things"
        ],
        reviews: [
            { reviewer: "Mira", rating: "5/5", comment: "Beautifully Written." },
            { reviewer: "James", rating: "4/5", comment: "Immersive and rich." }
        ]
    },

    {
        title: "Mistborn: The Final Empire",
        author: "Brandon Sanderson",
        genre: "Fantasy",
        image: "/Images/Mistborn.jpg",
        synopsis: "In a world ruled by an immortal tyrant, a street thief discovers magical powers that could ignite rebellion.",
        series: [
            "The Lost Metal",
            "The Hero of Ages"
        ],
        reviews: [
            { reviewer: "Ryan", rating: "5/5", comment: "Amazing magic." },
            { reviewer: "Anna", rating: "4.5/5", comment: "Enaging Story." }
        ]
    },

    {
        title: "A Game of Thrones",
        author: "George R.R Martin",
        genre: "Fantasy",
        image: "/Images/A Game of Thrones.jpg",
        synopsis: "Noble families plot for control of the Iron Throne while an ancient supernatural threat emerges from the far North.",
        series: [
            "Fire and Blood",
            "Knight of the Seven Kingdoms"
        ],
        reviews: [
            { reviewer: "Chris", rating: "5/5", comment: "Epic and complex." },
            { reviewer: "Nina ", rating: "2.5/5", comment: "Gripping dark fantasy." }
        ]
    },

    {
        title: "Percy Jackson and the Olympians: The Lightning Thief",
        author: "Rick Riordan",
        genre: "Fantasy",
        image: "/Images/Percy Jackson.jpg",
        synopsis: "Percy Jackson learns he is a demigod and embarks on a journey to prevent a war between the Greek gods.",
        series: [
            "The Sea of Monsters",
            "The Titan's Curse",
            "The Last Olympian"
        ],
        reviews: [
            { reviewer: "Leo", rating: "5/5", comment: "Fun and adventurous." },
            { reviewer: "Mia", rating: "3.5", comment: "Engaging for young readers." }
        ]
    },

    {
        title: "Dune",
        author: "Frank Herbert",
        genre: "Science-Fiction",
        image: "/Images/Dune.jpg",
        synopsis: "Paul Atreides is thrust into political and spiritual conflict on the desert planet Arrakis.",
        series: [
            "Dune Messiah",
            "Children of Dune"
        ],
        reviews: [
            { reviewer: "Adam", rating: "5/5", comment: "Masterpiece of sci-fiction." },
            { reviewer: "Leah", rating: "3/5", comment: "Rich world building." }
        ]
    },

    {
        title: "Ender's Game",
        author: "Orson Scott Card",
        genre: "Science-Fiction",
        image: "/Images/Ender's Game.jpg",
        synopsis: "A gifted child is trained to become humanity's ultimate military commander against aliens.",
        series: [
            "Speaker for the Dead",
            "Shadow of the Giant"
        ],
        reviews: [
            { reviewer: "Kevin", rating: "5/5", comment: "Thought-provoking." },
            { reviewer: "Anna", rating: "3/5", comment: "Intense and exciting" }
        ]
    },

    {
        title: "Ready Player One",
        author: "Ernest Cline",
        genre: "Science-Fiction",
        image: "/Images/Ready Player One.jpg",
        synopsis: "A teenage gamer competes in a massive virtual reality treasure hunt against rivals and corporate threats.",
        series: [
            "Ready Player Two"
        ],
        reviews: [
            { reviewer: "Sarah", rating: "3/5", comment: "Nostalgic and fun." },
            { reviewer: "Tom", rating: "2.5/5", comment: "Fast paced adventure." }
        ]
    },

    {
        title: "Foundation",
        author: "Isaac Asimov",
        genre: "Science-Fiction",
        image: "/Images/Foundation.jpg",
        synopsis: "Hari Seldon predicts the collapse of the galactic empire and creates a foundation to preserve knowledge.",
        series: [
            "Foundation and Empire",
            "Second Foundation"
        ],
        reviews: [
            { reviewer: "Alan", rating: "5/5", comment: "Classic Science fiction brilliance." },
            { reviewer: "Lucy", rating: "4/5", comment: "Strategic and imaginative." }
        ]
    },

    {
        title: "Neuromancer",
        author: "William Gibson",
        genre: "Science-Fiction",
        image: "/Images/Neuromancer.jpg",
        synopsis: "A washed-up hacker takes on a final dangerous job in a cyberpunk world dominated by AI and megacorporations.",
        series: [
            "Count Zero",
            "Mona Lisa Overdrive"
        ],
        reviews: [
            { reviewer: "Max", rating: "5/5", comment: "Cyberpunk masterpiece." },
            { reviewer: "Eva", rating: "4/5", comment: "Innovtive and dark." }
        ]
    },

    {
        title: "Snow Crash",
        author: "Neal Stephenson",
        genre: "Science-Fiction",
        image: "/Images/Snow Crash.jpg",
        synopsis: "A hacker uncovers a virtual virus threatening digital and human worlds.",
        series: ["None"],
        reviews: [
            { reviewer: "Anna", rating: "5/5", comment: "Fast, witty, and thrilling." },
            { reviewer: "Liam", rating: "4/5", comment: "Unique cyberpunk version." }
        ]
    },

    {
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        genre: "Mystery",
        image: "/Images/The Girl with the Dragon Tattoo.jpg",
        synopsis: "Journalist Mikael Blomkvist and hacker Lisbeth Salander investigate a decades-old disappearance tied to a powerful family.",
        series: [
            "The Girl Who Played with Fire"
        ],
        reviews: [
            { reviewer: "Krish", rating: "5/5", comment: "Dark, intense and clever." },
            { reviewer: "Tom", rating: "3.5/5", comment: "Intricate and thrilling." }
        ]
    },

    {
        title: "Murder on the Orient Express",
        author: "Agatha Christie",
        genre: "Mystery",
        image: "/Images/Murder on the Orient Express.jpg",
        synopsis: "Detective Hercule Poirot must solve a murder on a luxury train where every passenger could be guilty.",
        series: [
            "None"
        ],
        reviews: [
            { reviewer: "Emma", rating: "5/5", comment: "Classic whodunit" },
            { reviewer: "Lucas", rating: "3.3/5", comment: "Intriguing mystery" }
        ]
    },

    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Mystery", 
        image: "/Images/The Da Vinci Code.jpg",
        synopsis: "Cryptologist Robert Langdon uncovers religious secrets leading to a dangerous conspiracy.",
        series: [
            "Origin",
            "The Lost Symbol"
        ],
        reviews: [
            { reviewer: "Humaydh", rating: "4/5", comment: "Fast-paced and gripping." },
            { reviewer: "Senithu", rating: "2.5/5", comment: "Exciting thriller." }
        ]
    },

    {
        title: "The Cuckoo's Calling",
        author: "Robert Galbraith",
        genre: "Mystery",
        image: "/Images/The Cuckoo's Calling.jpg",
        synopsis: "Private detective Cormoran Strike investigates the supposed suicide of a famous model, uncovering murder.",
        series: [
            "None"
        ],
        reviews: [
            { reviewer: "Samalka", rating: "5/5", comment: "Clever detective story." },
            { reviewer: "Suchetha", rating: "4/5", comment: "Engaging plot." }
        ]
    },

    {
        title: "In the Woods",
        author: "Tana French",
        genre: "Mystery",
        image: "/Images/In the Woods.jpg",
        synopsis: "Detective Rob Ryan investigates a child’s murder eerily connected to trauma from his past.",
        series: [
            "None"
        ],
        reviews: [
            { reviewer: "Himal", rating: "5/5", comment: "Suspenseful and dark." },
            { reviewer: "Rashi", rating: "5/5", comment: "Psychological thriller" }
        ]
    },

    {
        title: "Big Little Lies",
        author: "Liane Moriarty",
        genre: "Mystery",
        image: "/Images/Big Little Lies.jpg",
        synopsis: "Secrets and lies among parents escalate to a shocking death, revealing social tensions.",
        series: [
            "None"
        ],
        reviews: [
            { reviewer: "Sama", rating: "4/5", comment: "Twisty and dramatic." },
            { reviewer: "Nishi", rating: "2/5", comment: "Compelling and relatable." }
        ]
    },

    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        image: "/Images/Pride and Prejudice.jpg",
        synopsis: "Elizabeth Bennet navigates social pressures and misunderstandings while forming a complex romance with Mr. Darcy.",
        series: [
            "None"
        ],
        reviews: [
            { reviewer: "Sanu", rating: "5/5", comment: "Witty and elegant." },
            { reviewer: "Mark", rating: "4/5", comment: "Timeless classic." }
        ]
    },

    {
        title: "Me Before You",
        author: "Jojo Moyes",
        genre: "Romance",
        image: "/Images/Me Before You.jpg",
        synopsis: "A young woman cares for a paralyzed man, learning about love, independence, and life-changing choices.",
        series: [
            "After You",
            "Still Me"
        ],
        reviews: [
            { reviewer: "Emma", rating: "5/5", comment: "Heartbreaking and beautiful." },
            { reviewer: "sammani", rating: "5/5", comment: "Emotionally powerful." }
        ]
    },

    {
        title: "The Notebook",
        author: "Nicholas Sparks",
        genre: "Romance",
        image: "/Images/The Notebook.jpg",
        synopsis: "A lifelong love story unfolds between two lovers separated by circumstance but reunited by fate.",
        series: ["None"],
        reviews: [
            { reviewer: "Max", rating: "5/5", comment: "Romantic and touching" },
            { reviewer: "Lia", rating: "5/5", comment: "Emotional and sweet." }
        ]
    },

    {
        title: "Outlander",
        author: "Diana Gabaldon",
        genre: "Romance",
        image: "/Images/Outlander.jpg",
        synopsis: "A WWII nurse is transported to 18th-century Scotland, encountering romance, political intrigue, and danger.",
        series: [
            "Dragonfly in Amber",
            "Thefiery Cross",
            "A breath of snow and Ashes"
        ],
        reviews: [
            { reviewer: "Ranuka", rating: "5/5", comment: "Epic historical romance." },
            { reviewer: "Chanu", rating: "5/5", comment: "Intriguing and passionate." }
        ]
    },

    {
        title: "The Fault in Our Stars",
        author: "John Green",
        genre: "Romance",
        image: "/Images/The Fault in Our Stars.jpg",
        synopsis: "Two teenagers with terminal illnesses form a deep, transformative bond.",
        series: ["None"],
        reviews: [
            { reviewer: "Ashen", rating: "5/5", comment: "Heart-wrenching." },
            { reviewer: "Zayn", rating: "4/5", comment: "Emotional and moving." }
        ]
    },

    {
        title: "Twilight",
        author: "Stephanie Meyer",
        genre: "Romance",
        image: "/Images/Twilight.jpg",
        synopsis: "A teenage girl falls in love with a vampire, entering a dangerous and supernatural world.",
        series: [
            "New Moon",
            "Eclipse"
        ],
        reviews: [
            { reviewer: "Pablo", rating: "5/5", comment: "Supernatural romance" },
            { reviewer: "Gavi", rating: "2.5", comment: "Addictive and dramatic." }
        ]
    },

    {
        title: "The Time Traveller's Wife",
        author: "Audrey Niffenegger",
        genre: "Romance",
        image: "/Images/The Time Traveller's Wife.jpg",
        synopsis: "A couple struggles to maintain love as one involuntarily travels through time.",
        series: [
            "None"
        ],
        reviews: [
            { reviewer: "Sarah", rating: "5/5", comment: "Unique and emotional." },
            { reviewer: "Liam", rating: "2/5", comment: "Complex love story." }
        ]
    },

    {
        title: "The Shining",
        author: "Stephen King",
        genre: "Horror",
        image: "/Images/The Shining.jpg",
        synopsis: "A family isolated in a haunted hotel confronts supernatural forces as the father descends into madness.",
        series: [
            "Doctor Sleep"
        ],
        reviews: [
            { reviewer: "Sam", rating: "5/5", comment: "Terrifying and brilliant" },
            { reviewer: "Lily", rating: "5/5", comment: "Psychological horror." }
        ]
    },

    {
        title: "Dracula",
        author: "Bram Stoker",
        genre: "Horror",
        image: "/Images/Dracula.jpg",
        synopsis: "Jonathan Harker encounters Count Dracula, whose thirst for blood threatens his life and Victorian society.",
        series: ["None"],
        reviews: [
            { reviewer: "Maxwell", rating: "1/5", comment: "Classic vampire tale." },
            { reviewer: "Kalindu", rating: "5/5", comment: "Dark and captivating." }
        ]
    },

    {
        title: "The Haunting of Hill House",
        author: "Shirley Jackson",
        genre: "Horror",
        image: "/Images/The Haunting of Hill House.jpg",
        synopsis: "Guests at a haunted mansion confront their fears as the house manipulates them.",
        series: [
            "None"
        ],
        reviews: [
            { reviewer: "Jack", rating: "", comment: "Creepy and atmospheric." },
            { reviewer: "Josh", rating: "", comment: "Psychological horror done right." }
        ]
    },

    {
        title: "Bird Box",
        author: "Josh Malerman",
        genre: "Horror",
        image: "/Images/Bird Box.jpg",
        synopsis: "Survivors navigate a world where unseen creatures drive people to madness, forcing them to live blindfolded.",
        series: [
            "Malorie"
        ],
        reviews: [
            { reviewer: "Ann", rating: "5/5", comment: "Suspenseful and unique." },
            { reviewer: "Sanduni", rating: "5/5", comment: "Tense thriller." }
        ]
    },

    {
        title: "Hell House",
        author: "Richard Matheson",
        genre: "Horror",
        image: "/Images/Hell House.jpg",
        synopsis: "Investigators enter a notoriously haunted mansion to determine whether the supernatural is real.",
        series: ["None"],
        reviews: [
            { reviewer: "Daniel", rating: "5/5", comment: "Classic haunted house story." },
            { reviewer: "Samuel", rating: "4/5", comment: "Chilling and smart." }
        ]
    },

    {
        title: "The Girl on the Train",
        author: "Paula Hawkins",
        genre: "Thriller",
        image: "/Images/The Girl on the Train.jpg",
        synopsis: "A woman becomes entangled in a missing person investigation, uncovering secrets that change her understanding of reality.",
        series: ["None"],
        reviews: [
            { reviewer: "Ameer", rating: "2/5", comment: "Suspenseful and gripping." }
        ]
    },

    {
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genre: "Thriller",
        image: "/Images/The Silent Patient.jpg",
        synopsis: "A psychotherapist attempts to unravel why a woman stops speaking after allegedly murdering her husband.",
        series: ["None"],
        reviews: [
            { reviewer: "Chathu", rating: "5/5", comment: "Psychological thriller at its best." },
            { reviewer: "Chethi", rating: "4/5", comment: "Twisty and clever." }
        ]
    },

    {
        title: "Gone Girl",
        author: "Gillian Flynn",
        genre: "Thriller",
        image: "/Images/Gone Girl.jpg",
        synopsis: "A man becomes the prime suspect in his wife's disappearance, exposing manipulative dynamics.",
        series: ["None"],
        reviews: [
            { reviewer: "Thisak", rating: "5/5", comment: "Dark and twisted." }
        ]
    },

    {
        title: "Before I Go to Sleep",
        author: "S.J. Watson",
        genre: "Thriller",
        image: "/Images/Before I Go to Sleep.jpg",
        synopsis: "A woman wakes every day with no memory and tries to reconstruct the truth about her past.",
        series: [
           "None"
        ],
        reviews: [
            { reviewer: "Mia", rating: "4/5", comment: "Tense and gripping." },
            { reviewer: "Max", rating: "4/5", comment: "Thriller with twists." }
        ]
    },

    {
        title: "Dark Places",
        author: "Gillian Flynn",
        genre: "Thriller",
        image: "/Images/Dark Places.jpg",
        synopsis: "A woman investigates her familys past after surviving a massacre, uncovering dark truths.",
        series: ["None"],
        reviews: [
            { reviewer: "Rahee", rating: "5/5", comment: "Dark and gripping." },
            { reviewer: "Sanuthi", rating: "5/5", comment: "Twisty mystery" }
        ]
    },

    {
        title: "I Am Watching You",
        author: "Teresa Driscoll",
        genre: "Thriller",
        image: "/Images/I Am Watching You.jpg",
        synopsis: "A woman witnesses mysterious disappearances and becomes entangled in a suspenseful investigation.",
        series: ["None"],
        reviews: [
            { reviewer: "Kavini", rating: "1/5", comment: "Classic." },
            { reviewer: "Manudi", rating: "5/5", comment: "1wonderful." }
        ]
    },

    {
        title: "Treasure Island",
        author: "Robert Louis Stevenson",
        genre: "Adventure",
        image: "/Images/Treasure Island.jpg",
        synopsis: "Young Jim Hawkins embarks on a perilous voyage to find pirate treasure, encountering danger and mutiny.",
        series: ["None"],
        reviews: [
            { reviewer: "Tom", rating: "5/5", comment: "Exciting and fun." }
        ]
    },

    {
        title: "The Lost World",
        author: "Arthur Conan Doyle",
        genre: "Adventure",
        image: "/Images/The Lost World.jpg",
        synopsis: "Explorers find a plateau inhabited by prehistoric creatures, facing adventure and scientific discovery.",
        series: ["None"],
        reviews: [
            { reviewer: "Jani", rating: "5/5", comment: "Heartbreaking and essential." },
            { reviewer: "Dini", rating: "4/5", comment: "Powerful historical account." }
        ]
    },

    {
        title: "Life of Pi",
        author: "Yann Martel",
        genre: "Adventure",
        image: "/Images/Life of Pi.jpg",
        synopsis: "A boy survives a shipwreck at sea with a Bengal tiger, exploring survival, faith, and resilience.",
        series: ["None"],
        reviews: [
            { reviewer: "Thashi", rating: "5/5", comment: "Inspirational story.”" },
            { reviewer: "Tharaka", rating: "3.5/5", comment: "Powerful and moving." }
        ]
    },

    {
        title: "The Call of the Wild",
        author: "Jack London",
        genre: "Adventure",
        image: "/Images/The Call of the Wild.jpg",
        synopsis: "A domesticated dog is forced into survival in the Yukon wilderness, reconnecting with primal instincts.",
        series: ["None"],
        reviews: [
            { reviewer: "Rashad", rating: "1/5", comment: "Classic survival tale." },
            { reviewer: "Sari", rating: "5/5", comment: "Exciting and raw." }
        ]
    },

    {
        title: "The Jungle Book",
        author: "Rudyard Kipling",
        genre: "Adventure",
        image: "/Images/The Jungle Book.jpg",
        synopsis: "Mowgli grows up in the jungle, learning lessons about survival, friendship, and the law of the wild.",
        series: [
            "The Second Jungle Book"
        ],
        reviews: [
            { reviewer: "Leo", rating: "5/5", comment: "Timeless jungle adventure." },
            { reviewer: "Lia", rating: "5/5", comment: "Fun and educational" }
        ]
    },

    {
        title: "Robinson Crusoe",
        author: "Daniel Defoe",
        genre: "Adventure",
        image: "/Images/Robinson Crusoe.jpg",
        synopsis: "A shipwrecked man survives on a deserted island, facing solitude, resourcefulness, and encounters with natives.",
        series: [
            "The Farther Adventures of Robinson Crusoe"
        ],
        reviews: [
            { reviewer: "Miz", rating: "3/5", comment: "Classic survival story.”" },
            { reviewer: "Max", rating: "5/5", comment: "Engaging adventure." }
        ]
    },

    {
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        genre: "Non-Fiction",
        image: "/Images/Sapien.jpg",
        synopsis: "Explores human evolution, societies, and forces shaping past, present, and future.",
        series: [],
        reviews: [
            { reviewer: "Anna", rating: "1/5", comment: "Eye-opening and insightful." },
            { reviewer: "Tom", rating: "4/5", comment: "Fascinating history." }
        ]
    },

    {
        title: "Becoming",
        author: "Michelle Obama",
        genre: "Non-Fiction",
        image: "/Images/Becoming.jpg",
        synopsis: "Memoir of the former First Lady, tracing her life from childhood to the White House and beyond.",
        series: [
            "Homo Deus",
            "21 Lessons for thr 21st Century"
        ],
        reviews: [
            { reviewer: "Sarah", rating: "5/5", comment: "Inspirational story" },
            { reviewer: "Leo", rating: "4/5", comment: "Powerful and moving." }
        ]
    },

    {
        title: "Educated",
        author: "Tara Westover",
        genre: "Non-Fiction",
        image: "/Images/Educated.jpg",
        synopsis: "A woman raised in a strict household pursues education and independence against all odds.",
        series: [
            "None"
        ],
        reviews: [
            { reviewer: "Anna", rating: "5/5", comment: "Empowering story." },
            { reviewer: "Max", rating: "4/5", comment: "Remarkable journey." }
        ]
    },

    {
        title: "The Diary of a Young Girl",
        author: "Anne Frank",
        genre: "Non-Fiction",
        image: "/Images/The Diary of a Young Girl.jpg",
        synopsis: "The personal diary of Anne Frank provides a moving account of life in hiding during the Nazi occupation.",
        series: [
            "None"
        ],
        reviews: [
            { reviewer: "Samalka", rating: "5/5", comment: "Heartbreaking and essential." },
            { reviewer: "Leo", rating: "5/5", comment: "“Powerful historical account." }
        ]
    },

    {
        title: "The Immortal Life of Henrietta Lacks",
        author: "Rebecca Skloot",
        genre: "Non-Fiction",
        image: "/Images/The Immortal Life of Henrietta Lacks.jpg",
        synopsis: "Explores the life and legacy of Henrietta Lacks, whose cells became vital to medical research without her consent.",
        series: [
            "None"
        ],
        reviews: [
            { reviewer: "Linn", rating: "4/5", comment: "Informative and emotional" },
            { reviewer: "Max", rating: "4/5", comment: "Important scientific history." }
        ]
    },

    {
        title: "Unbroken",
        author: "Laura Hillenbrand",
        genre: "Non-Fiction",
        image: "/Images/Unbroken.jpg",
        synopsis: "Story of Olympian and WWII bombardier Louis Zamperini surviving extreme adversity and imprisonment.",
        series: [
            "None"
        ],
        reviews: [
            { reviewer: "Leo", rating: "5/5", comment: "Emotionally gripping" }
        ]
    },

    {
        title: "The Wright Brothers",
        author: "David McCullough",
        genre: "Non-Fiction",
        image: "/Images/The Wright Brothers.jpg",
        synopsis: "Chronicles the lives of Orville and Wilbur Wright, pioneers of aviation, and the challenges they overcame.",
        series: [
            "None"
        ],
        reviews: [
            { reviewer: "Kumu", rating: "5/5", comment: "Fascinating biography." },
            { reviewer: "Suriya", rating: "4/5", comment: "Detailed and inspiring." }
        ]
    },

    {
        title: "Outliers",
        author: "Malcolm Gladwell",
        genre: "Non-Fiction",
        image: "/Images/Outliers.jpg",
        synopsis: "Analyzes factors contributing to success, emphasizing culture, opportunity, and environment over talent alone.",
        series: [
            "None"
        ],
        reviews: [
            { reviewer: "chamee", rating: "5/5", comment: "Eye-opening and thoughtful." },
            { reviewer: "Rakina", rating: "3/5", comment: "Insightful analysis." }
        ]
    }
];

// DOM ELEMENTS 
const bookContainer = document.getElementById("bookContainer");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const noResults = document.getElementById("noResults");

const modal = document.getElementById("bookModal");
const closeBtn = document.querySelector(".close-btn");

const modalTitle = document.getElementById("modalTitle");
const modalSynopsis = document.getElementById("modalSynopsis");
const modalSeries = document.getElementById("modalSeries");
const modalReviews = document.getElementById("modalReviews");

// HIGHLIGHT FUNCTION
function highlightText(text, keyword) {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, "gi");
    return text.replace(regex, `<span class="highlight">$1</span>`);
}

// DISPLAY BOOKS
function displayBooks(books) {
    bookContainer.innerHTML = "";
    const keyword = searchInput.value.toLowerCase();

    books.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";

        card.innerHTML = `
            <img src="${book.image}" onerror="this.src='images/default.jpg'">
            <h3>${highlightText(book.title, keyword)}</h3>
            <p class="author">${highlightText(book.author, keyword)}</p>
            <p class="genre">${highlightText(book.genre, keyword)}</p>
        `;

        card.addEventListener("click", () => openModal(book));
        bookContainer.appendChild(card);
    });
}

// MODAL 
function openModal(book) {
    modalTitle.textContent = book.title;
    modalSynopsis.textContent = book.synopsis;

    modalSeries.innerHTML = "";
    book.series.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        modalSeries.appendChild(li);
    });

    modalReviews.innerHTML = "";
    book.reviews.forEach(review => {
        modalReviews.innerHTML += `
            <tr>
                <td>${review.reviewer}</td>
                <td>${review.rating}</td>
                <td>${review.comment}</td>
            </tr>
        `;
    });

    modal.style.display = "block";
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
};

// SEARCH + FILTER
function filterBooks() {
    const value = searchInput.value.toLowerCase();
    const genre = genreFilter.value;

    const filtered = bookData.filter(book => {
        const matchText =
            book.title.toLowerCase().includes(value) ||
            book.author.toLowerCase().includes(value) ||
            book.genre.toLowerCase().includes(value);

        const matchGenre =
            genre === "all" || book.genre === genre;

        return matchText && matchGenre;
    });

    displayBooks(filtered);
    noResults.style.display = filtered.length === 0 ? "block" : "none";
}

searchInput.addEventListener("keyup", filterBooks);
genreFilter.addEventListener("change", filterBooks);

// Initial load
displayBooks(bookData);