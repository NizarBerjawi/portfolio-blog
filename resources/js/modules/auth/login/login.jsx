import React from 'react';
import { Input } from '../../../common/forms';
import Illustration from './illustration.svg';

class LoginForm extends React.Component {
    constructor() {
        super();
        this.form = {};
        this.login = this.login.bind(this);
    }

    login() {

    }

    update(key) {
        return ((event) => {
            this.form[key] = event.target.value;
        }).bind(this);
    }

    render() {
        return (
            <div className="page-holder d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center py-5">
                        <div className="col-5 col-lg-7 mx-auto mb-5 mb-lg-0">
                            <div className="pr-lg-5">
                                <img src={Illustration} alt="" className="img-fluid" />
                            </div>
                        </div>

                        <form>
                            <Input
                                placeholder="Email"
                                onChange={this.update('email')}/>

                            <Input
                                type="password"
                                placeholder="Password"
                                onChange={this.update('password')}/>

                            <div className="form-group mb-4">
                                <div className="custom-control custom-checkbox">
                                    <input className="form-check-input custom-control-input" type="checkbox" name="remember" id="remember" />
                                    <label htmlFor="remember" className="custom-control-label">Remember Me</label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary shadow px-5">Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;
