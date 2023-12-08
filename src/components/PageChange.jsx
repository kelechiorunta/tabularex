import React from 'react'
import { posts } from '../data/posts'

function PageChange({PrevPage, NumberofRows, currentPage, handlePageChange, NextPage}) {
  return (
    <div>
      <ul className='page_link'>
          <button onClick={PrevPage}>
            <a href="#">Prev</a>
          </button>
          {<input className="pageno" type="Number" min={1} max={posts.length/NumberofRows}
          value={currentPage} onChange={handlePageChange}/>}
          <button onClick={NextPage}>
            <a href="#">Next</a>
          </button>
      </ul>
    </div>
  )
}

export default PageChange
