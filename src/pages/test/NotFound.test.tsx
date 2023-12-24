import { render, screen } from '@testing-library/react';
// import { test } from 'vitest';
import { LocalizationProvider } from '../../store/localization.context';
import NotFound from '../NotFound';
import { MemoryRouter } from 'react-router-dom';
import Root from '../Root';

const wrongPath = '/kavabanga';

describe('NotFound', () => {
  it('renders 404 error message', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );
    const errorMessage = screen.getByText(/Sorry, the page you visited does not exist./i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders back home button', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );
    const backButton = screen.getByRole('button', { name: /back home/i });
    expect(backButton).toBeInTheDocument();
  });

  it('back home button links to home page', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );
    const backButton = screen.getByRole('link', { name: /back home/i });
    expect(backButton).toHaveAttribute('href', '/');
  });
  it('Redirects to NotFound for invalid path', async () => {
    render(
      <LocalizationProvider>
        <MemoryRouter initialEntries={[wrongPath]}>
          <Root />
        </MemoryRouter>
      </LocalizationProvider>,
    );

    const notFoundText = screen.findByText(/Sorry, the page you visited does not exist./i);
    expect(notFoundText).not.toBeNull();
  });
});
