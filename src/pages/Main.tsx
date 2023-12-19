import { useIdToken } from 'react-firebase-hooks/auth';
import { auth } from '../auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const [user] = useIdToken(auth);
  const nav = useNavigate();

  useEffect(() => {
    if (!user) {
      nav('/');
    }
  }, [user, nav]);
  return <div>Main</div>;
};

export default Main;
