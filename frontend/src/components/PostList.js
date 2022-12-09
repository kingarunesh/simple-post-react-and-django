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
              </div>
              <hr />
            </div>
          );
        })}
    </React.Fragment>
  );
};

export default PostList;
