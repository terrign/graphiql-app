import { App, ConfigProvider, theme } from 'antd';

const AntDesingProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        components: { Layout: { headerBg: '#292424', bodyBg: '#292424' } },
        token: { colorBgBase: '#292424', fontSize: 16 },
      }}
    >
      <App>{children}</App>
    </ConfigProvider>
  );
};

export default AntDesingProvider;
