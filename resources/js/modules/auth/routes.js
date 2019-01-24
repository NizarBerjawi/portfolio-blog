import Login from './login/login';

export default [
    {
        path:'/login',
        exact: true,
        auth: false,
        component: Login,
    }
]
