import { RouteObject } from 'react-router-dom';
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
        path: '/signup',
        element: <SingUp />,
        loader: authLoader,
      },
      {
        path: '/signin',
        element: <SignIn />,
        loader: authLoader,
      },
    ],
  },
  {
    path: '/*',
    element: <NotFound />,
  },
];

export default routes;
