import React, { useEffect, useState } from "react";
import "../styles/TodoList.css";
import { IoAdd } from "react-icons/io5";
// import { AiOutlineSearch } from "react-icons/ai";
import CreatePost from "../modals/CreatePost";
import Card from "./Card";
import logo from "./Group-1608.png";
const TodoList = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  //creating an array of post that user has created

  const [postList, setPostList] = useState([]);

  const savePost = (postObject) => {
    let tempList = postList;
    tempList.push(postObject);
    localStorage.setItem("postList", JSON.stringify(tempList)); //pushing data to local storage and then will fetch using useEffect
    setPostList(tempList);
    setModal(false);
    window.location.reload();
  };

  //fetching list from local storage
  useEffect(() => {
    let arr = localStorage.getItem("postList");
    if (arr) {
      let obj = JSON.parse(arr);

      setPostList(obj);
    }
  }, []);

  //delete function from card.jsx
  const deletePost = (index) => {
    let tempList = postList;
    tempList.splice(index, 1);
    localStorage.setItem("postList", JSON.stringify(tempList));
    setPostList(tempList);
    window.location.reload();
  };
  //editing post
  const updateArray = (obj, index) => {
    let tempList = postList;
    console.log(tempList);
    tempList[index] = obj;
    setPostList(tempList);
    localStorage.setItem("postList", JSON.stringify(tempList));
    window.location.reload();
  };
  //search Functionalities
  const [searchValue, setSearchValue] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("postList");
    if (arr) {
      let obj = JSON.parse(arr);
      setPostList(obj);

      // Filter the posts based on the search value
      const filtered = obj.filter((post) =>
        post.Name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchValue]);

  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" className="logo"></img>
        {/* <h3 className="mt-3">toddle</h3> */}

        <input
          id="search-input"
          className="search-input"
          type="text"
          placeholder="Search.."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <button className="btn mt-2 create-post" onClick={() => setModal(true)}>
          <IoAdd /> Create new board
        </button>
      </div>
      <div className="task-container">
        {filteredPosts &&
          filteredPosts.map((obj, index) => (
            <Card
              postObj={obj}
              index={index}
              deletePost={deletePost}
              updateArray={updateArray}
            />
          ))}
      </div>
      <CreatePost toggle={toggle} modal={modal} save={savePost} />
    </>
  );
};

export default TodoList;
