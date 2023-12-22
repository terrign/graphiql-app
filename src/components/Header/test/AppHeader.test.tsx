import { fireEvent, render, screen } from '@testing-library/react';
import AppHeader from '../AppHeader';
import { LocalizationProvider } from '../../../store/localization.context';
import { MemoryRouter } from 'react-router-dom';

describe('AppHeader', () => {
  it('should render header with menu and language switch', () => {
    render(
      <LocalizationProvider>
        <MemoryRouter>
          <AppHeader />
        </MemoryRouter>
      </LocalizationProvider>,
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getByText(/en/i)).toBeInTheDocument();
    expect(screen.getByText(/ru/i)).toBeInTheDocument();
  });
  it('should change language when switch is clicked', () => {
    render(
      <LocalizationProvider>
        <MemoryRouter>
          <AppHeader />
        </MemoryRouter>
      </LocalizationProvider>,
    );
    const switchEl = screen.getByRole('switch');
    expect(switchEl).toBeInTheDocument();
    fireEvent.click(switchEl);
    expect(localStorage.getItem('lang')).toEqual('ru');
  });
});
