import React, { useEffect, useRef } from 'react';

const Header = () => {

  const titleRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;

    const handleClick = () => {
      window.location.reload();
    };

    titleElement.addEventListener('click', handleClick);

    return () => {
      titleElement.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <header>
      <div className="container">
        <h1 ref={titleRef}>Lolly Productions</h1>
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