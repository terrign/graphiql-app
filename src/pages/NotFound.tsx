import { Button, Layout, Result } from 'antd';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Layout style={{ minHeight: '100dvh', paddingTop: '10dvh' }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <NavLink to="/">
            <Button type="primary">Back Home</Button>
          </NavLink>
        }
    />
   </Layout>  
  );
};

export default NotFound;
