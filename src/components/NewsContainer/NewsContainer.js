import React from 'react';
import './NewsContainer.scss';
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = ({ currentTab }) => {
  const newsArticles = currentTab.map(article => {
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
    <div className='NewsContainer'>
      {newsArticles}
    </div>
  )
}

export default NewsContainer;