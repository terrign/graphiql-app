import { render, screen } from '@testing-library/react';
import Arguments from '../Arguments';
import { IntrospectionField } from 'graphql';
import { vi } from 'vitest';

describe('Arguments Component', () => {
  const handleClickArgumentMock = vi.fn();

  const field = {
    name: 'exampleField',
    type: { name: 'String' },
    args: [
      { name: 'arg1', type: { name: 'String' } },
      { name: 'arg2', type: { name: 'Int' } },
    ],
    isDeprecated: false,
    deprecationReason: '',
  };

  it('renders argument labels and types correctly', () => {
    render(<Arguments field={field as unknown as IntrospectionField} handleClickArgument={handleClickArgumentMock} />);

    const arg1Label = screen.getByText(/arg1:/i);
    const arg2Label = screen.getByText(/arg2:/i);

    expect(arg1Label).toBeInTheDocument();
    expect(arg2Label).toBeInTheDocument();
  });
});
