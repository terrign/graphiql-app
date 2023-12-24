import { useAppSelector } from '../../store/hooks';
import Editor from './Editor';

const ResultView = ({ className }: { className: string }) => {
  const queryCacheKey = useAppSelector((state) => state.editor.queryCacheKey);
  const api = useAppSelector((state) => state.api);

  const response = api.queries[queryCacheKey];
  const query = (response?.data ?? response?.error ?? '') as string;

  return <Editor readOnly isJson value={query} className={className} />;
};

export default ResultView;
