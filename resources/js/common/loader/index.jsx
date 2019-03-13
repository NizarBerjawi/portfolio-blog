import React from 'react';
import PropTypes from 'prop-types';

const LoadingIndicator = (props) => {
  const { loading, children } = props;

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{children}</div>;
};

LoadingIndicator.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.shape(PropTypes.element),
};

LoadingIndicator.defaultProps = {
  loading: false,
  children: {},
};

export default LoadingIndicator;
