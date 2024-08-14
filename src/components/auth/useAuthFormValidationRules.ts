import { Rule } from 'antd/es/form';
import { useLocalization } from '../../store/localization.context';
import { VALID_PASSWORD_MATCHER } from './constants';
import { useMemo } from 'react';

export const useAuthFormValidationRules = (): Record<'emailRules' | 'passRules' | 'passConfirmRules', Rule[]> => {
  const loc = useLocalization().t;
  const key = 'form/validation';
  const emailRules: Rule[] = useMemo(
    () => [
      {
        type: 'email',
        message: loc[key].emailInvalid,
      },
      {
        required: true,
        message: loc[key].emailRequired,
      },
    ],
    [loc],
  );

  const passRules: Rule[] = useMemo(
    () => [
      {
        required: true,
        message: loc[key].passRequired,
      },
      {
        pattern: VALID_PASSWORD_MATCHER,
        message: loc[key].passWeak,
      },
      () => ({
        validator(_, value: string) {
          if (value !== value.trim()) {
            return Promise.reject(new Error(loc[key].passSpaces));
          }
          return Promise.resolve();
        },
      }),
    ],
    [loc],
  );

  const passConfirmRules: Rule[] = useMemo(
    () => [
      {
        required: true,
        message: loc[key].passConfirmRequired,
      },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error(loc[key].passConfirmMatch));
        },
      }),
    ],
    [loc],
  );
  return { emailRules, passRules, passConfirmRules };
};

export default useAuthFormValidationRules;
