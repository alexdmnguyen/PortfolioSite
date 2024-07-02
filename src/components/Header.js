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
            {/* Specify the section ID in the "to" prop */}
            <img src="/images/alexcircle.png" alt="Logo" className="logo-header" />
          </Link>
        </div>

        <nav className="navbar">
          <Link to="about" smooth={true} duration={500}>
            {/* Specify the section ID in the "to" prop */}
            About
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            {/* Specify the section ID in the "to" prop */}
            Projects
          </Link>
          <Link to="footer" smooth={true} duration={500}>
            {/* Specify the section ID in the "to" prop */}
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
