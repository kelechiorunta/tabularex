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

  const searchContent = (e) =>{
    e.target.value.length<1?(Paginate(), setsearchedContent(""), setnoofRows(0), setCounter(1), setpostdata([]), setData([...data]), (setcurrentPage(Math.ceil(Number(1)/5))), setFirstPage(0), setLastPage(5), post_Content = []):
    ( searchedString += e.target.value.toString().toLowerCase(), setsearchedContent(e.target.value.toString().toLowerCase()),
    post_Content = posts.filter((item, index, arr)=>{return item.body.toString().toLowerCase().slice(0, searchedString.length)
    ===(searchedString.toString().toLowerCase().slice(0, searchedString.length))}),
    post_Content.length > 0 && (new_Content = post_Content.map((item)=>setpostsearchContent(item.id))),
    filtered_post_Content= post_Content.filter((p, i)=>{return i<5}),setFirstPage(0), setLastPage(5), setCounter(1),
    console.log(post_Content), setnoofRows(new_Content.length))

    if (post_Content.length > 0 && post_Content.length < 5)
    {(setFirstPage(0), setLastPage(5),setpostdata([...post_Content]),setData([...post_Content]), (setcurrentPage(currentPage)))}
    else if (post_Content.length >= 5) //&& data.length >5)
    {(setCounter(myCounter), setpostdata([...post_Content]), setFirstPage(0), setLastPage(5), setData([...post_Content.slice(0,5)]))}
    // else if (post_Content.length > 5 && data.length < 5 )
    // {(setFirstPage(0), setLastPage(5),setpostdata([...post_Content]),setData([...post_Content]),(setcurrentPage(currentPage)))}
    else if (post_Content.length <= 0)
    {(Paginate(), (setcurrentPage(1)), setCounter(1), setFirstPage(0), setLastPage(5))}
    //post_Content.length < 5 ? (setFirstPage(0), setLastPage(5),setpostdata([...post_Content]),setData([...post_Content])) : (setpostdata([...post_Content]), setFirstPage(firstPage+5), setLastPage(lastPage+5), setData([...post_Content.slice(firstPage,lastPage)])))
    //post_Content.length < 1 && (Paginate(),(setcurrentPage(currentPage)), setpostdata([...data]), setData([...postdata]), setCounter(1), setFirstPage(0), setLastPage(5))//(setcurrentPage(Math.ceil(Number(post_searchContent)/5))))
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

          <Header sorting={sorting} noofsearchedrows={noofRows}/>

          { data.map( (post, id) => {
              return (
                <Row
                  key={id}
                  id={post.id}
                  title={post.title}
                  content={post.body}
                  selectstyle={mystyle}
                  searchedrow={searchedId}
                  searchedrow_content={searchedContent}
                />
              );
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
              <button
                onClick={()=>(currentPage > 1) && setcurrentPage(prev=> prev-1)}
              >
                <a href="#">Prev</a></button>
                {<input className="pageno" type="Number" min={1} max={posts.length/5}
              value={currentPage} onChange={(e)=> (setcurrentPage(Number(e.target.value)), Paginate())}
              />}
              <button
                onClick={()=>(currentPage < posts.length/5) && setcurrentPage(prev=>prev+1)}
              >
                <a href="#">Next</a>
              </button>
            </ul>
          </fieldset>
        </div>
      </section>
    </>
  )
}

export default App
