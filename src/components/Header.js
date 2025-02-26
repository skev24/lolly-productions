import React, { useState } from 'react';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  const handleClick = () => {
    window.location.href = window.location.origin; 
  };

  return (
    <header>
      <div className="container">
        <h1 onClick={handleClick}>Lolly Productions</h1>
        <nav className={isMenuOpen ? 'active' : ''}>
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;