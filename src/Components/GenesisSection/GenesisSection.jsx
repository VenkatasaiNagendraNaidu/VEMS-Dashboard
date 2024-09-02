import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import './GenesisSection.css';
import Rocket from '../GenesisSection/rocket.png'
import Group from '../GenesisSection/group.jpg'
import Plant from '../GenesisSection/Plant.jpg'
import Tick from '../GenesisSection/Tick.jpg'

const GenesisSection = () => {
    const carouselData = [
        {
            image: 'https://res.cloudinary.com/dlo7urgnj/image/upload/v1724663475/logo_xd5tyb.jpg',
            title: 'Born in a Studio',
            subtitle: 'Not in an Office..!',
            description: `VM Routes is one of our finest products born in our VirtualMaze studio not 
                          in our office. Designed by eminent team and developed by stalwarts of techies.`
        },
        {
            image: {Rocket},
            title: 'Born in a Studio',
            subtitle: 'Not in an Office..!',
            description: `VM Routes is one of our finest products born in our VirtualMaze studio not 
                          in our office. Designed by eminent team and developed by stalwarts of techies.`
        },
        {
            image: {Rocket},
            title: 'Born in a Studio',
            subtitle: 'Not in an Office..!',
            description: `VM Routes is one of our finest products born in our VirtualMaze studio not 
                          in our office. Designed by eminent team and developed by stalwarts of techies.`
        }
    ];

    return (
        <>
        <section className="genesis-section">
            <div className="genesis-header">
                <h1><span className="highlight">The</span> Genesis</h1>
                <p>Automation streamlines trip scheduling, ensuring precision and accuracy in pick-ups and drop-offs. Say goodbye to guesswork and hello to a well-organized transportation system.</p>
            </div>
            <Carousel 
                showThumbs={false} 
                showStatus={false} 
                autoPlay 
                infiniteLoop 
                className="genesis-carousel"
            >
                {carouselData.map((item, index) => (
                    <div className="carousel-item" key={index}>
                        <div className="carousel-image">
                            <img style={{height:"204px",width:"264px"}} src={item.image} alt="Carousel" />
                        </div>
                        <div className="carousel-content">
                            <h2>{item.title}</h2>
                            <h3>{item.subtitle}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>

        <section className="why-vm-routes">
      <h2 className="why-title">Why VM Routes?</h2>
      <div className="why-cards">
        <div className="why-card">
          <div className="icon-wrapper">
            <img src={Tick} alt="Icon 1" />
          </div>
          <h3>Recognizing and Reducing Risks</h3>
          <p>
            Manual procedures provide only a limited opportunity for the team to guarantee their employees' safety.
          </p>
        </div>
        <div className="why-card">
          <div className="icon-wrapper">
            <img src={Plant} alt="Icon 2" />
          </div>
          <h3>Enhancing Environmental, Social, and Governance (ESG) Adherence</h3>
          <p>
            Lower carbon emissions by opting for shared vehicle commuting and embracing electric vehicle (EV) adoption.
          </p>
        </div>
        <div className="why-card">
          <div className="icon-wrapper">
            <img src={Group} alt="Icon 3" />
          </div>
          <h3>Enhancing Employee Contentment</h3>
          <p>
            Guaranteeing employee satisfaction during their commute to work remains a universal challenge.
          </p>
        </div>
      </div>
    </section>
    </>
    );
}

export default GenesisSection;