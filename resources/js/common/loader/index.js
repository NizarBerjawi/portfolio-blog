import React from 'react';

const LoadingIndicator = ({ loading, children }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{children}</div>;
}

export default LoadingIndicator;
