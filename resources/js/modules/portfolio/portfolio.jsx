import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Link } from 'react-router-dom';
import { AdminLayout } from '../../layout';
import { Button } from '../../common/button';
import { Table } from '../../common/tables';
import { Pagination } from '../../common/pagination';
import * as PortfolioService from './service';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
      pagination: {
        visible: false,
        links: {},
        meta: {}
      },
      loading: true
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
            meta
          },
          loading: false
        });
      })
      .catch((err) => console.log('Error: ', err.text));
  }

  handlePageChange(e) {
    e.preventDefault();

    const href = e.target.href;

    if (!(typeof href != undefined && href)) { return; }

    this.setState({ loading: true });

    this.loadSections(e)
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
            meta
          },
          loading: false
        });
      })
      .catch((err) => console.log('Error: ', err.text));
  }

  get sections() {
    return this.state.sections.map(section => {
      const action = (
        <Link
          to={`portfolio/${section.slug}/edit`}
          className="btn btn-primary btn-sm">
            Edit
        </Link>
      );
      return { ...section, action }
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
        <AdminLayout>
          <div className="container-fluid px-xl-5">
            <section className="py-5">
            <div className="col-lg-12 mb-4">
              <div className="card">
                <div className="card-header">
                  <h6 className="text-uppercase mb-0">Portfolio Sections</h6>

                  <div className="float-right">
                    <Button className="btn-primary" label="Add" type="submit"/>
                  </div>
                </div>
                <div className="card-body">
                  <Table
                    headers={['ID', 'Section', 'Last Updated', 'Action']}
                    data={this.sections}
                    loading={this.state.loading}
                  />

                  <Pagination
                    pagination={this.state.pagination}
                    changePage={e => this.handlePageChange(e)}
                    pageRange={4}
                    visible={!this.state.loading && this.state.pagination.visible}
                  />
                </div>
              </div>
            </div>
            </section>
          </div>
        </AdminLayout>
    );
  }
}

export default Portfolio;
