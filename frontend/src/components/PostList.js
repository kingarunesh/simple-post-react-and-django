import React from "react";
import APIService from "../APIService";
import { useCookies } from "react-cookie";

const PostList = (props) => {
  const [token] = useCookies(["mytoken"]);

  const editPost = (post) => {
    props.editPost(post);
  };

  const deleteBtn = (post) => {
    APIService.DeletePost(post.id, token["mytoken"]).then(() =>
      props.deleteBtn(post)
    );
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
                  <button
                    onClick={() => deleteBtn(post)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
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
