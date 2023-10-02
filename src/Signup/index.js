import React, { useState } from "react";
import "./register.css"; 
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = userData;
    axios
      .post("http://localhost:3002/users", { username, email, password })
      .then((result) => console.log(result)
    
      )
      .catch((err) => console.log(err));
      navigate('/')


   
  };

  return (
    <div className="background">
      
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="container mt-8" >
          <div className="mb-3">
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={userData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
         <div>
         <p className="forgot-password text-right">
  Already registered <strong><a href="/" className="text-primary" id="sign-in-link">Sign In</a></strong>
</p></div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
