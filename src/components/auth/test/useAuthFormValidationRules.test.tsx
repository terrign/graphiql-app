import { renderHook } from '@testing-library/react';
import { expect } from 'vitest';
import { useAuthFormValidationRules } from '../useAuthFormValidationRules';
import { LocalizationProvider } from '../../../store/localization.context';

describe('useAuthFormValidationRules', () => {
  it('returns correct validation rules', async () => {
    const { result } = renderHook(() => useAuthFormValidationRules(), {
      wrapper: ({ children }) => <LocalizationProvider>{children}</LocalizationProvider>,
    });

    expect(result.current.emailRules).toHaveLength(2);
    expect(result.current.passRules).toHaveLength(3);
    expect(result.current.passConfirmRules).toHaveLength(2);
  });
});
