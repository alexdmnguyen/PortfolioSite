import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Work from './Work';

const Home = () => {
  const resumeFileUrl = "/images/alex-nguyen-resume.pdf"; // Replace with the actual path to your resume file

  const openResumeInNewTab = () => {
    window.open(resumeFileUrl, '_blank');
  };

  useEffect(() => {
    const video = document.getElementById('background-video');

    // Fade out the video when it ends
    video.addEventListener('ended', fadeOutVideo);

    // Disable scrolling when the video starts playing
    showVideoOverlay();

    return () => {
      video.removeEventListener('ended', fadeOutVideo);
    };
  }, []);

  const fadeOutVideo = () => {
    const video = document.getElementById('background-video');
    const overlay = document.getElementById('video-overlay');

    overlay.classList.add('fade-out');

    setTimeout(() => {
      video.pause(); // Pause the video
    }, 1000); // Adjust the timeout to match the duration of the transition

    // Remove the video overlay from the DOM
    overlay.parentNode.removeChild(overlay);

    // Re-enable scrolling and interaction
    hideVideoOverlay();
  };

  const showVideoOverlay = () => {
    const body = document.querySelector('body');
    body.classList.add('no-scroll'); // Add class to disable scrolling
    body.style.pointerEvents = 'none'; // Disable pointer events on the body
  };

  const hideVideoOverlay = () => {
    const body = document.querySelector('body');
    body.classList.remove('no-scroll'); // Remove class to enable scrolling
    body.style.pointerEvents = 'auto'; // Re-enable pointer events on the body
  };

  return (
    <div>
      {/* Video Overlay */}
      <div id="video-overlay">
        <video id="background-video" autoPlay muted>
          <source src="/images/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="content">
        {/* Introduction Section */}
        <section className="home" id="home">
          <div className="home-content">
            <div className="image-container">
              <img src="/images/alexcircle.png" alt="Alex Nguyen" className="profile-image" />
            </div>
            <div className="text-container">
              <h1>Hi. I'm Alex Nguyen.</h1>
              <p>Software Engineer</p>
              <button onClick={openResumeInNewTab} className="btn">
                Resume
              </button>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="home-content">
            <div className="left-text-container">
              <h1 className="header-text">~ About ~</h1>
              <p>Thank you for stopping by. I hope you enjoy your visit.</p>
            </div>
            <div className="text-container">
              <p>I am a recent graduate from the University of California,
                Santa Cruz, holding a Bachelor of Science degree in Computer Science:
                Game Design. My passion lies in crafting innovative 
                web applications and engaging game experiences. Armed with a 
                strong foundation in computer science, I am dedicated to merging 
                creativity with technology.</p>
            </div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="projects">
          <div className="projects-header">
            <h1 className="header-text">~ Projects ~</h1>
          </div>
  
          {/* Project Grid */}
          <div className="whole-project-grid">
            <div className="project-grid">
  
              <div className="project-box">
                <img src="/images/manifestival_poster - Copy.png" alt="Project 1" />
              </div>
  
              <div className="gif-box">
                <ul>
                  <li>
                    <img src="/images/manifestival-logo.png" alt="Project 2" className="project-logo" />
                  </li>
                  <li>
                    <div className="gif-box">
                      <ul className="project-overlay">
                        <li className="overlay-text">
                          <p>
                            Manifestival utilizes the Spotify API to craft personalized 
                            festival posters and showcase users' top artists over specific time frames,
                            along with detailed lists of their top songs and artists. 
                          </p>
                          <div className="overlay-buttons">
                            <a href="link-to-button-1" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="link-to-button-2" target="_blank" rel="noopener noreferrer">Demo</a>
                          </div>
                        </li>
                      </ul>
                      <img src="/images/manifestival.gif" alt="Project 1 Gif" className="project-gif" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
  
            <div className="project-description">
              <h1>- Technologies Used -</h1>
  
              <div className="tech-box" id="box1">
                <img src="/images/HTML.png" alt="HTML Icon"/>
                <p>HTML</p>
              </div>
  
              <div className="tech-box" id="box2">
                <img src="/images/CSS.png" alt="CSS Icon"/>
                <p>CSS</p>
              </div>
  
              <div className="tech-box" id="box3">
                <img src="/images/JavaScript.png" alt="JavaScript Icon"/>
                <p>JavaScript</p>
              </div>
  
              <div className="tech-box" id="box4">
                <img src="/images/React.png" alt="React Icon"/>
                <p>React</p>
              </div>
            </div>
  
          </div>
  
  
          <div className="final-project-grid">
            <div className="project-grid">
  
              <div className="project-box">
                <img src="/images/onlycapys_poster.png" alt="Project 1" />
              </div>
  
              <div className="gif-box">
                <ul>
                  <li>
                    <img src="/images/onlycapys_logo.png" alt="Project 2" className="project-logo" />
                  </li>
                  <li>
                    <div className="gif-box">
                      <ul className="project-overlay">
                        <li className="overlay-text">
                          <p>Your Project Description Here</p>
                          <div className="overlay-buttons">
                            <a href="link-to-button-1" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="link-to-button-2" target="_blank" rel="noopener noreferrer">Demo</a>
                          </div>
                        </li>
                      </ul>
                      <img src="/images/manifestival.gif" alt="Project 1 Gif" className="project-gif" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
  
            <div className="project-description">
              <h1>- Technologies Used -</h1>
  
              <div className="tech-box" id="box1">
                <img src="/images/HTML.png" alt="HTML Icon"/>
                <p>HTML</p>
              </div>
  
              <div className="tech-box" id="box2">
                <img src="/images/CSS.png" alt="CSS Icon"/>
                <p>CSS</p>
              </div>
  
              <div className="tech-box" id="box3">
                <img src="/images/JavaScript.png" alt="JavaScript Icon"/>
                <p>JavaScript</p>
              </div>
  
              <div className="tech-box" id="box4">
                <img src="/images/React.png" alt="React Icon"/>
                <p>React</p>
              </div>
  
              <div className="tech-box" id="box5">
                <img src="/images/vue.png" alt="Vue Icon"/>
                <p>Vue</p>
              </div>
  
              <div className="tech-box" id="box6">
                <img src="/images/bulma.png" alt="Bulma Icon"/>
                <p>Bulma</p>
              </div>
  
              <div className="tech-box" id="box7">
                <img src="/images/py4web.png" alt="py4web Icon"/>
                <p>py4web</p>
              </div>
            </div>
  
          </div>
  
          {/* <div className="final-project-grid">
            <div className="project-grid">
  
              <div className="project-box">
                <img src="/images/future-in-flames.jpg" alt="Project 1" />
              </div>
  
              <div className="gif-box">
                <ul>
                  <li>
                    <img src="/images/future-in-flames-logo.jpg" alt="Project 2" className="project-logo" />
                  </li>
                  <li>
                    <img src="/images/manifestival.gif" alt="Project 1 Gif" className='project-gif'/>
                  </li>
                </ul>
              </div>
            </div>
  
            <div className="project-description">
              <h1>- Technologies Used -</h1>
  
              <div className="tech-box" id="box1">
                <img src="/images/HTML.png" alt="HTML Icon"/>
                <p>HTML</p>
              </div>
  
              <div className="tech-box" id="box2">
                <img src="/images/CSS.png" alt="CSS Icon"/>
                <p>CSS</p>
              </div>
  
              <div className="tech-box" id="box3">
                <img src="/images/JavaScript.png" alt="JavaScript Icon"/>
                <p>JavaScript</p>
              </div>
  
              <div className="tech-box" id="box4">
                <img src="/images/React.png" alt="React Icon"/>
                <p>React</p>
              </div>
  
              <div className="tech-box" id="box5">
                <img src="/images/vue.png" alt="Vue Icon"/>
                <p>Vue</p>
              </div>
  
              <div className="tech-box" id="box6">
                <img src="/images/bulma.png" alt="Bulma Icon"/>
                <p>Bulma</p>
              </div>
  
              <div className="tech-box" id="box7">
                <img src="/images/py4web.png" alt="py4web Icon"/>
                <p>py4web</p>
              </div>
            </div>
  
          </div> */}
        </section>

        <section className="footer" id="footer">
          <div class="footer-content">
            <div className="footer-text-container">
              <p className="footer-top-text">Let's keep in touch.</p>
              <h1 className="header-text">~ Contact Me ~</h1>
              <h2 className="footer-text">I'm always ecstatic to collaborate
              as well as develop new projects 
              and ideas. Whether you're looking for a website, application, 
              game, or simply want to 
              discuss technology, feel free to reach out. Every message is important 
              to me, and I'll get back to you as soon as possible.
              </h2>
            </div>
            <div className="footer-logo-container">
              <img src="/images/alexcircle.png" alt="Logo" className="footer-logo" />
            </div>
            <Link to="mailto:alexdmnguyen@gmail.com" className="footer-btn">
              <strong>alexdmnguyen@gmail.com</strong>
            </Link>
            <p className="footer-final-text">Thanks for visiting!</p>
            <div className="socials-footer">
              <a href="https://www.linkedin.com/in/alexander-dm-nguyen/" target="_blank" rel="noopener noreferrer" className="socials-item">
                <img src="/images/linkedin-white.png" alt="LinkedIn" className="social-media-icon" />
              </a>
              <a href="mailto:alexdmnguyen@gmail.com" className="socials-item">
                <img src="/images/email-white.png" alt="Email" className="social-media-icon" />
              </a>
              <a href="https://github.com/anguy243" target="_blank" rel="noopener noreferrer" className="socials-item">
                <img src="/images/github-white.png" alt="GitHub" className="social-media-icon" />
              </a>
              <div className="socials-item" id="box3">
                <img src="/images/resume-white.png" onClick={openResumeInNewTab} alt="Resume" className="social-media-icon" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
