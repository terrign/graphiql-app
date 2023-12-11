import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import { auth } from '../auth';
import Loading from '../components/UI/Loading';

const Auth = () => {
  const [user, loading] = useAuthState(auth);

  const nav = useNavigate();

  useEffect(() => {
    if (user) {
      nav('/main');
    }
  }, [user, nav]);

  if (user) {
    return null;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default Auth;
