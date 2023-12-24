import { useIdToken } from 'react-firebase-hooks/auth';
import { auth } from '../auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import GraphqlEditor from '../components/Editor';

const Main = () => {
  const [user] = useIdToken(auth);
  const nav = useNavigate();

  useEffect(() => {
    if (!user) {
      nav('/');
    }
  }, [user, nav]);
  return (
    <Layout style={{ marginTop: 64, height: '100%' }}>
      <GraphqlEditor />
    </Layout>
  );
};

export default Main;
