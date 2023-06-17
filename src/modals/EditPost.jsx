import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const EditPost = ({ modal, toggle, updatePost, postObj }) => {
  const [postName, setPostName] = useState(""); //to store the post name
  const [description, setDescription] = useState(""); //to store description

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "postName") setPostName(value);
    else setDescription(value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    let tempObject = {};
    tempObject["Name"] = postName;
    tempObject["Description"] = description;
    updatePost(tempObject);
  };
  useEffect(() => {
    setPostName(postObj.Name);
    setDescription(postObj.Description);
  }, []);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update your board</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label htmlFor="">Subject</label>
              <input
                type="text"
                className="form-control"
                value={postName}
                onChange={handleChange} //on writing anything in input
                name="postName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">What's on your mind?</label>
              <textarea
                type="text"
                rows="5"
                className="form-control"
                value={description}
                onChange={handleChange} //on writing anything on textarea
                name="description"
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>
            Update
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditPost;
