import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const CreatePost = ({ modal, toggle, save }) => {
  const [postName, setPostName] = useState(""); //to store the post name
  const [description, setDescription] = useState(""); //to store description

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "postName") setPostName(value);
    else setDescription(value);
  };

  const handleSave = () => {
    let postObject = {};
    postObject["Name"] = postName;
    postObject["Description"] = description;
    save(postObject);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add name for your board</ModalHeader>
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
          <Button color="primary" onClick={handleSave}>
            Publish
          </Button>{" "}
          {/* <Button color="secondary" onClick={toggle}>
            Cancel
          </Button> */}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreatePost;
