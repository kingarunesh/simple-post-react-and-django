import React, { useState } from "react";
import APIService from "../APIService";

const Form = (props) => {
  const [title, setTitle] = useState(props.post.title);
  const [description, setDescription] = useState(props.post.description);

  const updatePost = () => {
    APIService.UpdatePost(props.post.id, { title, description }).then((res) => {
      console.log(res);
    });
  };

  return (
    <React.Fragment>
      <div>
        {props.post ? (
          <div>
            <h1>FORM</h1>
            <div className="col-md-10">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <br />
              <label htmlFor="description" className="form-label">
                Description
              </label>{" "}
              <br />
              <textarea
                id="description"
                rows="5"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <br />
              <button onClick={updatePost} className="btn btn-primary">
                Update
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default Form;
