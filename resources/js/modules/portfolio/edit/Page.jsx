import React from 'react';
import { AdminLayout } from '../../../layout';
import { Card, CardHeader, CardBody } from '../../../common/card';
import LoadingIndicator from '../../../common/loader';
import * as PortfolioService from '../service';
import Form from './components/Form';

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      section: {},
      loading: true,
    };

    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Fetch the Section data from the server
   */
  componentDidMount() {
    const { section: slug } = this.props.match.params;

    PortfolioService
      .fetchSection(slug)
      .then((res) => {
        const { data } = res;

        this.setState({
          section: data,
          loading: false,
        });
      })
      .catch(() => {
        // handle
      });
  }

  /**
   * Redirect to an updated route if the slug is different
   */
  componentDidUpdate(prevProps, prevState) {
    const { section } = this.state;
    const { slug: newSlug } = section;
    const { slug: oldSlug } = prevState.section;

    const shouldRedirect = oldSlug !== newSlug;

    if (shouldRedirect) {
      const { history } = this.props;
      const route = `/portfolio/${newSlug}/edit`;

      history.replace(route);
    }
  }

  /**
   * Handle any changes to the form inputs
   */
  handleChange(e) {
    e.preventDefault();

    const { section } = this.state;
    const elem = e.target;
    const data = elem.isContentEditable
      ? { markup: elem.innerHTM } : { [elem.name]: elem.value };

    this.setState({
      section: { ...section, ...data },
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
        if (Object.prototype.hasOwnProperty.call(res, 'errors')) {
          const { errors } = res;
          this.setState({ errors });
        }

        // this.setState({
        //   section: res.data,
        //   loading: false
        // });
      })
      .catch(() => {
        // handle
      });
  }

  /**
   * Render the component
   */
  render() {
    const { loading, section, errors } = this.state;

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
                        section={section}
                        handleChange={this.handleChange}
                        onSubmit={this.handleSave}
                        errors={errors}
                      />
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

export default Page;
