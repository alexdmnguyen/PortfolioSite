// Header.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Header.css';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className={`header-container ${scrolling ? 'scrolled' : ''}`}>
        <div className="logo-container">
          <Link to="home" smooth={true} duration={500}>
            <img src="/images/alexcircle.png" alt="Logo" className="logo-header" />
          </Link>
        </div>

        <nav className="navbar">
          <Link to="about" smooth={true} duration={500} className="nav-item">
            <div><strong>About</strong></div>
          </Link>
          <Link to="projects" smooth={true} duration={500} className="nav-item">
            <div><strong>Projects</strong></div>
          </Link>
          <Link to="footer" smooth={true} duration={500} className="nav-item">
            <div><strong>Contact</strong></div>
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;
