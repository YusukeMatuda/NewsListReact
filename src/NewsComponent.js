import React, { useState, useEffect } from 'react';

const NewsComponent = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = () => {
    fetch('http://localhost:8080/news')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setNews(data.articles);
      })
      .catch(error => {
        console.log(error);
        setNews([]);
      });
  };

  const handleRefresh = () => {
    fetchNews();
  };

  const newsData = news
  .filter(article => !article.title.toLowerCase().includes('removed'))
  .map((article, index) => (
    <tr key={index}>
      <td>
          <img src={article.urlToImage} alt="News Thumbnail" style={{ maxWidth: '100px', maxHeight: '100px' }} />
      </td>
      <td>{article.title}</td>
      <td>{article.description}</td>
      <td>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </td>
    </tr>
  ));

  return (
    <div>
      <h3>News</h3>
      <button onClick={handleRefresh}>Update News</button>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {newsData}
        </tbody>
      </table>
    </div>
  );
};

export default NewsComponent;


