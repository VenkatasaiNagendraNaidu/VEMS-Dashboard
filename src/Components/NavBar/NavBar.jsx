import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="https://res.cloudinary.com/dlo7urgnj/image/upload/v1727276496/vemslogo_rsa3cx.png" alt="Logo" className="logo" />
                {/* <span style={{fontSize:"23px"}}>VEMS</span> */}
            </div>
            <div className="navbar-links">
                <a href="/" className="active">About</a>
                <a href="/">Services</a>
                <a href="/">Features</a>
                <a href="/login" style={{border:"1px solid blue",padding:"10px",marginRight:"10px",borderRadius:"10px",boxShadow:"2px 2px 5px lightblue"}}>Admin Register/Login</a>
            </div>
        </nav>
    );
}

export default Navbar;