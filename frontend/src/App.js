import React, { useState, useEffect } from "react";
import "./App.css";
import PostList from "./components/PostList";
import Form from "./components/Form";
import { useCookies } from "react-cookie";

function App() {
  const [posts, setPosts] = useState([]);
  const [updatePost, setUpdatePost] = useState(null);
  const [token] = useCookies(["mytoken"]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token["mytoken"]}`,
      },
    })
      .then((response) => response.json())
      .then((response) => setPosts(response))
      .catch((error) => console.log(error));
  }, []);

  const editPost = (post) => {
    setUpdatePost(post);
  };

  const updateInformation = (post) => {
    const newPost = posts.map((mypost) => {
      if (mypost.id === post.id) {
        return post;
      } else {
        return mypost;
      }
    });

    setPosts(newPost);
  };

  const createPostForm = () => {
    setUpdatePost({ title: "", description: "" });
  };

  const insertInformation = (post) => {
    setPosts([...posts, post]);
  };

  const deleteBtn = (post) => {
    const newPostList = posts.filter((mypost) => {
      if (mypost.id === post.id) {
        return false;
      }
      return true;
    });

    setPosts(newPostList);
  };

  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <h2>ReactJS and Django</h2>
        </div>

        <div className="col">
          <button className="btn btn-primary" onClick={createPostForm}>
            Create Post
          </button>
        </div>
      </div>

      <br />

      <PostList posts={posts} editPost={editPost} deleteBtn={deleteBtn} />

      {updatePost ? (
        <Form
          post={updatePost}
          updateInformation={updateInformation}
          insertInformation={insertInformation}
        />
      ) : null}
    </div>
  );
}

export default App;
