import React from 'react';
import MediumEditor from 'medium-editor';

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.content,
    };
  }

  componentDidMount() {
    const el = this.el;
    const { content } = this.props;

    this.editor= new MediumEditor(el);
    this.editor.setContent(content);

    this.editor.subscribe('editableInput', e => {
      this._updated = true,
      this.change(this.editor.getContent())
    })
  }

  change(content) {
    const { onChange } = this.props;

    if (onChange) {
      onChange(content);
    };
  }

  componentWillUnmount() {
    this.editor.destroy();
  }

  render() {
    return (
      <div
        className="col-12"
        ref={el => {this.el = el}}
        style={{height: '100%'}}>
      </div>
    );
  }
}

export default Editor;
