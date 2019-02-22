import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import * as Auth from '../modules/auth/service';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={({ location, ...props }) => (
      Auth.check()
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: location } }} />
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func,
};

PrivateRoute.defaultProps = {
  component: null,
};

export default PrivateRoute;
