import { App, ConfigProvider, theme } from 'antd';

const AntDesingProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        components: {
          Layout: { headerBg: '#001529', bodyBg: '#292424', footerBg: 'rgba(0, 0, 0, 0.2);' },
          Spin: { colorPrimary: '#49aa19', dotSize: 26 },
        },
        token: { colorBgBase: '#292424', fontSize: 16 },
      }}
    >
      <App>{children}</App>
    </ConfigProvider>
  );
};

export default AntDesingProvider;
