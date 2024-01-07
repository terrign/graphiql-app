import { render, fireEvent } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

const Child = () => {
  try {
    throw new Error('test error');
  } catch {
    throw new Error('test error');
  }
};

describe('ErrorBoundary', () => {
  it('renders children when there is no error', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <div>Test child</div>
      </ErrorBoundary>,
    );
    expect(getByText('Test child')).toBeInTheDocument();
  });
  it('displays error message and reload button when there is an error', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ErrorBoundary>
          <Child />
        </ErrorBoundary>
        ,
      </MemoryRouter>,
    );
    expect(getByText('Oops, something went wrong')).toBeInTheDocument();
    expect(getByText('Error message: test error')).toBeInTheDocument();
    expect(getByText('Try to reload')).toBeInTheDocument();
  });

  it('reloads the page when the reload button is clicked', () => {
    const locationMock = {
      ...window.location,
      reload: vi.fn(),
    };
    Object.defineProperty(window, 'location', { value: locationMock });
    const { getByText } = render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>,
    );
    fireEvent.click(getByText('Try to reload'));
    expect(locationMock.reload).toHaveBeenCalled();
  });
});
