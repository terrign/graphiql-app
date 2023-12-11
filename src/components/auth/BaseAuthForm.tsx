import { Button, Form, Input, Spin, Typography } from 'antd';
import {
  CONFIRM_PASSWORD_INPUT_RULES,
  EMAIL_INPUT_RULES,
  FORM_ITEM_LAYOUT,
  FORM_STYLE,
  PASSWORD_INPUT_RULES,
  TAIL_FORM_ITEM_LAYOUT,
  formTypeMap,
} from './constants';
import { Link } from 'react-router-dom';
import { AuthFormProps } from './types';

const BaseAuthForm = ({ type, loading, onSubmit, form }: AuthFormProps) => {
  return (
    <Form {...FORM_ITEM_LAYOUT} form={form} name={type} onFinish={onSubmit} style={FORM_STYLE}>
      <Form.Item name="email" label="E-mail" rules={EMAIL_INPUT_RULES}>
        <Input />
      </Form.Item>

      <Form.Item name="password" label="Password" rules={PASSWORD_INPUT_RULES} hasFeedback validateFirst>
        <Input.Password allowClear={true} />
      </Form.Item>

      {type === 'signUp' && (
        <Form.Item
          name="confirm"
          label="Confirm password"
          dependencies={['password']}
          hasFeedback
          rules={CONFIRM_PASSWORD_INPUT_RULES}
        >
          <Input.Password allowClear={true} />
        </Form.Item>
      )}

      <Form.Item {...TAIL_FORM_ITEM_LAYOUT}>
        <Button type="primary" htmlType="submit" disabled={loading}>
          {formTypeMap[type].submitButton}
        </Button>
        {loading && <Spin style={{ marginLeft: 30 }} />}
      </Form.Item>

      <Form.Item {...TAIL_FORM_ITEM_LAYOUT}>
        <Typography.Paragraph>
          {formTypeMap[type].tailAsk} <Link to={formTypeMap[type].tailLink}>{formTypeMap[type].tailLinkText}</Link>
        </Typography.Paragraph>
      </Form.Item>
    </Form>
  );
};

export default BaseAuthForm;
