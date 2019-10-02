import React from 'react';
import { IoIosPin } from "react-icons/io";
import './Menu.scss';

const Menu = ({ changeState }) => {
  return (
    <aside className='Menu'>
      <h1 className="header">What's <span className="header--yellow">New?</span></h1>
      <ul>
        <li id="local" onClick={(event) => changeState(event)}><IoIosPin size={30} />Local News</li>
        <li id="technology" onClick={(event) => changeState(event)}>Technology</li>
        <li id="entertainment" onClick={(event) => changeState(event)}>Entertainment</li>
        <li id="science" onClick={(event) => changeState(event)}>Science</li>
        <li id="health" onClick={(event) => changeState(event)}> Health</li>
      </ul>
    </aside >
  )
}

export default Menu;