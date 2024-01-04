import React from 'react';
import { test } from 'vitest';
import { render, act } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '.';
import type { AppStore, RootState } from '.';
import EditorHeader from '../components/Editor/EditorHeader';
import nock from 'nock';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: { children: React.ReactElement }): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

test('useLazyGetDataQuery', () => {
  nock('https://rickandmortyapi.com')
    .post(
      '/graphql',
      JSON.stringify({
        query: 'query { character(id: 1) { name } }',
        variables: {},
      }),
    )
    .reply(200, {
      data: {
        character: {
          name: 'Rick Sanchez',
        },
      },
    });

  const { getByTestId, store } = renderWithProviders(<EditorHeader />, {
    preloadedState: {
      editor: {
        url: 'https://rickandmortyapi.com/graphql',
        headers: '',
        query: 'query { character(id: 1) { name } }',
        queryCacheKey: '',
        response: '',
        variables: '',
      },
    },
  });

  const runHandler = getByTestId('runHandler');
  act(() => runHandler.click());

  //console.log(store.getState().api.queries[store.getState().editor.queryCacheKey]);
});
