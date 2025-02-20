import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>© {new Date().getFullYear()} Lolly Productions CR. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;