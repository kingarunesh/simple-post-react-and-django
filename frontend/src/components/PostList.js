import React from "react";

const PostList = (props) => {
  return (
    <React.Fragment>
      {props.posts &&
        props.posts.map((post) => {
          return (
            <div>
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>

                <div className="row">
                  <div className="col-md-1">
                    <button className="btn btn-info">Update</button>
                  </div>

                  <div className="col-md-1">
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
    </React.Fragment>
  );
};

export default PostList;
