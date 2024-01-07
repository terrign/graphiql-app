import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import { signOut } from 'firebase/auth';
import { auth } from '../../auth';

export const createMenuItems = (isAuth: boolean, itemsName: string[]) => {
  const menuItems = [
    { key: '/', elem: <NavLink to="/">{itemsName[0]}</NavLink> },
    { key: '/main', elem: <NavLink to="/main">{itemsName[1]}</NavLink> },
  ];
  const anonMenuItems = [
    { key: '/signin', elem: <NavLink to="/signin">{itemsName[2]}</NavLink> },
    { key: '/signup', elem: <NavLink to="/signup">{itemsName[3]}</NavLink> },
  ];
  const authMenuItems = [{ key: '/signout', elem: <Button onClick={() => signOut(auth)}>{itemsName[4]}</Button> }];
  return isAuth ? [...menuItems, ...authMenuItems] : [...menuItems, ...anonMenuItems];
};
