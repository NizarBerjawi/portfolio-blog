import Portfolio from './portfolio';
import Page from './edit/Page';

export default [
  {
    path: '/portfolio',
    name: 'portfolio.index',
    exact: true,
    auth: true,
    component: Portfolio,
  },
  {
    path: '/portfolio/:section/edit',
    name: 'portfolio.edit',
    exact: true,
    auth: true,
    component: Page,
  },
];
