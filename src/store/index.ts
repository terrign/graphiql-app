import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import editor from './editor.slice';

interface Action {
  type: string;
  payload?: unknown;
}

const reducer = combineReducers({
  editor,
  [api.reducerPath]: api.reducer,
  isLoading: (state = false, action: Action) => {
    switch (action.type) {
      case 'START_LOADING':
        return true;
      case 'STOP_LOADING':
        return false;
      default:
        return state;
    }
  },
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    preloadedState,
  });
};

const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default store;
