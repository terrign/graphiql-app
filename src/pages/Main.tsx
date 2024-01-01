import { useIdToken } from 'react-firebase-hooks/auth';
import { auth } from '../auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FloatButton, Layout } from 'antd';
import GraphqlEditor from '../components/Editor';
import Docs from '../components/Docs/Docs';
import { useLazyGetSchemaQuery } from '../store/api';

const Main = () => {
  const [user] = useIdToken(auth);
  const nav = useNavigate();
  const [docsVisibility, setDocsVisibility] = useState(false);
  const [trigger, result] = useLazyGetSchemaQuery();
  const { data, error, isError, isLoading, isFetching } = result;

  useEffect(() => {
    trigger();
  }, [isLoading]);

  useEffect(() => {
    if (!user) {
      nav('/');
    }
  }, [user, nav]);
  return (
    <Layout style={{ marginTop: 64, height: '100%' }}>
      <GraphqlEditor />
      <FloatButton
        style={{ bottom: 100 }}
        onClick={() => {
          setDocsVisibility(!docsVisibility);
        }}
      />
      <Docs visibility={docsVisibility} />
    </Layout>
  );
};

export default Main;
