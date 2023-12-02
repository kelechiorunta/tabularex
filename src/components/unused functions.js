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
