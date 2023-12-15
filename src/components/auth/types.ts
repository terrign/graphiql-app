import { FormInstance } from 'antd';

export interface AuthFormValues {
  email: string;
  password: string;
  confirm?: string;
}

export interface AuthFormProps {
  type: 'signIn' | 'signUp';
  form: FormInstance<AuthFormValues>;
  loading: boolean;
  onSubmit: ((values: AuthFormValues) => void) | undefined;
}
