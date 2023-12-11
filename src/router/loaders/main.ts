import { redirect } from 'react-router-dom';
import { auth } from '../../auth';

const mainLoader = async () => {
  await auth.authStateReady();
  const user = auth.currentUser;
  if (!user) {
    return redirect('/auth/signin');
  }
  return null;
};

export default mainLoader;
