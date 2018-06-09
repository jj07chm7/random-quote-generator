// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// This calls the randomBackground function when the show another quote buttons is clicked
document.getElementById('loadQuote').addEventListener("click", randomBackground, false);

var quotes = [
  {
    quote: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    source: "Mark Caine",
    tags: ['inspirational', 'success']
  },
  {
    quote: "Nothing in life is as important as you think it is, while you are thinking about it.",
    source: "Daniel Kahneman",
    citation: "Thinking, Fast and Slow",
    year: 2011,
    tags: ['life']
  },
  {
    quote: "Beauty is power; a smile is its sword.",
    source: "John Ray",
    tags: ['inspirational', 'life']
  },
  {
    quote: "What nicer thing can you do for somebody than make them breakfast?",
    source: "Anthony Bourdain",
    tags: ['nice', 'kind']
  },
  {
    quote: "Open your eyes and see what you can with them before they close forever.",
    source: "Anthony Doerr",
    citation: "All the Light We Cannot See",
    year: 2014,
    tags: ['life', 'inspirational']
  }
];

function getRandomQuote(quotes) {
  // This variable allows the function to use any input array size
  var quotesLength = quotes.length;
  var randomIndex = Math.floor(Math.random() * quotesLength);
  // This returns the entire quote object
  return quotes[randomIndex];
}

function printQuote() {
  var quote = getRandomQuote(quotes);
  var print = '';
  print += '<p class="quote">' + quote.quote + '</p>';
  print += '<p class="source">' + quote.source;
  // There are two if statements since either one can be included
  if (quote.citation) {
    print += '<span class="citation">' + quote.citation + '</span>';
  }
  if (quote.year) {
    print += '<span class="year">' + quote.year + '</span>';
  }
  print += '</p>'
  if (quote.tags) {
    print += '<p>' + 'tags: ' + quote.tags.join(', ') + '</p>';
  }
  // This sets the HTML to the quote
  document.getElementById('quote-box').innerHTML = print;
}

// Generate a random number for RGB color
function randomColorNumber() {
  return Math.floor(Math.random() * 256);
}

function randomBackground() {
  // Create an array of three random RGB colors
  var randomColors = [randomColorNumber(), randomColorNumber(), randomColorNumber()]
  // Create the RGB color string
  var randomRgb = "rgb(" + randomColors.join(', ') + ")";
  // Change the background color to randomRgb
  document.body.style.backgroundColor = randomRgb;
}

// Generate a random quote every 30 seconds
setInterval(function() {
  printQuote();
}, 30000);
