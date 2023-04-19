const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const quotes = require('./quotes.json');

app.get('/quotes', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.send(randomQuote);
});

app.get('/quotes/:count', (req, res) => {
  const count = parseInt(req.params.count);
  const randomQuotes = [];
  for (let i = 0; i < count; i++) {
    randomQuotes.push(quotes[Math.floor(Math.random() * quotes.length)]);
  }
  res.send(randomQuotes);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
