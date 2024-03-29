import { Provider } from 'react-redux';
import store from '../store';

const StoreProvider = ({ children }: React.PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
