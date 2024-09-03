import React from 'react';
import './EmployeeTransportService.css'; // Import the CSS file

const EmployeeTransportService = () => {
  return (
    <div className="employee-transport-container">
      <div className="ets-content">
        {/* <img src="vmroutes-logo.png" alt="VM Routes Logo" className="logo" /> */}
        <h1>
          <span className="highlight">Employee</span> Transport Service
        </h1>
        <p className="subtitle">Revolutionize Your Corporate Transport with VEMS</p>
        <p className="description">
          VEMS  is an intuitive software solution designed to streamline and simplify corporate transportation.
          From managing drivers and vehicles to optimizing routes and providing live tracking, it's your all-in-one
          platform for efficient and hassle-free employee travel.
        </p>
        <div className="buttons">
          <button className="contact-button">Contact Us</button>
        </div>
      </div>
      <div className="images">
        <img src="https://res.cloudinary.com/dlo7urgnj/image/upload/v1725260767/empimg_vyuadk.png" alt="Employee 2" className="employee-image" />
      </div>
    </div>
  );
};

export default EmployeeTransportService;