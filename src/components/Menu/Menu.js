import React from 'react';
import './Menu.scss'

const Menu = () => {
  return (
    <aside className='Menu'>
      <h1 className="header">What's <span className="header--yellow">New?</span></h1>
      <ul>
        <li>Local News</li>
        <li>Technology</li>
        <li>Entertainment</li>
        <li>Science</li>
        <li>Health</li>
      </ul>
    </aside>


  )
}

export default Menu;