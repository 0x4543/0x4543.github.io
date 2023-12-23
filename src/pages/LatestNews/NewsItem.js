// NewsItem.js

import React from 'react';

const NewsItem = ({ article }) => {
  return (
    <div className="news-item">
      <div className="news-image" style={{ backgroundImage: `url(${article.urlToImage})` }}>
        {!article.urlToImage && <span className="image-placeholder">No Image Available</span>}
      </div>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default NewsItem;
