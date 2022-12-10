import React from "react";

const PostList = (props) => {
  const editPost = (post) => {
    props.editPost(post);
  };

  return (
    <React.Fragment>
      {props.posts &&
        props.posts.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>

              <div className="row">
                <div className="col-md-1">
                  <button
                    className="btn btn-info"
                    onClick={() => editPost(post)}
                  >
                    Update
                  </button>
                </div>

                <div className="col-md-1">
                  <button className="btn btn-danger">Delete</button>
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
