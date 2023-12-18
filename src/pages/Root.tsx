import './root.css';
import { Button, Flex, Layout, Menu, Switch } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import AppFooter from '../components/Footer/Footer';
import { useLocalization } from '../store/context';
import { useIdToken } from 'react-firebase-hooks/auth';
import { auth } from '../auth';
import { signOut } from 'firebase/auth';

const Root = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const localization = useLocalization();
  const [user] = useIdToken(auth);
  const anonMenuItems = [
    { key: '/', elem: <NavLink to="/">{localization.t['nav-links'][0]}</NavLink> },
    { key: '/main', elem: <NavLink to="/main">{localization.t['nav-links'][1]}</NavLink> },
    { key: '/signin', elem: <NavLink to="/signin">{localization.t['nav-links'][2]}</NavLink> },
    { key: '/signup', elem: <NavLink to="/signup">{localization.t['nav-links'][3]}</NavLink> },
  ];
  const authMenuItems = [
    { key: '/', elem: <NavLink to="/">{localization.t['nav-links'][0]}</NavLink> },
    { key: '/main', elem: <NavLink to="/main">{localization.t['nav-links'][1]}</NavLink> },
    { key: '/signout', elem: <Button onClick={() => signOut(auth)}>SignOut</Button> },
  ];
  const [menuItems, setMenuItems] = useState<
    {
      key: string;
      elem: JSX.Element;
    }[]
  >(anonMenuItems.slice(0, 2));

  useEffect(() => {
    if (user) {
      setMenuItems(authMenuItems);
    } else {
      setMenuItems(anonMenuItems);
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
