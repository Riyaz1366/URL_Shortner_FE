import React, { useState } from 'react';
import axios from 'axios';
import './forget.css'; 

import { useNavigate } from 'react-router';


function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');



  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/forgot-password',{
        email:email,
      });
console.log(response)
      if (response.status === 200) {
        alert('Temptoken Send to your Email');
        // history.push('/reset-password'); 
        navigate("/reset-password");
      } else {
        setMessage(response.data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Something went wrong.');
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter your email address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default ForgotPassword;