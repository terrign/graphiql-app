import { App, Button, Form, Input, Typography } from 'antd';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../../auth';
import { EMAIL_INPUT_RULES, FORM_ITEM_LAYOUT, PASSWORD_INPUT_RULES, TAIL_FORM_ITEM_LAYOUT } from '../constants';
import { useEffect } from 'react';

const SignInForm = () => {
  const [form] = Form.useForm();
  const [signIn, _, , error] = useSignInWithEmailAndPassword(auth);
  const { notification } = App.useApp();

  const onFinish = async () => {
    const { email, password } = form.getFieldsValue();
    signIn(email, password);
  };

  useEffect(() => {
    if (error) {
      notification.error({
        message: 'Sign In Error',
        description: 'Invalid Credentials',
        placement: 'topRight',
      });
    }
  }, [error, notification]);

  return (
    <Form
      {...FORM_ITEM_LAYOUT}
      form={form}
      name="signin"
      onFinish={onFinish}
      style={{
        maxWidth: 700,
        width: '100%',
        margin: '0 auto',
      }}
    >
      <Form.Item name="email" label="E-mail" rules={EMAIL_INPUT_RULES}>
        <Input />
      </Form.Item>

      <Form.Item name="password" label="Password" rules={[PASSWORD_INPUT_RULES[0]]}>
        <Input.Password autoComplete="asdfasdfasdf" />
      </Form.Item>

      <Form.Item {...TAIL_FORM_ITEM_LAYOUT}>
        <Button type="primary" htmlType="submit">
          Sign In
        </Button>
      </Form.Item>

      <Form.Item {...TAIL_FORM_ITEM_LAYOUT}>
        <Typography.Paragraph>
          Don't have an account yet? <Link to="/auth/signup">Sign Up</Link>
        </Typography.Paragraph>
      </Form.Item>
    </Form>
  );
};

export default SignInForm;
