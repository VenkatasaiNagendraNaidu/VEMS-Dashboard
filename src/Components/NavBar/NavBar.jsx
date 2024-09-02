import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="https://res.cloudinary.com/dlo7urgnj/image/upload/v1724756382/b2blogo_f5tzod.png" alt="Logo" className="logo" />
                <span>VEMS</span>
            </div>
            <div className="navbar-links">
                <a href="/" className="active">Home</a>
                <a href="/contact">Contact Us</a>
                <a href="/client">Client</a>
                <a href="/operator">Admin</a>
            </div>
        </nav>
    );
}

export default Navbar;