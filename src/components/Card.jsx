import React from "react";
import "../styles/Card.css";
// import { AiOutlineEdit } from "react-icons/ai";
const Card = ({ Name, Description, index, deletePost }) => {
  const handleDelete = () => {
    // it will call function from todolist which will delete index of exisiting array
    deletePost(index);
  };
  return (
    <div class="card-wrapper mr-5">
      <div class="task-holder">
        <span class="card-header">{Name}</span>
        <p className="mt-3">{Description}</p>

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
            // onClick={() => setModal(true)}
          ></i>
          <i class="fas fa-trash-alt option-button" onClick={handleDelete}></i>
        </div>
      </div>
      {/* <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      /> */}
    </div>
  );
};

export default Card;
