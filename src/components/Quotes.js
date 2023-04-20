import React, { useState, useEffect } from 'react';
import '../App.css';

function QuoteGenerator() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch(error => console.error(error));
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${quote} - ${author}`);
    setIsCopied(true);
  }

  const generateQuote = () => {
    setIsCopied(false);
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch(error => console.error(error));
  }

  return (
    <div className="quote-generator">
       <h1>Random Quotes</h1>
      <div className="quote-box">
       
        <div className="quote">
          <p>{quote}</p>
          <p className="author">- {author}</p>
        </div>
        <button className="copy-button" onClick={handleCopy}>
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <button className="new-quote" onClick={generateQuote}>New Quote</button>
    </div>
  );
}

export default QuoteGenerator;
