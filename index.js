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
];

// Function to generate a random quote
function generateRandomQuote() {
  var storedQuotes = JSON.parse(localStorage.getItem('shownQuotes')) || [];
  var uniqueQuotes = quotes.filter(function(quote) {
    return !storedQuotes.some(function(storedQuote) {
      return storedQuote.text === quote.text;
    });
  });

  // Check if all quotes have been shown
  if (uniqueQuotes.length === 0) {
    var quoteElement = document.getElementById("quote");
    var authorElement = document.getElementById("author");
    quoteElement.textContent = "Focused, hard work is the real key to success.";
    authorElement.textContent = "John Carmack";
    return;
  }

  var randomIndex = Math.floor(Math.random() * uniqueQuotes.length);
  var quote = uniqueQuotes[randomIndex];

  var quoteElement = document.getElementById("quote");
  var authorElement = document.getElementById("author");
  quoteElement.textContent = quote.text;
  authorElement.textContent = "- " + quote.author;

  // Store the displayed quote
  storedQuotes.push(quote);
  localStorage.setItem('shownQuotes', JSON.stringify(storedQuotes));
}

// Wait for the document to load
document.addEventListener('DOMContentLoaded', function() {
  // Add 'show' class to trigger the animation
  var quoteContainer = document.getElementById("quote-container");
  quoteContainer.classList.add('show');

  // Generate a random quote
  generateRandomQuote();
});
