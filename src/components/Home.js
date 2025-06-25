import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Work from './Work';

const Home = () => {
  const resumeFileUrl = "/images/alexnguyen-resume.pdf";

  const openResumeInNewTab = () => {
    window.open(resumeFileUrl, '_blank');
  };



  return (
    <div>
      {/* 
        <div id="video-overlay">
          <video id="background-video" autoPlay muted>
            <source src="/images/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        */}


      <div className="content">
        {/* Introduction Section */}
        <section class="home" id="home">
          <div class="home-content">
            <div class="image-container">
              <img src="/images/alexcircle.png" alt="Alex Nguyen" class="profile-image" />
            </div>
            <div class="text-container">
              <h1 class="name-line">
                Hi, I'm&nbsp;
                <span class="name-image-wrapper">
                  <img src="/images/anguy1.png" class="name-image" />
                  <img src="/images/anguy2.png" class="name-image" />
                  <img src="/images/anguy3.png" class="name-image" />
                  <img src="/images/anguy4.png" class="name-image" />
                  <img src="/images/anguy5.png" class="name-image" />
                  <img src="/images/anguy6.png" class="name-image" />
                  <img src="/images/anguy7.png" class="name-image" />
                  <img src="/images/anguy8.png" class="name-image" />
                  <img src="/images/anguy9.png" class="name-image" />
                  <img src="/images/anguy10.png" class="name-image" />
                </span>
              </h1>
              <p>Software Engineer & Web Developer</p>
              <Link onClick={openResumeInNewTab} className="btn resume-btn">
                <img src="/images/resume-white.png" alt="Resume Icon" className="resume-icon" />
                <strong>Resume</strong>
              </Link>
            </div>
            
          </div>
        </section>

        <section className="about" id="about">
          <div className="home-content">
            <div className="left-text-container">
              <h1 className="header-text">~ About ~</h1>
              <div className="ucsc-logo-wrapper">
                <img src="/images/ucscLogo.gif" alt="UCSC Logo Animation" className="ucsc-logo" />
              </div>
              <p>Thank you for stopping by. I hope you enjoy your visit.</p>

            </div>
            <div className="text-container">
              <p>I’m a recent graduate from the University of California, Santa Cruz, with a 
                Bachelor of Science in Computer Science: Game Design. I’m passionate about 
                crafting innovative web applications and building engaging game experiences 
                that blend creativity with technology.

                Beyond the screen, I enjoy music, and playing/watching professional esports, basketball, 
                tennis, pickleball, and baseball. I'm always exploring new ways to 
                merge my technical skills with creative expression.</p>
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
  
              {/* <div className="project-box">
                <img src="/images/spinify-image.png" alt="Project 1" />
              </div> */}
  
              <div className="gif-box project-video-text-grid">
              <ul>
                <li>
                  <img src="/images/picklescore-logo-new.png" alt="Project 2" className="spinify-logo" />
                </li>
                <li>
                  <div className="project-video-text-grid">
                    <div className="phone-frame">
                      <video autoPlay loop muted controls className="video vertical-video">
                        <source src="/images/sticklevideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="overlay-text-grid">
                      <p>
                      PickleScore is a mobile app built with React Native for tracking pickleball 
                      games in real time. It features simple score controls, automatic serve 
                      and side-out logic, and audible score announcements. Users can 
                      customize team names, game type (singles or doubles), and visual themes. 
                      The app is fully mobile-optimized and supports both portrait and 
                      landscape orientations for a smooth, responsive experience on any device.
                      </p>
                      <div className="overlay-buttons">
                        <a href="https://github.com/alexdmnguyen/stickleScore" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://stickle-score.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            </div>
  
            <div className="project-description">
              <h1>- Technologies Used -</h1>
  
              <div className="tech-box" id="box1">
                <img src="/images/reactnative.png" alt="React Native Icon"/>
                <p>React Native</p>
              </div>
  
              <div className="tech-box" id="box2">
                <img src="/images/expo.png" alt="Expo Icon"/>
                <p>Expo</p>
              </div>
  
              <div className="tech-box" id="box3">
                <img src="/images/JavaScript.png" alt="JavaScript Icon"/>
                <p>JavaScript</p>
              </div>
              
            </div>

            {/* <div className="overlay-buttons">
              <a href="https://github.com/alexdmnguyen/stickleScore" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://stickle-score.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>
            </div> */}
  
          </div>

          <div className="whole-project-grid">
            <div className="project-grid">
  
              {/* <div className="project-box">
                <img src="/images/spinify-image.png" alt="Project 1" />
              </div> */}
  
              <div className="gif-box">
                <ul>
                  <li>
                    <img src="/images/spinify-logo-pink.png" alt="Project 2" className="spinify-logo" />
                  </li>
                  <li>
                    <div className="gif-box">
                      <ul className="project-overlay">
                        <li className="overlay-text">
                          <p>
                          Spinify is a mock e-commerce site built with Python, Django, and the 
                          Spotify API. It displays users' top songs and albums as vinyl records 
                          and includes features like a shopping cart, checkout, and persistent 
                          order history stored in a database. The app is fully mobile-friendly, 
                          offering a smooth and responsive experience across all devices.
 
                          </p>

                          {/*
                          <div className="overlay-buttons">
                            <a href="https://github.com/alexdmnguyen/spinify" target="_blank" rel="noopener noreferrer">GitHub</a>
                          </div>
                          */}
                            

                        </li>
                      </ul>
                      <video width="500" height="300" autoPlay loop muted controls className="video">
                        <source src="/images/spinify-video.mp4" type="video/mp4" className="project-gif"/>
                        Your browser does not support the video tag.
                      </video>
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
                <img src="/images/python.png" alt="Python Icon"/>
                <p>Python</p>
              </div>

              <div className="tech-box" id="box5">
                <img src="/images/django-logo.png" alt="Django Icon"/>
                <p>Django</p>
              </div>
              
            </div>

            <div className="overlay-buttons">
              <a href="https://github.com/alexdmnguyen/spinify" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
  
          </div>



          <div className="whole-project-grid">
            <div className="project-grid">
  
              {/* <div className="project-box">
                <img src="/images/nba-comparison-image.PNG" alt="Project 2" />
              </div> */}
  
              <div className="gif-box">
                <ul>
                  <li>
                      <img src="/images/nba-comparison-logo.png" alt="Project 2" className="nba-comparison-logo" />
                  </li>
                  <li>
                    <div className="gif-box">
                      <ul className="project-overlay">
                        <li className="overlay-text">
                          <p>
                          A Python-based web application, the NBA Comparison Tool uses web scraping to fetch and compare current NBA players' stats. Leveraging data from Basketball Reference, the app allows users to search for and compare any two players who have played in the current NBA season. 
 
                          </p>

                          {/*
                          <div className="overlay-buttons">
                            <a href="https://github.com/alexdmnguyen/nba-comparison" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://nba-comparison.onrender.com/" target="_blank" rel="noopener noreferrer">Demo</a>
                          </div>
                          */}
                            

                        </li>
                      </ul>
                      <video width="500" height="300" autoPlay loop muted controls className="video">
                        <source src="/images/nba-comparison-video.mp4" type="video/mp4" className="project-gif"/>
                        Your browser does not support the video tag.
                      </video>
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

              <div className="tech-box" id="box5">
                <img src="/images/python.png" alt="Python Icon"/>
                <p>Python</p>
              </div>

            </div>

            <div className="overlay-buttons">
              <a href="https://github.com/alexdmnguyen/nba-comparison" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://nba-comparison.onrender.com/" target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
  
          </div>



          <div className="final-project-grid">
            <div className="project-grid">
  
              {/* <div className="project-box">
                <img src="/images/manifestival_poster - Copy.png" alt="Project 1" />
              </div> */}
  
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

                          {/*
                            <div className="overlay-buttons">
                              <a href="link-to-button-1" target="_blank" rel="noopener noreferrer">GitHub</a>
                              <a href="link-to-button-2" target="_blank" rel="noopener noreferrer">Demo</a>
                            </div>
                            */}

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

  
          {/* 
            
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
            
            
            */}
  

  
          {/*           <div className="final-project-grid">
            <p>https://silmist.itch.io/future-in-flames</p>
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
