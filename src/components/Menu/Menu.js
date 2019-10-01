import React from 'react';
import './Menu.scss'

const Menu = ({ data, changeState }) => {
  return (
    <aside className='Menu'>
      <h1 className="header">What's <span className="header--yellow">New?</span></h1>
      <ul>
        <li onClick={() => changeState(data.local)}>Local News</li>
        <li onClick={() => changeState(data.technology)}>Technology</li>
        <li onClick={() => changeState(data.entertainment)}>Entertainment</li>
        <li onClick={() => changeState(data.science)}>Science</li>
        <li onClick={() => changeState(data.health)}> Health</li>
      </ul>
    </aside >
  )
}

export default Menu;