
var quotes = [
  {
    quote: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    source: "Mark Caine"
  },
  {
    quote: "Nothing in life is as important as you think it is, while you are thinking about it.",
    source: "Daniel Kahneman",
    citation: "Thinking, Fast and Slow",
    year: 2011
  },
  {
    quote: "Beauty is power; a smile is its sword.",
    source: "John Ray",
  },
  {
    quote: "What nicer thing can you do for somebody than make them breakfast?",
    source: "Anthony Bourdain",
  },
  {
    quote: "Open your eyes and see what you can with them before they close forever.",
    source: "Anthony Doerr",
    citation: "All the Light We Cannot See",
    year: 2014
  }
];

function getRandomQuote(quotes) {
  // This variable allows the function to use any input array size
  var quotesLength = quotes.length;
  // Since array indexes start at 0, we just need a random index
  // from 0 up to including 4
  var randomIndex = Math.floor(Math.random() * quotesLength);
  // This returns the entire quote object
  return quotes[randomIndex];
}

function printQuote() {
  var quote = getRandomQuote(quotes);
  var print = '';
  print += '<p class="quote">' + quote.quote + '</p>';
  print += '<p class="source">' + quote.source;
  if (quote.citation) {
    print += '<span class="citation">' + quote.citation + '</span>';
  }
  if (quote.year) {
    print += '<span class="year">' + quote.year + '</span>';
  }
  print += '</p>'
  return print;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", function() {
  document.getElementById('quote-box').innerHTML = printQuote();
}, false);
