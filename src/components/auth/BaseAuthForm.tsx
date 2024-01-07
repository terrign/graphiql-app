import { Button, Form, Input, Spin, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { FORM_ITEM_LAYOUT, FORM_STYLE, TAIL_FORM_ITEM_LAYOUT } from './constants';
import { AuthFormProps } from './types';
import { useLocalization } from '../../store/localization.context';
import useAuthFormValidationRules from './useAuthFormValidationRules';
import { useCallback, useEffect } from 'react';

const BaseAuthForm = ({ type, loading, onSubmit, form }: AuthFormProps) => {
  const { t, lang } = useLocalization();
  const { emailRules, passConfirmRules, passRules } = useAuthFormValidationRules();

  const revalidateOnLangChange = useCallback(
    () =>
      ['email', 'password', 'confirmPassword'].forEach((a) => {
        if (form.isFieldTouched(a)) {
          form.validateFields([a]);
        }
      }),
    [],
  );

  useEffect(() => {
    revalidateOnLangChange();
  }, [lang]);

  return (
    <Form {...FORM_ITEM_LAYOUT} form={form} name={type} onFinish={onSubmit} style={FORM_STYLE}>
      <Form.Item name="email" label={t['form/emailLabel']} rules={emailRules}>
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label={t['form/passwordLabel']}
        rules={type === 'signUp' ? passRules : undefined}
        hasFeedback
        validateFirst
      >
        <Input.Password allowClear={true} />
      </Form.Item>

      {type === 'signUp' && (
        <Form.Item
          name="confirm"
          label={t['form/confirmPasswordLabel']}
          dependencies={['password']}
          hasFeedback
          rules={passConfirmRules}
        >
          <Input.Password allowClear={true} />
        </Form.Item>
      )}

      <Form.Item {...TAIL_FORM_ITEM_LAYOUT}>
        <Button type="primary" htmlType="submit" disabled={loading}>
          {t[type].submitButton}
        </Button>
        {loading && <Spin style={{ marginLeft: 30 }} />}
      </Form.Item>

      <Form.Item {...TAIL_FORM_ITEM_LAYOUT}>
        <Typography.Paragraph>
          {t[type].tailAsk} <Link to={type === 'signUp' ? '/signin' : '/signup'}>{t[type].tailLinkText}</Link>
        </Typography.Paragraph>
      </Form.Item>
    </Form>
  );
};

export default BaseAuthForm;
