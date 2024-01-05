interface Error {
  message: string;
  description: string;
}

interface FormLoc {
  submitButton: string;
  tailAsk: string;
  tailLinkText: string;
}

interface FormValidationLoc {
  emailInvalid: string;
  emailRequired: string;
  passRequired: string;
  passWeak: string;
  passSpaces: string;
  passConfirmRequired: string;
  passConfirmMatch: string;
}

export type ErrorCode = 'auth/too-many-requests' | 'auth/invalid-credential' | 'auth/email-already-in-use';
interface Localization {
  'buttonLabel': string;
  ['auth/too-many-requests']: Error;
  ['auth/invalid-credential']: Error;
  ['auth/email-already-in-use']: Error;
  ['welcome-page/title']: string;
  ['welcome-page/paragraph1']: string;
  ['welcome-page/paragraph2']: string;
  ['welcome-page/paragraph3']: string;
  ['welcome-page/team-title']: string;
  ['dev-names']: string[];
  ['nav-links']: string[];
  'form/emailLabel': string;
  'form/passwordLabel': string;
  'form/confirmPasswordLabel': string;
  'signUp': FormLoc;
  'signIn': FormLoc;
  'form/validation': FormValidationLoc;
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
    'welcome-page/title': 'Приветствуем, дорогой пользователь',
    'welcome-page/paragraph1':
      'Это итоговое задание курса React Rs School. GraphiQL — это интерфейсное приложение для GraphQL, которое позволяет разработчикам запрашивать данные со своего внутреннего сервера и манипулировать ими через интуитивно понятный пользовательский интерфейс.',
    'welcome-page/paragraph2':
      'Мы ищем новые технологии и готовы использовать их на ходу в наших проектах. Мы использовали разделение рабочей нагрузки по задачам вместо разделения по областям, поэтому каждый внес свой доход в каждую функцию в этом проекте.',
    'welcome-page/paragraph3':
      'Мы готовы помочь друг другу. Мы можем изучить как можно больше нового и собраться вместе, чтобы поделиться своими знаниями.',
    'welcome-page/team-title': 'Наша команда',
    'dev-names': ['Алексей Филиппович', 'Андрей Зецманис', 'Юлия Чекан'],
    'nav-links': ['Приветствие', 'Главная', 'Войти', 'Регистрация', 'Выйти'],
    'form/emailLabel': 'Eмеил',
    'form/passwordLabel': 'Пароль',
    'form/confirmPasswordLabel': 'Повторите пароль',
    'signUp': {
      submitButton: 'Регистрация',
      tailAsk: 'Есть аккаунт?',
      tailLinkText: 'Войти',
    },
    'signIn': {
      submitButton: 'Войти',
      tailAsk: `Еще нет аккаунта?`,
      tailLinkText: 'Регистрация',
    },
    'form/validation': {
      emailInvalid: 'Неверный емеил',
      emailRequired: 'Пожалуйста, введите емеил',
      passRequired: 'Пожалуйста, введите пароль',
      passWeak: 'Пароль должен содержать минимум 8 символов, минимум 1 заглавную букву, 1 строчную букву и 1 цифру',
      passSpaces: 'Пароль не должны содержать пробелы в начале или в конце.',
      passConfirmRequired: 'Пожалуйста, подтвердите пароль',
      passConfirmMatch: `Пароли не совпадают`,
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

    'welcome-page/title': 'Welcome page',
    'welcome-page/paragraph1':
      'This is final task for course React Rs School. GraphiQL is a frontend application for GraphQL that allows developers to query and manipulate data from their backend server through an intuitive user interface.',
    'welcome-page/paragraph2':
      'We are looking for new technologies and ready to use them on the go in our projects. We used workload segregation by tasks instead of segregation by areas therefore everyone made his own income to every feature in this project.',
    'welcome-page/paragraph3':
      'We are ready to help each other on demand. We can spread out to investigate as much as possible and get together to share our knowledge.',
    'welcome-page/team-title': 'Our team',
    'dev-names': ['Alexey Filipovich', 'Andrei Zetsmanis', 'Yuliya Chekan'],
    'nav-links': ['Welcome', 'Main', 'SignIn', 'SignUp', 'SignOut'],
    'form/emailLabel': 'E-mail',
    'form/passwordLabel': 'Password',
    'form/confirmPasswordLabel': 'Confirm password',
    'signUp': {
      submitButton: 'Sign Up',
      tailAsk: 'Already have an account?',
      tailLinkText: 'Sign In',
    },
    'signIn': {
      submitButton: 'Sign In',
      tailAsk: `Don't have an account yet?`,
      tailLinkText: 'Sign Up',
    },
    'form/validation': {
      emailInvalid: 'Please enter valid E-mail',
      emailRequired: 'Please enter your E-mail',
      passRequired: 'Please enter your password',
      passWeak:
        'Password must contain minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number',
      passSpaces: 'Passwords should not contain leading or trailing whitespace',
      passConfirmRequired: 'Please confirm your password',
      passConfirmMatch: `Passwords don't match`,
    },
  },
};
