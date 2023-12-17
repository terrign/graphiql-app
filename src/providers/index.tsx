import { LocalizationProvider } from '../store/context';
import AntDesingProvider from './AntDesign';
import StoreProvider from './Store';

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <StoreProvider>
      <LocalizationProvider>
        <AntDesingProvider>{children}</AntDesingProvider>
      </LocalizationProvider>
    </StoreProvider>
  );
};

export default Providers;
