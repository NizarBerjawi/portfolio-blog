import Dashboard from './Dashboard';

export default [
    {
        path:'/dashboard',
        name: 'dashboard.index',
        exact: true,
        auth: true,
        component: Dashboard
    }
]
