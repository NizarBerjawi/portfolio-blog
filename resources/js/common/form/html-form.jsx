import React from 'react';
import PropTypes from 'prop-types';

const HtmlForm = (props) => {
  const {
    method,
    action,
    children,
    onSubmit,
  } = props;

  return (
    <form action={action} method={method} onSubmit={onSubmit}>
      { children }
    </form>
  );
};

HtmlForm.propTypes = {
  method: PropTypes.oneOf(['get', 'post']),
  action: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  onSubmit: PropTypes.func,
};

HtmlForm.defaultProps = {
  action: '',
  method: 'post',
  onSubmit: () => {},
};

export default HtmlForm;
