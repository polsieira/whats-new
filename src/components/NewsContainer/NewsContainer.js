import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = ({ local }) => {
  const newsArticles = local.map(article => {
    return (
      <NewsArticle
        key={article.id}
        headline={article.headline}
        description={article.description}
        url={article.url}
        img={article.img}
      />
    )
  })

  return (
    <div className='newsArticle-container'>
      {newsArticles}
    </div>
  )
}

export default NewsContainer;