import React from "react";
import PropTypes from "prop-types";

// Componente principal Card
const Card = ({ children, className }) => {
    return (
      <div className={`rounded-2xl shadow-lg p-4 bg-gray-800 ${className}`}>
        {children}
      </div>
    );
  };
  
  Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };
  
  Card.defaultProps = {
    className: "",
  };
  
  // Subcomponente CardContent
  const CardContent = ({ children, className }) => {
    return <div className={`p-4 ${className}`}>{children}</div>;
  };
  
  CardContent.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };
  
  CardContent.defaultProps = {
    className: "",
  };
  
  // Exporta ambos componentes
  export { Card, CardContent };
  export default Card;