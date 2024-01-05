import { useIdToken } from 'react-firebase-hooks/auth';
import { auth } from '../auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FloatButton, Layout } from 'antd';
import GraphqlEditor from '../components/Editor';
import Docs from '../components/Docs/Docs';
import { useLazyGetSchemaQuery } from '../store/api';
// import { Schema } from '../components/Docs/types';
import { IntrospectionSchema } from 'graphql';

const Main = () => {
  const [user] = useIdToken(auth);
  const nav = useNavigate();
  const [docsVisibility, setDocsVisibility] = useState(false);
  const [schema, setSchema] = useState<IntrospectionSchema | null>(null);
  const [trigger, result] = useLazyGetSchemaQuery();
  const { data, error, isError, isLoading, isFetching } = result;

  useEffect(() => {
    trigger();
    const scheme = data?.__schema;
    if (!isLoading && scheme) {
      setSchema(scheme);
    }
    console.log(scheme);
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
      {!isLoading && <Docs schema={schema} visibility={docsVisibility} />}
    </Layout>
  );
};

export default Main;
