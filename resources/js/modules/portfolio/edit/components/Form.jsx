import React from 'react';
import { Editor } from '../../../../common/editor';
import { HtmlForm, TextInput } from '../../../../common/form';
import { Button } from '../../../../common/button';

const Form =  ({ section, handleChange, onSubmit }) => {
  return (
    <HtmlForm
      action=""
      method="PUT">
        <TextInput
          label="Name"
          name="name"
          value={section.name}
          onChange={handleChange} />
        <TextInput
          label="Slug"
          name="slug"
          value={section.slug}
          onChange={handleChange} />
        <TextInput
          label="Default Template"
          name="template"
          value={section.template}
          onChange={handleChange} />

        <div className="form-group">
          <Editor
            content={section.markup}
            onChange={handleChange}/>
        </div>

        <div className="text-right">
          <Button
            onClick={onSubmit}
            type="button"
            className="btn-primary"
            label="Save" />
        </div>
      </HtmlForm>
  );
}

export default Form;
