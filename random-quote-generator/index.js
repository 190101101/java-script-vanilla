const btnEl = document.getElementById('btn');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');

const URL = 'https://api.quotable.io/random';

const getQuote = async () => {
  try{
    btnEl.innerText = 'Loading...';
    btn.disabled = true;
    quoteEl.innerText = 'Updating...';
    authorEl.innerText = 'Updating...';

    setTimeout(async () => {
      const response = await fetch(URL);
      const data = await response.json();

      quoteEl.innerText = data.content;
      authorEl.innerText = `~ ${data.author}`;
      btnEl.innerText = 'Get a quote...';
      btn.disabled = false;
      console.log(data);
    }, 500)
  }
  catch(error){

  }
}

getQuote();

btn.addEventListener('click', getQuote);