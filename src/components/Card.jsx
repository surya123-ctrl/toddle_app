import React, { useState } from "react";
import "../styles/Card.css";
import EditPost from "../modals/EditPost";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
const Card = ({ postObj, index, deletePost, updateArray }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const updatePost = (obj) => {
    updateArray(obj, index);
  };

  const handleDelete = () => {
    // it will call function from todolist which will delete index of exisiting array
    deletePost(index);
  };
  //managing like functionalities
  const [like, setLike] = useState(false);
  const [countLikes, setCountLikes] = useState(0);
  const handleLikes = () => {
    if (!like) {
      setLike(true);
      setCountLikes(countLikes + 1);
    } else {
      setLike(false);
      setCountLikes(countLikes - 1);
    }
  };

  //managing bookmarks
  const [bookmark, setBookmark] = useState(false);
  const handleBookMark = () => {
    if (!bookmark) {
      setBookmark(true);
    } else {
      setBookmark(false);
    }
  };

  return (
    <div class="card-wrapper mr-5">
      <div class="task-holder">
        <span class="card-header">{postObj.Name}</span>
        <p className="mt-3 card-para">{postObj.Description}</p>

        <div
          style={{
            // position: "absolute",
            position: "sticky",
            // right: "10px",
            // bottom: "20px",
            // margin: "10px",
            // fontSize: "20px",
            // padding: "13px",
          }}
        >
          <i
            class="far fa-edit mr-3 option-button"
            onClick={() => setModal(true)}
          ></i>
          <i class="fas fa-trash-alt option-button" onClick={handleDelete}></i>
          {like ? (
            <AiFillHeart
              className="text-danger option-button"
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={handleLikes}
            />
          ) : (
            <AiOutlineHeart
              className="option-button"
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={handleLikes}
            />
          )}
          <span className="display-likes">{countLikes}</span>
          {bookmark ? (
            <BsBookmarkFill onClick={handleBookMark} />
          ) : (
            <BsBookmark onClick={handleBookMark} />
          )}
        </div>
      </div>
      <EditPost
        modal={modal}
        toggle={toggle}
        updatePost={updatePost}
        postObj={postObj}
      />
    </div>
  );
};

export default Card;
