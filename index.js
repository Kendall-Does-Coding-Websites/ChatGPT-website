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
  var storedQuotes = JSON.parse(localStorage.getItem('seenQuotes')) || [];
  var newQuotes = quotes.filter(function(quote) {
    return !storedQuotes.includes(quote.text);
  });

  var quoteElement = document.getElementById("quote");
  var authorElement = document.getElementById("author");
  var messageElement = document.getElementById("message");

  if (newQuotes.length > 0) {
    // Display new quotes first
    var randomIndex = Math.floor(Math.random() * newQuotes.length);
    var quote = newQuotes[randomIndex];

    // Display the quote and author
    quoteElement.textContent = quote.text;
    authorElement.textContent = "- " + quote.author;

    // Add the quote to the stored quotes
    storedQuotes.push(quote.text);
    localStorage.setItem('seenQuotes', JSON.stringify(storedQuotes));

    // Reset the message element
    messageElement.innerHTML = "";
    messageElement.style.fontSize = "";
  } else {
    // Check if all quotes have been seen
    if (storedQuotes.length === quotes.length) {
      // Display a random quote
      var randomIndex = Math.floor(Math.random() * quotes.length);
      var quote = quotes[randomIndex];

      // Display the quote and author
      quoteElement.textContent = quote.text;
      authorElement.textContent = "- " + quote.author;

      // Display the message and link in small text
      messageElement.innerHTML = "All quotes have been shown to you.<br>Make sure to add more quotes <a href='https://github.com/Kendall-Does-Coding-Websites/ChatGPT-website/blob/main/index.js'>here</a>.";
      messageElement.style.fontSize = "small";
    } else {
      // Display a previously seen quote
      var randomIndex = Math.floor(Math.random() * storedQuotes.length);
      var quote = quotes.find(function(quote) {
        return quote.text === storedQuotes[randomIndex];
      });

      // Display the quote and author
      quoteElement.textContent = quote.text;
      authorElement.textContent = "- " + quote.author;

      // Reset the message element
      messageElement.innerHTML = "";
      messageElement.style.fontSize = "";
    }
  }
}

// Wait for the document to load
document.addEventListener('DOMContentLoaded', function() {
  // Add 'show' class to trigger the animation
  var quoteContainer = document.getElementById("quote-container");
  quoteContainer.classList.add('show');

  // Generate a random quote
  generateRandomQuote();
});
