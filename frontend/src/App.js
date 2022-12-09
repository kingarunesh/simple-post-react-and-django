import React, { useState, useEffect } from "react";
import "./App.css";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([]);

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

  return (
    <div className="App">
      <h2>ReactJS and Django</h2>

      <PostList />
    </div>
  );
}

export default App;
