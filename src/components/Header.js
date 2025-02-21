import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>Lolly Productions</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;