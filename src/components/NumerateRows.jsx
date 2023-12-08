import React from 'react'
import { posts } from '../data/posts'

function NumerateRows({NumberofRows, rowNumeration}) {
  return (
  <div>
    <fieldset className='search_id_cont'>
      <span>No of Rows:</span>
      <input className='search_input input_pages' min={1} max={posts.length/NumberofRows}
      onChange={rowNumeration} value={NumberofRows} type="number"/>
    </fieldset>
  </div>
  )
}

export default NumerateRows
