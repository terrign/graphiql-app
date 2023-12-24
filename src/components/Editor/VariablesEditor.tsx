import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Editor from './Editor';
import { setVariables } from '../../store/editor.slice';

const VariablesEditor = () => {
  const query = useAppSelector((state) => state.editor.variables);
  const dispatch = useAppDispatch();

  const onChange = (value: string) => {
    dispatch(setVariables(value));
  };
  return <Editor value={query} onChange={onChange} isLight />;
};

export default VariablesEditor;
