import React from 'react';
import './HeroSection.css';
import Ima from './HeroSection.webp'

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>
                    Employee Transportation Meets <br />
                    <span className="highlight">Automation Excellence</span>
                </h1>
                <h2>Unveil the Future of Employee Mobility</h2>
                <p>
                    At VEMS, we navigate the future of corporate transportation through 
                    cutting-edge automation solutions. Elevate your workforce's journey with our 
                    innovative services that re-imagine employee transportation.
                </p>
            </div>
            <div className="hero-image">
                <img src={Ima} alt="Employee in transport" />
            </div>
        </section>
    );
}

export default HeroSection;