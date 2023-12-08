import { useState, useEffect } from 'react';
import App from '../App';

/**
 * Row Component
 *
 * This row determines the rows within the table.
 *
 * @returns {JSXElement}
 */
const Row = ( {id, title, content, selectstyle, searchedrow, searchedrow_content} ) => {
  return (
    <ul className="row">
      {/* <li>{userId}</li> */}
      <li className={id===(searchedrow) && "selected"}>{id}</li>
      <li className={id===(searchedrow) && "selected"}>{title}</li>
      <li className={content.toString().toLowerCase().slice(0,searchedrow_content.length>0 && searchedrow_content.length)===(searchedrow_content.slice(0,searchedrow_content.length>0 && searchedrow_content.length)) && searchedrow_content.length>0 && "selected"}>{content}</li>
      {console.log(selectstyle)}
    </ul>
  );
}

export default Row;
