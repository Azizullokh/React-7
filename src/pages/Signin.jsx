import React, { useState } from "react";
import "../assets/styles/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate()

  function validate() {
    
    if (username.length < 1) {
        setError('🛂 This username is not possible')
        return false
    }
    setError("");
    return true;
  }

  function Button() {
    navigate('/')
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return;
    }
    const user = {
      username: username,
      password: password,
    };
    setLoading(true)
    axios
      .post(`https://auth-rg69.onrender.com/api/auth/signin`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        
        if (response.status == 200) {
            localStorage.setItem('user', JSON.stringify(response.data));
            localStorage.setItem('token' , response.data.accessToken)
          setTimeout(() => {
            navigate('/home')
          }, 500);
          console.log(response);
        }
      })
      .catch((error) => {
        if (error.response) {
          const { status} = error.response;
          if (status == 401) {
            setError("🛂 Invalid password");setLoading(false)
          } 
          if (status == 404) {
            setError('🛂 User not found')
          }
          setLoading(false)
        } 
      })
  }

  return (
    <div className="signin">
      <form className="signin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="signin-error">{error}</p>}
        
        <button type="submit" className="signin-btn">
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        <button className="signin-btn-2" onClick={Button} >Go Back</button>
      </form>
    </div>
  );
}

export default Signin;
