import Dashboard from './dashboard';

export default [
  {
    path: '/dashboard',
    name: 'dashboard.index',
    exact: true,
    auth: true,
    component: Dashboard,
  },
];
