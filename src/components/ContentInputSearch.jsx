import React from 'react'

function ContentInputSearch({searchInputContent, handleSearchContent}) {
  return (
    <div>
      <fieldset className='search_id_cont'>
        <span>Search Content:</span>
        <input className='search_input_content' onChange={searchInputContent} type="text"/>
        <button onClick={()=>{handleSearchContent()}}>{">>"}</button>
      </fieldset>
    </div>
  )
}

export default ContentInputSearch
