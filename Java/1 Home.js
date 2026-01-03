//Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//AUTO-ROTATING QUOTES
const quotes = [
  "A reader lives a thousand lives before he dies.",
  "Reading is dreaming with open eyes.",
  "Books are mirrors: you only see in them what you already have inside.",
  "Once you learn to read, you will be forever free."
];

let quoteIndex = 0;
const quoteText = document.getElementById("quoteText");

function changeQuote() {
  quoteText.textContent = `"${quotes[quoteIndex]}"`;
  quoteIndex = (quoteIndex + 1) % quotes.length;
}

changeQuote();
setInterval(changeQuote, 3000);

// AUTHOR OF THE DAY
const authors = [
  { name: "Jane Austen", bio: "Renowned for timeless romance and social commentary." },
  { name: "George Orwell", bio: "Famous for dystopian classics like 1984." },
  { name: "Agatha Christie", bio: "Legendary mystery novelist." },
  { name: "J.K. Rowling", bio: "Creator of the Harry Potter universe." }
];

const today = new Date().getDate();
const author = authors[today % authors.length];

document.getElementById("authorCard").innerHTML = `
  <h3>${author.name}</h3>
  <p>${author.bio}</p>
`;

function subscribeNewsletter() {
  const emailInput = document.getElementById("newsletterEmail");
  const message = document.getElementById("newsletterMsg");
  const email = emailInput.value.trim();

  if (email === "") {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "#ffb3b3";
    return;
  }

  // Save email in localStorage
  localStorage.setItem("newsletterEmail", email);

  message.textContent = "Thank you for subscribing!";
  message.style.color = "#b8ffb8";

  emailInput.value = "";
}
