// About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="video-container">
        {/* <video autoPlay loop muted playsInline className="video">
          <source src="images/lukechris.mp4" type="video/mp4" />
        </video> */}
        <div className="video-overlay"></div>
      </div>

      <div className="about-content">
        <h1>I'm Alex Nguyen, nice to meet you!</h1>
        <p>
          I have an affection for creating products that present users with a pleasurable interactive experience online. Developing software, games, and apps are my passion.
        </p>
      </div>
    </section>
  );
};

export default About;
