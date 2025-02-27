import React, { useState } from 'react';
import styles from "../styles/Header.module.css";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClick = () => {
    window.location.href = window.location.origin; 
  };

  return (
    <header>
      <div className={styles.container}>
        <h1 onClick={handleClick}>Lolly Productions</h1>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#events" onClick={closeMenu}>Events</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;