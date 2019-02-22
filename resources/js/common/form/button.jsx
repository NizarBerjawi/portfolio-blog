import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    label,
    type,
    onClick,
    className,
  } = props;

  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  type: 'submit',
  className: '',
  onClick: () => {},
};

export default Button;
