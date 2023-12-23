import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import "./styles.css";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=0db0b46ba6f44279bb72237836465bd3"
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="latest-news">
      <h1>Latest News</h1>
      <div className="news-list">
        {news.map((article) => (
          <NewsItem article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
