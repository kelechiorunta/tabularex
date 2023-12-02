import { useState, useEffect } from 'react';
import App from '../App';

/**
 * Row Component
 *
 * This row determines the rows within the table.
 *
 * @returns {JSXElement}
 */
const Row = ( {id, title, content, selectstyle, searchedrow} ) => {
  return (
    <ul className="row">
      {/* <li>{userId}</li> */}
      <li className={id===(searchedrow) && "selected"}>{id}</li>
      <li className={id===(searchedrow) && "selected"}>{title}</li>
      <li className={id===(searchedrow) && "selected"}>{content}</li>
      {console.log(selectstyle)}
    </ul>
  );
}

export default Row;
