import { LoaderFunction, redirect } from 'react-router-dom';
import { auth } from '../../auth';

const authLoader: LoaderFunction = async ({ request }) => {
  await auth.authStateReady();
  const user = auth.currentUser;
  const path = new URL(request.url).pathname;
  if (user) {
    return redirect('/main');
  }
  if (path === '/auth') {
    return redirect('/auth/signin');
  }
  return null;
};

export default authLoader;
