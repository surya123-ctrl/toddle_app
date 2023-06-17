import React, { useState } from "react";
import "../styles/Card.css";
import EditPost from "../modals/EditPost";
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
  return (
    <div class="card-wrapper mr-5">
      <div class="task-holder">
        <span class="card-header">{postObj.Name}</span>
        <p className="mt-3 card-para">{postObj.Description}</p>

        <div
          style={{
            position: "absolute",
            right: "20px",
            bottom: "20px",
            margin: "10px",
          }}
        >
          <i
            class="far fa-edit mr-3 option-button"
            onClick={() => setModal(true)}
          ></i>
          <i class="fas fa-trash-alt option-button" onClick={handleDelete}></i>
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
