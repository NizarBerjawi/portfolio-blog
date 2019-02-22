import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { HtmlForm, Input, Button } from '../../../common/form';
import * as Auth from '../service';
import Illustration from './illustration.svg';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      credentials: {
        email: '',
        password: '',
      },
      submitted: false,
    };

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  login(e) {
    e.preventDefault();

    const { credentials } = this.state;

    this.setState({ submitted: true });

    Auth.login(credentials)
      .then(() => this.setState({ redirect: '/dashboard' }))
      .catch(() => {
        this.setState({ submitted: false });
      });
  }

  handleChange(e) {
    e.preventDefault();

    const { name, value } = e.target;
    const { credentials } = this.state;

    this.setState({
      credentials: {
        ...credentials,
        [name]: value,
      },
    });
  }

  render() {
    const { redirect, submitted, credentials } = this.state;

    if (redirect) {
      return <Redirect to={redirect} push />;
    }

    return (
      <div className="page-holder d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-5 col-lg-7 mx-auto mb-5 mb-lg-0">
              <div className="pr-lg-5">
                <img src={Illustration} alt="" className="img-fluid" />
              </div>
            </div>

            <div className="col-lg-5 px-lg-4">
              <h1 className="text-base text-primary text-uppercase mb-4">Dashboard</h1>
              <h2 className="mb-4">Welcome back!</h2>
              <p className="text-muted">This dashboard is for admins only.</p>

              <HtmlForm onSubmit={this.login}>

                <Input
                  id="email"
                  name="email"
                  value={credentials.email}
                  placeholder="Email"
                  onChange={this.handleChange}
                  errors={['test']}
                />

                <Input
                  id="password"
                  name="password"
                  value={credentials.password}
                  type="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  errors={['test']}
                />

                <div className="form-group mb-4">
                  <Link to="/" className="btn btn-secondary shadow px-5">Cancel</Link>

                  <Button
                    type="submit"
                    className="btn btn-primary shadow px-5"
                    disabled={submitted}
                    label={submitted ? 'Logging In' : 'Log In'}
                  />
                </div>
              </HtmlForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
