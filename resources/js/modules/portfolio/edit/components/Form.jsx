import React from 'react';
import PropTypes from 'prop-types';
import Editor from '../../../../common/editor/editor';
import { HtmlForm, Input, Button } from '../../../../common/form';

const Form = ({
  section, handleChange, onSubmit, errors,
}) => (
  <HtmlForm
    action=""
    method="PUT"
  >
    <Input
      label="Name"
      name="name"
      value={section.name}
      errors={errors.name}
      onChange={handleChange}
    />

    <Input
      label="Default Template"
      name="template"
      value={section.template}
      erros={errors.template}
      onChange={handleChange}
    />

    <div className="form-group">
      <Editor
        content={section.markup}
        onChange={handleChange}
      />
    </div>

    <div className="text-right">
      <Button
        onClick={onSubmit}
        type="button"
        className="btn-primary"
        label="Save"
      />
    </div>
  </HtmlForm>
);


Form.propTypes = {
  section: PropTypes.shape({
    name: PropTypes.string.isRequired,
    template: PropTypes.string.isRequired,
    markup: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape(PropTypes.string),
};

Form.defaultProps = {
  errors: [],
};

export default Form;
