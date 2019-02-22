import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ htmlFor, label }) => (
  <label htmlFor={htmlFor}>{label}</label>
);

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string,
};

Label.defaultProps = {
  label: '',
};

export default Label;
