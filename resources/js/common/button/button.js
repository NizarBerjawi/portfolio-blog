import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, type, className } = this.props;

    return (
        <button type={type} className={'btn'.concat(` ${className}`)}>{label}</button>
    );
  }
}

export default Button;
