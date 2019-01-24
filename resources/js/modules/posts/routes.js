import Post from './posts';
import * as Auth from '../auth/service';

export default [
    {
        path:'/posts',
        exact: true,
        auth: true,
        isAuthenticated: Auth.check(),
        component: Post,
    }
]
