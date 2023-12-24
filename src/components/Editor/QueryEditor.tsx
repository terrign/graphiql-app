import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Editor from './Editor';
import { setQuery } from '../../store/editor.slice';

const QueryEditor = ({ className }: { className: string }) => {
  const query = useAppSelector((state) => state.editor.query);
  const dispatch = useAppDispatch();

  const onChange = (value: string) => {
    dispatch(setQuery(value));
  };
  return <Editor value={query} onChange={onChange} className={className} />;
};

export default QueryEditor;
