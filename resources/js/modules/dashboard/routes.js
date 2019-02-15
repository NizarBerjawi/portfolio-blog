import Dashboard from './Dashboard';

export default [
    {
        path:'/dashboard',
        exact: true,
        auth: true,
        component: Dashboard
    }
]
