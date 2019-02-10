import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, type, click, className } = this.props;

    return (
        <button type={type} className={'btn'.concat(` ${className}`)} onClick={this.props.click}>{label}</button>
    );
  }
}

export default Button;
