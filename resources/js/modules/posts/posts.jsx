import React from 'react';
import { Redirect } from 'react-router-dom';
import { AdminLayout } from '../../layout';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={redirect} />;
    }

    return (
      <AdminLayout>
        <div className="container-fluid px-xl-5">
          <section className="py-5">
            <div className="col-lg-6 mb-4">
              <div className="card">
                <div className="card-header">
                  <h6 className="text-uppercase mb-0">Striped table with hover effect</h6>
                </div>
                <div className="card-body">
                  <table className="table table-striped table-hover card-text">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Sam</td>
                        <td>Nevoresky</td>
                        <td>@facebook</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </AdminLayout>
    );
  }
}

export default Posts;
