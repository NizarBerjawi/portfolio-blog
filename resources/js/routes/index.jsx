import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routes from './routes';
import PrivateRoute from './private';
import PublicRoute from './public';

const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Switch>
      {routes.map((route) => {
        if (route.auth) {
          return <PrivateRoute key={route.name} {...route} />;
        }
        return <PublicRoute key={route.name} {...route} />;
      })}
      ;
    </Switch>
  </Router>
);

export default Routes;
