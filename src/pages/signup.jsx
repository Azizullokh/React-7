import React, { useState } from "react";
import "../assets/styles/Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate()

  function validate() {
    if (password != confirm) {
      setError("🛂 Passwords did not match");
      return false;
    }
    if (username.length < 2) {
        setError('🛂 This username is too short')
        return false
    }
    if (!email.endsWith('@gmail.com')) {
        setError('🛂 email format,for example "@gmail.com"')
        return false
    }
    if (password.length < 6) {
        setError('🛂 the password must contain at least 5 digits')
        return false
    }
    setError("");
    return true;
  }
  const Button = () => {
    navigate('/login');
  };


  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return;
    }
    const user = {
      username: username,
      email: email,
      password: password,
    };
    setLoading(true)
    axios
      .post(`https://auth-rg69.onrender.com/api/auth/signup`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          setError("✨ User registered successfully!");
          setTimeout(() => {
            navigate('/home')
          }, 1500);
        }
      })
      .catch((error) => {
        if (error.response) {
          const { status} = error.response;
          if (status === 400) {
            setError("🛂 Failed , Username or email are already in use!");
          } else if (status === 502) {
            setError("🛂 Something went wrong, try again later.");
          }  setLoading(false)
        } 
      })
  }

  return (
    <div className="signup">
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        {error && <p className="signup-error">{error}</p>}
        <button className="signup-btn-2" onClick={Button} >Already have an account?</button>
        <button type="submit" className="signup-btn">
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}

export default Signup;
