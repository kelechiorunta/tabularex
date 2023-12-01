import { useState, useEffect } from 'react';
import App from '../App';

/**
 * Row Component
 *
 * This row determines the rows within the table.
 *
 * @returns {JSXElement}
 */
const Row = ( {id, title, content} ) => {
  return (
    <ul className="row">
      {/* <li>{userId}</li> */}
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>
    </ul>
  );
}

export default Row;
