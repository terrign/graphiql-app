import { Button, Form, Input, Typography } from 'antd';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../../auth';
import {
  CONFIRM_PASSWORD_INPUT_RULES,
  EMAIL_INPUT_RULES,
  FORM_ITEM_LAYOUT,
  PASSWORD_INPUT_RULES,
  TAIL_FORM_ITEM_LAYOUT,
} from '../constants';

const SignUpForm = () => {
  const [form] = Form.useForm();
  const [signUp] = useCreateUserWithEmailAndPassword(auth);

  const onFinish = async () => {
    const { email, password } = form.getFieldsValue();
    signUp(email, password);
  };

  return (
    <Form
      {...FORM_ITEM_LAYOUT}
      form={form}
      name="signup"
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

      <Form.Item name="password" label="Password" rules={PASSWORD_INPUT_RULES} hasFeedback validateFirst>
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm password"
        dependencies={['password']}
        hasFeedback
        rules={CONFIRM_PASSWORD_INPUT_RULES}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...TAIL_FORM_ITEM_LAYOUT}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>

      <Form.Item {...TAIL_FORM_ITEM_LAYOUT}>
        <Typography.Paragraph>
          Already have an account? <Link to="/auth/signin">Sign In</Link>
        </Typography.Paragraph>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
