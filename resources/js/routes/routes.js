import dashboardRoutes from '../modules/dashboard/routes';
import authRoutes from '../modules/auth/routes';
import portfolioRoutes from '../modules/portfolio/routes';
import postsRoutes from '../modules/posts/routes';

export default [
  ...dashboardRoutes,
  ...authRoutes,
  ...portfolioRoutes,
  ...postsRoutes
];
