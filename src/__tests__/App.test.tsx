import { render, act } from '@testing-library/react';
import { expect } from 'vitest';
import { App } from '../App';

describe('App', () => {
  it('renders Router Component', async () => {
    let app;

    await act(async () => {
      app = render(<App />);
    });

    expect(app).toBeTruthy();
  });
});
