import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Editor from './Editor';
import { setHeaders } from '../../store/editor.slice';

const HeadersEditor = () => {
  const headers = useAppSelector((state) => state.editor.headers);
  const dispatch = useAppDispatch();

  const onChange = (value: string) => {
    dispatch(setHeaders(value));
  };
  return <Editor isJson value={headers} onChange={onChange} isLight />;
};

export default HeadersEditor;
