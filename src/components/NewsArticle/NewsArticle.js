import React from 'react';
import './NewsArticle.scss';

const NewsArticle = ({ headline, description, url, img }) => {
  return (
    <div className="NewsArticle">
      <img className="image--news" src={img} alt="News article" />
      <h3>{headline}</h3>
      <p>{description}</p>
      <a href={url}>Link To Article</a>
    </div>
  )
}

export default NewsArticle;