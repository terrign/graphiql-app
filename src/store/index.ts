import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import editor from './editor.slice';

const reducer = combineReducers({
  editor,
  [api.reducerPath]: api.reducer,
});

const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default store;
