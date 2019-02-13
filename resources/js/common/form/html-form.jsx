import React from 'react';

class HtmlForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { method, action, enctype, children } = this.props;

    return (
      <form action={action} method={method}>
        { children }
      </form>
    );
  }
}

export { HtmlForm };
