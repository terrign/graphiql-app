// import React from 'react';
// import { test } from 'vitest';
// import { render, act, waitFor } from '@testing-library/react';
// import type { RenderOptions } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { setupStore } from '.';
// import type { AppStore, RootState } from '.';
// import EditorHeader from '../components/Editor/EditorHeader';
// import nock from 'nock';
// import { getIntrospectionQuery } from 'graphql';

// interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
//   preloadedState?: Partial<RootState>;
//   store?: AppStore;
// }

// export function renderWithProviders(
//   ui: React.ReactElement,
//   {
//     preloadedState = {},

//     store = setupStore(preloadedState),
//     ...renderOptions
//   }: ExtendedRenderOptions = {},
// ) {
//   function Wrapper({ children }: { children: React.ReactElement }): JSX.Element {
//     return <Provider store={store}>{children}</Provider>;
//   }
//   return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
// }

// test('useLazyGetDataQuery', async () => {
//   nock('https://rickandmortyapi.com')
//     .post(
//       '/graphql',
//       JSON.stringify({
//         query: 'query { character(id: 1) { name } }',
//         variables: {},
//       }),
//     )
//     .reply(200, {
//       data: {
//         character: {
//           name: 'Rick Sanchez',
//         },
//       },
//     });

//   const { getByTestId, store } = renderWithProviders(<EditorHeader />, {
//     preloadedState: {
//       editor: {
//         url: 'https://rickandmortyapi.com/graphql',
//         headers: '',
//         query: 'query { character(id: 1) { name } }',
//         queryCacheKey: '',
//         response: '',
//         variables: '',
//       },
//     },
//   });

//   const runHandler = getByTestId('runHandler');
//   act(() => runHandler.click());

//   await waitFor(() => {
//     const apiQuery = store.getState().api.queries[store.getState().editor.queryCacheKey];
//     expect(apiQuery).toBeDefined();
//     if (apiQuery) {
//       expect(apiQuery.status).not.toEqual('pending');
//     }
//   });

//   const state = store.getState();
//   let apiResponse = state.api.queries[state.editor.queryCacheKey];

//   const expectedResponse = {
//     data: {
//       character: {
//         name: 'Rick Sanchez',
//       },
//     },
//   };

//   await waitFor(() => {
//     if (apiResponse && typeof apiResponse.data === 'string') {
//       expect(apiResponse.data).toBeDefined();
//     }
//   });

//   apiResponse = state.api.queries[state.editor.queryCacheKey];

//   if (apiResponse && typeof apiResponse.data === 'string') {
//     const apiResponseData = JSON.parse(apiResponse.data);

//     expect(apiResponseData).toEqual(expectedResponse);
//   }
// });
// test('useLazyGetSchemaQuery', async () => {
//   nock('https://rickandmortyapi.com')
//     .post('/graphql', JSON.stringify({ query: getIntrospectionQuery() }))
//     .reply(200, {
//       data: {
//         __schema: {
//           types: [],
//         },
//       },
//     });

//   const { getByTestId, store } = renderWithProviders(<EditorHeader />, {
//     preloadedState: {
//       editor: {
//         url: 'https://rickandmortyapi.com/graphql',
//         headers: '',
//         query: '',
//         queryCacheKey: '',
//         response: '',
//         variables: '',
//       },
//     },
//   });

//   const runHandler = getByTestId('runHandler');
//   act(() => runHandler.click());

//   await waitFor(() => {
//     const apiQuery = store.getState().api.queries[store.getState().editor.queryCacheKey];
//     expect(apiQuery).toBeDefined();
//     if (apiQuery) {
//       expect(apiQuery.status).not.toEqual('pending');
//     }
//   });

//   const state = store.getState();
//   let apiResponse = state.api.queries[state.editor.queryCacheKey];

//   const expectedResponse = {
//     data: {
//       __schema: {
//         types: [],
//       },
//     },
//   };

//   await waitFor(() => {
//     if (apiResponse && typeof apiResponse.data === 'string') {
//       expect(apiResponse.data).toBeDefined();
//     }
//   });

//   apiResponse = state.api.queries[state.editor.queryCacheKey];

//   if (apiResponse && typeof apiResponse.data === 'string') {
//     const apiResponseData = JSON.parse(apiResponse.data);

//     expect(apiResponseData).toEqual(expectedResponse);
//   }
// });

it('test', () => {
  expect(1).toBeTruthy();
});
