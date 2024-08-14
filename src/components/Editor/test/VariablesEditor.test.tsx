import React from 'react';
import { test } from 'vitest';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../../../store/index';
import type { AppStore, RootState } from '../../../store/index';
import nock from 'nock';
import VariablesEditor from '../VariablesEditor';

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

test('the variables editor renders the variables correctly', () => {
  nock('https://rickandmortyapi.com')
    .post(
      '/graphql',
      (body) => body.query === 'query ($id: ID!) { character(id: $id) { name } }' && body.variables.id === 1,
    )
    .reply(200, {
      data: {
        character: {
          name: 'Rick Sanchez',
        },
      },
    });

  const { getByText } = renderWithProviders(<VariablesEditor />, {
    preloadedState: {
      editor: {
        url: 'https://rickandmortyapi.com/graphql',
        headers: '',
        query: 'query ($id: ID!) { character(id: $id) { name } }',
        queryCacheKey: '',
        response: '',
        variables: JSON.stringify({ id: 1 }),
      },
    },
  });

  const variables = getByText(`{"id":1}`);
  expect(variables).toBeInTheDocument();
});
