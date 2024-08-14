import { fireEvent, render, screen } from '@testing-library/react';
import Docs from '../Docs';
import { LocalizationProvider } from '../../../store/localization.context';
import { getIntrospectionQuery } from 'graphql';

async function fetchSchema() {
  const response = await fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ query: getIntrospectionQuery() }),
  });

  if (response.status >= 500 && response.status <= 599) {
    throw new Error('500 Internal Server Error');
  }

  const responseJSON = await response.json();

  return responseJSON.data.__schema;
}

describe('Docs component', async () => {
  const schema = await fetchSchema();
  it('renders the component with root fields', async () => {
    render(
      <LocalizationProvider>
        <Docs visibility={true} schema={schema} />
      </LocalizationProvider>,
    );
    const rootFields = screen.getAllByTestId('root-elem');
    expect(rootFields.length).toBeGreaterThan(0);
  });

  it('renders the component without root fields', () => {
    const { container } = render(
      <LocalizationProvider>
        <Docs visibility={true} schema={null} />
      </LocalizationProvider>,
    );
    const rootFields = container.querySelectorAll('.root-field');
    expect(rootFields.length).toBe(0);
  });

  it('displays the name header correctly', async () => {
    render(
      <LocalizationProvider>
        <Docs visibility={true} schema={schema} />
      </LocalizationProvider>,
    );
    const nameHeader = screen.getByRole('heading', { level: 3 });
    expect(nameHeader).toHaveTextContent('Documentation Explorer');
  });

  it('displays the description correctly', async () => {
    render(
      <LocalizationProvider>
        <Docs visibility={true} schema={schema} />
      </LocalizationProvider>,
    );
    const description = screen.getByText('A GraphQL schema provides a root type for each kind of operation.');
    expect(description).toBeInTheDocument();
  });

  it('displays the root component when stack length is 1', () => {
    render(
      <LocalizationProvider>
        <Docs visibility={true} schema={schema} />
      </LocalizationProvider>,
    );
    const rootComponent = screen.getByTestId('root-elem');
    expect(rootComponent).toBeInTheDocument();
  });

  it('displays the fields', () => {
    render(
      <LocalizationProvider>
        <Docs visibility={true} schema={schema} />
      </LocalizationProvider>,
    );
    const rootComponent = screen.getByText(/query/i);
    fireEvent.click(rootComponent);
    const field = screen.getByText(/episodesByIds/i);
    expect(field).toBeInTheDocument();
  });
});
