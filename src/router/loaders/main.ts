import { LoaderFunction, redirect } from 'react-router-dom';
import { auth } from '../../auth';

const mainLoader: LoaderFunction = async () => {
  await auth.authStateReady();
  const user = auth.currentUser;
  if (!user) {
    return redirect('/signin');
  }
  return null;
};

export default mainLoader;
