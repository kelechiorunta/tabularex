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
  var post_paginate = [];
  var searcheddata = [];
  var lastIndex=5, firstIndex=0;


  const samplepost = Array.from({length:20},(item, i)=>i+1)
  const [data, setData] = useState([...posts])
  const [mystyle, setmystyle] = useState({})
  const [searchedId, setsearchedId] = useState("")
  // const [search_val, setValue] = useState(1)
  // const [sampledata, setSample] = useState([...samplepost])
  const [currentPage, setcurrentPage] = useState(1);
  const [myCounter, setCounter] = useState(1);
  const [firstPage, setFirstPage] = useState(0);
  const [lastPage, setLastPage] = useState(5);
  const [order, setorder] = useState("ASC")
  const NumberofPages = 5;
  // const samplepost = Array.from({length:20},(item, i)=>i+1)

/**
 * Declaration of the user function for Pagination
 */
  const Paginate = () => {
    lastIndex = currentPage * NumberofPages;
    firstIndex = lastIndex - NumberofPages;
    post_paginate = posts.slice(firstIndex, lastIndex)
    post_paginate.length===0? <h1>No Data Found</h1> : setData([...post_paginate])
  }

/**
 * Declaration of the user function for Sorting
 * @param {} //sortProp argument passed to sort the data based on the key
 */
  const sorting = (sortProp) => {
    order==="ASC"? (newpost = data.sort((a,b)=>{ return a[sortProp.toLowerCase()] < b[sortProp.toLowerCase()]?
    1:-1 },setData([...newpost]), setorder("DSC"))) :(newpost = data.sort((a,b)=>{return a[sortProp.toLowerCase()]
    < b[sortProp.toLowerCase()]? -1:1}), setData([...newpost]), setorder("ASC"))
  }

  /**
   * Declaration of the user function for searching and selecting the item based on the input value or id
   * automatically loding in the current page triggered by the useEffect hook with the currentPage aa a dependant value
   * @param {*} e
   */
  const searchInput = (e) =>{

    e.target.value===""? (Paginate(), setsearchedId("")):(setcurrentPage(Math.ceil(Number(e.target.value)/5)),(setsearchedId(Number(e.target.value))))
    // (searcheddata = posts.filter((item, index)=>{return item.id === Number(e.target.value)}),(setmyclass(e.target.value)),
    // setData([...searcheddata]));

  }

  /**
   * Function to handle search
   *
   * @returns void
   */
  const handleSearch = () => {
    if ( myCounter > Math.ceil( postdata.length/5 ) ) {
      return;
    }

    setCounter(prev=>prev+1);
    setFirstPage(prev=>prev+5);
    setLastPage(prev=>prev+5);
    console.log(firstPage, lastPage);
    setData([...postdata.slice(firstPage+5, lastPage+5)]);
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
             return <Row key={id}  id={post.id} title={post.title} content={post.body} selectstyle={mystyle} searchedrow={searchedId}/>
            })
          }

          <fieldset className="page_container">
            <fieldset className="search_id_cont">
              <span>Search ID:</span>
              <input
                className="search_input"
                onChange={searchInput}
                type="text"
              />
            </fieldset>

            <fieldset className="search_id_cont">
              <span>Search Content:</span>
              <input
                className="search_input_content"
                onChange={searchContent}
                type="text"
              />
              <button onClick={handleSearch}>{">>"}</button>
            </fieldset>

            <ul className="page_link">
              <button onClick={()=>(currentPage > 1) && setcurrentPage(prev=> prev-1)}><a href="#">Prev</a></button>
              {<input className="pageno" type="Number" min={1} max={posts.length/5}
              value={currentPage} onChange={(e)=> (setcurrentPage(Number(e.target.value)), Paginate())}/>}
              <button onClick={()=>(currentPage < posts.length/5) && setcurrentPage(prev=>prev+1)}><a href="#">Next</a></button>
            </ul>
          </fieldset>
        </div>
      </section>
    </>
  )
          }
export default App
