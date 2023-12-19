interface Error {
  message: string;
  description: string;
}

export type ErrorCode = 'auth/too-many-requests' | 'auth/invalid-credential' | 'auth/email-already-in-use';
interface Localization {
  buttonLabel: string;
  ['auth/too-many-requests']: Error;
  ['auth/invalid-credential']: Error;
  ['auth/email-already-in-use']: Error;
}

export const localization: { ru: Localization; en: Localization } = {
  ru: {
    'buttonLabel': 'Отправить запрос',
    'auth/too-many-requests': {
      message: 'Слишком частые запросы',
      description:
        'Доступ к этой учетной записи временно отключен из-за множества неудачных попыток входа. Вы можете немедленно восстановить его, сбросив пароль, или повторить попытку позже.',
    },
    'auth/invalid-credential': {
      message: 'Неверные учетные данные',
      description: 'Неверный логин или пароль',
    },
    'auth/email-already-in-use': {
      message: 'Емеил занят',
      description:
        'Аккаунт с таким емейлом уже используется. Если емеил принадлежит вам, попробуйте восстановить доступ',
    },
  },
  en: {
    'buttonLabel': 'Submit query',
    'auth/too-many-requests': {
      message: 'Too many requests',
      description:
        'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.',
    },
    'auth/invalid-credential': {
      message: 'Invalid credentials',
      description: 'Invalid e-mail or password',
    },
    'auth/email-already-in-use': {
      message: 'Email already in use',
      description: 'An account with this email is already in use. If the email belongs to you, try to restore access',
    },
  },
};
