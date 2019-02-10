import React from 'react';
import { AdminLayout } from '../../layout';
import { Editor } from '../../common/editor';
import { Form, TextInput } from '../../common/form';
import { Button } from '../../common/button';
import { Card, CardHeader, CardBody } from '../../common/card';
import LoadingIndicator from '../../common/loader';
import * as PortfolioService from './service';

class EditPortfolio extends React.Component {
  /**
   *
   */
  constructor(props) {
    super(props);

    this.state = {
      section: {},
      loading: true
    }

    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEditor = this.handleEditor.bind(this);
  }

  /**
   *
   */
  componentDidMount() {
    const slug = this.props.match.params.section;

    PortfolioService
      .fetchSection(slug)
      .then((res) => {
        const { data } = res;

        this.setState({
          section: data,
          loading: false
        });
      })
      .catch((err) => console.log('Error: ', err.text));
  }

  /**
   *
   */
  handleChange(e) {
    console.log(e.target.value);
      this.setState({
        section: {...this.state.section, [e.target.name]: e.target.value }
      });
  }

  /**
   * Handle any change that takes place inside the editor
   */
  handleEditor(content) {
    this.setState({
      section: {...this.state.section, markup: content}
    });
  }

  /**
   * Save any changes to the section
   */
  handleSave(e) {
    e.preventDefault();

    const { section } = this.state;

    PortfolioService
      .saveSection(section.slug, section)
      .then((res) => {
        const { data } = res;

        this.setState({
          section: data,
          loading: false
        });
      })
      .catch((err) => console.log('Error: ', err.text));
  }

  render() {
    const { loading, section } = this.state;
    console.log(this.state);
    return (
      <AdminLayout>
        <div className="container-fluid px-xl-5">
          <section className="py-5">
            <div className="row">
              <div className="col-md-12 mb-4">
                <Card>
                  <CardHeader>Edit Section</CardHeader>
                  <CardBody>
                  <LoadingIndicator loading={loading}>
                    <Form
                      action=""
                      method="PUT">
                        <TextInput
                          label="Name"
                          name="name"
                          onChange={e => this.handleChange(e)} />
                        <TextInput
                          label="Slug"
                          name="slug"
                          onChange={e => this.handleChange(e)} />
                        <TextInput
                          label="Default Template"
                          name="template"
                          onChange={e => this.handleChange(e)} />

                        <Editor
                          content={section.markup}
                          onChange={this.handleEditor}/>

                        <Button
                          click={this.handleSave}
                          type="button"
                          className="btn-primary"
                          label="Save" />
                      </Form>
                    </LoadingIndicator>
                  </CardBody>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </AdminLayout>
    );
  }
}

export default EditPortfolio
