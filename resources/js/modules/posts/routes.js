import Post from './posts';

export default [
  {
    path: '/posts',
    name: 'posts.index',
    exact: true,
    auth: true,
    component: Post,
  },
];
