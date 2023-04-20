import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
function PopularQuotes() {
  const [categories, setCategories] = useState([]);
  const [quotesByCategory, setQuotesByCategory] = useState({});

  useEffect(() => {
    fetch('https://api.quotable.io/tags')
      .then(response => response.json())
      .then(data => setCategories([{ _id: 'all', name: 'All' }, ...data]))
      .catch(error => console.error(error));
  }, []);

  const fetchQuotesByCategory = category => {
    fetch(`https://api.quotable.io/quotes?sortBy=popularity&tags=${category}&limit=10`)
      .then(response => response.json())
      .then(data => setQuotesByCategory(prevState => ({ ...prevState, [category]: data.results })))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    categories.forEach(category => {
      fetchQuotesByCategory(category.slug);
    });
  }, [categories]);

  return (
    <div className='cont2'>
        <h1>Filtered by Categories</h1>
      {categories.map(category => (
        <div className='cont21' key={category._id}>
          <h2>Category :<u> {category.name}</u></h2>
          {quotesByCategory[category.slug] && (
            <ul >
              {quotesByCategory[category.slug].map(quote => (
                <li key={quote._id}>
                  <h5>{quote.content}</h5>
                  <p>- {quote.author}</p>
                </li>
              ))}
            </ul>
          )}
            <a className='viewbtn' href=''>View more</a>    
         
        </div>
      ))}
    </div>
  );
}

export default PopularQuotes;
