import Portfolio from './portfolio';
import Page from './edit/Page';
import * as Auth from '../auth/service';

export default [
    {
        path:'/portfolio',
        exact: true,
        auth: true,
        isAuthenticated: Auth.check(),
        component: Portfolio,
    },
    {
      path: '/portfolio/:section/edit',
      exact: true,
      auth: true,
      isAuthenticated: Auth.check(),
      component: Page,
    }
]
