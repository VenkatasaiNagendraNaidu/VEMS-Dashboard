import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom'; 


const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          {/* <img src="logo.png" alt="VEMS Logo" /> */}
          <h3>VEMS</h3>
        </div>

        <div className="login-title">
          <span>Register</span>
        </div>

        <form className="login-form">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="email@example.com" required />

          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={passwordShown ? 'text' : 'password'}
              id="password"
              placeholder="Enter Password"
              required
            />
            {/* <span className="toggle-password" onClick={togglePasswordVisibility}>
              {passwordShown ? '🙈' : '👁️'}
            </span> */}
          </div>

          <button type="submit" className="login-btn">
            Register
          </button>
        </form>
        <div className="register">
          <p>Already have an account? <Link to="/login">Login here</Link></p> 
        </div>

        
      </div>
    </div>
  );
};

export default Login;
