import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom'; 
import Modal from 'react-modal';
import { FaCheckCircle } from 'react-icons/fa'; 
import { AiOutlineClose } from 'react-icons/ai';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '10px',
    width: '400px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent overlay
  },
};

Modal.setAppElement('#root');
const Login = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Function to open modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <div className='RegisterLogo'>
          <img src="https://res.cloudinary.com/dlo7urgnj/image/upload/v1727276496/vemslogo_rsa3cx.png" alt="VEMS Logo" />
          </div>
          {/* <h3>TRAVELLO</h3> */}
        </div>

        <div className="login-title">
          <span>Admin Register</span>
        </div>

        <form className="login-form">
          
        <label htmlFor="Name">Name</label>
          <input type="name" id="name" placeholder="Enter Your Name" required />
          
          <label htmlFor="Phone Number">Phone Number</label>
          <input type="number" id="phno" placeholder="+91XXXXXXXXXX" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="example@email.com" required />


          {/* <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={passwordShown ? 'text' : 'password'}
              id="password"
              placeholder="Enter Password"
              required
            />
          </div> */}

          <button type="submit" className="login-btn" onClick={openModal}>
            Register
          </button>
        </form>
        <div className="register">
          <p>Already have an account? <Link to="/login">Login here</Link></p> 
        </div>

        
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Registration Success Modal"
      >
        <p>
          Your details have been successfully shared with the admin team, and
          the response will be shared to your email ASAP.
        </p>
        <button className="close-popup-btn" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Login;
