import AntDesingProvider from './AntDesign';
import StoreProvider from './Store';

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <StoreProvider>
      <AntDesingProvider>{children}</AntDesingProvider>
    </StoreProvider>
  );
};

export default Providers;
