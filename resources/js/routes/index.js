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
            {routes.map((route, i) => {
                if (route.auth) {
                    return <PrivateRoute key={i} {...route} />
                }
                return <PublicRoute key={i} {...route} />
            })}
        </Switch>
    </Router>
)

export default Routes;
