import React from 'react';
import { IoIosPin } from "react-icons/io";
import { IoMdCog } from "react-icons/io";
import { IoIosMusicalNotes } from "react-icons/io";
import { IoIosFlask } from "react-icons/io";
import { IoIosMedkit } from "react-icons/io";

import './Menu.scss';

const Menu = ({ changeState }) => {
  return (
    <aside className='Menu'>
      <h1 className="header">What's <span className="header--yellow">New?</span></h1>
      <ul>
        <li id="local" onClick={(event) => changeState(event)}><IoIosPin size={30} /> Local News</li>
        <li id="technology" onClick={(event) => changeState(event)}><IoMdCog size={30} /> Technology</li>
        <li id="entertainment" onClick={(event) => changeState(event)}><IoIosMusicalNotes size={30} /> Entertainment</li>
        <li id="science" onClick={(event) => changeState(event)}><IoIosFlask size={30} /> Science</li>
        <li id="health" onClick={(event) => changeState(event)}><IoIosMedkit size={30} /> Health</li>
      </ul>
    </aside >
  )
}

export default Menu;