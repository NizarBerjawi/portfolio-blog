import React from 'react';
import ReactDOM from 'react-dom';
import { AdminLayout } from '../../layout';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <AdminLayout>
        <div className="container-fluid px-xl-5">
          <section className="py-5">
            <div className="row">
              <div className="col-xl-3 col-lg-6 mb-4 mb-xl-0">
                <div className="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
                  <div className="flex-grow-1 d-flex align-items-center">
                    <div className="dot mr-3 bg-violet"></div>
                    <div className="text">
                      <h6 className="mb-0">Data consumed</h6><span className="text-gray">145,14 GB</span>
                    </div>
                  </div>
                  <div className="icon text-white bg-violet">
                    <i className="fas fa-server"></i>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 mb-4 mb-xl-0">
                <div className="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
                  <div className="flex-grow-1 d-flex align-items-center">
                    <div className="dot mr-3 bg-green"></div>
                    <div className="text">
                      <h6 className="mb-0">Open cases</h6><span className="text-gray">32</span>
                    </div>
                  </div>
                  <div className="icon text-white bg-green"><i className="far fa-clipboard"></i></div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 mb-4 mb-xl-0">
                <div className="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
                  <div className="flex-grow-1 d-flex align-items-center">
                    <div className="dot mr-3 bg-blue"></div>
                    <div className="text">
                      <h6 className="mb-0">Work orders</h6><span className="text-gray">400</span>
                    </div>
                  </div>
                  <div className="icon text-white bg-blue"><i className="fa fa-dolly-flatbed"></i></div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 mb-4 mb-xl-0">
                <div className="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
                  <div className="flex-grow-1 d-flex align-items-center">
                    <div className="dot mr-3 bg-red"></div>
                    <div className="text">
                      <h6 className="mb-0">New invoices</h6><span className="text-gray">123</span>
                    </div>
                  </div>
                  <div className="icon text-white bg-red"><i className="fas fa-receipt"></i></div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row mb-4">
              <div className="col-lg-7 mb-4 mb-lg-0">
                <div className="card">
                  <div className="card-header">
                    <h2 className="h6 text-uppercase mb-0">Current server uptime</h2>
                  </div>
                  <div className="card-body">
                    <p className="text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div className="chart-holder">
                      <canvas id="lineChart1" style={{ maxHeight: '14rem !important' }} className="w-100"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mb-4 mb-lg-0 pl-lg-0">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row align-items-center flex-row">
                      <div className="col-lg-5">
                        <h2 className="mb-0 d-flex align-items-center"><span>86.4</span><span className="dot bg-green d-inline-block ml-3"></span></h2><span className="text-muted text-uppercase small">Work hours</span>
                        <hr />
                          <small className="text-muted">Lorem ipsum dolor sit</small>
                      </div>
                      <div className="col-lg-7">
                        <canvas id="pieChartHome1"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-center flex-row">
                      <div className="col-lg-5">
                        <h2 className="mb-0 d-flex align-items-center"><span>1.724</span><span className="dot bg-violet d-inline-block ml-3"></span></h2><span className="text-muted text-uppercase small">Server time</span>
                        <hr /><small className="text-muted">Lorem ipsum dolor sit</small>
                      </div>
                      <div className="col-lg-7">
                        <canvas id="pieChartHome2"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 mb-4 mb-lg-0">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row align-items-center mb-3 flex-row">
                      <div className="col-lg-5">
                        <h2 className="mb-0 d-flex align-items-center"><span>86%</span><span className="dot bg-violet d-inline-block ml-3"></span></h2><span className="text-muted text-uppercase small">Monthly Usage</span>
                        <hr /><small className="text-muted">Lorem ipsum dolor sit</small>
                      </div>
                      <div className="col-lg-7">
                        <canvas id="pieChartHome3"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-center flex-row">
                      <div className="col-lg-5">
                        <h2 className="mb-0 d-flex align-items-center"><span>$126,41</span><span className="dot bg-green d-inline-block ml-3"></span></h2><span className="text-muted text-uppercase small">All Income</span>
                        <hr /><small className="text-muted">Lorem ipsum dolor sit</small>
                      </div>
                      <div className="col-lg-7">
                        <canvas id="pieChartHome4"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="card">
                  <div className="card-header">
                    <h2 className="h6 text-uppercase mb-0">Total Overdue</h2>
                  </div>
                  <div className="card-body">
                    <p className="text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div className="chart-holder">
                      <canvas id="lineChart2" style={{ maxHeight: '14rem !important' }} className="w-100"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-5">
            <div className="row text-dark">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="card rounded credit-card bg-hover-gradient-violet">
                  <div className="content d-flex flex-column justify-content-between p-4">
                    <h1 className="mb-5"><i className="fab fa-cc-visa"></i></h1>
                    <div className="d-flex justify-content-between align-items-end pt-3">
                      <div className="text-uppercase">
                        <div className="font-weight-bold d-block">Card Number</div><small className="text-gray">1245 1478 1362 6985</small>
                      </div>
                      <h4 className="mb-0">$417.78</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="card rounded credit-card bg-hover-gradient-blue">
                  <div className="content d-flex flex-column justify-content-between p-4">
                    <h1 className="mb-5"><i className="fab fa-cc-mastercard"></i></h1>
                    <div className="d-flex justify-content-between align-items-end pt-3">
                      <div className="text-uppercase">
                        <div className="font-weight-bold d-block">Card Number</div><small className="text-gray">1245 1478 1362 6985</small>
                      </div>
                      <h4 className="mb-0">$124.17</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="card rounded credit-card bg-hover-gradient-green">
                  <div className="content d-flex flex-column justify-content-between p-4">
                    <h1 className="mb-5"><i className="fab fa-cc-discover"></i></h1>
                    <div className="d-flex justify-content-between align-items-end pt-3">
                      <div className="text-uppercase">
                        <div className="font-weight-bold d-block">Card Number</div><small className="text-gray">1245 1478 1362 6985</small>
                      </div>
                      <h4 className="mb-0">$568.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="col-lg-8">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-header">
                    <h2 className="h6 mb-0 text-uppercase">Transaction history</h2>
                  </div>
                  <div className="card-body">
                    <p className="text-gray mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div className="d-flex justify-content-between align-items-start align-items-sm-center mb-4 flex-column flex-sm-row">
                      <div className="left d-flex align-items-center">
                        <div className="icon icon-lg shadow mr-3 text-gray"><i className="fab fa-dropbox"></i></div>
                        <div className="text">
                          <h6 className="mb-0 d-flex align-items-center"> <span>Dropbox Inc.</span><span className="dot dot-sm ml-2 bg-violet"></span></h6><small className="text-gray">Account renewal</small>
                        </div>
                      </div>
                      <div className="right ml-5 ml-sm-0 pl-3 pl-sm-0 text-violet">
                        <h5>-$20</h5>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-start align-items-sm-center mb-4 flex-column flex-sm-row">
                      <div className="left d-flex align-items-center">
                        <div className="icon icon-lg shadow mr-3 text-gray"><i className="fab fa-apple"></i></div>
                        <div className="text">
                          <h6 className="mb-0 d-flex align-items-center"> <span>App Store.</span><span className="dot dot-sm ml-2 bg-green"></span></h6><small className="text-gray">Software cost</small>
                        </div>
                      </div>
                      <div className="right ml-5 ml-sm-0 pl-3 pl-sm-0 text-green">
                        <h5>-$20</h5>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-start align-items-sm-center mb-4 flex-column flex-sm-row">
                      <div className="left d-flex align-items-center">
                        <div className="icon icon-lg shadow mr-3 text-gray"><i className="fas fa-shopping-basket"></i></div>
                        <div className="text">
                          <h6 className="mb-0 d-flex align-items-center"> <span>Supermarket.</span><span className="dot dot-sm ml-2 bg-blue"></span></h6><small className="text-gray">Shopping</small>
                        </div>
                      </div>
                      <div className="right ml-5 ml-sm-0 pl-3 pl-sm-0 text-blue">
                        <h5>-$20</h5>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-start align-items-sm-center mb-4 flex-column flex-sm-row">
                      <div className="left d-flex align-items-center">
                        <div className="icon icon-lg shadow mr-3 text-gray"><i className="fab fa-android"></i></div>
                        <div className="text">
                          <h6 className="mb-0 d-flex align-items-center"> <span>Play Store.</span><span className="dot dot-sm ml-2 bg-red"></span></h6><small className="text-gray">Software cost</small>
                        </div>
                      </div>
                      <div className="right ml-5 ml-sm-0 pl-3 pl-sm-0 text-red">
                        <h5>-$20</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bg-white shadow roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
                  <div className="flex-grow-1 d-flex align-items-center">
                    <div className="dot mr-3 bg-violet"></div>
                    <div className="text">
                      <h6 className="mb-0">Completed cases</h6><span className="text-gray">127 new cases</span>
                    </div>
                  </div>
                  <div className="icon bg-violet text-white"><i className="fas fa-clipboard-check"></i></div>
                </div>
                <div className="bg-white shadow roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
                  <div className="flex-grow-1 d-flex align-items-center">
                    <div className="dot mr-3 bg-green"></div>
                    <div className="text">
                      <h6 className="mb-0">New Quotes</h6><span className="text-gray">214 new quotes</span>
                    </div>
                  </div>
                  <div className="icon bg-green text-white"><i className="fas fa-dollar-sign"></i></div>
                </div>
                <div className="bg-white shadow roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
                  <div className="flex-grow-1 d-flex align-items-center">
                    <div className="dot mr-3 bg-blue"></div>
                    <div className="text">
                      <h6 className="mb-0">New clients</h6><span className="text-gray">25 new clients</span>
                    </div>
                  </div>
                  <div className="icon bg-blue text-white"><i className="fas fa-user-friends"></i></div>
                </div>
                <div className="card px-5 py-4">
                  <h2 className="mb-0 d-flex align-items-center"><span>86.4</span><span className="dot bg-red d-inline-block ml-3"></span></h2><span className="text-muted">Server time</span>
                  <div className="chart-holder">
                    <canvas id="lineChart3" style={{ maxHeight: '7rem !important' }} className="w-100"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-5">
            <div className="row">
              <div className="col-lg-12"><a href="#" className="message card px-5 py-3 mb-4 bg-hover-gradient-primary no-anchor-style">
                  <div className="row">
                    <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left"><strong className="h5 mb-0">24<sup className="smaller text-gray font-weight-normal">Apr</sup></strong><img src="img/avatar-1.jpg" alt="..." style={{ maxWidth: '3rem' }} className="rounded-circle mx-3 my-2 my-lg-0" />
                      <h6 className="mb-0">Jason Maxwell</h6>
                    </div>
                    <div className="col-lg-9 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                      <div className="bg-gray-100 roundy px-4 py-1 mr-0 mr-lg-3 mt-2 mt-lg-0 text-dark exclode">User testing</div>
                      <p className="mb-0 mt-3 mt-lg-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                  </div></a></div>
              <div className="col-lg-12"><a href="#" className="message card px-5 py-3 mb-4 bg-hover-gradient-primary no-anchor-style">
                  <div className="row">
                    <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left"><strong className="h5 mb-0">24<sup className="smaller text-gray font-weight-normal">Nov</sup></strong><img src="img/avatar-2.jpg" alt="..." style={{ maxWidth: '3rem' }} className="rounded-circle mx-3 my-2 my-lg-0" />
                      <h6 className="mb-0">Sam Andy</h6>
                    </div>
                    <div className="col-lg-9 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                      <div className="bg-gray-100 roundy px-4 py-1 mr-0 mr-lg-3 mt-2 mt-lg-0 text-dark exclode">Web Developer</div>
                      <p className="mb-0 mt-3 mt-lg-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                    </div>
                  </div></a></div>
              <div className="col-lg-12"><a href="#" className="message card px-5 py-3 mb-4 bg-hover-gradient-primary no-anchor-style">
                  <div className="row">
                    <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left"><strong className="h5 mb-0">17<sup className="smaller text-gray font-weight-normal">Aug</sup></strong><img src="img/avatar-3.jpg" alt="..." style={{ maxWidth: '3rem' }} className="rounded-circle mx-3 my-2 my-lg-0" />
                      <h6 className="mb-0">Margret Peter</h6>
                    </div>
                    <div className="col-lg-9 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                      <div className="bg-gray-100 roundy px-4 py-1 mr-0 mr-lg-3 mt-2 mt-lg-0 text-dark exclode">Analysis Agent</div>
                      <p className="mb-0 mt-3 mt-lg-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                    </div>
                  </div></a></div>
              <div className="col-lg-12"><a href="#" className="message card px-5 py-3 mb-4 bg-hover-gradient-primary no-anchor-style">
                  <div className="row">
                    <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left"><strong className="h5 mb-0">15<sup className="smaller text-gray font-weight-normal">Sep</sup></strong><img src="img/avatar-4.jpg" alt="..." style={{ maxWidth: '3rem' }} className="rounded-circle mx-3 my-2 my-lg-0" />
                      <h6 className="mb-0">Jason Doe</h6>
                    </div>
                    <div className="col-lg-9 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                      <div className="bg-gray-100 roundy px-4 py-1 mr-0 mr-lg-3 mt-2 mt-lg-0 text-dark exclode">User testing</div>
                      <p className="mb-0 mt-3 mt-lg-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                    </div>
                  </div></a></div>
            </div>
          </section>
        </div>
      </AdminLayout>
    );
  }
}

export default Dashboard;
