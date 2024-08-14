import { useIdToken } from 'react-firebase-hooks/auth';
import { auth } from '../auth';
import { Suspense, lazy, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { App, FloatButton, Layout, Spin, Tooltip } from 'antd';
import GraphqlEditor from '../components/Editor';
import { useGetSchemaQuery } from '../store/api';
import { IntrospectionSchema } from 'graphql';
import { useAppSelector } from '../store/hooks';
import { useLocalization } from '../store/localization.context';

const LazyDocs = lazy(() => import('../components/Docs/Docs'));

const Main = () => {
  const localization = useLocalization();
  const [user] = useIdToken(auth);
  const nav = useNavigate();
  const [docsVisibility, setDocsVisibility] = useState(false);
  const [schema, setSchema] = useState<IntrospectionSchema | null>(null);
  const url = useAppSelector((state) => state.editor.url);
  const { data, isError, error, isLoading, isFetching } = useGetSchemaQuery({ url });
  const { notification } = App.useApp();

  useEffect(() => {
    if (!isFetching && data?.__schema) {
      setSchema(data.__schema);
    }
    if (isError) {
      setDocsVisibility(false);
      notification.error({
        message: localization.t.urlError.message,
        description: localization.t.urlError.description,
        placement: 'topRight',
      });
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
      {!error && !isFetching && (
        <Tooltip placement="topLeft" title="Documentation">
          <FloatButton
            style={{ bottom: 100 }}
            onClick={() => {
              setDocsVisibility(!docsVisibility);
            }}
          />
        </Tooltip>
      )}
      <Suspense fallback={<Spin size="large" />}>
        {!isLoading && <LazyDocs schema={schema} visibility={docsVisibility} />}
      </Suspense>
    </Layout>
  );
};

export default Main;
