import './root.css';
import { Flex, Layout, Menu, Switch } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import AppFooter from '../components/Footer/Footer';

const Root = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => (window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false));
    window.onscroll = handleScroll;
    return () => {
      window.onscroll = null;
    };
  }, []);

  const items = [
    { key: '/', elem: <NavLink to="/">Welcome</NavLink> },
    { key: '/main', elem: <NavLink to="/main">Main</NavLink> },
    { key: '/signin', elem: <NavLink to="/signin">SingIn</NavLink> },
    { key: '/signup', elem: <NavLink to="/signup">SingUp</NavLink> },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className={`header ${isScrolled && 'scrolled'}`}>
        <Flex align="center">
          <Menu
            className={isScrolled ? 'scrolled' : ''}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[pathname]}
            items={items.map((item) => ({ key: item.key, label: item.elem }))}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
          <Switch checkedChildren="en" unCheckedChildren="ru" defaultChecked />
        </Flex>
      </Header>
      <Layout style={{ backgroundColor: '#fff', padding: 20 }}>
        <Outlet />
      </Layout>
      <AppFooter />
    </Layout>
  );
};

export default Root;
