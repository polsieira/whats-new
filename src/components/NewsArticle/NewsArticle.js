import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import './NewsArticle.scss';

const NewsArticle = ({ headline, description, url, img }) => {
  return (
    <div className="NewsArticle">
      <img className="image--news" src={img} alt="News article" />
      <h3>{headline}</h3>
      <p>{description}</p>
      <a href={url}>Link To Article <IoIosArrowRoundForward size={30} /></a>
    </div>
  )
}

export default NewsArticle;