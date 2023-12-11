import { LoaderFunction, redirect } from 'react-router-dom';
import { auth } from '../../auth';

const authLoader: LoaderFunction = async () => {
  await auth.authStateReady();
  const user = auth.currentUser;
  if (user) {
    return redirect('/main');
  }
  return null;
};

export default authLoader;
