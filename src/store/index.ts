import { combineReducers, configureStore } from '@reduxjs/toolkit';
import editor from './editor.slice';

const reducer = combineReducers({
  editor,
});

const store = configureStore({
  reducer,
  devTools: true,
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default store;
