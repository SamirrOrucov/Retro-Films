import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../AdminComments.scss";

function AdminCommentsDetail({ onFetchCommentsLength }) {
  const { id } = useParams();
  const [filmComments, setfilmComments] = useState([]);
  console.log(filmComments);
  async function fetchComments(e) {
    try {
      const response = await fetch(
        "http://localhost:3003/film/filmWithComment/" + id
      );
      const data = await response.json();
      setfilmComments(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    fetchComments();
  }, []);
  async function handleDelete() {
    await fetch("http://localhost:3003/comment/" + id, {
      method: "DELETE",
      body: JSON.stringify({
        userId: "aaa",
        filmId: id,
      }),
    });
    await fetchComments();
  }
  return (
    <div className="adminComments">
      <div className="adminComments_container">
        <table>
          <thead>
            <tr>
              <th>Comment</th>
              <th>User</th>
              <th>Post Time</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {filmComments.map((item) => (
              <tr key={item._id}>
                <td>{item.content}</td>
                <td>{item.userId.nickName} </td>
                <td>{item?.createdAt}</td>
                <td>
                  <button onClick={() => handleDelete()}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminCommentsDetail;
