import { Button, Layout, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const nav = useNavigate();

  const onClick = () => nav('/');

  return (
    <Layout style={{ minHeight: '100svh', paddingTop: '10svh' }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={onClick}>
            Back Home
          </Button>
        }
      />
    </Layout>
  );
};

export default NotFound;
