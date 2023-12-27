import { createSlice } from '@reduxjs/toolkit';

export interface EditorState {
  url: string;
  query: string;
  headers: string;
  variables: string;
  queryCacheKey: string;
  response: string;
}

const initialState: EditorState = {
  url: '',
  query: '',
  headers: '',
  variables: '',
  queryCacheKey: '',
  response: '',
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setHeaders: (state, action) => {
      state.headers = action.payload;
    },
    setVariables: (state, action) => {
      state.variables = action.payload;
    },
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    setQueryCacheKey: (state, action) => {
      state.queryCacheKey = action.payload;
    },
    setResponse: (state, action) => {
      state.response = action.payload;
    },
  },
});

export const { setQuery, setHeaders, setVariables, setUrl, setQueryCacheKey, setResponse } = editorSlice.actions;

const editor = editorSlice.reducer;

export default editor;
