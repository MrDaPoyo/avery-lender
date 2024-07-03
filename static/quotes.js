// Function to generate a random quote
let quotes = []; // Declare the quotes variable as an empty array outside of the fetch block

fetch('https://datasets-server.huggingface.co/rows?dataset=Abirate%2Fenglish_quotes&config=default&split=train&offset=0&length=100')
  .then(response => response.json())
  .then(data => {
    quotes = data.rows.map(row => row.row.quote); // Assign the fetched quotes to the quotes variable
    console.log(quotes);
    function generateQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
  }
    const quoteText = document.getElementById("quote");
    quoteText.textContent = generateQuote();
  })
  
  .catch(error => console.error('Failed to retrieve data:', error));

const randomQuote = generateQuote();
console.log("-------");
console.log("Quote: " + randomQuote);
console.log("-------");
const quoteText = document.getElementById("quote");
quoteText.textContent = randomQuote;