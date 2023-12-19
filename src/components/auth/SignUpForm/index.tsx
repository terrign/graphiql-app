import { Form } from 'antd';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../auth';
import AuthForm from '../BaseAuthForm';
import { AuthFormValues } from '../types';
import useAuthForm from '../useAuthForm';

const SignUpForm = () => {
  const [signUp, , loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [form] = Form.useForm<AuthFormValues>();
  const onSubmit = useAuthForm({ form, error, action: signUp });

  return <AuthForm type="signUp" onSubmit={onSubmit} loading={loading} form={form} />;
};

export default SignUpForm;
