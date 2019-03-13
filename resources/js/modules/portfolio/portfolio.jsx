import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { AdminLayout } from '../../layout';
import { Button } from '../../common/form';
import Table from '../../common/tables/table';
import Pagination from '../../common/pagination';
import { Card, CardHeader, CardBody } from '../../common/card';
import * as PortfolioService from './service';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [],
      pagination: {
        visible: false,
        links: {},
        meta: {},
      },
      loading: true,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    PortfolioService
      .fetchSections()
      .then((res) => {
        const { data, links, meta } = res;
        this.setState({
          sections: data,
          pagination: {
            visible: meta.last_page > 1,
            links,
            meta,
          },
          loading: false,
        });
      })
      .catch(() => {
        // handle
      });
  }

  get sections() {
    const { sections } = this.state;

    return sections.map((section) => {
      const action = (
        <Link
          to={`portfolio/${section.slug}/edit`}
          className="btn btn-primary btn-sm"
        >
          Edit
        </Link>
      );
      return { ...section, action };
    });
  }

  loadSections(e) {
    const url = new URL(e.target.href);
    const page = url.searchParams.get('page');

    PortfolioService
      .fetchSections({ page })
      .then((res) => {
        const { data, links, meta } = res;

        this.setState({
          sections: data,
          pagination: {
            visible: meta.last_page > 1,
            links,
            meta,
          },
          loading: false,
        });
      })
      .catch(() => {
        // handle
      });
  }

  handlePageChange(e) {
    e.preventDefault();

    const { href } = e.target;

    if (!(typeof href !== 'undefined' && href)) { return; }

    this.setState({ loading: true });

    this.loadSections(e);
  }

  render() {
    const { redirect, loading, pagination } = this.state;
    if (redirect) {
      return <Redirect to={redirect} />;
    }

    return (
      <AdminLayout>
        <div className="container-fluid px-xl-5">
          <section className="py-5">
            <div className="col-lg-12 mb-4">
              <Card>
                <CardHeader>
                  <h6 className="text-uppercase mb-0">Portfolio Sections</h6>

                  <div className="float-right">
                    <Button className="btn-primary" label="Add" type="submit" />
                  </div>
                </CardHeader>

                <CardBody>

                  <Table
                    headers={['ID', 'Section', 'Last Updated', 'Action']}
                    data={this.sections}
                    loading={loading}
                  />

                  <Pagination
                    pagination={pagination}
                    changePage={this.handlePageChange}
                    pageRange={4}
                    visible={!loading && pagination.visible}
                  />

                </CardBody>

              </Card>
            </div>
          </section>
        </div>
      </AdminLayout>
    );
  }
}

export default Portfolio;
