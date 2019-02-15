import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as Auth from '../modules/auth/service';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return <Route {...rest} render={props => (
    Auth.check()
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location },
        }} />
  )} />
}

export default PrivateRoute;
