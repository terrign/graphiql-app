import { Flex, Menu, Switch } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useLocalization } from '../../store/localization.context';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { createMenuItems } from './createMenuItems';
import { useIdToken } from 'react-firebase-hooks/auth';
import { auth } from '../../auth';

const AppHeader = () => {
  const localization = useLocalization();
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const [user] = useIdToken(auth);
  const [menuItems, setMenuItems] = useState<
    {
      key: string;
      elem: JSX.Element;
    }[]
  >([]);
  useEffect(() => {
    if (user) {
      setMenuItems(createMenuItems(true, localization.t['nav-links']));
    } else {
      setMenuItems(createMenuItems(false, localization.t['nav-links']));
    }
    setIsUserLoaded(true);
  }, [user, isUserLoaded, localization.lang]);
  useEffect(() => {
    const handleScroll = () => (window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false));
    window.onscroll = handleScroll;
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    isUserLoaded && (
      <Header className={`header ${isScrolled && 'scrolled'}`}>
        <Flex align="center">
          <Menu
            className={isScrolled ? 'scrolled' : ''}
            theme="dark"
            mode="horizontal"
            selectedKeys={[pathname]}
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
            defaultChecked={localization.lang === 'en'}
          />
        </Flex>
      </Header>
    )
  );
};
export default AppHeader;