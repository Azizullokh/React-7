import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import '../assets/styles/post.css'

function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getdetalis() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        setError("Loading failed , try again letter");
        setLoading(false);
      }
    }
    getdetalis()
  }, [id]);

  return <div className="post">
    <h2 className="word">Details of the selected Blog</h2>
{loading && <p>Loading...</p>}
{error && <p>{error}</p>}
{blog && (
        <div className="details-info">
            <p>UserID: <span>{blog.userId}</span></p>
            <p>ID: <span>{blog.id}</span></p>
          <p>Title: <span>{blog.title}</span></p>
          <p>Body: <span>{blog.body}</span></p>
          <button className="button-post" onClick={() => navigate(-1)}>Go Back</button>
        </div>
      )}
  </div>;
}

export default Post;
