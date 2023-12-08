import React from 'react'

function IdInputSearch({searchInputId}) {
  return (
    <div>
       <fieldset className='search_id_cont'>
          <span>Search ID:</span>
          <input className='search_input' onChange={searchInputId} type="text"/>
       </fieldset>
    </div>
  )
}

export default IdInputSearch
