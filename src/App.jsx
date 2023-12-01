/**
 * Import React Dependencies
 */
import { useState, useEffect } from 'react'
import axios from 'axios'

/**
 * Import Components
 */
import Row from './components/Row'
import Header from './components/Header'

import { posts } from './data/posts'
import './App.css'

/**
 * App Component
 *
 * This component is responsible for rendering the
 * application in its entirety.
 *
 * @returns {JSxElement}
 */
const App = () => {

  /**
   * Declaration of constants and variables and hooks for the application
   */
  var newpost = [];
  const [data, setData] = useState([...posts])
  const [sampledata, setSample] = useState([])
  const [currentPage, setcurrentPage] = useState(1);
  const [order, setorder] = useState("ASC")
  const NumberofPages = 5;

/**
 * Declaration of the user function for Pagination
 */
  const Paginate = () => {
    const lastIndex = currentPage * NumberofPages;
    const firstIndex = lastIndex - NumberofPages;
    const post_paginate = posts.slice(firstIndex, lastIndex)
    post_paginate.length===0? <h1>No Data Found</h1> : setData([...post_paginate])
  }

/**
 * Declaration of the user function for Sorting
 * @param {} //sortProp argument passed to sort the data based on the key
 */
  const sorting = (sortProp) => {
    order==="ASC"? (newpost = data.sort((a,b)=>{ return a[sortProp.toLowerCase()] < b[sortProp.toLowerCase()]?
    1:-1 }),setData([...newpost]), setorder("DSC")) :(newpost = data.sort((a,b)=>{return a[sortProp.toLowerCase()]
    < b[sortProp.toLowerCase()]? -1:1}), setData([...newpost]), setorder("ASC"))
  }

  /**
   * Calling the useEffect hook to render the data from the Paginate function and to render based on the
   * currentPage dependency
   */
  useEffect(()=>{
    Paginate()
  }, [currentPage])


  return (
    <>
      <section>
        <div id="app">

          <Header sorting={sorting} />

           { data.map((post, id) => {
             return <Row key={id}  id={post.id} title={post.title} content={post.body}/>
            })
          }

          <fieldset className="page_container"> <span>Page:</span><input type="Number" min={1} max={posts.length/5}
           value={currentPage} onChange={(e)=>{ setcurrentPage((e.target.value)); Paginate();}}/></fieldset>

        </div>
      </section>
    </>
  )
}

export default App;
