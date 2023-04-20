const quoteContainer = document.getElementById('quote');

async function getQuote() {
  
  const response = await fetch('https://quotely-m7oa.onrender.com/quotes');
  const data = await response.json();
  console.log('data:', data);
  console.log('quote:', quote);
  quoteContainer.innerHTML = `${data.quoteText} - ${data.quoteAuthor}`;
  }
  
getQuote();

