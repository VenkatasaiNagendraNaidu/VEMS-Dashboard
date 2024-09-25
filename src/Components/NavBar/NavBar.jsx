import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="https://res.cloudinary.com/dlo7urgnj/image/upload/v1724663475/logo_xd5tyb.jpg" alt="Logo" className="logo" />
                <span>VEMS</span>
            </div>
            <div className="navbar-links">
                {/* <a href="/" className="active">Home</a> */}
                {/* <a href="/">Contact Us</a> */}
                {/* <a href="/login">Admin</a> */}
                <a href="/login" style={{border:"1px solid blue",padding:"10px",borderRadius:"10px",boxShadow:"2px 2px 5px lightblue"}}>Client Register/Login</a>
            </div>
        </nav>
    );
}

export default Navbar;