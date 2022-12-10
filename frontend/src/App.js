import React, { useState, useEffect } from "react";
import "./App.css";
import PostList from "./components/PostList";
import Form from "./components/Form";

function App() {
  const [posts, setPosts] = useState([]);
  const [updatePost, setUpdatePost] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 3d19191fed162709799a684104eda11498965405",
      },
    })
      .then((response) => response.json())
      .then((response) => setPosts(response))
      .catch((error) => console.log(error));
  }, []);

  const editPost = (post) => {
    setUpdatePost(post);
  };

  return (
    <div className="App">
      <h2>ReactJS and Django</h2>
      <br />

      <PostList posts={posts} editPost={editPost} />

      <Form post={updatePost} />
    </div>
  );
}

export default App;
