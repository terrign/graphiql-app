import { Flex, Layout } from 'antd';
import { Footer, Header } from 'antd/es/layout/layout';
import { useSignOut } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import { auth } from '../auth';

const Root = () => {
  const [signOut] = useSignOut(auth);

  const onclick = () => {
    signOut();
  };
  return (
    <Layout style={{ height: '100dvh' }}>
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
                <NavLink to="/signin">SingIn</NavLink>
              </li>
              <li>
                <NavLink to="/signup">SingUp</NavLink>
              </li>
              <li>
                <button onClick={onclick}>signOut</button>
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
