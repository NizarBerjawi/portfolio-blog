import React from 'react';
import PropTypes from 'prop-types';
import MediumEditor from 'medium-editor';

class Editor extends React.Component {
  componentDidMount() {
    const { el } = this;
    const { content, onChange } = this.props;

    this.editor = new MediumEditor(el);
    this.editor.setContent(content);

    this.editor.subscribe('editableInput', e => (
      onChange(e)
    ));
  }

  componentWillUnmount() {
    this.editor.destroy();
  }

  render() {
    return (
      <div
        className="col-12"
        ref={(el) => { this.el = el; }}
        style={{ height: '100%' }}
      />
    );
  }
}

Editor.propTypes = {
  content: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Editor.defaultProps = {
  onChange: () => {},
};

export default Editor;
