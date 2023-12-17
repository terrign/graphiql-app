import './root.css';
import { Flex, Layout, Menu, Switch } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import AppFooter from '../components/Footer/Footer';
import { useLocalization } from '../store/context';
import { useIdToken } from 'react-firebase-hooks/auth';
import { auth } from '../auth';

const Root = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const localization = useLocalization();
  const [user] = useIdToken(auth);
  const items = [
    { key: '/', elem: <NavLink to="/">{localization.text['nav-links'][0]}</NavLink> },
    { key: '/main', elem: <NavLink to="/main">{localization.text['nav-links'][1]}</NavLink> },
    { key: '/signin', elem: <NavLink to="/signin">{localization.text['nav-links'][2]}</NavLink> },
    { key: '/signup', elem: <NavLink to="/signup">{localization.text['nav-links'][3]}</NavLink> },
  ];
  const [menuItems, setMenuItems] = useState(items);

  useEffect(() => {
    if (user) {
      setMenuItems(items.slice(0, 2));
    }
  }, [user]);

  useEffect(() => {
    const handleScroll = () => (window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false));
    window.onscroll = handleScroll;
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <Layout style={{ minHeight: '100dvh' }}>
      <Header className={`header ${isScrolled && 'scrolled'}`}>
        <Flex align="center">
          <Menu
            className={isScrolled ? 'scrolled' : ''}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[pathname]}
            items={menuItems.map((item) => ({ key: item.key, label: item.elem }))}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
          <Switch
            onChange={(e) => localization.changeLanguage(e.valueOf() ? 'en' : 'ru')}
            checkedChildren="en"
            unCheckedChildren="ru"
            defaultChecked
          />
        </Flex>
      </Header>
      <Layout style={{ padding: 20 }}>
        <Outlet />
      </Layout>
      <AppFooter />
    </Layout>
  );
};

export default Root;
