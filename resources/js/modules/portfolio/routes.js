import Portfolio from './portfolio';
import EditPortfolio from './editPortfolio';
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
      path: 'portfolio/:id/edit',
      exact: true,
      auth: true,
      isAuthenticated: Auth.check(),
      component: EditPortfolio,
    }
]
