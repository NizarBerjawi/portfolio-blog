import Portfolio from './portfolio';
import Page from './edit/Page';

export default [
    {
        path:'/portfolio',
        exact: true,
        auth: true,
        component: Portfolio,
    },
    {
      path: '/portfolio/:section/edit',
      exact: true,
      auth: true,
      component: Page,
    }
]
