import { useState, useEffect } from 'react';
import App from '../App';

/**
 * Header Component
 *
 * This row determines the rows within the table.
 *
 * @returns {JSXElement}
 */
const Header = ({sorting, ascending_id, descending_id, ascending_title, descending_title, ascending_cont, descending_cont}) => {
  return (
    <ul className="header">
      {/* <li>USER ID</li> */}
      <li onClick={()=> sorting("id")}>ID </li>
      <li onClick={()=> sorting("title")}>Title</li>
      <li onClick={()=> sorting("body")}>Content</li>

    </ul>
  );
}

export default Header;


          // <span><fieldset><legend>Sort</legend><button onClick={ascending_id}>A</button>
          // <button onClick={descending_id}>D</button></fieldset></span>
          // <span><fieldset><legend>Sort</legend><button onClick={ascending_title}>A</button>
          // <button onClick={descending_title}>D</button></fieldset></span>
          // <span><fieldset><legend>Sort</legend><button onClick={ascending_cont}>A</button>
          // <button onClick={descending_cont}>D</button></fieldset></span>
