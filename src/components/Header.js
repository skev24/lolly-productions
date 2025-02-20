import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-4xl font-bold">Lolly Productions</h1>
        <nav className="flex gap-6">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#events" className="hover:text-gray-300">Events</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;