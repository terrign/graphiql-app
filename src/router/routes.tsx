import { RouteObject } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';
import Root from '../pages/Root';
import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
import Welcome from '../pages/Welcome';

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <Root />
      </ErrorBoundary>
    ),
    children: [
      {
        path: '/',
        element: <Welcome />,
      },
      {
        path: '/main',
        element: <Main />,
      },
      {
        path: '/signup',
        element: <SingUp />,
      },
      {
        path: '/signin',
        element: <SingIn />,
      },
    ],
  },
  {
    path: '/*',
    element: <NotFound />,
  },
];

export default routes;
