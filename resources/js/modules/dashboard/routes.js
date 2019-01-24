import Dashboard from './Dashboard';
import * as Auth from '../auth/service';

export default [
    {
        path:'/dashboard',
        exact: true,
        auth: true,
        isAuthenticated: Auth.check(),
        component: Dashboard
    }
]
