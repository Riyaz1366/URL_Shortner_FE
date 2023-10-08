import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";

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
      const response = await axios.post(
        "https://reset-password-cnvf.onrender.com/login",
        {
          email: userData.email,

          password: userData.password,
        }
      );
      if (response.status === 200) {
        const token = response.data.token;

        setUserData({
          email: "",
          password: "",
        });

        localStorage.setItem("token", token);
        navigate("/Home");
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
                <strong>
                  <div>
                    <label>Register Here</label>
                    <NavLink to="/register" activeClassName="active">
                      Sign Up
                    </NavLink>
                  </div>
                  <div>
                    <label>Forget Password</label>
                    <NavLink to="/forgetpassword" activeClassName="active">
                     Click Here
                    </NavLink>
                  </div>
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
