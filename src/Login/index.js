import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [userData, setUserData] = useState({
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

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://authentication-bk.onrender.com/login", {
        email: userData.email,

        password: userData.password,
      });
      if (response.status === 200) {
        const token = response.data.token;

        setUserData({
          email: "",
          password: "",
        });

        localStorage.setItem("token", token);
        navigate("/page");
      } else {
        alert("Login Failed: Unauthorized");
      }
    } catch (error) {
      alert("Login Failed: Invalid Username and Password");

      setUserData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="background">
      {/* Background image */}
      <div className="form-container">
        <h1 className="white-text text-center">Login</h1>
        <form onSubmit={handleLogin} className="container mt-8">
          <div className="mb-3">
            <label className="white-text" htmlFor="email">
              Email Id:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <div className="mb-3">
            <label className="white-text" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-sm">
              Login
            </button>
            <div>
              <p className="forgot-password text-right">
                Click Here to Register
                <strong>
                  <a
                    href="/register"
                    className="text-primary"
                    id="sign-in-link"
                  >
                    Sign up
                  </a>
                </strong>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
