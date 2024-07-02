// components/Work.js
import React from 'react';
import './Work.css'; // Import the corresponding CSS file

const Work = () => {
  return (
    <section className="work" id="work">
      <div className="about-text">
        <h3>Work</h3>
        <p>I have an affection for creating products that present users with a</p>
        <p>pleasurable interactive experience online. Developing software, games,</p>
        <p>and apps are my passion. Feel free to continue and view my work.</p>
      </div>

      {/* <div className="gif">
        <img src="images/manifestival_poster.png" className="still-image" alt="Still Image" />
        <img src="images/manifestival.gif" className="gif-image" alt="GIF animation" />
      </div> */}
    </section>
  );
};

export default Work;
