import { RouteObject } from 'react-router-dom';
import Auth from '../pages/Auth';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';
import Root from '../pages/Root';
import Welcome from '../pages/Welcome';
import authLoader from './loaders/auth';
import SingUp from '../pages/SingUp';
import SignIn from '../pages/SignIn';
import mainLoader from './loaders/main';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Welcome />,
      },
      {
        path: '/main',
        element: <Main />,
        loader: mainLoader,
      },
      {
        path: '/auth',
        element: <Auth />,
        loader: authLoader,
        children: [
          {
            path: '/auth/signup',
            element: <SingUp />,
          },
          {
            path: '/auth/signin',
            element: <SignIn />,
          },
        ],
      },
    ],
  },
  {
    path: '/*',
    element: <NotFound />,
  },
];

export default routes;
