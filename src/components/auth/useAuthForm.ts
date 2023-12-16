import { App, FormInstance } from 'antd';
import { AuthFormValues } from './types';
import { AuthError, UserCredential } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocalization } from '../../store/context';
import { ErrorCode } from '../../utils/localization';

interface UseAuthFormProps {
  form: FormInstance<AuthFormValues>;
  error: AuthError | undefined;
  action: (email: string, password: string) => Promise<UserCredential | undefined>;
}

const useAuthForm = ({ form, error, action }: UseAuthFormProps) => {
  const nav = useNavigate();
  const { notification } = App.useApp();
  const loc = useLocalization();

  const onSubmit = async () => {
    const { email, password } = form.getFieldsValue();
    const res = await action(email, password);
    if (res) {
      nav('/main');
    }
  };

  useEffect(() => {
    if (error) {
      notification.error({
        message: loc.t[error.code as ErrorCode].message || error.code,
        description: loc.t[error.code as ErrorCode].description || error.message,
        placement: 'topRight',
      });
    }
  }, [error, notification, loc.t]);

  return onSubmit;
};

export default useAuthForm;
