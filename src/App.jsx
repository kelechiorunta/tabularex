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
import NumerateRows from './components/NumerateRows'
import IdInputSearch from './components/IdInputSearch'
import ContentInputSearch from './components/ContentInputSearch'
import PageChange from './components/PageChange'

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
  //var post_searchContent = [];
  var searcheddata = [];
  var lastIndex=5, firstIndex=0;
  var searchedString = "";
  var post_Content = [];
  var filtered_post_Content = [];
  var new_Content = [];


  const samplepost = Array.from({length:20},(item, i)=>i+1)
  const [data, setData] = useState([...posts])
  const [sortdata, setsortData] = useState([])
  const [postdata, setpostdata] = useState([])
  const [mystyle, setmystyle] = useState({})
  const [searchedId, setsearchedId] = useState("")
  const [searchedContent, setsearchedContent] = useState("")
  const [post_searchContent, setpostsearchContent] = useState([])
  const [noofRows, setnoofRows] = useState(0)
  // const [search_val, setValue] = useState(1)
  // const [sampledata, setSample] = useState([...samplepost])
  const [currentPage, setcurrentPage] = useState(1);
  const [myCounter, setCounter] = useState(1);
  const [firstPage, setfirstPage] = useState(0);
  const [lastPage, setlastPage] = useState(5);
  const [order, setorder] = useState("ASC")
  const [NumberofRows, setNumberofRows] = useState(5);

  // const samplepost = Array.from({length:20},(item, i)=>i+1)

/**
 * Declaration of the user function for Pagination
 */
  const Paginate = () => {
    lastIndex = currentPage * NumberofRows;
    firstIndex = lastIndex - NumberofRows;
    post_paginate = posts.slice(firstIndex, lastIndex)
    setsortData([...post_paginate])
    post_paginate.length > 0 && setData([...post_paginate]) //: <h1>No Data Found</h1>


  }
/**
 * Declaration of the user function for Sorting
 * @param {} //sortProp argument passed to sort the data based on the key
 */
  const sorting = (sortProp) => {
    order==="ASC"? (newpost = data.sort((a,b)=>{ return a[sortProp.toLowerCase()] < b[sortProp.toLowerCase()]?
    1:-1 }), setData([...newpost]), setorder("DSC")) :(newpost = data.sort((a,b)=>{return a[sortProp.toLowerCase()]
    < b[sortProp.toLowerCase()]? -1:1}),  setData([...newpost]), setorder("ASC"))
  }

  /**
   * Declaration of the user function for searching and selecting the item based on the input value or id
   * automatically loding in the current page triggered by the useEffect hook with the currentPage aa a dependant value
  //  *
   */
  const searchInputId = (e) =>{

    e.target.value===""? (Paginate(), setsearchedId("")):(setcurrentPage(Math.ceil(Number(e.target.value)/NumberofRows)),(setsearchedId(Number(e.target.value))))

  }

  const searchInputContent = (e) =>{
    e.target.value.length < 1?
    (Paginate(),
    setsearchedContent(""),
    setnoofRows(0),
    setCounter(1),
    setpostdata([]),
    setData([...data]),
    (setcurrentPage(Math.ceil(Number(1)/NumberofRows))),
    setfirstPage(0),
    setlastPage(NumberofRows),
    post_Content = []
    ):
    ( searchedString += e.target.value.toString().toLowerCase(),
    setsearchedContent(e.target.value.toString().toLowerCase()),
    post_Content = posts.filter((item, index, arr)=>{return item.body.toString().toLowerCase().slice(0, searchedString.length)
    ===(searchedString.toString().toLowerCase().slice(0, searchedString.length))}),
    post_Content.length > 0 && (new_Content = post_Content.map((item)=>setpostsearchContent(item.id))),
    filtered_post_Content= post_Content.filter((p, i)=>{return i<5}),
    setfirstPage(0),
    setlastPage(NumberofRows),
    setCounter(1),
    console.log(post_Content),
    setnoofRows(new_Content.length))

    if (post_Content.length > 0 && post_Content.length < NumberofRows)
    {(setfirstPage(0), setlastPage(NumberofRows),setpostdata([...post_Content]),setData([...post_Content]), (setcurrentPage(currentPage)))}
    else if (post_Content.length >= NumberofRows) //&& data.length >5)
    {(setCounter(myCounter), setpostdata([...post_Content]), setfirstPage(0), setlastPage(NumberofRows), setData([...post_Content.slice(0,NumberofRows)]))}
    else if (post_Content.length <= 0)
    {(Paginate(), (setcurrentPage(1)),setCounter(1), setfirstPage(0), setlastPage(NumberofRows))}
  }

  /**
   * Navigate to the next page of the found rows of the searched Content
   */

  const handleSearchContent = () => {
    if (myCounter >= Math.ceil(postdata.length/NumberofRows)){
      return
    }
    setCounter(prev=>prev+1);
    setfirstPage(prev=>prev+NumberofRows);
    setlastPage(prev=>prev+NumberofRows);
    console.log(firstPage, lastPage);
    setData([...postdata.slice(firstPage+NumberofRows,lastPage+NumberofRows)]);
  }

  /**
   * Navigate to the next page
   */

  const handlePageChange = (e)=> {
    setcurrentPage(Number(e.target.value));
    Paginate()
  }

  /**
   * Navigate to the previous page
   */
  const PrevPage = () =>{
    (currentPage > 1) && setcurrentPage(prev=> prev-1)
  }

  /**
   * Navigate to the next page
   */
  const NextPage = () =>{
    (currentPage < posts.length/NumberofRows) && setcurrentPage(prev=>prev+1)
  }

  const rowNumeration = (e) =>{
    setNumberofRows(Number(e.target.value));
    Paginate()
  }

  /**
   * Calling the useEffect hook to render the data from the Paginate function and to render based on the
   * currentPage dependency
   */
  useEffect(()=>{
    Paginate()
  }, [currentPage, NumberofRows])


  return (
    <>
      <section>
        <div id="app">

          <div className="fields">

            <fieldset className="page_container">

              <NumerateRows NumberofRows={NumberofRows} rowNumeration={rowNumeration}/>

              <IdInputSearch searchInputId={searchInputId}/>

              <ContentInputSearch searchInputContent={searchInputContent} handleSearchContent ={handleSearchContent}/>

              <PageChange PrevPage={PrevPage} NumberofRows={NumberofRows} currentPage={currentPage} handlePageChange={handlePageChange} NextPage={NextPage} />

            </fieldset>

          </div>


          <div className= "table">

            <Header sorting={sorting} noofsearchedrows = {noofRows}/>

            { data.map((post, id) => {
              return <Row key={id} id={post.id} title={post.title} content={post.body} selectstyle={mystyle}
              searchedrow={searchedId} searchedrow_content = {searchedContent} />
            })
            }

          </div>

        </div>
      </section>
    </>
  )
}
export default App
