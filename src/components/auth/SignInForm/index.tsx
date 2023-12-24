import { Form } from 'antd';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../auth';
import AuthForm from '../BaseAuthForm';
import { AuthFormValues } from '../types';
import useAuthForm from '../useAuthForm';

const SignInForm = () => {
  const [signIn, , loading, error] = useSignInWithEmailAndPassword(auth);
  const [form] = Form.useForm<AuthFormValues>();
  const onSubmit = useAuthForm({ form, error, action: signIn });

  return <AuthForm type="signIn" onSubmit={onSubmit} loading={loading} form={form} />;
};

export default SignInForm;
