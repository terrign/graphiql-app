import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../auth';
import AuthForm from '../BaseAuthForm';
import { useNavigate } from 'react-router-dom';
import { Form } from 'antd';

const SignUpForm = () => {
  const [signUp, , loading] = useCreateUserWithEmailAndPassword(auth);
  const [form] = Form.useForm();
  const nav = useNavigate();

  const onSubmit = async () => {
    const { email, password } = form.getFieldsValue();
    const res = await signUp(email, password);
    if (res) {
      nav('/main');
    }
  };

  return <AuthForm type="signUp" onSubmit={onSubmit} loading={loading} form={form} />;
};

export default SignUpForm;
