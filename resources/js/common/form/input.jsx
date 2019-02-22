import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  onChange, id, name, value, type, placeholder, errors,
}) => (
  <div className="form-group mb-4">
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      className="form-control border-0 shadow form-control-lg"
      placeholder={placeholder}
      onChange={onChange}
    />

    {errors && (
      <span className="invalid-feedback" role="alert">
        <strong>{errors[0]}</strong>
      </span>
    )}
  </div>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  errors: PropTypes.arrayOf(PropTypes.string),
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  onChange: () => {},
  errors: [],
};

export default Input;
