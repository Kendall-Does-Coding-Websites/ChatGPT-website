// Array of quotes
var quotes = [
  // add your quotes here
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  },
  // Continue adding more quotes...
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  // Additional quotes
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau"
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius"
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
  },
  {
    text: "The only person you should try to be better than is the person you were yesterday.",
    author: "Unknown"
  },
  {
    text: "A champion is defined not by their wins but by how they can recover when they fall.",
    author: "Serena Williams"
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  },
  {
    text:"test",
    author:"test"
  },
];
// Function to generate a random quote
function generateRandomQuote() {
  var storedQuote = localStorage.getItem('previousQuote');
  var randomIndex = Math.floor(Math.random() * quotes.length);

  // Check if the generated quote is the same as the previous quote
  if (storedQuote && storedQuote === quotes[randomIndex].text) {
    // Generate a new random quote
    randomIndex = (randomIndex + 1) % quotes.length;
  }

  var quoteElement = document.getElementById("quote");
  var authorElement = document.getElementById("author");
  quoteElement.textContent = quotes[randomIndex].text;
  authorElement.textContent = "- " + quotes[randomIndex].author;

  // Store the displayed quote in local storage
  localStorage.setItem('previousQuote', quotes[randomIndex].text);
}

// Function to remove duplicate quotes
function removeDuplicateQuotes() {
  var uniqueQuotes = [];
  var quoteTexts = [];

  for (var i = 0; i < quotes.length; i++) {
    var quote = quotes[i];

    // Check if the quote text is already in the quoteTexts array
    if (!quoteTexts.includes(quote.text)) {
      uniqueQuotes.push(quote);
      quoteTexts.push(quote.text);
    }
  }

  // Update the quotes array with unique quotes
  quotes = uniqueQuotes;
}

// Remove duplicate quotes
removeDuplicateQuotes();

// Wait for the document to load
document.addEventListener('DOMContentLoaded', function() {
  // Add 'show' class to trigger the animation
  var quoteContainer = document.getElementById("quote-container");
  quoteContainer.classList.add('show');

  // Generate a random quote
  generateRandomQuote();
});


