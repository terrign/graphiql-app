import { Rule } from 'antd/es/form';

const VALID_PASSWORD_MATCHER = /^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*\d)(?=.*[\W_~!@#$%^&*+]).{8,}$/;

const FORM_STYLE = {
  maxWidth: 700,
  width: '100%',
  margin: '10dvh auto 0',
};

const FORM_ITEM_LAYOUT = {
  labelCol: {
    sm: { span: 8 },
    xs: { span: 24 },
  },
  wrapperCol: {
    sm: { span: 16 },
    xs: { span: 24 },
  },
};

const TAIL_FORM_ITEM_LAYOUT = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const formTypeMap = {
  signUp: {
    submitButton: 'Sign Up',
    tailAsk: 'Already have an account?',
    tailLink: '/signin',
    tailLinkText: 'Sign In',
  },
  signIn: {
    submitButton: 'Sign In',
    tailAsk: `Don't have an account yet?`,
    tailLink: '/signup',
    tailLinkText: 'Sign Up',
  },
};

const EMAIL_INPUT_RULES: Rule[] = [
  {
    type: 'email',
    message: 'Please enter valid E-mail',
  },
  {
    required: true,
    message: 'Please enter your E-mail!',
  },
];

const PASSWORD_INPUT_RULES: Rule[] = [
  {
    required: true,
    message: 'Please enter your password',
  },
  {
    pattern: VALID_PASSWORD_MATCHER,
    message:
      'Password must contain minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number',
  },
  () => ({
    validator(_, value: string) {
      if (value !== value.trim()) {
        return Promise.reject(new Error(`Passwords should not contain leading or trailing whitespace`));
      }
      return Promise.resolve();
    },
  }),
];

const CONFIRM_PASSWORD_INPUT_RULES: Rule[] = [
  {
    required: true,
    message: 'Please confirm your password',
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(`Passwords don't match`));
    },
  }),
];

export {
  CONFIRM_PASSWORD_INPUT_RULES,
  EMAIL_INPUT_RULES,
  FORM_ITEM_LAYOUT,
  FORM_STYLE,
  formTypeMap,
  PASSWORD_INPUT_RULES,
  TAIL_FORM_ITEM_LAYOUT,
};
