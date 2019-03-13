import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = (props) => {
  const { children } = props;

  return (
    <div className="card-header">
      {children}
    </div>
  );
};

CardHeader.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default CardHeader;
