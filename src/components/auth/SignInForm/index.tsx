import { App, Form } from 'antd';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../auth';
import { useEffect } from 'react';
import AuthForm from '../BaseAuthForm';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const [signIn, , loading, error] = useSignInWithEmailAndPassword(auth);
  const [form] = Form.useForm();
  const { notification } = App.useApp();
  const nav = useNavigate();

  useEffect(() => {
    if (error) {
      notification.error({
        message: 'Sign In Error',
        description: 'Invalid Credentials',
        placement: 'topRight',
      });
    }
  }, [error, notification]);

  const onSubmit = async () => {
    const { email, password } = form.getFieldsValue();
    const res = await signIn(email, password);
    if (res) {
      nav('/main');
    }
  };

  return <AuthForm type="signIn" onSubmit={onSubmit} loading={loading} form={form} />;
};

export default SignInForm;
