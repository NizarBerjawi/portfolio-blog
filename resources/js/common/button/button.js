import React from 'react';

const Button = ({ label, type, onClick, className }) => {
  return (
      <button type={type} className={'btn'.concat(` ${className}`)} onClick={onClick}>{label}</button>
  );
}

export { Button };
