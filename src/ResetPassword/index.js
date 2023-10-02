import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router";

function ResetPassword() {
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://reset-password-cnvf.onrender.com/reset-password",
        {
          token,
          newPassword,
        }
      );

      if (response.status === 200) {
        alert("Password reset successfully");
        navigate("/");
      } else {
        setMessage(response.data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong.");
    }
  };

  return (
    <div>
      <h2 className="mb-4">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="tempToken" className="form-label">
            Enter Temporary Token:
          </label>
          <input
            type="text"
            id="tempToken"
            className="form-control"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">
            Enter New Password:
          </label>
          <input
            type="password"
            id="newPassword"
            className="form-control"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ResetPassword;
