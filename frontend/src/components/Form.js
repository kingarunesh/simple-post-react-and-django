import React from "react";

const Form = (props) => {
  return (
    <React.Fragment>
      <div>
        {props.post ? (
          <div>
            <h1>FORM</h1>
            <div className="col-md-5">
              <label for="title" className="form-label">
                Title
              </label>
              <input type="text" id="title" className="form-control" />
              <br />
              <label for="description" className="form-label">
                Description
              </label>{" "}
              <br />
              <textarea
                id="description"
                rows="5"
                className="form-control"
              ></textarea>
              <br />
              <button className="btn btn-primary">Update</button>
            </div>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default Form;
