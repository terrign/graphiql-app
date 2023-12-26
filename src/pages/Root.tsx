import './root.css';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import AppFooter from '../components/Footer/Footer';

import AppHeader from '../components/Header/AppHeader';

const Root = () => {
  return (
    <Layout style={{ minHeight: '100dvh', height: 1 }}>
      <AppHeader />
      <Layout style={{ padding: 20 }}>
        <Outlet />
      </Layout>
      <AppFooter />
    </Layout>
  );
};

export default Root;
