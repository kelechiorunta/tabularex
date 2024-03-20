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
      <li onClick={()=> sorting("id")}>ID</li>
      <li onClick={()=> sorting("title")}>Title</li>
      <li onClick={()=> sorting("body")}>Content</li>
    </ul>
  );
}

export default Header;