import React, { useEffect, useState } from "react";
import "../styles/TodoList.css";
import { IoAdd } from "react-icons/io5";
import CreatePost from "../modals/CreatePost";
// import Card from "./Card";
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
  };

  //fetching list from local storage
  useEffect(() => {
    let arr = localStorage.getItem("postList");
    if (arr) {
      let obj = JSON.parse(arr);

      setPostList(obj);
    }
  }, []);
  return (
    <>
      <div className="header">
        <h3 className="mt-3">toddle</h3>
        <button
          className="btn mt-2"
          style={{ backgroundColor: "#D33852" }}
          onClick={() => setModal(true)}
        >
          <IoAdd /> Create new board
        </button>
      </div>
      <div className="task-container">
        {/* {postList &&
          postList.map((obj, index) => <Card postObject={obj} index={index} />)} */}
      </div>
      <CreatePost toggle={toggle} modal={modal} save={savePost} />
    </>
  );
};

export default TodoList;
