import { Flex, Layout } from 'antd';
import { Footer, Header } from 'antd/es/layout/layout';
import { NavLink, Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ backgroundColor: 'white' }}>
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
                <NavLink to="/signin">SingIn</NavLink>
              </li>
              <li>
                <NavLink to="/signup">SingUp</NavLink>
              </li>
            </Flex>
          </ul>
        </nav>
      </Header>
      <Layout>
        <Outlet />
      </Layout>
      <Footer />
    </Layout>
  );
};

export default Root;
