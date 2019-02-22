import Login from './login/login';

export default [
  {
    path: '/login',
    name: 'login',
    exact: true,
    auth: false,
    component: Login,
  },
];
