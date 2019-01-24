import React from 'react';

class EditPortfolio extends React.Component {
  constructor(props) {
    console.log('here');
    super(props);
  }

  render() {
    return (
      <AdminLayout>
        <div className="container-fluid px-xl-5">
          <section className="py-5">
          <div className="col-lg-12 mb-4">
            <div className="card">
              <div className="card-header">
                Edit Section
              </div>
            </div>
          </div>
        </section>
      </div>
    </AdminLayout>
    );
  }
}

export default EditPortfolio
