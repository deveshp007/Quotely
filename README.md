# Quotely API

## Description
Quotely is a simple API that returns random quotes with their respective author names. It can return a single quote or multiple quotes in JSON format.

## Usage:

### Single Quote
To get a single random quote, simply access the following URL:

> <b>https://quotely-m7oa.onrender.com/quotes</b>


The API will return a JSON object with the following format:

```JSON
{
"quoteText": "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.",
"quoteAuthor": "Blaise Pascal"
}
```


### Multiple Quotes

To get a specific number of random quotes, add the desired number at the end of the URL as shown below:

> <b>https://quotely-m7oa.onrender.com/quotes/{count}<b>

Replace `{count}` with the desired number of quotes.

The API will return an array of JSON objects, each containing a quote and its respective author name. Here is an example of how the output would look like for `{count} = 4`:


```JSON
[{
"quoteText": "He who controls others may be powerful, but he who has mastered himself is mightier still.",
"quoteAuthor": "Lao Tzu"
},
{
"quoteText": "The most formidable weapon against errors of every kind is reason.",
"quoteAuthor": "Thomas Paine"
},
{
"quoteText": "I never think of the future. It comes soon enough.",
"quoteAuthor": "Albert Einstein"
},
{
"quoteText": "Moments of complete apathy are the best for new creations.",
"quoteAuthor": "Philip Breedveld"
}]
```


## Deployment

This API is currently hosted on [Render](https://render.com/), a cloud platform for deploying and scaling web applications. You can easily deploy your own version of this API by following these steps:

1. Clone the GitHub repository: `git clone https://github.com/your_username/quotely-api.git`
2. Navigate to the project directory: `quotely`
3. Install the required dependencies: `npm install`
4. Start the server: `npm start`
5. Your API should now be accessible at `http://localhost:3000/quotes`



Note: You should replace "https://quotely-m7oa.onrender.com" with your own API URL if you decide to deploy your own version of the API.


