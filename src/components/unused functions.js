const fetchdata = async () => {
  return await axios
    .get("/posts.json") //("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      setSample([...response.data]);
      console.log(sampledata);
    })
    .catch((error) => console.log("Error fetching data", error));
};

useEffect(() => {
  fetchdata();
  //console.log(sampledata)
}, [...sampledata]);

// const sortdata = async () =>{
//   return await axios.get('./posts.json')//("https://jsonplaceholder.typicode.com/posts")
//   .then(response => {
//     // Sort the data in ascending order based on a specific property
//     const sortedData = response.data.sort((a, b) => a.propertyToSort - b.propertyToSort);

//     // Update the state with the sorted data
//     setData(sortedData);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });
// }

console.log(order);
console.log(newpost);

const sortid_asc = () => {
  newpost = data.sort(function (a, b) {
    return a.id - b.id;
  });
  console.log(newpost);
  setData([...newpost]);
  newpost = [];
};

const sortid_des = () => {
  newpost = data.sort(function (a, b) {
    return b.id - a.id;
  });
  console.log(newpost);
  setData([...newpost]);
  newpost = [];
};

const sorttitle_asc = () => {
  newpost = data.sort(function (a, b) {
    let x = a.title.toLowerCase();
    let y = b.title.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  console.log(newpost);
  setData([...newpost]);
  newpost = [];
};

const sorttitle_des = () => {
  newpost = data.sort(function (a, b) {
    let x = a.title.toLowerCase();
    let y = b.title.toLowerCase();
    if (x < y) {
      return 1;
    }
    if (x > y) {
      return -1;
    }
    return 0;
  });
  console.log(newpost);
  setData([...newpost]);
  newpost = [];
};

const sortcontent_asc = () => {
  newpost = data.sort(function (a, b) {
    let x = a.body.toLowerCase();
    let y = b.body.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  console.log(newpost);
  setData([...newpost]);
  newpost = [];
};

const sortcontent_des = () => {
  newpost = data.sort(function (a, b) {
    let x = a.body.toLowerCase();
    let y = b.body.toLowerCase();
    if (x < y) {
      return 1;
    }
    if (x > y) {
      return -1;
    }
    return 0;
  });
  console.log(newpost);
  setData([...newpost]);
  newpost = [];
};

// ascending_id={sortid_asc} descending_id={sortid_des}
//           ascending_title={sorttitle_asc} descending_title={sorttitle_des}
//           ascending_cont={sortcontent_asc} descending_cont={sortcontent_des}

{
  /* <input type="Number" min={1} max={posts.length/5}
           value={currentPage} onChange={(e)=>{ setcurrentPage((e.target.value)); Paginate();}}/>

          <li className='page_link' key={n}><a className='page_link pageno' href="#">{currentPage}</a></li> */
}

{
  /* <span>Page:</span><input type="Number" min={1} max={posts.length/5}
           value={currentPage} onChange={(e)=>{ setcurrentPage((e.target.value)); Paginate();}}/> */
}

{
  /* <input type="Number" min={1} max={posts.length/5}
value={currentPage} onChange={(e)=>{ setcurrentPage((e.target.value)); Paginate();}}/>

<li className='page_link' key={n}><a className='page_link pageno' href="#">{currentPage}</a></li> */
}

{
  /* <span>Page:</span><input type="Number" min={1} max={posts.length/5}
value={currentPage} onChange={(e)=>{ setcurrentPage((e.target.value)); Paginate();}}/> */
}


// /**
//  * Function to handle search
// *
// * @returns void
// */
// const handleSearch = () => {
//  if ( myCounter > Math.ceil( postdata.length/5 ) ) {
//    return;
//  }

//  setCounter(prev=>prev+1);
//  setFirstPage(prev=>prev+5);
//  setLastPage(prev=>prev+5);
//  console.log(firstPage, lastPage);
//  setData([...postdata.slice(firstPage+5, lastPage+5)]);
// }

// const searchContent = (e) =>{
//  e.target.value.length<1?(Paginate(), setsearchedContent(""), setnoofRows(0), setCounter(1), setpostdata([]), setData([...data]), (setcurrentPage(Math.ceil(Number(1)/5))), setFirstPage(0), setLastPage(5), post_Content = []):
//  ( searchedString += e.target.value.toString().toLowerCase(), setsearchedContent(e.target.value.toString().toLowerCase()),
//  post_Content = posts.filter((item, index, arr)=>{return item.body.toString().toLowerCase().slice(0, searchedString.length)
//  ===(searchedString.toString().toLowerCase().slice(0, searchedString.length))}),
//  post_Content.length > 0 && (new_Content = post_Content.map((item)=>setpostsearchContent(item.id))),
//  filtered_post_Content= post_Content.filter((p, i)=>{return i<5}),setFirstPage(0), setLastPage(5), setCounter(1),
//  console.log(post_Content), setnoofRows(new_Content.length))

//  if (post_Content.length > 0 && post_Content.length < 5)
//  {(setFirstPage(0), setLastPage(5),setpostdata([...post_Content]),setData([...post_Content]), (setcurrentPage(currentPage)))}
//  else if (post_Content.length >= 5) //&& data.length >5)
//  {(setCounter(myCounter), setpostdata([...post_Content]), setFirstPage(0), setLastPage(5), setData([...post_Content.slice(0,5)]))}
//  // else if (post_Content.length > 5 && data.length < 5 )
//  // {(setFirstPage(0), setLastPage(5),setpostdata([...post_Content]),setData([...post_Content]),(setcurrentPage(currentPage)))}
//  else if (post_Content.length <= 0)
//  {(Paginate(), (setcurrentPage(1)), setCounter(1), setFirstPage(0), setLastPage(5))}
//  //post_Content.length < 5 ? (setFirstPage(0), setLastPage(5),setpostdata([...post_Content]),setData([...post_Content])) : (setpostdata([...post_Content]), setFirstPage(firstPage+5), setLastPage(lastPage+5), setData([...post_Content.slice(firstPage,lastPage)])))
//  //post_Content.length < 1 && (Paginate(),(setcurrentPage(currentPage)), setpostdata([...data]), setData([...postdata]), setCounter(1), setFirstPage(0), setLastPage(5))//(setcurrentPage(Math.ceil(Number(post_searchContent)/5))))
// }

// /**
// * Calling the useEffect hook to render the data from the Paginate function and to render based on the
// * currentPage dependency
// */
// useEffect(()=>{
//  Paginate()
// }, [currentPage])


// return (
//  <>
//    <section>
//      <div id="app">

//        <Header sorting={sorting} noofsearchedrows={noofRows}/>

//        { data.map( (post, id) => {
//            return (
//              <Row
//                key={id}
//                id={post.id}
//                title={post.title}
//                content={post.body}
//                selectstyle={mystyle}
//                searchedrow={searchedId}
//                searchedrow_content={searchedContent}
//              />
//            );
//          })
//        }

//        <fieldset className="page_container">
//          <fieldset className="search_id_cont">
//            <span>Search ID:</span>
//            <input
//              className="search_input"
//              onChange={searchInput}
//              type="text"
//            />
//          </fieldset>

//          <fieldset className="search_id_cont">
//            <span>Search Content:</span>
//            <input
//              className="search_input_content"
//              onChange={searchContent}
//              type="text"
//            />
//            <button onClick={handleSearch}>{">>"}</button>
//          </fieldset>

//          <ul className="page_link">
//            <button
//              onClick={()=>(currentPage > 1) && setcurrentPage(prev=> prev-1)}
//            >
//              <a href="#">Prev</a></button>
//              {<input className="pageno" type="Number" min={1} max={posts.length/5}
//            value={currentPage} onChange={(e)=> (setcurrentPage(Number(e.target.value)), Paginate())}
//            />}
//            <button
//              onClick={()=>(currentPage < posts.length/5) && setcurrentPage(prev=>prev+1)}
//            >
//              <a href="#">Next</a>
//            </button>
//          </ul>
//        </fieldset>
//      </div>
//    </section>
//  </>
// )
