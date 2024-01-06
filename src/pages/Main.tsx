import { useIdToken } from 'react-firebase-hooks/auth';
import { auth } from '../auth';
import { Suspense, lazy, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FloatButton, Layout, Spin } from 'antd';
import GraphqlEditor from '../components/Editor';
import { useGetSchemaQuery } from '../store/api';
import { IntrospectionSchema } from 'graphql';
import { useAppSelector } from '../store/hooks';

const LazyDocs = lazy(() => import('../components/Docs/Docs'));

const Main = () => {
  const [user] = useIdToken(auth);
  const nav = useNavigate();
  const [docsVisibility, setDocsVisibility] = useState(false);
  const [schema, setSchema] = useState<IntrospectionSchema | null>(null);
  const url = useAppSelector((state) => state.editor.url);
  const { data, isLoading, isFetching } = useGetSchemaQuery({ url });

  useEffect(() => {
    if (!isFetching && data?.__schema) {
      setSchema(data.__schema);
    }
  }, [isFetching, url, data]);

  useEffect(() => {
    if (!user) {
      nav('/');
    }
  }, [user, nav]);
  return (
    <Layout style={{ marginTop: 64, height: '100%' }}>
      <GraphqlEditor />
      {!isFetching && (
        <FloatButton
          style={{ bottom: 100 }}
          onClick={() => {
            setDocsVisibility(!docsVisibility);
          }}
        />
      )}

      <Suspense fallback={<Spin size="large" />}>
        {!isLoading && <LazyDocs schema={schema} visibility={docsVisibility} />}
      </Suspense>
    </Layout>
  );
};

export default Main;
