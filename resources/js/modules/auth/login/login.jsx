import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { TextInput } from '../../../common/form';
import Illustration from './illustration.svg';
import * as Auth from '../service';

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            redirect: '',
            credentials: {
                email: '',
                password: '',
                remember: false
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    login(event) {
        event.preventDefault();

        this.setState({ submitted: true });

        Auth.login(this.state.credentials)
            .then(() => this.setState({ redirect: '/dashboard' }))
            .catch((err) => {
                if (!Auth.check()) {
                    this.setState({ submitted: false });
                }
                console.log('Error: ', err.text);
            });
    }

    handleChange(e) {
        this.setState({ credentials: { ...this.state.credentials, [e.target.name]: e.target.value } });
    }

    render() {
        if (this.state.redirect) {
          return <Redirect to={this.state.redirect} push />;
        }

        const { submitted } = this.state;

        return (
            <div className="page-holder d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center py-5">
                        <div className="col-5 col-lg-7 mx-auto mb-5 mb-lg-0">
                            <div className="pr-lg-5">
                                <img src={require('./illustration.svg')} alt="" className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-lg-5 px-lg-4">
                            <h1 className="text-base text-primary text-uppercase mb-4">Dashboard</h1>
                            <h2 className="mb-4">Welcome back!</h2>
                            <p className="text-muted">This dashboard is for admins only.</p>
                            <form className="mt-4" onSubmit={this.login}>
                                <TextInput
                                    placeholder="Email"
                                    name="email"
                                    value={this.state.credentials.email}
                                    onChange={e => this.handleChange(e)}/>

                                <TextInput
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={e => this.handleChange(e)}/>

                                <div className="form-group mb-4">
                                    <div className="custom-control custom-checkbox">
                                        <input className="form-check-input custom-control-input" type="checkbox" name="remember" id="remember" />
                                        <label htmlFor="remember" className="custom-control-label">Remember Me</label>
                                    </div>
                                </div>

                                <div className="form-group mb-4">
                                  <Link className="btn btn-secondary shadow px-5" to="/">Cancel</Link>
                                  <button type="submit" className="btn btn-primary shadow px-5" disabled={submitted}>{!submitted ? 'Log in' : 'Logging in'}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;
