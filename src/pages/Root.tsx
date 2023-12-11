import { Flex, Layout } from 'antd';
import { Footer, Header } from 'antd/es/layout/layout';
import { NavLink, Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header>
        <nav>
          <ul>
            <Flex gap={30}>
              <li>
                <NavLink to="/">Welcome</NavLink>
              </li>
              <li>
                <NavLink to="/main">Main</NavLink>
              </li>
              <li>
                <NavLink to="/auth/signin">SingIn</NavLink>
              </li>
              <li>
                <NavLink to="/auth/signup">SingUp</NavLink>
              </li>
            </Flex>
          </ul>
        </nav>
      </Header>
      <Layout style={{ padding: 20 }}>
        <Outlet />
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Root;
