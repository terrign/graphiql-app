import React from 'react';
import { test } from 'vitest';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../../../store/index';
import type { AppStore, RootState } from '../../../store/index';
import nock from 'nock';
import QueryEditor from '../QueryEditor';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},

    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: { children: React.ReactElement }): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

test('the query is rendered in the editor', () => {
  nock('https://rickandmortyapi.com')
    .post(
      '/graphql',
      JSON.stringify({
        query: 'query { character(id: 1) { name } }',
        variables: {},
      }),
    )
    .reply(200, {});

  const { getByText } = renderWithProviders(<QueryEditor className="" />, {
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

  const noData = getByText('query { character(id: 1) { name } }');
  expect(noData).toBeInTheDocument();
});
