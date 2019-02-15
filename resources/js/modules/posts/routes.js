import Post from './posts';

export default [
    {
        path:'/posts',
        exact: true,
        auth: true,
        component: Post,
    }
]
