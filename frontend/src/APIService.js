export default class APIService {
  static UpdatePost(post_id, body, token) {
    return fetch(`http://127.0.0.1:8000/api/articles/${post_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }

  static CreateNewPost(body, token) {
    return fetch(`http://127.0.0.1:8000/api/articles/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }

  static DeletePost(post_id, token) {
    return fetch(`http://127.0.0.1:8000/api/articles/${post_id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
  }

  static LoginUser(body) {
    return fetch(`http://127.0.0.1:8000/auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }

  static RegisterUser(body) {
    return fetch(`http://127.0.0.1:8000/api/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }
}
