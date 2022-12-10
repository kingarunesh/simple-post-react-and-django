export default class APIService {
  static UpdatePost(post_id, body) {
    return fetch(`http://127.0.0.1:8000/api/articles/${post_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 3d19191fed162709799a684104eda11498965405",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }

  static CreateNewPost(body) {
    return fetch(`http://127.0.0.1:8000/api/articles/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 3d19191fed162709799a684104eda11498965405",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }

  static DeletePost(post_id) {
    return fetch(`http://127.0.0.1:8000/api/articles/${post_id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 3d19191fed162709799a684104eda11498965405",
      },
    });
  }
}
