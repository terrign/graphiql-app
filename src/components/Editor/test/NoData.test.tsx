import React from 'react';
import { test } from 'vitest';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../../../store/index';
import type { AppStore, RootState } from '../../../store/index';
import nock from 'nock';
import ResultView from '../ResultView';
import { LocalizationProvider } from '../../../store/localization.context';

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
    return (
      <LocalizationProvider>
        <Provider store={store}>{children}</Provider>
      </LocalizationProvider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

test('NoData is rendered when no query is provided', () => {
  nock('https://rickandmortyapi.com')
    .post(
      '/graphql',
      JSON.stringify({
        query: '',
        variables: {},
      }),
    )
    .reply(200, {});

  const { getByTestId } = renderWithProviders(<ResultView className="" />, {
    preloadedState: {
      editor: {
        url: 'https://rickandmortyapi.com/graphql',
        headers: '',
        query: '',
        queryCacheKey: '',
        response: '',
        variables: '',
      },
    },
  });

  const noData = getByTestId('noData');
  expect(noData).toBeInTheDocument();
});
