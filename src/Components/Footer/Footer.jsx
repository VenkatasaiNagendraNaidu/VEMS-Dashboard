import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import './Footer.css';
import { IoMdCall,IoIosMail } from "react-icons/io";

const Footer = () => {
    return (
        <>
        <div className="footer-container">
            <div style={{width:"25%"}} className="footer-section">
                <img src="" alt="VEMS" className="footer-logo" />
                <p>1ST Floor ,The Hive,SRP Stradford,Rajiv Gandhi Salai,PTK-Nagar,Chennai - 600 016</p>
                <p style={{ display: 'flex', alignItems: 'center' }}><IoMdCall /> &nbsp; +91 90921 90321</p>
                <p style={{ display: 'flex', alignItems: 'center' }}><IoIosMail /> &nbsp; vtsenterprises@gmail.com</p>
            </div>
            <div className="footer-section">
                <h4>Legal</h4>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
            </div>
            <div className="footer-section">
                <h4>Help</h4>
                <p>Contact Us</p>
                <div className="footer-icons">
                <a href="">
                    <FaLinkedin />
                    </a> 
                <a style={{height:"100px",width:"100px"}} href="">
                <FaFacebookSquare />
                </a>
                </div>
            </div>
            {/* <div className="footer-section">
                <h4>Security</h4>
                <img src="https.png" alt="HTTPS" className="security-icon" />
            </div> */}
        </div>
            <div className="footer-bottom">
                <p>Copyright © 2024. VTS Enterprises India Private Limited</p>
            </div>
        </>
    );
};

export default Footer;
