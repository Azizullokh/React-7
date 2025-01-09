import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/styles/blog.css";
import { Link, useNavigate } from "react-router-dom";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate("");

  function btn() {
    navigate("/home");
  }

  useEffect(() => {
    async function getblogs() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Try again leter , error");
      }
    }

    getblogs();
  }, []);

  return (
    <div className="blog">
      <button className="blog-go" onClick={btn}>
        Go Back
      </button>{" "}
      {loading && <p>Loading...</p>}
      <ul>
        {blogs.length > 0 &&
          blogs.map((blog) => {
            return (
              <li key={blog.id}>
                <h2 className="blog-title">
                  Title: <span>{blog.title}</span>
                </h2>
                {error && <p>{error}</p>}
                <div className="two-buttons">
                  <Link className="blog-link" to={`/posts/${blog.id}`}>
                    Details
                  </Link>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
export default Blogs;
